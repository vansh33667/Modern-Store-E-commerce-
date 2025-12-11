"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic } from "lucide-react"

export function VoiceCommandsGuide() {
  const commands = [
    { command: "Search for blue shirts", action: "Search for products" },
    { command: "Show me jackets under $100", action: "Search with filters" },
    { command: "Add this to cart", action: "Add product to cart" },
    { command: "Show my cart", action: "View shopping cart" },
    { command: "Filter by price", action: "Apply price filters" },
    { command: "Show trending products", action: "View trending items" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-4 w-4" />
          Voice Shopping Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {commands.map((item, i) => (
            <div key={i} className="flex gap-3 text-sm">
              <div className="font-medium text-accent min-w-fit">{item.action}:</div>
              <div className="text-muted-foreground">"{item.command}"</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
