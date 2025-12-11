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

    const { event_type, severity, description } = await request.json()

    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    const { data, error } = await supabase
      .from("security_events")
      .insert({
        user_id: user.id,
        event_type,
        severity,
        description,
        ip_address: ipAddress,
        user_agent: userAgent,
      })
      .select()
      .single()

    if (error) throw error

    // If critical, send alert
    if (severity === "critical") {
      // TODO: Send email alert to user
      console.warn(`CRITICAL SECURITY EVENT for user ${user.id}: ${description}`)
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Report event error:", error)
    return NextResponse.json({ error: "Failed to report event" }, { status: 500 })
  }
}
