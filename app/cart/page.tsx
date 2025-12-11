"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSummary } from "@/components/cart-summary"
import { Button } from "@/components/ui/button"
import { Trash2, ArrowLeft } from "lucide-react"
import { products } from "@/lib/store-data"
import type { Product } from "@/lib/types"

export default function CartPage() {
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart:", error)
        setCart({})
      }
    }
  }, [])

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = products.find((p) => p.id === productId)
        return product ? { ...product, quantity } : null
      })
      .filter((item): item is Product & { quantity: number } => item !== null)
  }, [cart])

  const { subtotal, cartCount } = useMemo(() => {
    const sum = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const count = Object.values(cart).reduce((a, b) => a + b, 0)
    return { subtotal: sum, cartCount: count }
  }, [cartItems, cart])

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (quantity <= 0) {
        delete newCart[productId]
      } else {
        newCart[productId] = quantity
      }
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const handleRemoveItem = useCallback((productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      delete newCart[productId]
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const handleClearCart = useCallback(() => {
    setCart({})
    localStorage.removeItem("cart")
  }, [])

  const handleCheckout = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/checkout"
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={cartCount} />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link href="/products" className="flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-xl font-semibold mb-4">Your cart is empty</p>
              <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
              <Link href="/products">
                <Button>Shop Now</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border border-border bg-card p-4 md:p-6">
                    {/* Product Image */}
                    <div className="h-24 w-24 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        crossOrigin="anonymous"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link href={`/products/${item.id}`}>
                          <h3 className="font-semibold hover:text-accent transition line-clamp-2">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Qty:</span>
                          <div className="flex items-center border border-border rounded-md">
                            <button
                              className="px-2 py-1 hover:bg-secondary"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="px-3 py-1 border-l border-r border-border text-sm">{item.quantity}</span>
                            <button
                              className="px-2 py-1 hover:bg-secondary"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive/80 transition"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="ghost" className="w-full" onClick={handleClearCart}>
                  Clear Cart
                </Button>
              </div>

              {/* Cart Summary */}
              <div>
                <CartSummary subtotal={subtotal} isLoading={isLoading} onCheckout={handleCheckout} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
