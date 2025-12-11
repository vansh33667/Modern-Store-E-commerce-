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

    const { deal_id, product_id, quantity } = await request.json()

    // Get the flash deal
    const { data: deal } = await supabase.from("flash_deals").select("*").eq("id", deal_id).single()

    if (!deal) {
      return NextResponse.json({ error: "Deal not found" }, { status: 404 })
    }

    // Check quantity available
    const available = deal.quantity_available - deal.quantity_sold
    if (available < quantity) {
      return NextResponse.json({ error: "Insufficient quantity" }, { status: 400 })
    }

    // Record purchase
    const { data: purchase, error: purchaseError } = await supabase
      .from("deal_purchases")
      .insert({
        user_id: user.id,
        deal_id,
        product_id,
        quantity,
        price_paid: deal.discounted_price * quantity,
      })
      .select()
      .single()

    if (purchaseError) throw purchaseError

    // Update quantity sold
    await supabase
      .from("flash_deals")
      .update({
        quantity_sold: deal.quantity_sold + quantity,
      })
      .eq("id", deal_id)

    return NextResponse.json(purchase)
  } catch (error) {
    console.error("Purchase deal error:", error)
    return NextResponse.json({ error: "Failed to complete purchase" }, { status: 500 })
  }
}
