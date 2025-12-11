interface ImageMapping {
  [productName: string]: string
}

export const productImageMap: ImageMapping = {
  // Featured Products
  "Summer Cotton T-Shirt White": "/images/featured-1-summer-cotton-white.jpg",
  "Summer Cotton T-Shirt Blue": "/images/featured-2-summer-cotton-blue.jpg",
  "Summer Cotton T-Shirt Black": "/images/featured-3-summer-cotton-black.jpg",
  "Casual Linen Shirt": "/images/featured-4-casual-linen-shirt.jpg",
  "Formal White Shirt": "/images/featured-5-formal-white-shirt.jpg",
  "Formal Blue Shirt": "/images/featured-6-formal-blue-shirt.jpg",

  // Clothing categories with consistent premium Unsplash images
  "T-Shirts": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
  Shirts: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop&q=90",
  Jeans: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
  Trousers: "https://images.unsplash.com/photo-1473966143537-c0554dd2b186?w=600&h=600&fit=crop&q=90",
  Sweaters: "https://images.unsplash.com/photo-1556821552-5f5e00b03f36?w=600&h=600&fit=crop&q=90",
  Hoodies: "https://images.unsplash.com/photo-1556821552-8c40c1294de0?w=600&h=600&fit=crop&q=90",
  Jackets: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&h=600&fit=crop&q=90",
  Kurta: "https://images.unsplash.com/photo-1595777707802-69b0b9a1a428?w=600&h=600&fit=crop&q=90",
  Saree: "https://images.unsplash.com/photo-1623557299228-2f27be20cbb8?w=600&h=600&fit=crop&q=90",

  // Footwear
  Footwear: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
  "Casual Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
  "Sports Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
  Sandals: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=90",
  Slippers: "https://images.unsplash.com/photo-1549917261-2f4ee31585d4?w=600&h=600&fit=crop&q=90",

  // Accessories
  Sunglasses: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=90",
  Belts: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=90",
  Wallets: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=90",
  Watches: "https://images.unsplash.com/photo-1523170335684-f1b5be63a6f1?w=600&h=600&fit=crop&q=90",
  Bags: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=90",

  // Beauty & Health
  Makeup: "https://images.unsplash.com/photo-1596462502278-af396f999d57?w=600&h=600&fit=crop&q=90",
  Skincare: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=90",
  Haircare: "https://images.unsplash.com/photo-1584308666744-24d5f400f4f7?w=600&h=600&fit=crop&q=90",

  // Home & Kitchen
  Cookware: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
  "Home Decor": "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
  Bedsheets: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",

  // Electronics & Tech
  Earphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&q=90",
  Chargers: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop&q=90",
  "Smart Gadgets": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop&q=90",
}

export function getProductImage(productName: string): string {
  // Try exact match first
  if (productImageMap[productName]) {
    return productImageMap[productName]
  }

  // Try partial match (first part of the product name)
  const nameParts = productName.split(" ")
  for (const part of nameParts) {
    if (productImageMap[part]) {
      return productImageMap[part]
    }
    for (const [key] of Object.entries(productImageMap)) {
      if (key.includes(part) || part.includes(key)) {
        return productImageMap[key]
      }
    }
  }

  // Fallback to a random premium image
  return getRandomImage()
}

const fallbackImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&q=90",
  "https://images.unsplash.com/photo-1523170335684-f1b5be63a6f1?w=600&h=600&fit=crop&q=90",
  "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
  "https://images.unsplash.com/photo-1596462502278-af396f999d57?w=600&h=600&fit=crop&q=90",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
]

function getRandomImage(): string {
  return fallbackImages[Math.floor(Math.random() * fallbackImages.length)]
}
