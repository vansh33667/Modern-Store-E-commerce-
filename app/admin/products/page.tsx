"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Edit2 } from "lucide-react"
import { products } from "@/lib/store-data"

export default function AdminProductsPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Products</h1>
              <p className="text-muted-foreground">Manage your product inventory</p>
            </div>
            <Button onClick={() => setShowModal(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>

          {/* Products Table */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-secondary/30">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold">Product</th>
                  <th className="text-left py-3 px-6 font-semibold">Category</th>
                  <th className="text-left py-3 px-6 font-semibold">Price</th>
                  <th className="text-left py-3 px-6 font-semibold">Stock</th>
                  <th className="text-left py-3 px-6 font-semibold">Rating</th>
                  <th className="text-left py-3 px-6 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-muted flex-shrink-0" />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground capitalize">{product.category}</td>
                    <td className="py-4 px-6 font-semibold text-accent">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          product.stock > 50
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : product.stock > 10
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">{product.rating.toFixed(1)} ⭐</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Product Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-background rounded-lg border border-border max-w-md w-full mx-4 p-6">
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <input
                    type="number"
                    placeholder="Stock"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">Add</Button>
                    <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowModal(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
