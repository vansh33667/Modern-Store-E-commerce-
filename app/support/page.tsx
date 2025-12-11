"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SupportChat } from "@/components/support-chat"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Plus, ChevronRight } from "lucide-react"

interface SupportTicket {
  id: string
  subject: string
  status: string
  created_at: string
  updated_at: string
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [showNewForm, setShowNewForm] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    try {
      const response = await fetch("/api/support/tickets")
      const data = await response.json()
      setTickets(data)
    } catch (error) {
      console.error("Fetch tickets error:", error)
    }
  }

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject }),
      })

      const newTicket = await response.json()
      setTickets((prev) => [newTicket, ...prev])
      setSelectedTicket(newTicket.id)
      setEmail("")
      setSubject("")
      setShowNewForm(false)
    } catch (error) {
      console.error("Create ticket error:", error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800"
      case "in_progress":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (selectedTicket) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={0} wishlistCount={0} />
        <div className="mx-auto max-w-4xl px-4 md:px-8 py-8">
          <button
            onClick={() => setSelectedTicket(null)}
            className="text-accent hover:underline mb-4 flex items-center gap-1"
          >
            ← Back to tickets
          </button>
          <Card className="h-96">
            <SupportChat ticketId={selectedTicket} onClose={() => setSelectedTicket(null)} />
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} wishlistCount={0} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
              <MessageCircle className="h-8 w-8 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Support</h1>
            <p className="text-lg text-muted-foreground">Get instant help from our AI-powered support assistant</p>
          </div>

          {/* New Ticket Form */}
          {showNewForm && (
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Create a Support Ticket</h2>
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="What do you need help with?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Ticket"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowNewForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {!showNewForm && (
            <div className="mb-8">
              <Button onClick={() => setShowNewForm(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                New Support Ticket
              </Button>
            </div>
          )}

          {/* Tickets List */}
          <div className="space-y-4">
            {tickets.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground mb-4">No support tickets yet.</p>
                <Button onClick={() => setShowNewForm(true)}>Create your first ticket</Button>
              </Card>
            ) : (
              tickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="p-4 hover:bg-secondary/50 cursor-pointer transition"
                  onClick={() => setSelectedTicket(ticket.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{ticket.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(ticket.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
