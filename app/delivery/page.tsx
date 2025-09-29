import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Информация о доставке | UniqWear",
  description: "Узнайте о сроках и условиях доставки наших IT футболок.",
}

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Информация о доставке</h1>
      <div className="prose max-w-3xl">
        <p className="mb-4">
          Мы стремимся доставить ваш заказ как можно быстрее и безопаснее.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Сроки доставки</h2>
        <ul className="list-disc list-inside mb-4">
          <li>По Казахстану: 3-7 рабочих дней</li>
          <li>Международная доставка: 7-14 рабочих дней</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Стоимость доставки</h2>
        <p className="mb-4">
          Бесплатная доставка 
        </p>
        <h2 className="text-2xl font-semibold mb-4">Способы доставки</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Казпочта</li>
          <li>СДЭК</li>
          <li>Другие курьерские службы</li>
        </ul>
        <p>
          Для уточнения деталей доставки свяжитесь с нами через WhatsApp.
        </p>
      </div>
    </div>
  )
}