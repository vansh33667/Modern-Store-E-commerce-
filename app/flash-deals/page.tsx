"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlashDealCard } from "@/components/flash-deal-card"
import { Flame } from "lucide-react"
import { products } from "@/lib/store-data"

interface FlashDeal {
  id: string
  product_id: string
  original_price: number
  discounted_price: number
  discount_percentage: number
  quantity_available: number
  quantity_sold: number
  deal_start_time: string
  deal_end_time: string
}

export default function FlashDealsPage() {
  const [deals, setDeals] = useState<FlashDeal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDeals()
    const interval = setInterval(fetchDeals, 10000) // Refresh every 10 seconds
    return () => clearInterval(interval)
  }, [])

  const fetchDeals = async () => {
    try {
      const response = await fetch("/api/flash-deals/active")
      const data = await response.json()
      setDeals(data)
    } catch (error) {
      console.error("Error fetching deals:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} wishlistCount={0} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
              <Flame className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Flash Deals</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Limited-time offers with massive discounts. Deals refresh regularly throughout the day!
            </p>
          </div>

          {/* Deals Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-accent"></div>
            </div>
          ) : deals.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {deals.map((deal) => {
                const product = products.find((p) => p.id === deal.product_id)
                return (
                  <FlashDealCard
                    key={deal.id}
                    deal={deal}
                    productName={product?.name || "Product"}
                    productImage={product?.image || "/placeholder.svg"}
                  />
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-border rounded-lg">
              <Flame className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground mb-4">No active flash deals at the moment.</p>
              <p className="text-sm text-muted-foreground">Check back soon for amazing offers!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
