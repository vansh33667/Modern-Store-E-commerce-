"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Mic, ImageIcon, X, Loader2 } from "lucide-react"
import { useAdvancedSearch } from "@/hooks/use-advanced-search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchSuggestion {
  text: string
  type: "product" | "category" | "trending" | "history"
  icon?: string
  productId?: string
}

export default function AdvancedSearchBar() {
  const {
    query,
    setQuery,
    filters,
    setFilters,
    searchResults,
    suggestions,
    isListening,
    startVoiceSearch,
    stopVoiceSearch,
    imageSearch,
  } = useAdvancedSearch()

  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(-1)
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({})
  const [uploadingImage, setUploadingImage] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }

    if (showSuggestions) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [showSuggestions])

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text)
    setShowSuggestions(false)
  }

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    try {
      const reader = new FileReader()
      reader.onload = async (event) => {
        const base64 = event.target?.result as string
        const result = await imageSearch(base64)
        console.log("[v0] Image search results:", result)
        // Results will be displayed in search results component
      }
      reader.readAsDataURL(file)
    } finally {
      setUploadingImage(false)
    }
  }

  // Handle filter changes
  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...activeFilters, [key]: value }
    setActiveFilters(newFilters)
    setFilters(newFilters)
  }

  return (
    <div className="w-full bg-background space-y-4">
      {/* Main Search Bar */}
      <div className="relative w-full" ref={suggestionsRef}>
        <div className="flex items-center gap-2 px-4 py-3 border border-input rounded-lg bg-background">
          <Search className="w-5 h-5 text-muted-foreground" />

          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search products, brands, styles... or speak or upload an image"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(true)}
            className="flex-1 border-0 focus-visible:ring-0 bg-transparent"
          />

          {/* Voice Search Button */}
          <Button
            size="sm"
            variant={isListening ? "default" : "ghost"}
            onClick={isListening ? stopVoiceSearch : startVoiceSearch}
            title="Voice search"
            className="h-9 w-9 p-0"
          >
            {isListening ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mic className="w-4 h-4" />}
          </Button>

          {/* Image Search Button */}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
            title="Image search"
            disabled={uploadingImage}
            className="h-9 w-9 p-0"
          >
            {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
          </Button>

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

          {query && (
            <Button size="sm" variant="ghost" onClick={() => setQuery("")} className="h-9 w-9 p-0">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Auto-Suggestions Dropdown */}
        {showSuggestions && suggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-input rounded-lg shadow-lg z-50">
            <div className="max-h-96 overflow-y-auto">
              {suggestions.map((suggestion: SearchSuggestion, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionSelect(suggestion)}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center gap-3 border-b last:border-b-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {suggestion.type === "product" && "🛍️"}
                    {suggestion.type === "category" && "📁"}
                    {suggestion.type === "trending" && "📈"}
                    {suggestion.type === "history" && "🕐"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{suggestion.text}</p>
                    <p className="text-xs text-muted-foreground capitalize">{suggestion.type}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Smart Corrections & Expansions */}
      {searchResults?.corrections && searchResults.corrections.length > 0 && (
        <div className="text-sm text-muted-foreground space-y-1">
          <p className="font-medium">Did you mean:</p>
          <div className="flex flex-wrap gap-2">
            {searchResults.corrections.map((correction: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setQuery(correction)}
                className="text-primary hover:underline px-2 py-1 rounded hover:bg-muted"
              >
                {correction}
              </button>
            ))}
          </div>
        </div>
      )}

      {searchResults?.expanded && searchResults.expanded.length > 0 && (
        <div className="text-sm text-muted-foreground space-y-1">
          <p className="font-medium">Related searches:</p>
          <div className="flex flex-wrap gap-2">
            {searchResults.expanded.map((term: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setQuery(term)}
                className="text-primary hover:underline px-2 py-1 rounded hover:bg-muted"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Filters */}
      {query && (
        <div className="flex flex-wrap gap-3 items-center">
          {/* Price Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Price:</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={activeFilters.priceRange?.[1] || 1000}
              onChange={(e) => updateFilter("priceRange", [0, Number.parseInt(e.target.value)])}
              className="w-24"
            />
            <span className="text-sm">₹{activeFilters.priceRange?.[1] || 1000}</span>
          </div>

          {/* Rating Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Min Rating:</label>
            <select
              value={activeFilters.minRating || 0}
              onChange={(e) => updateFilter("minRating", Number.parseFloat(e.target.value))}
              className="text-sm px-2 py-1 border rounded bg-background"
            >
              <option value="0">Any</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>

          {/* Stock Filter */}
          <Button
            size="sm"
            variant={activeFilters.inStock ? "default" : "outline"}
            onClick={() => updateFilter("inStock", !activeFilters.inStock)}
          >
            In Stock
          </Button>
        </div>
      )}
    </div>
  )
}
