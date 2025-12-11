"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { CustomerSidebar } from "@/components/customer-sidebar"
import { ShoppingBag } from "lucide-react"
import { Loader } from "lucide-react"

export default function CustomerOrdersPage() {
  const { isAuthenticated, userType, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || userType !== "customer")) {
      router.push("/login")
    }
  }, [isAuthenticated, userType, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-accent" />
      </div>
    )
  }

  if (!isAuthenticated || userType !== "customer") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">This page is only for business customers.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <CustomerSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold mb-6">Customer Orders</h2>

            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-3 opacity-50" />
              <p className="text-muted-foreground">No orders yet. This feature will show your order history.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
