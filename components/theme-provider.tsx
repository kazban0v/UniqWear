"use client"

import type React from "react"

import { useEffect } from "react"
import { useThemeStore } from "@/store/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore()

  useEffect(() => {
    // Apply theme on mount and when theme changes
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return <>{children}</>
}
