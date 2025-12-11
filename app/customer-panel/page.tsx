"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { CustomerSidebar } from "@/components/customer-sidebar"
import { AddProductForm } from "@/components/add-product-form"
import { Loader } from "lucide-react"

export default function CustomerPanelPage() {
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

  const handleProductAdded = () => {
    // Refresh or update UI if needed
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <CustomerSidebar />
        <main className="flex-1 p-6 md:p-8">
          <AddProductForm onSuccess={handleProductAdded} />
        </main>
      </div>
    </div>
  )
}
