"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/store-data"
import type { Product } from "@/lib/types"

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id))
    setWishlist(wishlistProducts)

    const savedCart = JSON.parse(localStorage.getItem("cart") || "{}")
    const count = Object.values(savedCart).reduce((a: number, b: any) => a + b, 0)
    setCartCount(count)

    setLoading(false)
  }, [])

  const removeFromWishlist = (productId: string) => {
    const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const updated = wishlistIds.filter((id: string) => id !== productId)
    localStorage.setItem("wishlist", JSON.stringify(updated))
    setWishlist(wishlist.filter((p) => p.id !== productId))
  }

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}")
    cart[product.id] = (cart[product.id] || 0) + 1
    localStorage.setItem("cart", JSON.stringify(cart))

    const newCount = Object.values(cart).reduce((a: number, b: any) => a + b, 0)
    setCartCount(newCount)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={cartCount} wishlistCount={wishlist.length} />
        <div className="flex items-center justify-center py-12">
          <p>Loading wishlist...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} wishlistCount={wishlist.length} />

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
          </div>

          {wishlist.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="mb-4 text-lg text-muted-foreground">Your wishlist is empty</p>
              <Link href="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-muted-foreground">
                {wishlist.length} {wishlist.length === 1 ? "item" : "items"} in your wishlist
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-lg border border-border bg-card transition hover:shadow-lg"
                  >
                    <div className="relative h-56 w-full bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="absolute right-2 top-2 rounded-full bg-background/80 p-2 backdrop-blur hover:bg-background transition"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </button>
                    </div>

                    <div className="p-4">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="mb-1 font-semibold hover:text-accent transition">{product.name}</h3>
                      </Link>
                      <p className="mb-3 text-sm text-muted-foreground">{product.subcategory}</p>

                      <div className="mb-4">
                        <p className="text-xl font-bold text-accent">${product.price.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">
                          ⭐ {product.rating} ({product.reviews} reviews)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Link href={`/products/${product.id}`}>
                          <Button variant="outline" className="w-full bg-transparent">
                            View Details
                          </Button>
                        </Link>
                        <Button onClick={() => addToCart(product)} className="w-full gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
