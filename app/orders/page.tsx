"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Package, ArrowRight } from "lucide-react"
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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [email, setEmail] = useState("")
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([])

  useEffect(() => {
    // Fetch orders from localStorage (demo data)
    const demoOrders: Order[] = [
      {
        id: "ORD-1001",
        email: "demo@example.com",
        items: [
          { productId: "1", quantity: 2, price: 299.99 },
          { productId: "4", quantity: 1, price: 349.99 },
        ],
        total: 949.97,
        status: "delivered",
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
        status: "shipped",
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
        status: "processing",
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
    setOrders(demoOrders)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      const filtered = orders.filter(
        (order) => order.email.toLowerCase() === email.toLowerCase() || order.id.includes(email.toUpperCase()),
      )
      setFilteredOrders(filtered)
    }
  }

  const statusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "shipped":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const displayOrders = email ? filteredOrders : orders

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Track Your Orders</h1>
          <p className="text-muted-foreground mb-8">View and manage your purchases</p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by email or order ID (e.g., ORD-1001 or demo@example.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button type="submit">Search</Button>
            </div>
            {email && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setEmail("")
                  setFilteredOrders([])
                }}
                className="mt-2"
              >
                Clear Search
              </Button>
            )}
          </form>

          {/* Orders List */}
          {displayOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center rounded-lg border border-border bg-card p-8">
              <Package className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-semibold mb-2">{email ? "No orders found" : "No orders to display"}</p>
              <p className="text-muted-foreground mb-6">
                {email ? "Try searching with a different email or order ID" : "Track your orders by email or order ID"}
              </p>
              <Link href="/products">
                <Button>Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {displayOrders.map((order) => (
                <Link key={order.id} href={`/orders/${order.id}`}>
                  <div className="border border-border rounded-lg bg-card p-6 hover:border-accent transition cursor-pointer">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Ordered on {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.items.length} {order.items.length === 1 ? "item" : "items"}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 md:text-right">
                        <span className="text-xl font-bold text-accent">${order.total.toFixed(2)}</span>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
