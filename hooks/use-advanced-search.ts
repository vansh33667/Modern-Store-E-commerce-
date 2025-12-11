"use client"

import { useState, useCallback, useRef } from "react"
import useSWR from "swr"

interface SearchResult {
  results: any[]
  total: number
  cached: boolean
  corrections?: string[]
  expanded?: string[]
}

export function useAdvancedSearch() {
  const [query, setQuery] = useState("")
  const [filters, setFilters] = useState({})
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<any>(null)

  // Semantic search with caching
  const { data: searchResults, mutate: refetchSearch } = useSWR(
    query ? ["/api/search/semantic", query, filters] : null,
    async ([url, q, f]) => {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ query: q, filters: f }),
      })
      return res.json() as Promise<SearchResult>
    },
    { dedupingInterval: 300 },
  )

  // Auto-suggestions as user types
  const { data: suggestions } = useSWR(
    query.length > 1 ? `/api/search/suggestions?q=${encodeURIComponent(query)}` : null,
    (url) => fetch(url).then((r) => r.json()),
  )

  // Voice search
  const startVoiceSearch = useCallback(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Voice search not supported in your browser")
      return
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    recognitionRef.current = new SpeechRecognition()

    recognitionRef.current.onstart = () => setIsListening(true)
    recognitionRef.current.onend = () => setIsListening(false)
    recognitionRef.current.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("")

      setQuery(transcript)
    }

    recognitionRef.current.start()
  }, [])

  const stopVoiceSearch = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort()
    }
    setIsListening(false)
  }, [])

  // Image search
  const imageSearch = useCallback(async (imageBase64: string) => {
    const res = await fetch("/api/search/image", {
      method: "POST",
      body: JSON.stringify({ imageBase64 }),
    })
    return res.json()
  }, [])

  return {
    query,
    setQuery,
    filters,
    setFilters,
    searchResults,
    suggestions: suggestions?.suggestions || [],
    isListening,
    startVoiceSearch,
    stopVoiceSearch,
    imageSearch,
    refetchSearch,
  }
}
