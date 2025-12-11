import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const now = new Date().toISOString()

    // Get active flash deals
    const { data: deals, error } = await supabase
      .from("flash_deals")
      .select("*")
      .eq("is_active", true)
      .gt("deal_end_time", now)
      .lt("deal_start_time", now)
      .order("deal_end_time", { ascending: true })

    if (error) throw error

    return NextResponse.json(deals || [])
  } catch (error) {
    console.error("Fetch active deals error:", error)
    return NextResponse.json({ error: "Failed to fetch deals" }, { status: 500 })
  }
}
