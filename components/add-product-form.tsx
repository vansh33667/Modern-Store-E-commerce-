"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

const CATEGORIES = [
  "Kurti Saree & Lehenga",
  "Woman's",
  "Lingerie",
  "Men",
  "Kids & Toys",
  "Innerwear",
  "Sports & Fitness",
  "Night Wear",
  "Winter Wear",
  "Combo Store",
  "Accessories",
  "Jewellery",
  "Bags",
  "Footwear",
  "Beauty & Health",
  "Home & Kitchen",
  "Electronics",
  "Watches",
  "Car & Motorbike",
  "Office Supplies & Stationery",
  "Groceries",
  "Books",
  "Pet Supplies",
  "Musical Instruments",
]

interface ProductFormData {
  title: string
  description: string
  price: string
  stock: string
  category: string
  image: File | null
  imagePreview: string | null
  isNewProduct: boolean
  isTrending: boolean
}

interface EditingProduct {
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

export function AddProductForm({
  onSuccess,
  editingProduct,
  onEditCancel,
}: {
  onSuccess: () => void
  editingProduct?: EditingProduct
  onEditCancel?: () => void
}) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: editingProduct?.title || "",
    description: editingProduct?.description || "",
    price: editingProduct?.price.toString() || "",
    stock: editingProduct?.stock.toString() || "",
    category: editingProduct?.category || "",
    image: null,
    imagePreview: editingProduct?.image || null,
    isNewProduct: editingProduct?.isNewProduct || true,
    isTrending: editingProduct?.isTrending || false,
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }))
    }
  }

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: null,
      imagePreview: null,
    }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    // Validation
    if (!formData.title.trim()) {
      setError("Product title is required")
      return
    }
    if (!formData.description.trim()) {
      setError("Product description is required")
      return
    }
    if (!formData.price || Number.parseFloat(formData.price) <= 0) {
      setError("Valid product price is required")
      return
    }
    if (!formData.stock || Number.parseInt(formData.stock) < 0) {
      setError("Valid stock quantity is required")
      return
    }
    if (!formData.category) {
      setError("Please select a category")
      return
    }
    if (!formData.imagePreview) {
      setError("Product image is required")
      return
    }

    setIsLoading(true)

    // Simulate product addition/update
    setTimeout(() => {
      // Get existing customer products
      const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}")
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      const customerId = user.email || "default"

      if (!customerProducts[customerId]) {
        customerProducts[customerId] = []
      }

      if (editingProduct) {
        // Update existing product
        const productIndex = customerProducts[customerId].findIndex((p: EditingProduct) => p.id === editingProduct.id)
        if (productIndex !== -1) {
          customerProducts[customerId][productIndex] = {
            ...customerProducts[customerId][productIndex],
            title: formData.title,
            description: formData.description,
            price: Number.parseFloat(formData.price),
            stock: Number.parseInt(formData.stock),
            category: formData.category,
            image: formData.imagePreview,
            isNewProduct: formData.isNewProduct,
            isTrending: formData.isTrending,
          }
        }
      } else {
        // Add new product
        const newProduct = {
          id: `product-${Date.now()}`,
          title: formData.title,
          description: formData.description,
          price: Number.parseFloat(formData.price),
          stock: Number.parseInt(formData.stock),
          category: formData.category,
          image: formData.imagePreview,
          isNewProduct: formData.isNewProduct,
          isTrending: formData.isTrending,
          createdAt: new Date().toISOString(),
        }
        customerProducts[customerId].push(newProduct)
      }

      localStorage.setItem("customerProducts", JSON.stringify(customerProducts))

      setSuccess(true)
      setFormData({
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        image: null,
        imagePreview: null,
        isNewProduct: true,
        isTrending: false,
      })

      setTimeout(() => {
        setSuccess(false)
        onSuccess()
      }, 2000)

      setIsLoading(false)
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg p-6 border border-border">
      <h2 className="text-2xl font-bold">{editingProduct ? "Edit Product" : "Add New Product"}</h2>

      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 text-sm dark:bg-green-900 dark:border-green-700 dark:text-green-100">
          Product {editingProduct ? "updated" : "added"} successfully!
        </div>
      )}

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-2">Product Image</label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 bg-muted/50 hover:bg-muted transition-colors">
          {formData.imagePreview ? (
            <div className="space-y-3">
              <div className="relative h-48 w-full">
                <Image
                  src={formData.imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={removeImage}
                className="w-full gap-2 bg-transparent"
              >
                <X className="h-4 w-4" />
                Remove Image
              </Button>
            </div>
          ) : (
            <div className="text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium">Click to upload product image</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </div>
      </div>

      {/* Product Title */}
      <div>
        <label className="block text-sm font-medium mb-2">Product Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Enter product title"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
      </div>

      {/* Product Description */}
      <div>
        <label className="block text-sm font-medium mb-2">Product Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          placeholder="Enter detailed product description"
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          required
        />
      </div>

      {/* Price and Stock */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Product Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
              placeholder="0.00"
              className="w-full pl-7 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Stock Quantity</label>
          <input
            type="number"
            min="0"
            value={formData.stock}
            onChange={(e) => setFormData((prev) => ({ ...prev, stock: e.target.value }))}
            placeholder="How many items are available"
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          required
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex items-center gap-3 p-3 rounded-lg border border-input bg-muted/30 cursor-pointer hover:bg-muted/50">
          <input
            type="checkbox"
            checked={formData.isNewProduct}
            onChange={(e) => setFormData((prev) => ({ ...prev, isNewProduct: e.target.checked }))}
            className="rounded"
          />
          <span className="text-sm font-medium">Mark as New Product</span>
        </label>

        <label className="flex items-center gap-3 p-3 rounded-lg border border-input bg-muted/30 cursor-pointer hover:bg-muted/50">
          <input
            type="checkbox"
            checked={formData.isTrending}
            onChange={(e) => setFormData((prev) => ({ ...prev, isTrending: e.target.checked }))}
            className="rounded"
          />
          <span className="text-sm font-medium">Mark as Trending</span>
        </label>
      </div>

      <div className="flex gap-3">
        <Button type="submit" className="flex-1" disabled={isLoading}>
          {isLoading
            ? editingProduct
              ? "Updating..."
              : "Adding..."
            : editingProduct
              ? "Update Product"
              : "Add Product"}
        </Button>
        {editingProduct && (
          <Button type="button" variant="outline" className="flex-1 bg-transparent" onClick={onEditCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
