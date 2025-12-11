import { type NextRequest, NextResponse } from "next/server"
import { interpretNaturalLanguageQuery } from "@/lib/search/correction-engine"

// Handle natural language queries
export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ error: "Query required" }, { status: 400 })
    }

    const interpretation = await interpretNaturalLanguageQuery(query)

    return NextResponse.json(interpretation)
  } catch (error) {
    console.error("Natural language parsing error:", error)
    return NextResponse.json({ error: "Failed to parse query" }, { status: 500 })
  }
}
