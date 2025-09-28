import type { Product } from "@/types"

export const products: Product[] = [
  {
    id: "1",
    name: "Футболка",
    price: 8990,
    image: "/images/t1.jpg?height=400&width=400",
    anime: "IT",
    description:
      "",
    sizes: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
    ],
    category: "anime",
    featured: true,
  },
  {
    id: "2",
    name: "Футболка",
    price: 8990,
    image: "/images/t4.jpg?height=400&width=400",
    anime: "IT",
    description: "",
    sizes: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
    ],
    category: "anime",
    featured: true,
  },
]

export const animeCategories = ["Все"]

// Abstract data fetching functions for future CMS integration
export async function getProducts(): Promise<Product[]> {
  // This will be replaced with CMS API calls later
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 100)
  })
}

export async function getProductById(id: string): Promise<Product | null> {
  // This will be replaced with CMS API calls later
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id)
      resolve(product || null)
    }, 100)
  })
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // This will be replaced with CMS API calls later
  return new Promise((resolve) => {
    setTimeout(() => {
      const featured = products.filter((p) => p.featured)
      resolve(featured)
    }, 100)
  })
}
