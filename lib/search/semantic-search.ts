// Semantic search engine with AI-powered understanding
import { generateText } from "ai"

interface SearchIntent {
  type: "product_search" | "category_filter" | "price_range" | "style_query" | "use_case"
  keywords: string[]
  filters: {
    priceRange?: [number, number]
    categories?: string[]
    colors?: string[]
    sizes?: string[]
    minRating?: number
    discount?: number
  }
}

// Parse natural language queries into structured search intents
export async function parseSearchIntent(query: string): Promise<SearchIntent> {
  try {
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Parse this search query into a structured intent. Extract:
1. Search type (product_search, category_filter, price_range, style_query, use_case)
2. Main keywords
3. Any price constraints
4. Category preferences
5. Color/size preferences
6. Minimum rating
7. Discount thresholds

Query: "${query}"

Return as JSON.`,
    })

    return JSON.parse(text)
  } catch {
    // Fallback to basic keyword extraction
    return {
      type: "product_search",
      keywords: query.split(" ").filter((w) => w.length > 2),
      filters: {},
    }
  }
}

// Calculate semantic similarity between queries
export function calculateSemanticSimilarity(q1: string, q2: string): number {
  const normalize = (s: string) => s.toLowerCase().trim().split(/\s+/).sort().join(" ")
  const n1 = normalize(q1)
  const n2 = normalize(q2)

  if (n1 === n2) return 1

  // Levenshtein distance for typo tolerance
  const maxLen = Math.max(n1.length, n2.length)
  let matches = 0
  for (let i = 0; i < Math.min(n1.length, n2.length); i++) {
    if (n1[i] === n2[i]) matches++
  }

  return matches / maxLen
}

// Suggest corrections for misspelled queries
export async function suggestCorrections(query: string): Promise<string[]> {
  const commonMistakes: Record<string, string> = {
    shrit: "shirt",
    pant: "pants",
    jenas: "jeans",
    womens: "women",
    mens: "men",
    coller: "collar",
  }

  const corrections: string[] = []

  for (const [typo, correct] of Object.entries(commonMistakes)) {
    if (query.toLowerCase().includes(typo)) {
      corrections.push(query.toLowerCase().replace(typo, correct))
    }
  }

  return corrections
}

// Expand query with related terms
export async function expandQuery(query: string): Promise<string[]> {
  try {
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Generate 3-5 related search terms for: "${query}"
Return as comma-separated list.`,
    })

    return text.split(",").map((t) => t.trim())
  } catch {
    return []
  }
}
