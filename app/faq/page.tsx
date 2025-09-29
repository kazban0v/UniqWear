import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | UniqWear",
  description: "Ответы на самые популярные вопросы о наших IT футболках, доставке и возвратах.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Какие материалы используются для футболок?",
      answer: "Наши футболки изготовлены из высококачественного хлопка 100% с добавлением эластана для лучшей посадки. Материал дышащий, приятный к телу и долговечный."
    },
    {
      question: "Как ухаживать за футболками?",
      answer: "Стирать при температуре до 30°C, использовать деликатный режим. Не использовать отбеливатели. Сушить в подвешенном состоянии, гладить при низкой температуре с изнаночной стороны."
    },
    {
      question: "Есть ли гарантия на продукцию?",
      answer: "Да, мы предоставляем гарантию 6 месяцев на все товары. Если обнаружите дефект производства, свяжитесь с нами для замены."
    },
    {
      question: "Можно ли заказать кастомный дизайн?",
      answer: "Да! Мы принимаем заказы на кастомные дизайны. Свяжитесь с нами через WhatsApp для обсуждения деталей и стоимости."
    },
    {
      question: "Как долго занимает доставка?",
      answer: "По Казахстану: 3-7 рабочих дней. Международная доставка: 7-14 рабочих дней. Точные сроки зависят от вашего региона."
    },
    {
      question: "Что делать, если товар не подошел?",
      answer: "Вы можете вернуть или обменять товар в течение 14 дней. Товар должен быть в оригинальном состоянии. Свяжитесь с нами для организации возврата."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем оплату банковскими картами, через Kaspi, а также наличными при получении (в зависимости от способа доставки)."
    },
    {
      question: "Есть ли скидки для оптовых покупок?",
      answer: "Да, для оптовых заказов (от 10 шт.) предусмотрены специальные скидки. Свяжитесь с нами для получения индивидуального предложения."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Не нашли ответ на свой вопрос?
        </p>
        <a
          href="https://wa.me/77068066636"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Связаться с нами в WhatsApp
        </a>
      </div>
    </div>
  )
}