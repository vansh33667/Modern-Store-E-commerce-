import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { transcript } = await request.json()

    if (!transcript) {
      return NextResponse.json({ error: "No transcript provided" }, { status: 400 })
    }

    // Use AI to understand the voice command
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `You are a voice shopping assistant. Parse this voice command and return JSON with:
      - action: 'search', 'add_to_cart', 'filter', 'view_cart', or 'checkout'
      - query: search terms or product name
      - filters: any product filters mentioned (price, category, color, etc.)
      - confidence: 0-1 confidence score
      
Voice command: "${transcript}"

Return ONLY valid JSON, no other text.`,
    })

    const parsed = JSON.parse(text)

    return NextResponse.json({
      ...parsed,
      originalTranscript: transcript,
    })
  } catch (error) {
    console.error("Voice processing error:", error)
    return NextResponse.json({ error: "Failed to process voice command" }, { status: 500 })
  }
}
