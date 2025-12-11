import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { products } from "@/lib/store-data"
import {
  parseSearchIntent,
  calculateSemanticSimilarity,
  suggestCorrections,
  expandQuery,
} from "@/lib/search/semantic-search"
import { applyFilters } from "@/lib/search/filters"

// Helper function to normalize query
function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .sort()
    .join(" ")
}

// Main semantic search endpoint
export async function POST(req: NextRequest) {
  try {
    const { query, filters, limit = 20, offset = 0 } = await req.json()

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    const normalizedQuery = normalizeQuery(query)
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } },
    )

    // Check cache first
    const { data: cached } = await supabase
      .from("search_cache")
      .select("results, result_count")
      .eq("normalized_query", normalizedQuery)
      .gt("expires_at", new Date().toISOString())
      .single()

    if (cached) {
      // Update hit count
      await supabase
        .from("search_cache")
        .update({ hit_count: cached.result_count + 1 })
        .eq("normalized_query", normalizedQuery)

      return NextResponse.json({
        results: cached.results,
        cached: true,
        total: cached.result_count,
      })
    }

    // Parse search intent
    const intent = await parseSearchIntent(query)

    // Perform semantic search
    let results = products.filter((product) => {
      const name = product.name.toLowerCase()
      const desc = product.description.toLowerCase()
      const query_lower = query.toLowerCase()

      // Keyword matching
      const keywordMatch = intent.keywords.some((k) => name.includes(k) || desc.includes(k) || query_lower.includes(k))

      // Fuzzy matching for typos
      const similarity = calculateSemanticSimilarity(name, query)

      return keywordMatch || similarity > 0.6
    })

    // Apply filters from intent
    if (intent.filters) {
      results = applyFilters(results, intent.filters)
    }

    // Apply user-provided filters
    if (filters) {
      results = applyFilters(results, filters)
    }

    // Sort by relevance
    results = results.sort((a, b) => {
      const simA = calculateSemanticSimilarity(a.name, query)
      const simB = calculateSemanticSimilarity(b.name, query)
      return simB - simA
    })

    const total = results.length
    const paginatedResults = results.slice(offset, offset + limit)

    // Cache results
    await supabase.from("search_cache").upsert({
      normalized_query: normalizedQuery,
      results: paginatedResults,
      result_count: total,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    })

    // Log search
    const userId = (await supabase.auth.getUser()).data.user?.id
    if (userId) {
      await supabase.from("search_history").insert({
        user_id: userId,
        query,
        normalized_query: normalizedQuery,
        result_count: total,
      })
    }

    return NextResponse.json({
      results: paginatedResults,
      total,
      corrections: await suggestCorrections(query),
      expanded: await expandQuery(query),
      cached: false,
    })
  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json({ error: "Search failed" }, { status: 500 })
  }
}
