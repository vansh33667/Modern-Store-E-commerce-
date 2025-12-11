"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSummary } from "@/components/cart-summary"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/store-data"

interface FormData {
  fullName: string
  email: string
  phone: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  cardNumber: string
  cardExpiry: string
  cardCVC: string
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  })
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    } else {
      window.location.href = "/cart"
    }
  }, [])

  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((p) => p.id === productId)
      return product ? { ...product, quantity } : null
    })
    .filter(Boolean)

  const subtotal = cartItems.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 0), 0)
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, "")
    value = value.replace(/(\d{4})/g, "$1 ").trim()
    setFormData((prev) => ({ ...prev, cardNumber: value }))
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4)
    }
    setFormData((prev) => ({ ...prev, cardExpiry: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        setOrderComplete(true)
        localStorage.removeItem("cart")
        setIsProcessing(false)
      }, 2000)
    }
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header cartCount={0} />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="text-center max-w-md">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been placed successfully.
            </p>
            <div className="space-y-3 text-left bg-secondary/20 p-6 rounded-lg mb-8">
              <p>
                <span className="font-semibold">Recipient:</span> {formData.fullName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
              <p>
                <span className="font-semibold">Delivery:</span> {formData.street}, {formData.city}
              </p>
              <p>
                <span className="font-semibold">Items:</span> {cartCount} products
              </p>
            </div>
            <Link href="/">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={cartCount} />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link href="/cart" className="flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Shipping */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-border pb-4">
                      <h2 className="text-2xl font-bold">Step 1: Shipping Address</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Street Address</label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        placeholder="123 Main St"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Zip Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          placeholder="10001"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        placeholder="United States"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Continue to Payment
                    </Button>
                  </div>
                )}

                {/* Step 2: Payment */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-border pb-4">
                      <h2 className="text-2xl font-bold">Step 2: Payment Information</h2>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-lg space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Shipping to:</span> {formData.fullName}
                      </p>
                      <p>
                        {formData.street}, {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        required
                        placeholder="4242 4242 4242 4242"
                        maxLength="19"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background font-mono"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Use 4242 4242 4242 4242 for demo</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          value={formData.cardExpiry}
                          onChange={handleExpiryChange}
                          required
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVC</label>
                        <input
                          type="text"
                          name="cardCVC"
                          value={formData.cardCVC}
                          onChange={handleInputChange}
                          required
                          placeholder="123"
                          maxLength="4"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Complete Purchase"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent"
                        onClick={() => setStep(1)}
                        disabled={isProcessing}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <CartSummary subtotal={subtotal} />

              {/* Order Items */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item?.id} className="flex justify-between text-sm">
                      <span>{item?.name}</span>
                      <span className="font-medium">${((item?.price || 0) * (item?.quantity || 0)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
