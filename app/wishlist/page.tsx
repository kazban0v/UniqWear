"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlistStore } from "@/store/wishlist"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const { addItem: addToCart } = useCartStore()

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeItem(productId)
    toast.success(`${productName} удалено из списка желаний`)
  }

  const handleAddToCart = (product: any) => {
    const availableSize = product.sizes.find((size: any) => size.available)
    if (availableSize) {
      addToCart(product, availableSize.size)
      toast.success(`${product.name} добавлено в корзину!`)
    } else {
      toast.error("Размеры недоступны")
    }
  }

  const handleMoveAllToCart = () => {
    let addedCount = 0
    items.forEach((product) => {
      const availableSize = product.sizes.find((size) => size.available)
      if (availableSize) {
        addToCart(product, availableSize.size)
        addedCount++
      }
    })

    if (addedCount > 0) {
      toast.success(`${addedCount} товары перемещены в корзину!`)
      clearWishlist()
    } else {
      toast.error("Не удалось добавить ни одного товара в корзину.")
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Ваш список желаний пуст</h1>
          <p className="text-muted-foreground mb-8">
            Сохраните свои любимые футболки в список желаний и никогда не теряйте их из виду.
          </p>
          <Link href="/shop">
            <Button size="lg">Начать покупки</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Мой список желаний</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? "товар сохранен" : "товаров сохранено"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleMoveAllToCart} className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Переместить все в корзину
            </Button>
            <Button variant="outline" onClick={clearWishlist}>
              Очистить все
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <Link href={`/product/${product.id}`}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{product.anime}</p>
              <p className="text-2xl font-bold text-primary mb-4">KZT {product.price}</p>

              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleAddToCart(product)} className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Добавить в корзину
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleRemoveFromWishlist(product.id, product.name)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
