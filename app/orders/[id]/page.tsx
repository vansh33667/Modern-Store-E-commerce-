"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Truck, Package } from "lucide-react"
import Link from "next/link"

interface OrderItem {
  productId: string
  quantity: number
  price: number
}

interface Order {
  id: string
  email: string
  items: OrderItem[]
  total: number
  status: "processing" | "shipped" | "delivered"
  createdAt: string
  shippingAddress: {
    fullName: string
    street: string
    city: string
    state: string
    zipCode: string
  }
}

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [order, setOrder] = useState<Order | null>(null)
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)

  useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  useEffect(() => {
    if (resolvedParams) {
      // Demo order data
      const orders = [
        {
          id: "ORD-1001",
          email: "demo@example.com",
          items: [
            { productId: "1", quantity: 2, price: 299.99 },
            { productId: "4", quantity: 1, price: 349.99 },
          ],
          total: 949.97,
          status: "delivered" as const,
          createdAt: "2025-12-01T10:30:00Z",
          shippingAddress: {
            fullName: "John Doe",
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001",
          },
        },
        {
          id: "ORD-1002",
          email: "demo@example.com",
          items: [{ productId: "7", quantity: 1, price: 199.99 }],
          total: 227.99,
          status: "shipped" as const,
          createdAt: "2025-12-05T14:15:00Z",
          shippingAddress: {
            fullName: "John Doe",
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001",
          },
        },
        {
          id: "ORD-1003",
          email: "demo@example.com",
          items: [
            { productId: "2", quantity: 1, price: 1299.99 },
            { productId: "3", quantity: 1, price: 1899.99 },
          ],
          total: 3699.98,
          status: "processing" as const,
          createdAt: "2025-12-08T09:20:00Z",
          shippingAddress: {
            fullName: "John Doe",
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001",
          },
        },
      ]

      const foundOrder = orders.find((o) => o.id === resolvedParams.id)
      setOrder(foundOrder || null)
    }
  }, [resolvedParams])

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header cartCount={0} />
        <div className="flex-1 flex items-center justify-center py-12">
          <p className="text-muted-foreground">Order not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const statusSteps = [
    { label: "Processing", icon: Package, completed: ["processing", "shipped", "delivered"].includes(order.status) },
    { label: "Shipped", icon: Truck, completed: ["shipped", "delivered"].includes(order.status) },
    { label: "Delivered", icon: Check, completed: order.status === "delivered" },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link href="/orders" className="flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Orders
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Order Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Header */}
              <div className="border-b border-border pb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold">{order.id}</h1>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Ordered on{" "}
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Status Timeline */}
              <div>
                <h2 className="font-semibold text-lg mb-6">Delivery Status</h2>
                <div className="space-y-4">
                  {statusSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              step.completed ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          {index < statusSteps.length - 1 && (
                            <div
                              className={`h-12 w-0.5 ${step.completed ? "bg-accent" : "bg-muted"}`}
                              style={{ marginTop: "0.5rem" }}
                            />
                          )}
                        </div>
                        <div className="pt-1">
                          <h3 className="font-semibold">{step.label}</h3>
                          <p className="text-sm text-muted-foreground">{step.completed ? "Completed" : "Pending"}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h2 className="font-semibold text-lg mb-4">Order Items</h2>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 rounded-lg border border-border bg-card"
                    >
                      <div>
                        <p className="font-medium">Product {item.productId}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="font-semibold text-lg mb-4">Shipping Address</h2>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">{order.shippingAddress.fullName}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.street}</p>
                  <p className="text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${(order.total * 0.85).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-accent">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(order.total * 0.15).toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-lg text-accent">${order.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  Download Invoice
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Support
                </Button>
                <Link href="/products" className="block">
                  <Button className="w-full">Continue Shopping</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
