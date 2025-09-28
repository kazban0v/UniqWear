"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore()

  const handleUpdateQuantity = (id: string, size: string, newQuantity: number) => {
    updateQuantity(id, size, newQuantity)
  }

  const handleRemoveItem = (id: string, size: string, productName: string) => {
    removeItem(id, size)
    toast.success(`${productName} removed from cart`)
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Ваша корзина пуста</h1>
          <p className="text-muted-foreground mb-8">
            Похоже, вы еще не добавили ни одной футболки в корзину.
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Корзина покупок</h1>
        <p className="text-muted-foreground">
          {getTotalItems()} {getTotalItems() === 1 ? "товар" : "товаров"} в вашей корзине
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={`${item.product.id}-${item.size}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 border rounded-lg"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">Размер: {item.size}</p>
                <p className="text-sm text-muted-foreground">{item.product.anime}</p>
                <p className="font-medium">KZT {item.product.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity - 1)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveItem(item.product.id, item.size, item.product.name)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Сводка заказа</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Промежуточный итог</span>
                <span>KZT {getTotalPrice().toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Итого</span>
                <span>KZT {getTotalPrice().toFixed(0)}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full mb-4"
              onClick={() => {
                const message = `Привет! Я хочу оформить заказ:\n\n${items.map(item => `${item.product.name} (${item.size}) - ${item.quantity} шт.`).join('\n')}\n\nИтого: KZT ${getTotalPrice().toFixed(0)}`
                const whatsappUrl = `https://wa.me/77068066636?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              Перейти к оформлению
            </Button>

            <Link href="/shop">
              <Button variant="outline" size="lg" className="w-full">
                Продолжить покупки
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
