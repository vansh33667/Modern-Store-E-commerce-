"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, ThumbsUp, ThumbsDown, Loader } from "lucide-react"

interface Message {
  id: string
  message_type: "user" | "assistant" | "system"
  content: string
  created_at: string
  is_ai_generated?: boolean
}

interface SupportChatProps {
  ticketId: string
  onClose?: () => void
}

export function SupportChat({ ticketId, onClose }: SupportChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [feedbackId, setFeedbackId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)

    try {
      const response = await fetch("/api/support/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticket_id: ticketId,
          message: input,
        }),
      })

      const aiMessage = await response.json()
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          message_type: "user",
          content: input,
          created_at: new Date().toISOString(),
        },
        {
          ...aiMessage,
          id: aiMessage.id || Math.random().toString(),
        },
      ])

      setInput("")
    } catch (error) {
      console.error("Send message error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFeedback = async (messageId: string, helpful: boolean) => {
    try {
      await fetch("/api/support/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message_id: messageId,
          was_helpful: helpful,
          rating: helpful ? 5 : 1,
        }),
      })
      setFeedbackId(messageId)
    } catch (error) {
      console.error("Feedback error:", error)
    }
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="border-b border-border p-4 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Customer Support</h2>
        {onClose && (
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </button>
        )}
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p className="mb-2">How can we help you today?</p>
            <p className="text-sm">Our AI support agent is here to assist you.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.message_type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.message_type === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground border border-border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>

                  {message.is_ai_generated && feedbackId !== message.id && (
                    <div className="flex gap-2 mt-2 pt-2 border-t border-current/10">
                      <button
                        onClick={() => handleFeedback(message.id, true)}
                        className="text-xs flex items-center gap-1 hover:opacity-70 transition"
                        title="This was helpful"
                      >
                        <ThumbsUp className="h-3 w-3" />
                        Helpful
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, false)}
                        className="text-xs flex items-center gap-1 hover:opacity-70 transition"
                        title="This was not helpful"
                      >
                        <ThumbsDown className="h-3 w-3" />
                        Not Helpful
                      </button>
                    </div>
                  )}

                  {feedbackId === message.id && (
                    <div className="text-xs mt-2 pt-2 border-t border-current/10">Thanks for your feedback!</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
        )}
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-border p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" size="icon" disabled={loading || !input.trim()}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  )
}
