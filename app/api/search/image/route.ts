import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { products } from "@/lib/store-data"

// Image-based visual search
export async function POST(req: NextRequest) {
  try {
    const { imageBase64, imageUrl } = await req.json()

    if (!imageBase64 && !imageUrl) {
      return NextResponse.json({ error: "Image required" }, { status: 400 })
    }

    // Use AI to analyze image and extract visual attributes
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Analyze this product image and extract:
1. Color(s)
2. Style/Type
3. Material (if visible)
4. Occasion/Use case
5. Gender category
6. Similar product keywords

${imageBase64 ? `Image (base64): ${imageBase64}` : `Image URL: ${imageUrl}`}

Return as JSON with keys: colors, style, material, useCase, gender, keywords`,
    })

    const attributes = JSON.parse(text)

    // Find matching products based on visual attributes
    const matches = products
      .map((product) => {
        let score = 0

        // Match based on style/type
        if (attributes.keywords?.some((k: string) => product.name.toLowerCase().includes(k.toLowerCase()))) {
          score += 30
        }

        // Match category/gender
        if (attributes.gender && product.gender === attributes.gender.toLowerCase()) {
          score += 20
        }

        // Description match
        if (attributes.style && product.description.toLowerCase().includes(attributes.style.toLowerCase())) {
          score += 25
        }

        // Match based on color
        if (attributes.colors?.some((c: string) => product.name.toLowerCase().includes(c.toLowerCase()))) {
          score += 15
        }

        return { product, score }
      })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((m) => m.product)

    return NextResponse.json({
      results: matches,
      attributes,
      message: `Found ${matches.length} similar products`,
    })
  } catch (error) {
    console.error("Image search error:", error)
    return NextResponse.json({ error: "Image search failed" }, { status: 500 })
  }
}
