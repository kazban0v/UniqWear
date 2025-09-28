"use client"
import { motion } from "framer-motion"
import type { Size } from "@/types"

interface SizeSelectorProps {
  sizes: Size[]
  selectedSize: string
  onSizeChange: (size: string) => void
}

export function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Размер</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size.size}
            whileHover={{ scale: size.available ? 1.05 : 1 }}
            whileTap={{ scale: size.available ? 0.95 : 1 }}
            onClick={() => size.available && onSizeChange(size.size)}
            disabled={!size.available}
            className={`
              px-4 py-2 border rounded-md text-sm font-medium transition-colors
              ${
                selectedSize === size.size
                  ? "border-primary bg-primary text-primary-foreground"
                  : size.available
                    ? "border-border hover:border-primary"
                    : "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50"
              }
            `}
          >
            {size.size}
            {!size.available && <span className="ml-1 text-xs">✕</span>}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
