export interface Product {
  id: string
  name: string
  price: number
  image: string
  anime: string
  description: string
  sizes: Size[]
  category: string
  featured?: boolean
}

export interface Size {
  size: "S" | "M" | "L" | "XL"
  available: boolean
}

export interface CartItem {
  id: string
  product: Product
  size: string
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export interface ThemeStore {
  theme: "light" | "dark"
  toggleTheme: () => void
  setTheme: (theme: "light" | "dark") => void
}
