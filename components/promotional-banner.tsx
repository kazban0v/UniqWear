"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-zinc-900 text-white relative overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="whitespace-nowrap py-2 text-sm font-medium"
        >
          🔥 Осень в стиле IT! –30% на все футболки | Бесплатная доставка | Код: IT30 🔥
        </motion.div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
