"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { MeeshoSidebar } from "@/components/meesho-sidebar"
import { Pagination } from "@/components/pagination"
import type { Product } from "@/lib/types"
import { meeshoProducts } from "@/lib/meesho-products"
import { getProductImage } from "@/lib/product-image-map"
import { getPaginationData } from "@/lib/pagination-utils"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q") || ""

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [wishlistCount, setWishlistCount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [categoryTitle, setCategoryTitle] = useState("All Products")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    updateWishlistCount()
  }, [])

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...meeshoProducts]

    // Apply search filter first
    if (searchQuery.trim()) {
      const normalizedSearch = searchQuery.trim().toLowerCase()
      result = result.filter((product) => {
        const name = product.name?.toLowerCase() || ""
        const description = product.description?.toLowerCase() || ""
        return name.includes(normalizedSearch) || description.includes(normalizedSearch)
      })
    }

    // Apply category and subcategory filter
    if (selectedCategory) {
      result = result.filter((p) => {
        const categoryMatch = p.category === selectedCategory.toLowerCase()
        const subcategoryMatch = selectedSubcategory ? p.subcategory === selectedSubcategory : true
        return categoryMatch && subcategoryMatch
      })
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "discount":
        result.sort((a, b) => (b.discount || 0) - (a.discount || 0))
        break
      default:
        // newest - keep original order
        break
    }

    return result
  }, [selectedCategory, selectedSubcategory, sortBy, searchQuery])

  const productsWithImages = useMemo(() => {
    return filteredAndSortedProducts.map((product) => ({
      ...product,
      image:
        product.image === `/placeholder.svg?height=300&width=300&query=${product.category}+${product.subcategory}`
          ? getProductImage(product.name)
          : product.image,
    }))
  }, [filteredAndSortedProducts])

  const { items: paginatedProducts, totalPages } = useMemo(() => {
    return getPaginationData(productsWithImages, currentPage)
  }, [productsWithImages, currentPage])

  // Reset to page 1 when category/sort/search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedSubcategory, sortBy, searchQuery])

  const handleAddToCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      newCart[product.id] = (newCart[product.id] || 0) + 1
      localStorage.setItem("cart", JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const handleWishlistChange = useCallback(() => {
    updateWishlistCount()
  }, [])

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistCount(wishlist.length)
  }

  const handleCategorySelect = useCallback((categoryId: string, subcategory?: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategory || null)

    // Set category title for display
    const categoryNames: { [key: string]: string } = {
      popular: "Popular",
      "kurti-saree-lehenga": "Kurti, Saree & Lehenga",
      women: "Women",
      lingerie: "Lingerie",
      men: "Men",
      "kids-toys": "Kids & Toys",
      innerwear: "Innerwear",
      "sports-fitness": "Sports & Fitness",
      "night-wear": "Night Wear",
      "winter-wear": "Winter Wear",
      "combo-store": "Combo Store",
      accessories: "Accessories",
      jewellery: "Jewellery",
      bags: "Bags",
      footwear: "Footwear",
      "beauty-health": "Beauty & Health",
      "home-kitchen": "Home & Kitchen",
      electronics: "Electronics",
      watches: "Watches",
      "car-motorbike": "Car & Motorbike",
      "office-stationery": "Office Supplies & Stationery",
      groceries: "Groceries",
      books: "Books",
      "pet-supplies": "Pet Supplies",
      "musical-instruments": "Musical Instruments",
    }

    const title = subcategory ? `${categoryNames[categoryId]} - ${subcategory}` : categoryNames[categoryId]
    setCategoryTitle(title)
    setSortBy("newest")
  }, [])

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  const pageTitle = searchQuery ? `Search: "${searchQuery}"` : categoryTitle

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <MeeshoSidebar
          onCategorySelect={handleCategorySelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero */}
          <section className="border-b border-border bg-secondary/20 py-8">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <h1 className="text-3xl md:text-4xl font-bold">{pageTitle}</h1>
              <p className="text-muted-foreground mt-2">
                {productsWithImages.length} products available (Page {currentPage} of {totalPages || 1})
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid gap-8 md:grid-cols-4">
                {/* Filters */}
                <div>
                  <ProductFilters sortBy={sortBy} onSortChange={setSortBy} categories={[]} selectedCategory={""} onCategoryChange={function (category: string): void {
                    throw new Error("Function not implemented.")
                  } } />
                </div>

                {/* Products Grid */}
                <div className="md:col-span-3">
                  {paginatedProducts.length > 0 ? (
                    <>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            onWishlistChange={handleWishlistChange}
                          />
                        ))}
                      </div>

                      {totalPages > 1 && (
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <p className="text-lg font-semibold mb-2">
                        {searchQuery ? `No products found for "${searchQuery}"` : "No products found"}
                      </p>
                      <p className="text-muted-foreground">
                        {searchQuery
                          ? "Try searching with different keywords"
                          : "Select a category from the sidebar to view products"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  )
}
