// Filter utilities for dynamic filtering
export interface SearchFilters {
  priceRange: [number, number]
  categories: string[]
  colors: string[]
  sizes: string[]
  minRating: number
  discount: number
  inStock: boolean
  gender: string[]
}

export const DEFAULT_FILTERS: SearchFilters = {
  priceRange: [0, 1000],
  categories: [],
  colors: [],
  sizes: [],
  minRating: 0,
  discount: 0,
  inStock: true,
  gender: [],
}

// Extract filter constraints from product data
export function extractFilterOptions(products: any[]) {
  const filters = {
    prices: [0, Math.max(...products.map((p) => p.price))],
    categories: [...new Set(products.map((p) => p.subcategory))],
    colors: [...new Set(products.flatMap((p) => p.color || []))],
    sizes: [...new Set(products.flatMap((p) => p.size || []))],
    ratings: [0, 5],
  }

  return filters
}

// Apply filters to products
export function applyFilters(products: any[], filters: Partial<SearchFilters>): any[] {
  return products.filter((product) => {
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      if (product.price < min || product.price > max) return false
    }

    if (filters.categories?.length && !filters.categories.includes(product.subcategory)) {
      return false
    }

    if (filters.minRating && product.rating < filters.minRating) {
      return false
    }

    if (filters.inStock && product.stock <= 0) {
      return false
    }

    return true
  })
}
