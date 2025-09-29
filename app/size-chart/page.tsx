import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Таблица размеров | UniqWear",
  description: "Узнайте, как выбрать правильный размер наших IT футболок.",
}

export default function SizeChartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Таблица размеров</h1>
      <div className="prose max-w-4xl">
        <p className="mb-6">
          Чтобы выбрать правильный размер, измерьте свои параметры и сравните с нашей таблицей.
          Все размеры указаны в сантиметрах.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Как измерять</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Обхват груди:</strong> Измерьте вокруг самой широкой части груди</li>
          <li><strong>Длина изделия:</strong> Измерьте от плеча до низа</li>
          <li><strong>Длина рукава:</strong> От плеча до конца рукава</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Таблица размеров</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Размер</th>
                <th className="border border-gray-300 px-4 py-2">Обхват груди (см)</th>
                <th className="border border-gray-300 px-4 py-2">Длина изделия (см)</th>
                <th className="border border-gray-300 px-4 py-2">Длина рукава (см)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">S</td>
                <td className="border border-gray-300 px-4 py-2 text-center">88-92</td>
                <td className="border border-gray-300 px-4 py-2 text-center">65</td>
                <td className="border border-gray-300 px-4 py-2 text-center">20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">M</td>
                <td className="border border-gray-300 px-4 py-2 text-center">92-96</td>
                <td className="border border-gray-300 px-4 py-2 text-center">67</td>
                <td className="border border-gray-300 px-4 py-2 text-center">21</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">L</td>
                <td className="border border-gray-300 px-4 py-2 text-center">96-100</td>
                <td className="border border-gray-300 px-4 py-2 text-center">69</td>
                <td className="border border-gray-300 px-4 py-2 text-center">22</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">XL</td>
                <td className="border border-gray-300 px-4 py-2 text-center">100-104</td>
                <td className="border border-gray-300 px-4 py-2 text-center">71</td>
                <td className="border border-gray-300 px-4 py-2 text-center">23</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">XXL</td>
                <td className="border border-gray-300 px-4 py-2 text-center">104-108</td>
                <td className="border border-gray-300 px-4 py-2 text-center">73</td>
                <td className="border border-gray-300 px-4 py-2 text-center">24</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6">
          Если у вас есть вопросы по размерам, свяжитесь с нами через WhatsApp для консультации.
        </p>
      </div>
    </div>
  )
}