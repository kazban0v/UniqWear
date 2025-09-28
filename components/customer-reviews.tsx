"use client"

import { motion } from "framer-motion"
import { Star, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Review {
  id: string
  name: string
  avatar?: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Сағынбаев Айдос Нұрланұлы",
    rating: 5,
    comment:
      "Очень доволен! Футболка с GitHub просто топ — качество на высоте.",
    date: "2 дня назад",
    verified: true,
  },
  {
    id: "2",
    name: "Тұрлыбекова Аружан Еркінқызы",
    rating: 5,
    comment: "Обожаю свою футболку с Python! Сидит идеально, принт яркий и чёткий. И доставка пришла очень быстро!",
    date: "неделю назад",
    verified: true,
  },
  {
    id: "3",
    name: "Оразбаев Нұрсұлтан Қайыржанұлы",
    rating: 4,
    comment: "Футболка отличного качества. Дизайн с Python просто потрясающий. Хотелось бы только больше размеров.",
    date: "2 неделю назад",
    verified: true,
  },
]

export function CustomerReviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="py-16 bg-background" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviews.length} отзывов)</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Присоединяйтесь к миру IT-энтузиастов, которые выражают свой стиль.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={review.avatar || "/images/cr.avif"} alt={review.name} />
                      <AvatarFallback>
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm">{review.name}</h3>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Проверено</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Поделитесь своим опытом</h3>
            <p className="text-muted-foreground mb-4">
              Мы будем рады услышать о вашем опыте с UniqWear! Ваш отзыв помогает нам улучшаться.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>⭐ 4.8/5 Средний рейтинг</span>
              <span>•</span>
              <span>10 Довольных клиентов</span>
              <span>•</span>
              <span>99% Уровень удовлетворенности</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
