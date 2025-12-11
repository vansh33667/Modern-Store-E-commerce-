import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { products } from "@/lib/store-data"

// Generate real-time suggestions as user types
export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get("q") || ""

    if (query.length < 2) {
      return NextResponse.json({ suggestions: [] })
    }

    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } },
    )

    const query_lower = query.toLowerCase()

    // Product suggestions
    const productSuggestions = products
      .filter((p) => p.name.toLowerCase().includes(query_lower) || p.description.toLowerCase().includes(query_lower))
      .slice(0, 5)
      .map((p) => ({
        text: p.name,
        type: "product",
        icon: "shopping-bag",
        productId: p.id,
      }))

    // Category suggestions
    const categories = [...new Set(products.map((p) => p.subcategory))]
    const categorySuggestions = categories
      .filter((c) => c.toLowerCase().includes(query_lower))
      .slice(0, 3)
      .map((c) => ({
        text: c,
        type: "category",
        icon: "folder",
      }))

    // Trending suggestions from analytics
    const { data: trendingSuggestions } = await supabase
      .from("search_suggestions")
      .select("text, type")
      .filter("text", "ilike", `%${query}%`)
      .order("popularity_score", { ascending: false })
      .limit(3)

    // User search history
    const userId = (await supabase.auth.getUser()).data.user?.id
    let historySuggestions: any[] = []
    if (userId) {
      const { data: history } = await supabase
        .from("search_history")
        .select("query")
        .eq("user_id", userId)
        .filter("query", "ilike", `%${query}%`)
        .order("created_at", { ascending: false })
        .limit(2)

      historySuggestions =
        history?.map((h) => ({
          text: h.query,
          type: "history",
          icon: "clock",
        })) || []
    }

    const allSuggestions = [
      ...productSuggestions,
      ...categorySuggestions,
      ...(trendingSuggestions || []).map((s) => ({
        ...s,
        icon: "trending-up",
        type: "trending",
      })),
      ...historySuggestions,
    ]

    return NextResponse.json({
      suggestions: allSuggestions.slice(0, 12),
    })
  } catch (error) {
    console.error("Suggestions error:", error)
    return NextResponse.json({ suggestions: [] })
  }
}
