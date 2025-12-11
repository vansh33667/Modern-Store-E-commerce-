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

    const { program_id, units_purchased } = await request.json()

    // Get program details
    const { data: program } = await supabase.from("carbon_offset_programs").select("*").eq("id", program_id).single()

    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 })
    }

    const carbon_offset = program.carbon_offset_per_unit * units_purchased
    const cost_usd = program.cost_per_offset * units_purchased

    // Record the offset purchase
    const { data: offset, error: offsetError } = await supabase
      .from("user_offsets")
      .insert({
        user_id: user.id,
        program_id,
        units_purchased,
        carbon_offset_kg: carbon_offset,
        cost_usd,
      })
      .select()
      .single()

    if (offsetError) throw offsetError

    // Update user's carbon footprint
    const { data: footprint } = await supabase.from("user_carbon_footprint").select("*").eq("user_id", user.id).single()

    const new_offset_total = (footprint?.offset_carbon_kg || 0) + carbon_offset
    const trees_equivalent = Math.round(new_offset_total / 21) // ~21kg per tree

    await supabase
      .from("user_carbon_footprint")
      .update({
        offset_carbon_kg: new_offset_total,
        trees_equivalent,
      })
      .eq("user_id", user.id)

    return NextResponse.json(offset)
  } catch (error) {
    console.error("Purchase offset error:", error)
    return NextResponse.json({ error: "Failed to purchase offset" }, { status: 500 })
  }
}
