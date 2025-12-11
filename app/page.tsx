"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { products } from "@/lib/store-data"
import { ProductCard } from "@/components/product-card"

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([])
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [wishlistCount, setWishlistCount] = useState(0)

  useEffect(() => {
    setFeatured(products.slice(0, 6))

    const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}")
    const trendingCustomerProducts: Product[] = []

    Object.values(customerProducts).forEach((userProducts: any) => {
      userProducts.forEach((product: any) => {
        if (product.isTrending) {
          trendingCustomerProducts.push({
            id: product.id,
            name: product.title,
            description: product.description,
            price: product.price,
            image: product.image,
            category: product.category,
            subcategory: "",
            stock: product.stock,
            rating: 4.5,
            reviews: 0,
            gender: "women",
          })
        }
      })
    })

    setTrendingProducts(trendingCustomerProducts.slice(0, 6))

    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    updateWishlistCount()
  }, [])

  const handleAddToCart = (product: Product) => {
    const newCart = { ...cart }
    newCart[product.id] = (newCart[product.id] || 0) + 1
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const handleWishlistChange = () => {
    updateWishlistCount()
  }

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistCount(wishlist.length)
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />

      <HeroSlider />

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-balance">Featured Collection</h2>
            <p className="text-muted-foreground text-lg">Handpicked selections for the discerning customer</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onWishlistChange={handleWishlistChange}
              />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {trendingProducts.length > 0 && (
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-balance">Trending Products</h2>
              <p className="text-muted-foreground text-lg">Popular items trending right now</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
              {trendingProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onWishlistChange={handleWishlistChange}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fast Shipping",
                description: "Free shipping on orders over $100. Arrive within 2-3 business days.",
              },
              {
                title: "Premium Quality",
                description: "All products carefully selected for durability and performance.",
              },
              {
                title: "100% Guaranteed",
                description: "30-day money-back guarantee if you're not satisfied.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-border p-8 bg-background shadow-sm hover:shadow-md transition"
              >
                <h3 className="mb-3 font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
