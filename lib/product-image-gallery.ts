export const productImageGallery: Record<string, string[]> = {
  // Men's Featured Products
  m1: [
    "/images/products/m1-summer-white-1.jpg",
    "/images/products/m1-summer-white-2.jpg",
    "/images/products/m1-summer-white-3.jpg",
  ],
  m2: [
    "/images/products/m2-summer-blue-1.jpg",
    "/images/products/m2-summer-blue-2.jpg",
    "/images/products/m2-summer-blue-3.jpg",
  ],
  m3: [
    "/images/products/m3-summer-black-1.jpg",
    "/images/products/m3-summer-black-2.jpg",
    "/images/products/m3-summer-black-3.jpg",
  ],
  m4: ["/images/products/m4-linen-1.jpg", "/images/products/m4-linen-2.jpg", "/images/products/m4-linen-3.jpg"],
  m5: [
    "/images/products/m5-formal-white-1.jpg",
    "/images/products/m5-formal-white-2.jpg",
    "/images/products/m5-formal-white-3.jpg",
  ],
  m6: [
    "/images/products/m6-formal-blue-1.jpg",
    "/images/products/m6-formal-blue-2.jpg",
    "/images/products/m6-formal-blue-3.jpg",
  ],
  m7: [
    "/images/products/m6-formal-blue-1.jpg",
    "/images/products/m6-formal-blue-2.jpg",
    "/images/products/m6-formal-blue-3.jpg",
  ],
  m8: [
    "/images/products/m6-formal-blue-1.jpg",
    "/images/products/m6-formal-blue-2.jpg",
    "/images/products/m6-formal-blue-3.jpg",
  ],
  m9: [
    "/images/products/m9-denim-blue-1.jpg",
    "/images/products/m9-denim-blue-2.jpg",
    "/images/products/m9-denim-blue-3.jpg",
  ],
  m10: [
    "/images/products/m10-denim-black-1.jpg",
    "/images/products/m10-denim-black-2.jpg",
    "/images/products/m10-denim-black-3.jpg",
  ],

  // Women's Featured Products
  w1: [
    "/images/products/w1-summer-top-1.jpg",
    "/images/products/w1-summer-top-2.jpg",
    "/images/products/w1-summer-top-3.jpg",
  ],
  w2: [
    "/images/products/w2-casual-tshirt-1.jpg",
    "/images/products/w2-casual-tshirt-2.jpg",
    "/images/products/w2-casual-tshirt-3.jpg",
  ],
  w3: [
    "/images/products/w3-dress-casual-1.jpg",
    "/images/products/w3-dress-casual-2.jpg",
    "/images/products/w3-dress-casual-3.jpg",
  ],
  w4: [
    "/images/products/w4-gown-red-1.jpg",
    "/images/products/w4-gown-red-2.jpg",
    "/images/products/w4-gown-red-3.jpg",
  ],
}

export function getProductImages(productId: string): string[] {
  // Return gallery images if available
  if (productImageGallery[productId] && productImageGallery[productId].length > 0) {
    return productImageGallery[productId]
  }

  // Smart fallback: use m6 blue shirt images for all unmatched products
  // These are the formal blue shirt images that work great for any product
  return [
    "/images/products/m6-formal-blue-1.jpg",
    "/images/products/m6-formal-blue-2.jpg",
    "/images/products/m6-formal-blue-3.jpg",
  ]
}
