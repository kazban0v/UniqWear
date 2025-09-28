"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, Award, Truck } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Довольных клиентов", value: "10+" },
    { icon: Award, label: "Лет опыта", value: "1+" },
    { icon: Heart, label: "Продано товаров", value: "5+" },
    { icon: Truck, label: "Покрытых городов", value: "1" },
  ]

  const team = [
    {
      name: "Vikram Singh",
      role: "Основатель и CEO",
      image: "/images/vk.jpg?height=300&width=300",
      description: "Энтузиаст аниме с 5+ годами в индустрии моды",
    },
    {
      name: "Peter Nguyen",
      role: "Главный дизайнер",
      image: "/images/hdesign.avif?height=300&width=300",
      description: "Креативный директор, специализирующийся на аниме арте",
    },
    {
      name: "Daneil James",
      role: "Менеджер по операциям",
      image: "/images/an.avif?height=300&width=300",
      description: "Обеспечивает качество и своевременную доставку по всей стране",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">O UniqWear</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Мы страстные поклонники IT и технологий, создающие футболки, которые позволяют вам выразить любовь к коду, инновациям и цифровому миру.
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Наша история</h2>
          <p className="text-muted-foreground">
            Основана в 2025 году, UniqWear.
          </p>
          <p className="text-muted-foreground">
            Мы понимаем трудности поиска аутентичных, высококачественных IT товаров. Поэтому мы стремимся предоставить вам футболки.
          </p>
          <p className="text-muted-foreground">
            Каждый дизайн тщательно прорабатывается с вниманием к деталям, используя хорошие материалы и техники печати, чтобы ваша футболка выглядела отлично и служила долго.
          </p>
          <p className="text-muted-foreground">
            Наша миссия - предоставить вам товары лучшего качества.</p>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <Image src="/images/abm.jpg?height=500&width=500" alt="UniqWear Story" fill className="object-cover" />
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <stat.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-muted/50 rounded-lg p-8 mb-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-lg text-muted-foreground">
            IT встречается с модой. Футболки для айтишников Алматы, которые носят свою страсть с гордостью
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Качество прежде всего</h3>
          <p className="text-muted-foreground">
            Мы используем только премиум материалы и техники печати, чтобы каждая футболка соответствовала нашим высоким стандартам.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Сообщество фанатов</h3>
          <p className="text-muted-foreground">
            Создано кодерами, для кодеров. Мы знаем, что вдохновляет айтишников, и превращаем это в стиль.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <Truck className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
          <p className="text-muted-foreground">
            От кода до вашего гардероба — быстрая доставка IT футболок по Алматы!
          </p>
        </div>
      </motion.div>
    </div>
  )
}
