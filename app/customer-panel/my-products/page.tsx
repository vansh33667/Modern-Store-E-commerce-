"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { CustomerSidebar } from "@/components/customer-sidebar"
import { AddProductForm } from "@/components/add-product-form"
import { Button } from "@/components/ui/button"
import { Loader, Edit2, Trash2, Package } from "lucide-react"

interface CustomerProduct {
  id: string
  title: string
  description: string
  price: number
  stock: number
  category: string
  image: string
  isNewProduct: boolean
  isTrending: boolean
  createdAt: string
}

export default function MyProductsPage() {
  const { isAuthenticated, userType, isLoading, user } = useAuth()
  const router = useRouter()
  const [products, setProducts] = useState<CustomerProduct[]>([])
  const [productsLoading, setProductsLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState<CustomerProduct | null>(null)

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || userType !== "customer")) {
      router.push("/login")
    }
  }, [isAuthenticated, userType, isLoading, router])

  useEffect(() => {
    if (user && user.type === "customer") {
      const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}")
      const customerId = user.email
      setProducts(customerProducts[customerId] || [])
      setProductsLoading(false)
    }
  }, [user])

  const handleDelete = (productId: string) => {
    if (!user) return
    const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}")
    const customerId = user.email
    customerProducts[customerId] = customerProducts[customerId].filter((p: CustomerProduct) => p.id !== productId)
    localStorage.setItem("customerProducts", JSON.stringify(customerProducts))
    setProducts(customerProducts[customerId] || [])
  }

  const handleEdit = (product: CustomerProduct) => {
    setEditingProduct(product)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEditCancel = () => {
    setEditingProduct(null)
  }

  const handleProductAdded = () => {
    setEditingProduct(null)
    if (user && user.type === "customer") {
      const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}")
      const customerId = user.email
      setProducts(customerProducts[customerId] || [])
    }
  }

  if (isLoading || productsLoading) {
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
          {editingProduct && (
            <div className="mb-8">
              <AddProductForm
                onSuccess={handleProductAdded}
                editingProduct={editingProduct}
                onEditCancel={handleEditCancel}
              />
            </div>
          )}

          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold mb-6">My Products</h2>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-3 opacity-50" />
                <p className="text-muted-foreground">You haven't added any products yet.</p>
                <Button onClick={() => router.push("/customer-panel")} className="mt-4">
                  Add Your First Product
                </Button>
              </div>
            ) : (
              <div className="grid gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    {/* Product Image */}
                    <div className="md:w-32 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
                        <div className="flex gap-2">
                          {product.isNewProduct && (
                            <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded">
                              New
                            </span>
                          )}
                          {product.isTrending && (
                            <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 px-2 py-1 rounded">
                              Trending
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="font-semibold text-accent">${product.price.toFixed(2)}</span>
                        <span className="text-muted-foreground">Stock: {product.stock}</span>
                        <span className="text-muted-foreground">Category: {product.category}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 md:flex-col">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-transparent"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
