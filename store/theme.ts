import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ThemeStore } from "@/types"

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",

      toggleTheme: () => {
        const currentTheme = get().theme
        const newTheme = currentTheme === "light" ? "dark" : "light"
        set({ theme: newTheme })

        // Update document class for immediate theme change
        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme === "dark")
        }
      },

      setTheme: (theme: "light" | "dark") => {
        set({ theme })

        // Update document class for immediate theme change
        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark")
        }
      },
    }),
    {
      name: "anime-theme-storage",
    },
  ),
)
