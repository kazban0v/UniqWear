"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SizeSelector } from "@/components/size-selector"
import type { Product } from "@/types"
import { getProductById } from "@/lib/products"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"
import { useWishlistStore } from "@/store/wishlist"

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product?.id || "")

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        try {
          const productData = await getProductById(params.id as string)
          setProduct(productData)

          // Set default size to first available size
          if (productData) {
            const firstAvailableSize = productData.sizes.find((size) => size.available)
            if (firstAvailableSize) {
              setSelectedSize(firstAvailableSize.size)
            }
          }
        } catch (error) {
          console.error("Error loading product:", error)
        } finally {
          setLoading(false)
        }
      }
    }

    loadProduct()
  }, [params.id])

  const handleAddToCart = () => {
    if (!product || !selectedSize) {
      toast.error("Please select a size")
      return
    }

    addItem(product, selectedSize, quantity)
    toast.success(`${product.name} added to cart!`)
  }

  const handleWishlistToggle = () => {
    if (!product) return

    if (inWishlist) {
      removeFromWishlist(product.id)
      toast.success(`${product.name} removed from wishlist!`)
    } else {
      addToWishlist(product)
      toast.success(`${product.name} added to wishlist!`)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
          <div className="aspect-square bg-muted rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/4" />
            <div className="h-6 bg-muted rounded w-1/3" />
            <div className="h-20 bg-muted rounded" />
            <div className="h-10 bg-muted rounded w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "UniqWear"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "KZT",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "UniqWear"
      }
    },
    "category": product.anime
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
        </motion.div>

        {/* Product Details */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <Badge className="mb-2">{product.anime}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-primary">KZT {product.price}</p>
          </div>

          <p className="text-muted-foreground text-lg">{product.description}</p>

          <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSizeChange={setSelectedSize} />

          {/* Quantity Selector */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Количество</h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={handleAddToCart} disabled={!selectedSize} className="flex-1">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Добавить в корзину
            </Button>
            <Button size="lg" variant={inWishlist ? "default" : "outline"} onClick={handleWishlistToggle}>
              <Heart className={`w-5 h-5 mr-2 ${inWishlist ? "fill-current" : ""}`} />
              {inWishlist ? "В списке желаний" : "Добавить в список желаний"}
            </Button>
          </div>

          {/* Product Info */}
          <div className="border-t pt-6 space-y-4">
            <div>
              <h3 className="font-medium mb-2">Подробная информация о продукте</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Премиальный материал из 100% хлопка</li>
                <li>• Высококачественная цифровая печать</li>
                <li>• Можно стирать в стиральной машине</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  )
}
