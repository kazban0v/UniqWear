"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"
import { useWishlistStore } from "@/store/wishlist"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Find first available size
    const availableSize = product.sizes.find((size) => size.available)
    if (availableSize) {
      addItem(product, availableSize.size)
      toast.success(`${product.name} добавлено в корзину!`)
    } else {
      toast.error("Размеры недоступны")
    }
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (inWishlist) {
      removeFromWishlist(product.id)
      toast.success(`${product.name} удалено из списка желаний!`)
    } else {
      addToWishlist(product)
      toast.success(`${product.name} добавлено в список желаний!`)
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/images/t1.jpg"}
            alt={product.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <div className="flex space-x-2">
              <Button size="sm" variant="secondary">
                <Eye className="h-4 w-4 mr-2" />
                Посмотреть
              </Button>
              <Button size="sm" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Добавить
              </Button>
              <Button size="sm" variant={inWishlist ? "default" : "outline"} onClick={handleWishlistToggle}>
                <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
              </Button>
            </div>
          </motion.div>

          {/* Anime badge */}
          <Badge className="absolute top-2 left-2 bg-primary/90">{product.anime}</Badge>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">KZT {product.price}</span>

            {/* Available sizes */}
            <div className="flex space-x-1">
              {product.sizes.map((size) => (
                <span
                  key={size.size}
                  className={`text-xs px-2 py-1 rounded ${
                    size.available
                      ? "bg-muted text-muted-foreground"
                      : "bg-muted/50 text-muted-foreground/50 line-through"
                  }`}
                >
                  {size.size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
