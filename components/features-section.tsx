"use client"

import { motion } from "framer-motion"
import { Truck, MapPin, RefreshCw, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Быстрая доставка ",
  },
  {
    icon: MapPin,
    title: "Доставка по всему Казахстану",
    description: "Мы доставляем везде",
  },
  {
    icon: RefreshCw,
    title: "Легкий обмен",
    description: "Возврат без проблем",
  },
  {
    icon: Headphones,
    title: "Служба поддержки клиентов",
    description: "Круглосуточная помощь",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center"
              >
                <feature.icon className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="font-semibold text-sm md:text-base mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
