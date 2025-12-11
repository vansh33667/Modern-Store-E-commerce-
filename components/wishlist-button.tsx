"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export function WishlistButton({ productId }: { productId: string }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(productId))
  }, [productId])

  const toggleWishlist = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem("redirectAfterLogin", `/products/${productId}`)
      router.push("/login")
      return
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    if (wishlist.includes(productId)) {
      const updated = wishlist.filter((id: string) => id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(updated))
    } else {
      wishlist.push(productId)
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleWishlist}
      className={isWishlisted ? "text-accent" : ""}
      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
    </Button>
  )
}
