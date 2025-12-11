"use client"

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartSummaryProps {
  subtotal: number
  isLoading?: boolean
  onCheckout?: () => void
}

const SHIPPING_COST = 15
const TAX_RATE = 0.08

export function CartSummary({ subtotal, isLoading = false, onCheckout }: CartSummaryProps) {
  const shipping = subtotal > 100 ? 0 : SHIPPING_COST
  const tax = (subtotal + shipping) * TAX_RATE
  const total = subtotal + shipping + tax

  return (
    <div className="rounded-lg border border-border bg-card p-6 space-y-4">
      <h3 className="font-semibold text-lg">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? <span className="text-accent">FREE</span> : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="border-t border-border pt-4 flex justify-between font-bold">
        <span>Total</span>
        <span className="text-lg text-accent">${total.toFixed(2)}</span>
      </div>
      {subtotal > 0 && subtotal <= 100 && (
        <p className="text-xs text-muted-foreground bg-secondary/30 p-2 rounded">
          Free shipping on orders over $100. Add ${(100 - subtotal).toFixed(2)} more!
        </p>
      )}
      <Button className="w-full" onClick={onCheckout} disabled={isLoading || subtotal === 0}>
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Processing...
          </>
        ) : (
          "Proceed to Checkout"
        )}
      </Button>
    </div>
  )
}
