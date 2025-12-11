"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, X, RotateCw } from "lucide-react"
import type { Product } from "@/lib/types"

interface ARProductViewerProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ARProductViewer({ product, isOpen, onClose }: ARProductViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [cameraActive, setCameraActive] = useState(false)
  const [arSupported, setArSupported] = useState(true)
  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    // Check AR support
    if (!("mediaDevices" in navigator)) {
      setArSupported(false)
    }
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setCameraActive(true)
        drawARPreview()
      }
    } catch (err) {
      console.error("Camera access denied:", err)
      setArSupported(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      setCameraActive(false)
    }
  }

  const drawARPreview = () => {
    const canvas = canvasRef.current
    if (!canvas || !videoRef.current) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw video frame
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

    // Draw 3D product representation (simplified cube)
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)

    // Apply rotations
    ctx.transform(Math.cos(rotationY), Math.sin(rotationY), -Math.sin(rotationY), Math.cos(rotationY), 0, 0)

    // Draw product box
    const size = 60 * scale
    ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
    ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
    ctx.lineWidth = 2

    // Front face
    ctx.fillRect(-size / 2, -size / 2, size, size)
    ctx.strokeRect(-size / 2, -size / 2, size, size)

    // Side perspective
    ctx.strokeStyle = "rgba(59, 130, 246, 0.4)"
    ctx.beginPath()
    ctx.moveTo(size / 2, -size / 2)
    ctx.lineTo(size / 2 + 20, -size / 2 - 20)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(size / 2, size / 2)
    ctx.lineTo(size / 2 + 20, size / 2 - 20)
    ctx.stroke()

    // Product info overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText(product.name, 0, size / 2 + 40)

    ctx.font = "12px sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fillText(`$${product.price.toFixed(2)}`, 0, size / 2 + 58)

    ctx.restore()

    if (cameraActive) {
      requestAnimationFrame(drawARPreview)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!cameraActive) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setRotationY((x - 0.5) * Math.PI)
    setRotationX((y - 0.5) * Math.PI)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1)
    setScale(Math.max(0.5, Math.min(2, newScale)))
  }

  const resetView = () => {
    setRotationX(0)
    setRotationY(0)
    setScale(1)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition"
          >
            <X className="h-5 w-5" />
          </button>

          {/* AR View */}
          <div className="relative w-full bg-black rounded-t-lg overflow-hidden">
            {cameraActive ? (
              <>
                <video ref={videoRef} className="hidden" autoPlay playsInline muted />
                <canvas
                  ref={canvasRef}
                  className="w-full aspect-video cursor-move"
                  onMouseMove={handleMouseMove}
                  onWheel={handleWheel}
                />
              </>
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center">
                <Camera className="h-16 w-16 text-slate-500 mb-4" />
                <p className="text-slate-400 text-center">
                  {arSupported ? "Click start to begin AR view" : "AR is not supported on your device"}
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">
                {cameraActive ? "Drag to rotate • Scroll to zoom" : "Enable camera to view product in AR"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={cameraActive ? stopCamera : startCamera}
                variant={cameraActive ? "destructive" : "default"}
                className="gap-2"
              >
                <Camera className="h-4 w-4" />
                {cameraActive ? "Stop AR" : "Start AR"}
              </Button>

              <Button onClick={resetView} variant="outline" disabled={!cameraActive} className="gap-2 bg-transparent">
                <RotateCw className="h-4 w-4" />
                Reset
              </Button>

              <Button onClick={onClose} variant="outline">
                Close
              </Button>
            </div>

            <div className="bg-secondary/30 rounded p-3 text-sm space-y-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">Rating: {product.rating} ★</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
