// Complete product database with 30+ products per category
import type { Product } from "./types"

function generateProducts(
  categoryId: string,
  categoryName: string,
  subcategoryName: string,
  count: number,
  priceRange: [number, number],
  keywords: string[],
): Product[] {
  const products: Product[] = []
  const names = [
    "Premium",
    "Classic",
    "Modern",
    "Elegant",
    "Casual",
    "Formal",
    "Trendy",
    "Stylish",
    "Comfortable",
    "Durable",
    "Quality",
    "Brand New",
    "Latest",
    "Best Seller",
    "Premium Quality",
    "High Quality",
    "Professional",
    "Everyday",
    "Special",
    "Limited Edition",
    "Exclusive",
    "Designer",
    "Original",
    "Authentic",
    "Branded",
    "Luxury",
    "Budget",
    "Value Pack",
    "Best Deal",
    "Hot Deal",
    "Trending Now",
    "Must Have",
    "Top Rated",
  ]

  for (let i = 1; i <= count; i++) {
    const price = Math.floor(Math.random() * (priceRange[1] - priceRange[0] + 1)) + priceRange[0]
    const discount = Math.floor(Math.random() * 41) + 10 // 10-50% discount
    const productName = `${names[Math.floor(Math.random() * names.length)]} ${subcategoryName} ${i}`

    const imageUrl = `https://source.unsplash.com/600x600/?${encodeURIComponent(subcategoryName)}+${keywords[Math.floor(Math.random() * keywords.length)]}`

    products.push({
      id: `${categoryId}-${i}`,
      name: productName,
      description: `High quality ${subcategoryName.toLowerCase()} - ${keywords[Math.floor(Math.random() * keywords.length)]}`,
      price,
      image: imageUrl,
      category: categoryName.toLowerCase(),
      subcategory: subcategoryName,
      stock: Math.floor(Math.random() * 200) + 20,
      rating: (Math.random() * 2 + 3.5).toFixed(1) as unknown as number,
      reviews: Math.floor(Math.random() * 500) + 50,
      gender: categoryName.includes("Women") ? "women" : categoryName.includes("Men") ? "men" : "women",
      discount,
    })
  }
  return products
}

export const meeshoProducts: Product[] = [
  // POPULAR CATEGORY
  ...generateProducts("popular", "Popular", "Trending Products", 30, [19, 199], ["trending", "popular", "must-have"]),
  ...generateProducts("popular", "Popular", "New Arrivals", 30, [29, 299], ["new", "arrival", "latest"]),
  ...generateProducts("popular", "Popular", "Best Sellers", 30, [39, 399], ["bestseller", "popular", "favorite"]),
  ...generateProducts("popular", "Popular", "Under ₹199", 30, [49, 199], ["budget", "affordable", "cheap"]),
  ...generateProducts("popular", "Popular", "Under ₹299", 30, [199, 299], ["budget", "value", "great deal"]),
  ...generateProducts("popular", "Popular", "Budget Picks", 30, [29, 149], ["budget", "affordable", "savings"]),

  // KURTI SAREE LEHENGA
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "All Sarees",
    30,
    [49, 399],
    ["saree", "elegant", "traditional"],
  ),
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "Cotton Sarees",
    30,
    [39, 299],
    ["cotton", "breathable", "comfortable"],
  ),
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "Silk Sarees",
    30,
    [79, 499],
    ["silk", "premium", "luxury"],
  ),
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "All Kurtis",
    30,
    [29, 199],
    ["kurti", "casual", "comfortable"],
  ),
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "Anarkali Kurtis",
    30,
    [49, 299],
    ["anarkali", "elegant", "festive"],
  ),
  ...generateProducts(
    "kurti-saree-lehenga",
    "Kurti, Saree & Lehenga",
    "Bridal Lehenga",
    30,
    [199, 999],
    ["bridal", "wedding", "luxury"],
  ),

  // WOMEN
  ...generateProducts("women", "Women", "Tops", 30, [19, 149], ["tops", "casual", "comfortable"]),
  ...generateProducts("women", "Women", "T-Shirts", 30, [14, 99], ["t-shirt", "casual", "everyday"]),
  ...generateProducts("women", "Women", "Shirts", 30, [34, 199], ["shirt", "formal", "casual"]),
  ...generateProducts("women", "Women", "Jeans", 30, [49, 299], ["jeans", "denim", "casual"]),
  ...generateProducts("women", "Women", "Trousers", 30, [39, 199], ["trousers", "formal", "elegant"]),
  ...generateProducts("women", "Women", "Sweaters", 30, [29, 199], ["sweater", "warm", "cozy"]),
  ...generateProducts("women", "Women", "Night Suits", 30, [29, 149], ["nightwear", "comfortable", "sleep"]),

  // LINGERIE
  ...generateProducts("lingerie", "Lingerie", "Bras", 30, [14, 99], ["bra", "comfort", "support"]),
  ...generateProducts("lingerie", "Lingerie", "Panties", 30, [9, 59], ["panties", "comfort", "daily"]),
  ...generateProducts("lingerie", "Lingerie", "Nightwear", 30, [24, 149], ["nightwear", "comfortable", "soft"]),
  ...generateProducts("lingerie", "Lingerie", "Shapewear", 30, [29, 149], ["shapewear", "figure", "smooth"]),
  ...generateProducts("lingerie", "Lingerie", "Loungewear", 30, [24, 99], ["loungewear", "relaxed", "comfortable"]),
  ...generateProducts("lingerie", "Lingerie", "Thermal Wear", 30, [24, 149], ["thermal", "warm", "winter"]),
  ...generateProducts("lingerie", "Lingerie", "Lingerie Sets", 30, [39, 199], ["set", "combo", "value"]),

  // MEN
  ...generateProducts("men", "Men", "T-Shirts", 30, [14, 99], ["t-shirt", "casual", "comfortable"]),
  ...generateProducts("men", "Men", "Shirts", 30, [34, 199], ["shirt", "formal", "casual"]),
  ...generateProducts("men", "Men", "Sweatshirts", 30, [34, 199], ["sweatshirt", "warm", "casual"]),
  ...generateProducts("men", "Men", "Hoodies", 30, [39, 199], ["hoodie", "comfortable", "warm"]),
  ...generateProducts("men", "Men", "Jeans", 30, [49, 299], ["jeans", "denim", "casual"]),
  ...generateProducts("men", "Men", "Trousers", 30, [39, 199], ["trousers", "formal", "elegant"]),
  ...generateProducts("men", "Men", "Track Pants", 30, [24, 129], ["track", "sports", "casual"]),
  ...generateProducts("men", "Men", "Shorts", 30, [14, 99], ["shorts", "casual", "summer"]),
  ...generateProducts("men", "Men", "Kurtas", 30, [44, 299], ["kurta", "ethnic", "traditional"]),
  ...generateProducts("men", "Men", "Nehru Jackets", 30, [79, 399], ["jacket", "formal", "ethnic"]),
  ...generateProducts("men", "Men", "Vests", 30, [9, 59], ["vest", "innerwear", "comfort"]),
  ...generateProducts("men", "Men", "Briefs", 30, [9, 49], ["briefs", "innerwear", "daily"]),
  ...generateProducts("men", "Men", "Boxers", 30, [12, 69], ["boxers", "innerwear", "comfort"]),
  ...generateProducts("men", "Men", "Jackets", 30, [79, 499], ["jacket", "warm", "winter"]),
  ...generateProducts("men", "Men", "Sweaters", 30, [34, 199], ["sweater", "warm", "cozy"]),

  // KIDS & TOYS
  ...generateProducts("kids-toys", "Kids & Toys", "Boys Clothing", 30, [14, 99], ["boys", "clothing", "kids"]),
  ...generateProducts("kids-toys", "Kids & Toys", "Girls Clothing", 30, [14, 99], ["girls", "clothing", "kids"]),
  ...generateProducts("kids-toys", "Kids & Toys", "Baby Clothing", 30, [9, 69], ["baby", "soft", "comfortable"]),
  ...generateProducts("kids-toys", "Kids & Toys", "Toys", 30, [9, 99], ["toy", "fun", "educational"]),
  ...generateProducts(
    "kids-toys",
    "Kids & Toys",
    "Educational Toys",
    30,
    [14, 149],
    ["educational", "learning", "fun"],
  ),
  ...generateProducts("kids-toys", "Kids & Toys", "Soft Toys", 30, [12, 99], ["soft", "cuddly", "safe"]),

  // INNERWEAR
  ...generateProducts("innerwear", "Innerwear", "Men Innerwear", 30, [9, 79], ["innerwear", "comfort", "daily"]),
  ...generateProducts("innerwear", "Innerwear", "Women Innerwear", 30, [14, 99], ["innerwear", "comfort", "daily"]),
  ...generateProducts("innerwear", "Innerwear", "Kids Innerwear", 30, [9, 59], ["innerwear", "kids", "comfort"]),
  ...generateProducts("innerwear", "Innerwear", "Thermal Sets", 30, [24, 149], ["thermal", "warm", "winter"]),

  // SPORTS & FITNESS
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Sports T-Shirts",
    30,
    [14, 99],
    ["sports", "athletic", "breathable"],
  ),
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Track Pants",
    30,
    [24, 149],
    ["track", "sports", "comfortable"],
  ),
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Yoga Wear",
    30,
    [29, 149],
    ["yoga", "stretch", "comfortable"],
  ),
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Gym Wear",
    30,
    [24, 129],
    ["gym", "athletic", "breathable"],
  ),
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Sports Shoes",
    30,
    [49, 199],
    ["shoes", "sports", "athletic"],
  ),
  ...generateProducts(
    "sports-fitness",
    "Sports & Fitness",
    "Fitness Accessories",
    30,
    [14, 99],
    ["fitness", "accessories", "gym"],
  ),

  // NIGHT WEAR
  ...generateProducts("night-wear", "Night Wear", "Men Nightwear", 30, [19, 99], ["nightwear", "comfortable", "sleep"]),
  ...generateProducts(
    "night-wear",
    "Night Wear",
    "Women Nightwear",
    30,
    [24, 149],
    ["nightwear", "comfortable", "sleep"],
  ),
  ...generateProducts("night-wear", "Night Wear", "Kids Nightwear", 30, [14, 79], ["kids", "nightwear", "comfortable"]),

  // WINTER WEAR
  ...generateProducts("winter-wear", "Winter Wear", "Jackets", 30, [49, 399], ["jacket", "warm", "winter"]),
  ...generateProducts("winter-wear", "Winter Wear", "Hoodies", 30, [29, 199], ["hoodie", "warm", "cozy"]),
  ...generateProducts("winter-wear", "Winter Wear", "Sweaters", 30, [24, 199], ["sweater", "warm", "comfortable"]),
  ...generateProducts("winter-wear", "Winter Wear", "Thermal Wear", 30, [19, 129], ["thermal", "warm", "inner"]),

  // COMBO STORE
  ...generateProducts("combo-store", "Combo Store", "Couple Combo Sets", 30, [49, 299], ["couple", "combo", "special"]),
  ...generateProducts("combo-store", "Combo Store", "Shirt Combo Packs", 30, [39, 199], ["combo", "shirt", "value"]),
  ...generateProducts("combo-store", "Combo Store", "Innerwear Combo", 30, [24, 129], ["combo", "innerwear", "value"]),
  ...generateProducts("combo-store", "Combo Store", "Kurti Combo Sets", 30, [49, 299], ["combo", "kurti", "value"]),
  ...generateProducts("combo-store", "Combo Store", "Saree Combo Packs", 30, [49, 399], ["combo", "saree", "value"]),

  // ACCESSORIES
  ...generateProducts("accessories", "Accessories", "Sunglasses", 30, [14, 99], ["sunglasses", "style", "UV"]),
  ...generateProducts("accessories", "Accessories", "Belts", 30, [9, 79], ["belt", "fashion", "accessory"]),
  ...generateProducts("accessories", "Accessories", "Wallets", 30, [14, 99], ["wallet", "leather", "storage"]),
  ...generateProducts("accessories", "Accessories", "Caps & Hats", 30, [9, 59], ["cap", "hat", "style"]),
  ...generateProducts("accessories", "Accessories", "Watches", 30, [24, 199], ["watch", "time", "style"]),
  ...generateProducts("accessories", "Accessories", "Hair Accessories", 30, [4, 49], ["hair", "clip", "accessory"]),

  // JEWELLERY
  ...generateProducts("jewellery", "Jewellery", "Necklace Sets", 30, [24, 199], ["necklace", "elegant", "jewelry"]),
  ...generateProducts("jewellery", "Jewellery", "Earrings", 30, [9, 99], ["earring", "style", "jewelry"]),
  ...generateProducts("jewellery", "Jewellery", "Bangles", 30, [9, 79], ["bangle", "traditional", "jewelry"]),
  ...generateProducts("jewellery", "Jewellery", "Rings", 30, [9, 99], ["ring", "style", "jewelry"]),
  ...generateProducts("jewellery", "Jewellery", "Anklets", 30, [9, 79], ["anklet", "traditional", "jewelry"]),
  ...generateProducts(
    "jewellery",
    "Jewellery",
    "Artificial Jewellery",
    30,
    [4, 49],
    ["artificial", "fashion", "jewelry"],
  ),

  // BAGS
  ...generateProducts("bags", "Bags", "Handbags", 30, [24, 199], ["handbag", "elegant", "storage"]),
  ...generateProducts("bags", "Bags", "Sling Bags", 30, [19, 149], ["sling", "casual", "storage"]),
  ...generateProducts("bags", "Bags", "Backpacks", 30, [29, 199], ["backpack", "travel", "storage"]),
  ...generateProducts("bags", "Bags", "Travel Bags", 30, [39, 299], ["travel", "luggage", "storage"]),
  ...generateProducts("bags", "Bags", "Wallets", 30, [9, 79], ["wallet", "storage", "accessory"]),

  // FOOTWEAR
  ...generateProducts("footwear", "Footwear", "Men Footwear", 30, [24, 199], ["shoes", "comfort", "style"]),
  ...generateProducts("footwear", "Footwear", "Women Footwear", 30, [19, 199], ["shoes", "comfort", "style"]),
  ...generateProducts("footwear", "Footwear", "Kids Footwear", 30, [14, 99], ["shoes", "kids", "comfort"]),
  ...generateProducts("footwear", "Footwear", "Casual Shoes", 30, [24, 149], ["shoes", "casual", "comfortable"]),
  ...generateProducts("footwear", "Footwear", "Sports Shoes", 30, [49, 249], ["shoes", "sports", "athletic"]),
  ...generateProducts("footwear", "Footwear", "Sandals & Slippers", 30, [9, 79], ["sandal", "slipper", "casual"]),

  // BEAUTY & HEALTH
  ...generateProducts("beauty-health", "Beauty & Health", "Makeup", 30, [9, 79], ["makeup", "cosmetic", "beauty"]),
  ...generateProducts("beauty-health", "Beauty & Health", "Skincare", 30, [14, 99], ["skincare", "beauty", "care"]),
  ...generateProducts("beauty-health", "Beauty & Health", "Haircare", 30, [9, 79], ["haircare", "shampoo", "care"]),
  ...generateProducts(
    "beauty-health",
    "Beauty & Health",
    "Personal Care",
    30,
    [4, 49],
    ["personal", "care", "hygiene"],
  ),
  ...generateProducts(
    "beauty-health",
    "Beauty & Health",
    "Health Supplements",
    30,
    [14, 99],
    ["supplement", "health", "vitamin"],
  ),

  // HOME & KITCHEN
  ...generateProducts(
    "home-kitchen",
    "Home & Kitchen",
    "Kitchen Storage",
    30,
    [9, 99],
    ["storage", "kitchen", "organize"],
  ),
  ...generateProducts("home-kitchen", "Home & Kitchen", "Cookware", 30, [19, 199], ["cookware", "cooking", "kitchen"]),
  ...generateProducts("home-kitchen", "Home & Kitchen", "Home Decor", 30, [9, 99], ["decor", "home", "style"]),
  ...generateProducts("home-kitchen", "Home & Kitchen", "Bedsheets", 30, [14, 99], ["bedsheet", "cotton", "comfort"]),
  ...generateProducts("home-kitchen", "Home & Kitchen", "Curtains", 30, [19, 149], ["curtain", "home", "decor"]),
  ...generateProducts(
    "home-kitchen",
    "Home & Kitchen",
    "Cleaning Supplies",
    30,
    [4, 59],
    ["cleaning", "household", "supplies"],
  ),

  // ELECTRONICS
  ...generateProducts(
    "electronics",
    "Electronics",
    "Mobile Accessories",
    30,
    [4, 99],
    ["mobile", "accessories", "tech"],
  ),
  ...generateProducts("electronics", "Electronics", "Earphones", 30, [9, 199], ["earphone", "audio", "sound"]),
  ...generateProducts("electronics", "Electronics", "Chargers", 30, [9, 59], ["charger", "battery", "power"]),
  ...generateProducts("electronics", "Electronics", "Smart Gadgets", 30, [19, 199], ["gadget", "smart", "tech"]),
  ...generateProducts(
    "electronics",
    "Electronics",
    "Small Appliances",
    30,
    [19, 299],
    ["appliance", "electric", "home"],
  ),

  // WATCHES
  ...generateProducts("watches", "Watches", "Men Watches", 30, [24, 299], ["watch", "men", "time"]),
  ...generateProducts("watches", "Watches", "Women Watches", 30, [24, 199], ["watch", "women", "style"]),
  ...generateProducts("watches", "Watches", "Smart Watches", 30, [49, 399], ["smart", "watch", "tech"]),

  // CAR & MOTORBIKE
  ...generateProducts(
    "car-motorbike",
    "Car & Motorbike",
    "Vehicle Accessories",
    30,
    [9, 199],
    ["vehicle", "accessory", "car"],
  ),
  ...generateProducts("car-motorbike", "Car & Motorbike", "Helmets", 30, [29, 199], ["helmet", "safety", "protection"]),
  ...generateProducts("car-motorbike", "Car & Motorbike", "Bike Covers", 30, [9, 99], ["cover", "protection", "bike"]),
  ...generateProducts(
    "car-motorbike",
    "Car & Motorbike",
    "Car Essentials",
    30,
    [9, 149],
    ["car", "essential", "accessory"],
  ),

  // OFFICE SUPPLIES & STATIONERY
  ...generateProducts(
    "office-stationery",
    "Office Supplies & Stationery",
    "Notebooks",
    30,
    [2, 29],
    ["notebook", "stationery", "writing"],
  ),
  ...generateProducts(
    "office-stationery",
    "Office Supplies & Stationery",
    "Files & Folders",
    30,
    [2, 24],
    ["file", "folder", "storage"],
  ),
  ...generateProducts(
    "office-stationery",
    "Office Supplies & Stationery",
    "Writing Instruments",
    30,
    [1, 19],
    ["pen", "pencil", "writing"],
  ),
  ...generateProducts(
    "office-stationery",
    "Office Supplies & Stationery",
    "Office Accessories",
    30,
    [4, 49],
    ["accessory", "office", "desk"],
  ),

  // GROCERIES
  ...generateProducts("groceries", "Groceries", "Daily Essentials", 30, [2, 24], ["essential", "daily", "grocery"]),
  ...generateProducts("groceries", "Groceries", "Snacks", 30, [2, 29], ["snack", "food", "tasty"]),
  ...generateProducts("groceries", "Groceries", "Beverages", 30, [2, 24], ["beverage", "drink", "refresh"]),
  ...generateProducts("groceries", "Groceries", "Spices", 30, [2, 19], ["spice", "flavor", "cooking"]),

  // BOOKS
  ...generateProducts("books", "Books", "Educational", 30, [4, 49], ["educational", "book", "learning"]),
  ...generateProducts("books", "Books", "Competitive Exams", 30, [9, 79], ["exam", "book", "study"]),
  ...generateProducts("books", "Books", "Fiction & Non-Fiction", 30, [4, 49], ["book", "reading", "story"]),

  // PET SUPPLIES
  ...generateProducts("pet-supplies", "Pet Supplies", "Pet Food", 30, [4, 49], ["pet", "food", "nutrition"]),
  ...generateProducts("pet-supplies", "Pet Supplies", "Pet Accessories", 30, [4, 99], ["pet", "accessory", "care"]),
  ...generateProducts("pet-supplies", "Pet Supplies", "Pet Grooming", 30, [4, 59], ["pet", "grooming", "care"]),

  // MUSICAL INSTRUMENTS
  ...generateProducts(
    "musical-instruments",
    "Musical Instruments",
    "Guitar",
    30,
    [49, 499],
    ["guitar", "music", "instrument"],
  ),
  ...generateProducts(
    "musical-instruments",
    "Musical Instruments",
    "Keyboard",
    30,
    [49, 399],
    ["keyboard", "music", "instrument"],
  ),
  ...generateProducts(
    "musical-instruments",
    "Musical Instruments",
    "Drums",
    30,
    [49, 399],
    ["drum", "music", "instrument"],
  ),
  ...generateProducts(
    "musical-instruments",
    "Musical Instruments",
    "Accessories",
    30,
    [4, 99],
    ["accessory", "music", "instrument"],
  ),
]
