import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartStore, Product } from "@/types"

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, size: string, quantity = 1) => {
        const items = get().items
        const existingItemIndex = items.findIndex((item) => item.product.id === product.id && item.size === size)

        if (existingItemIndex > -1) {
          const updatedItems = [...items]
          updatedItems[existingItemIndex].quantity += quantity
          set({ items: updatedItems })
        } else {
          const newItem = {
            id: `${product.id}-${size}`,
            product,
            size,
            quantity,
          }
          set({ items: [...items, newItem] })
        }
      },

      removeItem: (id: string, size: string) => {
        const items = get().items
        const filteredItems = items.filter((item) => !(item.product.id === id && item.size === size))
        set({ items: filteredItems })
      },

      updateQuantity: (id: string, size: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id, size)
          return
        }

        const items = get().items
        const updatedItems = items.map((item) =>
          item.product.id === id && item.size === size ? { ...item, quantity } : item,
        )
        set({ items: updatedItems })
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },
    }),
    {
      name: "anime-cart-storage",
    },
  ),
)
