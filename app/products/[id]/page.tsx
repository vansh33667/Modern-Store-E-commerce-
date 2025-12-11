"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ArrowLeft, Check, Heart } from "lucide-react"
import { products } from "@/lib/store-data"
import type { Product } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { ImageSlider } from "@/components/image-slider"
import { getProductImages } from "@/lib/product-image-gallery"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id) || null

  return <ProductDetailClient initialProduct={product} productId={id} />
}

// Client component for interactive features
function ProductDetailClient({ initialProduct, productId }: { initialProduct: Product | null; productId: string }) {
  const [product] = useState<Product | null>(initialProduct)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(productId))
    setWishlistCount(wishlist.length)
  }, [productId])

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistCount(wishlist.length)
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={0} wishlistCount={wishlistCount} />
        <div className="py-12 text-center">
          <p>Product not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`)
      router.push("/login")
      return
    }

    const newCart = { ...cart }
    newCart[product.id] = (newCart[product.id] || 0) + quantity
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`)
      router.push("/login")
      return
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    let newWishlist: string[]

    if (isWishlisted) {
      newWishlist = wishlist.filter((id: string) => id !== product.id)
    } else {
      newWishlist = [...wishlist, product.id]
    }

    localStorage.setItem("wishlist", JSON.stringify(newWishlist))
    setIsWishlisted(!isWishlisted)
    updateWishlistCount()
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
  const productImages = getProductImages(product.id)

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />

      {/* Product Detail */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link href="/products" className="flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-lg border border-border bg-muted relative">
              <div className="w-full">
                <ImageSlider images={productImages} productName={product.name} />
              </div>
              <button
                onClick={handleWishlistToggle}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white transition shadow-lg z-20"
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`h-6 w-6 transition ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{product.reviews.toLocaleString()} reviews</span>
                </div>

                <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-accent">${product.price.toFixed(2)}</span>
                  {product.stock > 0 && <p className="text-sm text-muted-foreground mt-2">{product.stock} in stock</p>}
                  {product.stock === 0 && <p className="text-sm text-destructive font-semibold mt-2">Out of Stock</p>}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                {product.stock > 0 ? (
                  <>
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium">Quantity:</label>
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          className="px-3 py-2 hover:bg-secondary"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          −
                        </button>
                        <span className="px-4 py-2 border-l border-r border-border">{quantity}</span>
                        <button
                          className="px-3 py-2 hover:bg-secondary"
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      onClick={handleAddToCart}
                      className={`w-full gap-2 transition ${added ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >
                      {added ? (
                        <>
                          <Check className="h-5 w-5" />
                          Added to Cart
                        </>
                      ) : (
                        "Add to Cart"
                      )}
                    </Button>
                  </>
                ) : (
                  <Button size="lg" disabled className="w-full">
                    Out of Stock
                  </Button>
                )}

                <div className="pt-6 border-t border-border space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">Free Shipping:</span> On orders over $100
                  </p>
                  <p>
                    <span className="font-semibold">Returns:</span> 30-day money-back guarantee
                  </p>
                  <p>
                    <span className="font-semibold">Support:</span> 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border py-12 md:py-16 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="group cursor-pointer rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg overflow-hidden">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold line-clamp-2 mb-2">{p.name}</h3>
                      <span className="text-lg font-bold text-accent">${p.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
