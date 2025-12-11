"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Camera, Upload, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ImageSearchModalProps {
  open: boolean
  onClose: () => void
  onImageSelected: (imageBase64: string) => void
}

export function ImageSearchModal({ open, onClose, onImageSelected }: ImageSearchModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cameraActive, setCameraActive] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Please upload JPG, PNG, or WEBP images only")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const reader = new FileReader()
      reader.onload = (event) => {
        const base64 = event.target?.result as string
        setPreview(base64)
      }
      reader.readAsDataURL(file)
    } catch (err) {
      setError("Failed to load image")
    } finally {
      setLoading(false)
    }
  }

  // Start camera
  const startCamera = async () => {
    setError(null)
    setLoading(true)

    try {
      // Check camera support
      if (!navigator.mediaDevices?.getUserMedia) {
        setError("Camera not supported on this device or browser")
        setLoading(false)
        return
      }

      // Request camera permissions
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setCameraActive(true)
      }
    } catch (err: any) {
      if (err.name === "NotAllowedError") {
        setError("Camera permission denied. Please allow camera access to continue.")
      } else if (err.name === "NotFoundError") {
        setError("No camera found on this device")
      } else {
        setError("Failed to access camera")
      }
    } finally {
      setLoading(false)
    }
  }

  // Capture photo from camera
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth
        canvasRef.current.height = videoRef.current.videoHeight
        context.drawImage(videoRef.current, 0, 0)

        const base64 = canvasRef.current.toDataURL("image/jpeg", 0.8)
        setPreview(base64)
        stopCamera()
      }
    }
  }

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
    }
    setCameraActive(false)
  }

  // Submit image search
  const handleSubmit = () => {
    if (preview) {
      onImageSelected(preview)
      handleClose()
    }
  }

  // Close modal
  const handleClose = () => {
    stopCamera()
    setPreview(null)
    setError(null)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search by Image</DialogTitle>
        </DialogHeader>

        {/* Preview */}
        {preview ? (
          <div className="space-y-4">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
              <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setPreview(null)} className="flex-1">
                Choose Another Image
              </Button>
              <Button onClick={handleSubmit} className="flex-1">
                Search with This Image
              </Button>
            </div>
          </div>
        ) : cameraActive ? (
          // Camera View
          <div className="space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={stopCamera} className="flex-1 bg-transparent" disabled={loading}>
                Cancel
              </Button>
              <Button onClick={capturePhoto} className="flex-1" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Camera className="w-4 h-4 mr-2" />}
                Capture Photo
              </Button>
            </div>
          </div>
        ) : (
          // Initial Options
          <div className="space-y-3">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
            )}

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="w-full p-4 border-2 border-dashed rounded-lg hover:bg-muted transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
              <span className="font-medium">Upload Image</span>
            </button>

            <button
              onClick={startCamera}
              disabled={loading}
              className="w-full p-4 border-2 border-dashed rounded-lg hover:bg-muted transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
              <span className="font-medium">Open Camera</span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </DialogContent>
    </Dialog>
  )
}
