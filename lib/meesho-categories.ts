export interface CategoryItem {
  name: string
  subcategories?: string[]
}

export interface MainCategory {
  id: string
  name: string
  subcategories: CategoryItem[]
}

export const meeshoCategories: MainCategory[] = [
  {
    id: "popular",
    name: "Popular",
    subcategories: [
      { name: "Trending Products" },
      { name: "New Arrivals" },
      { name: "Best Sellers" },
      { name: "Under ₹199" },
      { name: "Under ₹299" },
      { name: "Budget Picks" },
    ],
  },
  {
    id: "kurti-saree-lehenga",
    name: "Kurti, Saree & Lehenga",
    subcategories: [
      {
        name: "Sarees",
        subcategories: [
          "All Sarees",
          "Cotton Sarees",
          "Silk Sarees",
          "Georgette Sarees",
          "Chiffon Sarees",
          "Net Sarees",
          "Printed Sarees",
          "Bridal Sarees",
        ],
      },
      {
        name: "Kurtis",
        subcategories: [
          "All Kurtis",
          "Anarkali Kurtis",
          "Straight Kurtis",
          "Long Kurtis",
          "Rayon Kurtis",
          "Cotton Kurtis",
        ],
      },
      {
        name: "Lehenga",
        subcategories: ["Bridal Lehenga", "Party Wear Lehenga", "Lehenga Choli", "Semi-Stitched Lehenga"],
      },
    ],
  },
  {
    id: "women",
    name: "Women",
    subcategories: [
      {
        name: "Top Wear",
        subcategories: ["Tops", "T-Shirts", "Shirts", "Tunics", "Crop Tops", "Tank Tops"],
      },
      {
        name: "Bottom Wear",
        subcategories: ["Jeans", "Trousers", "Palazzos", "Leggings", "Skirts", "Shorts"],
      },
      {
        name: "Ethnic Wear",
        subcategories: ["Kurtis", "Sarees", "Salwar Suits", "Dupattas", "Ethnic Sets"],
      },
      {
        name: "Winter Wear",
        subcategories: ["Sweaters", "Jackets", "Shrugs", "Hoodies"],
      },
      {
        name: "Night Wear",
        subcategories: ["Night Suits", "Pajama Sets", "Night Dresses"],
      },
    ],
  },
  {
    id: "lingerie",
    name: "Lingerie",
    subcategories: [
      { name: "Bras" },
      { name: "Panties" },
      { name: "Nightwear" },
      { name: "Shapewear" },
      { name: "Loungewear" },
      { name: "Thermal Wear" },
      { name: "Lingerie Sets" },
    ],
  },
  {
    id: "men",
    name: "Men",
    subcategories: [
      {
        name: "Top Wear",
        subcategories: ["T-Shirts", "Shirts", "Sweatshirts", "Hoodies"],
      },
      {
        name: "Bottom Wear",
        subcategories: ["Jeans", "Trousers", "Track Pants", "Shorts"],
      },
      {
        name: "Ethnic Wear",
        subcategories: ["Kurtas", "Kurta Sets", "Nehru Jackets"],
      },
      {
        name: "Innerwear",
        subcategories: ["Vests", "Briefs", "Boxers"],
      },
      {
        name: "Winter Wear",
        subcategories: ["Jackets", "Sweaters"],
      },
    ],
  },
  {
    id: "kids-toys",
    name: "Kids & Toys",
    subcategories: [
      { name: "Boys Clothing" },
      { name: "Girls Clothing" },
      { name: "Baby Clothing" },
      { name: "Toys" },
      { name: "Educational Toys" },
      { name: "Soft Toys" },
    ],
  },
  {
    id: "innerwear",
    name: "Innerwear",
    subcategories: [
      { name: "Men Innerwear" },
      { name: "Women Innerwear" },
      { name: "Kids Innerwear" },
      { name: "Thermal Sets" },
    ],
  },
  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    subcategories: [
      { name: "Sports T-Shirts" },
      { name: "Track Pants" },
      { name: "Yoga Wear" },
      { name: "Gym Wear" },
      { name: "Sports Shoes" },
      { name: "Fitness Accessories" },
    ],
  },
  {
    id: "night-wear",
    name: "Night Wear",
    subcategories: [{ name: "Men Nightwear" }, { name: "Women Nightwear" }, { name: "Kids Nightwear" }],
  },
  {
    id: "winter-wear",
    name: "Winter Wear",
    subcategories: [{ name: "Jackets" }, { name: "Hoodies" }, { name: "Sweaters" }, { name: "Thermal Wear" }],
  },
  {
    id: "combo-store",
    name: "Combo Store",
    subcategories: [
      { name: "Couple Combo Sets" },
      { name: "Shirt Combo Packs" },
      { name: "Innerwear Combo" },
      { name: "Kurti Combo Sets" },
      { name: "Saree Combo Packs" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: [
      { name: "Sunglasses" },
      { name: "Belts" },
      { name: "Wallets" },
      { name: "Caps & Hats" },
      { name: "Watches" },
      { name: "Hair Accessories" },
    ],
  },
  {
    id: "jewellery",
    name: "Jewellery",
    subcategories: [
      { name: "Necklace Sets" },
      { name: "Earrings" },
      { name: "Bangles" },
      { name: "Rings" },
      { name: "Anklets" },
      { name: "Artificial Jewellery" },
    ],
  },
  {
    id: "bags",
    name: "Bags",
    subcategories: [
      { name: "Handbags" },
      { name: "Sling Bags" },
      { name: "Backpacks" },
      { name: "Travel Bags" },
      { name: "Wallets" },
    ],
  },
  {
    id: "footwear",
    name: "Footwear",
    subcategories: [
      { name: "Men Footwear" },
      { name: "Women Footwear" },
      { name: "Kids Footwear" },
      { name: "Casual Shoes" },
      { name: "Sports Shoes" },
      { name: "Sandals & Slippers" },
    ],
  },
  {
    id: "beauty-health",
    name: "Beauty & Health",
    subcategories: [
      { name: "Makeup" },
      { name: "Skincare" },
      { name: "Haircare" },
      { name: "Personal Care" },
      { name: "Health Supplements" },
    ],
  },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    subcategories: [
      { name: "Kitchen Storage" },
      { name: "Cookware" },
      { name: "Home Decor" },
      { name: "Bedsheets" },
      { name: "Curtains" },
      { name: "Cleaning Supplies" },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    subcategories: [
      { name: "Mobile Accessories" },
      { name: "Earphones" },
      { name: "Chargers" },
      { name: "Smart Gadgets" },
      { name: "Small Appliances" },
    ],
  },
  {
    id: "watches",
    name: "Watches",
    subcategories: [{ name: "Men Watches" }, { name: "Women Watches" }, { name: "Smart Watches" }],
  },
  {
    id: "car-motorbike",
    name: "Car & Motorbike",
    subcategories: [
      { name: "Vehicle Accessories" },
      { name: "Helmets" },
      { name: "Bike Covers" },
      { name: "Car Essentials" },
    ],
  },
  {
    id: "office-stationery",
    name: "Office Supplies & Stationery",
    subcategories: [
      { name: "Notebooks" },
      { name: "Files & Folders" },
      { name: "Writing Instruments" },
      { name: "Office Accessories" },
    ],
  },
  {
    id: "groceries",
    name: "Groceries",
    subcategories: [{ name: "Daily Essentials" }, { name: "Snacks" }, { name: "Beverages" }, { name: "Spices" }],
  },
  {
    id: "books",
    name: "Books",
    subcategories: [{ name: "Educational" }, { name: "Competitive Exams" }, { name: "Fiction & Non-Fiction" }],
  },
  {
    id: "pet-supplies",
    name: "Pet Supplies",
    subcategories: [{ name: "Pet Food" }, { name: "Pet Accessories" }, { name: "Pet Grooming" }],
  },
  {
    id: "musical-instruments",
    name: "Musical Instruments",
    subcategories: [{ name: "Guitar" }, { name: "Keyboard" }, { name: "Drums" }, { name: "Accessories" }],
  },
]
