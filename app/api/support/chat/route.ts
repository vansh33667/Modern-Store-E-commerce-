import { createClient } from "@/lib/supabase/server"
import { generateText } from "ai"
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

    const { ticket_id, message } = await request.json()

    // Get knowledge base for context
    const { data: knowledgeBase } = await supabase.from("knowledge_base").select("*").limit(10)

    // Get previous messages for context
    const { data: previousMessages } = await supabase
      .from("support_messages")
      .select("*")
      .eq("ticket_id", ticket_id)
      .order("created_at", { ascending: false })
      .limit(5)

    // Store user message
    await supabase.from("support_messages").insert({
      ticket_id,
      user_id: user.id,
      message_type: "user",
      content: message,
    })

    // Generate AI response using knowledge base
    const kbContext = knowledgeBase?.map((kb) => `${kb.title}: ${kb.content}`).join("\n\n") || ""

    const messageHistory = previousMessages
      ?.reverse()
      .map((m) => `${m.message_type === "user" ? "Customer" : "Support"}: ${m.content}`)
      .join("\n")

    const prompt = `You are a helpful e-commerce customer support assistant. Use the following knowledge base to answer questions accurately and professionally.

KNOWLEDGE BASE:
${kbContext}

PREVIOUS CONVERSATION:
${messageHistory}

CURRENT CUSTOMER MESSAGE:
${message}

Provide a helpful, friendly response. If the issue needs human attention, suggest escalating to a human agent. Always be professional and helpful.`

    const { text: aiResponse } = await generateText({
      model: "openai/gpt-4-mini",
      prompt,
      temperature: 0.7,
      maxTokens: 500,
    })

    // Store AI response
    const { data: aiMessage } = await supabase
      .from("support_messages")
      .insert({
        ticket_id,
        user_id: user.id,
        message_type: "assistant",
        content: aiResponse,
        is_ai_generated: true,
        confidence_score: 0.85,
      })
      .select()
      .single()

    return NextResponse.json(aiMessage)
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
