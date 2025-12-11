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

    const { action, resource_type, resource_id, old_values, new_values } = await request.json()

    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    const { data, error } = await supabase
      .from("audit_logs")
      .insert({
        user_id: user.id,
        action,
        resource_type,
        resource_id,
        old_values,
        new_values,
        ip_address: ipAddress,
        user_agent: userAgent,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Log action error:", error)
    return NextResponse.json({ error: "Failed to log action" }, { status: 500 })
  }
}
