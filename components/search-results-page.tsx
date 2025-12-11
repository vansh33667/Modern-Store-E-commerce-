"use client"

import { useState } from "react"
import { useAdvancedSearch } from "@/hooks/use-advanced-search"
import { ProductCard } from "@/components/product-card"
import { Loader2, AlertCircle } from "lucide-react"

export default function SearchResultsPage() {
  const { query, searchResults, filters } = useAdvancedSearch()
  const [sortBy, setSortBy] = useState("relevance")

  if (!query) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Start typing to search products</p>
      </div>
    )
  }

  if (!searchResults) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  const { results, total, corrections, expanded, cached } = searchResults

  if (total === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-lg font-semibold mb-2">No products found</h2>
        <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>

        {corrections && corrections.length > 0 && (
          <div>
            <p className="text-sm mb-2">Did you mean:</p>
            {corrections.map((c: string, idx: number) => (
              <button key={idx} className="text-primary hover:underline mr-2">
                {c}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Search Results for "{query}"</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Found {total} products {cached && "(from cache)"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm">Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-2 py-1 border rounded">
            <option value="relevance">Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Smart Suggestions */}
      {(corrections || expanded) && (
        <div className="bg-muted p-4 rounded-lg">
          {corrections && corrections.length > 0 && (
            <p className="text-sm">
              <strong>Corrections:</strong>{" "}
              {corrections.map((c: string, idx: number) => (
                <span key={idx} className="text-primary mr-2">
                  {c}
                </span>
              ))}
            </p>
          )}
          {expanded && expanded.length > 0 && (
            <p className="text-sm mt-2">
              <strong>Related searches:</strong>{" "}
              {expanded.map((e: string, idx: number) => (
                <span key={idx} className="text-primary mr-2">
                  {e}
                </span>
              ))}
            </p>
          )}
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
