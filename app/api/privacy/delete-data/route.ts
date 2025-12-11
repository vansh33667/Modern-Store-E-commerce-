import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { request_type, reason } = await request.json()

    const verificationToken = crypto.randomBytes(32).toString("hex")

    const { data, error } = await supabase
      .from("data_deletion_requests")
      .insert({
        user_id: user.id,
        request_type,
        reason,
        verification_token: verificationToken,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      })
      .select()
      .single()

    if (error) throw error

    // TODO: Send verification email with deletion link

    return NextResponse.json(data)
  } catch (error) {
    console.error("Create deletion request error:", error)
    return NextResponse.json({ error: "Failed to create deletion request" }, { status: 500 })
  }
}
