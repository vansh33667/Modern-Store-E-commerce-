import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { deal_id } = await request.json()

    const { data, error } = await supabase
      .from("deal_notifications")
      .insert({
        user_id: user.id,
        deal_id,
      })
      .select()
      .single()

    if (error && !error.message.includes("unique")) throw error

    return NextResponse.json(data || { success: true })
  } catch (error) {
    console.error("Notify deal error:", error)
    return NextResponse.json({ error: "Failed to set notification" }, { status: 500 })
  }
}
