import { createClient } from "@/lib/supabase/server"
import { generateText } from "ai"
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

    // Check cache first
    const { data: cached } = await supabase
      .from("recommendations")
      .select("recommended_product_ids")
      .eq("user_id", user.id)
      .eq("recommendation_type", "personalized")
      .gt("expires_at", new Date().toISOString())
      .single()

    if (cached) {
      return NextResponse.json({
        recommendations: cached.recommended_product_ids,
        source: "cache",
      })
    }

    // Get user preferences and interaction history
    const { data: preferences } = await supabase.from("user_preferences").select("*").eq("user_id", user.id).single()

    const { data: interactions } = await supabase
      .from("user_interactions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(20)

    // Generate personalized recommendation prompt
    const prompt = `Based on user preferences and browsing history, recommend 5 product IDs that match their interests:
Favorite Categories: ${preferences?.favorite_categories?.join(", ") || "None specified"}
Price Range: $${preferences?.price_range_min}-${preferences?.price_range_max}
Preferred Colors: ${preferences?.preferred_colors?.join(", ") || "Any"}
Recent Views: ${interactions?.map((i) => i.product_id).join(", ") || "None"}

Return only a JSON array of 5 product IDs, nothing else. Example format: ["p1", "p2", "p3", "p4", "p5"]`

    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt,
    })

    const recommendedIds = JSON.parse(text)

    // Cache the recommendations
    await supabase.from("recommendations").upsert({
      user_id: user.id,
      recommended_product_ids: recommendedIds,
      recommendation_type: "personalized",
      score: 0.9,
    })

    return NextResponse.json({
      recommendations: recommendedIds,
      source: "ai-generated",
    })
  } catch (error) {
    console.error("Recommendation error:", error)
    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
