import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const { searchParams } = new URL(request.url)
    const product_id = searchParams.get("product_id")

    if (!product_id) {
      return NextResponse.json({ error: "Product ID required" }, { status: 400 })
    }

    const { data: metrics } = await supabase
      .from("product_eco_metrics")
      .select("*")
      .eq("product_id", product_id)
      .single()

    if (!metrics) {
      return NextResponse.json(null)
    }

    return NextResponse.json(metrics)
  } catch (error) {
    console.error("Fetch product metrics error:", error)
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 })
  }
}
