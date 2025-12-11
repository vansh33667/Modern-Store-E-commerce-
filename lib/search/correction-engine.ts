// Smart correction and expansion engine
import { generateText } from "ai"

const SPELLING_CORRECTIONS: Record<string, string> = {
  shrit: "shirt",
  shrt: "shirt",
  pant: "pants",
  jena: "jeans",
  jenas: "jeans",
  womens: "women",
  womans: "women",
  mens: "men",
  coller: "collar",
  cotten: "cotton",
  linen: "linen",
  desinger: "designer",
}

const ABBREVIATIONS: Record<string, string> = {
  tshirt: "t-shirt",
  "t-shirt": "t-shirt",
  "t shirt": "t-shirt",
  btn: "button",
  sz: "size",
  col: "color",
  qty: "quantity",
}

// Detect and suggest spelling corrections
export async function getSpellingCorrections(query: string): Promise<string[]> {
  const corrections: Set<string> = new Set()

  // Direct mapping corrections
  for (const [typo, correct] of Object.entries(SPELLING_CORRECTIONS)) {
    if (query.toLowerCase().includes(typo)) {
      corrections.add(query.toLowerCase().replace(typo, correct))
    }
  }

  // Abbreviation expansions
  for (const [abbr, expanded] of Object.entries(ABBREVIATIONS)) {
    if (query.toLowerCase().includes(abbr)) {
      corrections.add(query.toLowerCase().replace(abbr, expanded))
    }
  }

  // Use AI for complex misspellings
  if (corrections.size === 0 && query.length > 3) {
    try {
      const { text } = await generateText({
        model: "openai/gpt-4-mini",
        prompt: `Suggest 2 spelling corrections for this search query: "${query}"
Return only the corrected queries, one per line, no numbering.`,
      })

      return text
        .split("\n")
        .map((t) => t.trim())
        .filter((t) => t.length > 0)
        .slice(0, 2)
    } catch {
      return Array.from(corrections)
    }
  }

  return Array.from(corrections)
}

// Expand query with related and broader terms
export async function expandSearchQuery(query: string): Promise<string[]> {
  try {
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `For the search query "${query}", suggest 3-5 related or broader search terms that a user might find helpful.
Consider synonyms, related categories, and broader concepts.
Return only the expanded terms, one per line, no numbering.`,
    })

    return text
      .split("\n")
      .map((t) => t.trim())
      .filter((t) => t.length > 0 && t !== query)
      .slice(0, 5)
  } catch {
    return []
  }
}

// Normalize and analyze search intent
export function analyzeSearchIntent(query: string): {
  isPriceQuery: boolean
  isStyleQuery: boolean
  isOccasionQuery: boolean
  isSizeQuery: boolean
  suggestedFilters: string[]
} {
  const lower = query.toLowerCase()

  return {
    isPriceQuery: /under|below|budget|cheap|affordable|expensive|inexpensive|cost|price|\$|₹/.test(lower),
    isStyleQuery: /casual|formal|sporty|elegant|minimalist|vintage|modern|trendy|classic/.test(lower),
    isOccasionQuery: /college|party|wedding|office|gym|beach|night|day|summer|winter/.test(lower),
    isSizeQuery: /small|medium|large|xl|xxl|size|fit|slim|loose|oversized|petite|tall/.test(lower),
    suggestedFilters: [
      /under|budget|affordable|cheap/.test(lower) ? "price_low" : null,
      /formal|professional/.test(lower) ? "formal_wear" : null,
      /casual/.test(lower) ? "casual_wear" : null,
      /summer|beach/.test(lower) ? "season_summer" : null,
      /winter|cold/.test(lower) ? "season_winter" : null,
    ].filter(Boolean) as string[],
  }
}

// Provide natural language query understanding
export async function interpretNaturalLanguageQuery(query: string): Promise<{
  intent: string
  keywords: string[]
  filters: Record<string, any>
  clarification?: string
}> {
  try {
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Interpret this natural language shopping query and extract structured data:
"${query}"

Extract:
1. Main intent (search/browse/compare)
2. Key product keywords
3. Filters (price range, size, color, etc)
4. Any clarifying questions

Return as JSON with keys: intent, keywords (array), filters (object), clarification`,
    })

    const parsed = JSON.parse(text)
    return {
      intent: parsed.intent || "search",
      keywords: parsed.keywords || [],
      filters: parsed.filters || {},
      clarification: parsed.clarification,
    }
  } catch {
    return {
      intent: "search",
      keywords: query.split(/\s+/),
      filters: {},
    }
  }
}
