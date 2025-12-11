"use client"

import type React from "react"
import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useState, useEffect, useCallback, memo } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { getProductImage } from "@/lib/product-image-mapping"
import { ImageSlider } from "./image-slider"
import { getProductImages } from "@/lib/product-image-gallery"

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  onWishlistChange?: (productId: string, isWishlisted: boolean) => void
}

const ProductCard = memo(function ProductCard({ product, onAddToCart, onWishlistChange }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const checkWishlistStatus = useCallback(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(product.id))
  }, [product.id])

  useEffect(() => {
    checkWishlistStatus()
  }, [product.id, checkWishlistStatus])

  const handleWishlistToggle = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      if (!isAuthenticated) {
        sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`)
        router.push("/login")
        return
      }

      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      const newWishlisted = !isWishlisted
      const newWishlist = newWishlisted ? [...wishlist, product.id] : wishlist.filter((id: string) => id !== product.id)

      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      setIsWishlisted(newWishlisted)
      onWishlistChange?.(product.id, newWishlisted)
    },
    [isAuthenticated, isWishlisted, product.id, onWishlistChange, router],
  )

  const getImageUrl = useCallback(() => {
    if (product.image && product.image.trim() !== "") {
      return product.image
    }
    return getProductImage(product.name, product.subcategory)
  }, [product.image, product.name, product.subcategory])

  const imageUrl = getImageUrl()
  const galleryImages = getProductImages(product.id)

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (!isAuthenticated) {
        sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`)
        router.push("/login")
        return
      }
      onAddToCart?.(product)
    },
    [isAuthenticated, product, onAddToCart, router],
  )

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group cursor-pointer rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <ImageSlider images={galleryImages} productName={product.name} />
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg z-20 backdrop-blur-sm"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-5 w-5 transition ${
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>

          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded">
              Only {product.stock} left
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-sm">{product.name}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-auto">{product.description}</p>
          <div className="mb-3 flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-accent">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-xs font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
          <Button className="w-full gap-2 text-xs" onClick={handleAddToCart} disabled={product.stock === 0}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  )
})

export { ProductCard }
