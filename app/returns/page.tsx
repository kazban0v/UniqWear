import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Возвраты и обмены | UniqWear",
  description: "Узнайте о правилах возврата и обмена наших IT футболок.",
}

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Возвраты и обмены</h1>
      <div className="prose max-w-3xl">
        <p className="mb-4">
          Мы заботимся о вашем удовлетворении покупкой. Если товар не подошел, мы предлагаем удобные условия возврата и обмена.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Условия возврата</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Срок возврата: 14 дней с момента получения заказа</li>
          <li>Товар должен быть в оригинальном состоянии, без следов использования</li>
          <li>Наличие этикеток и упаковки</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Условия обмена</h2>
        <p className="mb-4">
          Обмен возможен в течение 14 дней. Вы можете обменять товар на другой размер или модель.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Как оформить возврат или обмен</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Свяжитесь с нами через WhatsApp</li>
          <li>Укажите номер заказа и причину возврата</li>
          <li>Отправьте товар обратно (мы предоставим адрес)</li>
          <li>После проверки вернем деньги или обменяем товар</li>
        </ol>
        <p>
          Для любых вопросов обращайтесь к нам через WhatsApp.
        </p>
      </div>
    </div>
  )
}