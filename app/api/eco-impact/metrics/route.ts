import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get or create user carbon footprint record
    let { data: footprint } = await supabase.from("user_carbon_footprint").select("*").eq("user_id", user.id).single()

    if (!footprint) {
      const { data: newFootprint } = await supabase
        .from("user_carbon_footprint")
        .insert({ user_id: user.id })
        .select()
        .single()
      footprint = newFootprint
    }

    // Get user badges
    const { data: badges } = await supabase.from("user_badges").select("badge_id").eq("user_id", user.id)

    return NextResponse.json({
      ...footprint,
      badges: badges?.map((b) => b.badge_id) || [],
    })
  } catch (error) {
    console.error("Fetch eco metrics error:", error)
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 })
  }
}
