"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { VoiceSearchButton } from "@/components/voice-search-button"
import { VoiceCommandsGuide } from "@/components/voice-commands-guide"
import { Input } from "@/components/ui/input"
import { Mic } from "lucide-react"
import type { Product } from "@/lib/types"
import { products } from "@/lib/store-data"
import Link from "next/link"

export default function VoiceShoppingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleCommandDetected = async (command: any) => {
    if (command.action === "search" && command.query) {
      performSearch(command.query)
    }
  }

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query)
    performSearch(query)
  }

  const performSearch = (query: string) => {
    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(results)
    setHasSearched(true)
  }

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} wishlistCount={0} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Mic className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Voice Shopping Assistant</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use your voice to search for products, apply filters, and manage your cart. Simply speak your command and
              let AI do the work.
            </p>
          </div>

          {/* Voice Search Controls */}
          <div className="bg-secondary/30 rounded-lg border border-border p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Start Shopping with Your Voice</h2>
            <div className="flex flex-col gap-4">
              <VoiceSearchButton onCommandDetected={handleCommandDetected} onSearchQuery={handleSearchQuery} />

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-secondary/30 text-muted-foreground">or search manually</span>
                </div>
              </div>

              <form onSubmit={handleManualSearch} className="flex gap-2">
                <Input
                  placeholder="Type your search query..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Search Results {searchResults.length > 0 && `(${searchResults.length} found)`}
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <div className="group cursor-pointer border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative overflow-hidden bg-muted h-48">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold line-clamp-2 mb-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1 mb-3">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-accent">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-muted-foreground">★ {product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground mb-4">No products found matching your search.</p>
                  <Button variant="outline" onClick={() => setHasSearched(false)}>
                    Try Another Search
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Voice Commands Guide */}
          <VoiceCommandsGuide />
        </div>
      </section>

      <Footer />
    </div>
  )
}
