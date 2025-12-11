export interface Product {
  discount: number
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  subcategory: string
  stock: number
  rating: number
  reviews: number
  gender: "men" | "women"
}

export interface CartItem {
  productId: string
  quantity: number
  price: number
}

export interface WishlistItem {
  productId: string
  addedAt: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: string
  shippingAddress: Address
}

export interface Address {
  fullName: string
  email: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}
