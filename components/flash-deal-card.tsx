"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, Bell, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface FlashDealCardProps {
  deal: {
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
  productName: string
  productImage: string
}

export function FlashDealCard({ deal, productName, productImage }: FlashDealCardProps) {
  const [timeLeft, setTimeLeft] = useState<string>("")
  const [notified, setNotified] = useState(false)

  useEffect(() => {
    const updateTimer = () => {
      const endTime = new Date(deal.deal_end_time).getTime()
      const now = new Date().getTime()
      const diff = endTime - now

      if (diff <= 0) {
        setTimeLeft("Ended")
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [deal.deal_end_time])

  const handleNotify = async () => {
    try {
      await fetch("/api/flash-deals/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deal_id: deal.id }),
      })
      setNotified(true)
    } catch (error) {
      console.error("Notification error:", error)
    }
  }

  const quantityLeft = deal.quantity_available - deal.quantity_sold
  const soldPercentage = (deal.quantity_sold / deal.quantity_available) * 100

  return (
    <Card className="overflow-hidden border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-transparent">
      <div className="relative">
        <Link href={`/products/${deal.product_id}`}>
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src={productImage || "/placeholder.svg"}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            {/* Discount Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
              <Flame className="h-4 w-4" />
              {deal.discount_percentage}%
            </div>
          </div>
        </Link>

        {/* Countdown Timer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-white text-xs font-bold">Ends in: {timeLeft}</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <Link href={`/products/${deal.product_id}`}>
            <h3 className="font-semibold line-clamp-2 hover:text-accent transition">{productName}</h3>
          </Link>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-accent">${deal.discounted_price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground line-through">${deal.original_price.toFixed(2)}</span>
        </div>

        {/* Stock Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Stock</span>
            <span>{quantityLeft} left</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-accent transition-all" style={{ width: `${Math.min(soldPercentage, 100)}%` }} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Link href={`/products/${deal.product_id}`} className="flex-1">
            <Button size="sm" className="w-full gap-2">
              <ShoppingCart className="h-4 w-4" />
              Buy Now
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            onClick={handleNotify}
            disabled={notified}
            className="gap-2 bg-transparent"
          >
            <Bell className="h-4 w-4" />
            {notified ? "Added" : "Alert"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
