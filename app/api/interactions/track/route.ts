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

    const body = await request.json()
    const { product_id, interaction_type, interaction_data } = body

    const { data, error } = await supabase
      .from("user_interactions")
      .insert({
        user_id: user.id,
        product_id,
        interaction_type,
        interaction_data: interaction_data || {},
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Track interaction error:", error)
    return NextResponse.json({ error: "Failed to track interaction" }, { status: 500 })
  }
}
