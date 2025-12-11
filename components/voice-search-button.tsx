"use client"

import { useVoiceSearch } from "@/hooks/use-voice-search"
import { Button } from "@/components/ui/button"
import { Mic, Square } from "lucide-react"
import { useEffect, useState } from "react"

interface VoiceSearchButtonProps {
  onCommandDetected?: (command: any) => void
  onSearchQuery?: (query: string) => void
}

export function VoiceSearchButton({ onCommandDetected, onSearchQuery }: VoiceSearchButtonProps) {
  const { isListening, transcript, error, startListening, stopListening, setTranscript } = useVoiceSearch()
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (transcript && !isListening) {
      processVoiceCommand(transcript)
    }
  }, [transcript, isListening])

  const processVoiceCommand = async (voiceTranscript: string) => {
    setProcessing(true)
    try {
      const response = await fetch("/api/voice/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript: voiceTranscript }),
      })

      const result = await response.json()

      if (result.action === "search" && result.query) {
        onSearchQuery?.(result.query)
      }

      onCommandDetected?.(result)
      setTranscript("")
    } catch (err) {
      console.error("Error processing voice command:", err)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant={isListening ? "destructive" : "outline"}
        size="sm"
        onClick={isListening ? stopListening : startListening}
        disabled={processing}
        className="gap-2"
      >
        {isListening ? (
          <>
            <Square className="h-4 w-4" />
            Stop Listening
          </>
        ) : (
          <>
            <Mic className="h-4 w-4" />
            Voice Search
          </>
        )}
      </Button>

      {transcript && (
        <div className="text-sm p-2 bg-secondary rounded border border-border">
          <p className="font-medium text-xs text-muted-foreground mb-1">Heard:</p>
          <p className="text-foreground">{transcript}</p>
        </div>
      )}

      {error && <div className="text-sm text-red-500 p-2 bg-red-50 rounded">{error}</div>}
    </div>
  )
}
