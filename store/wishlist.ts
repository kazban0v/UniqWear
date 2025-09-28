import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types"

interface WishlistStore {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
  getTotalItems: () => number
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === product.id)

        if (!existingItem) {
          set({ items: [...items, product] })
        }
      },

      removeItem: (productId: string) => {
        const items = get().items
        const filteredItems = items.filter((item) => item.id !== productId)
        set({ items: filteredItems })
      },

      isInWishlist: (productId: string) => {
        const items = get().items
        return items.some((item) => item.id === productId)
      },

      clearWishlist: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.length
      },
    }),
    {
      name: "anime-wishlist-storage",
    },
  ),
)
