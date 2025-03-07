import Image from "next/image"
import { NavBar } from "@/components/nav-bar"

export default function ArailymPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat p-4 md:p-8" style={{ backgroundImage: "/665373f6-de3c-43c1-a77d-96a6ac64f95d.jpeg')" }}>
      <div className="mx-auto max-w-7xl grid md:grid-cols-[400px_1fr] gap-4 rounded-3xl bg-gray-600 bg-opacity-50 text-white overflow-hidden">
        <div className="relative p-8 bg-gray-800 bg-opacity-50 rounded-2xl">
          <div className="space-y-6">
            <h1 className="text-7xl font-light tracking-wider text-gray-300">8 - March</h1>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-pink-300">Дорогие девушки!</h2>
              <p className="text-gray-300 leading-relaxed">
                В этот прекрасный день 8 марта мы хотим сказать вам спасибо за вашу доброту, красоту и улыбки, которые
                делают наш мир ярче! ✨
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-opacity-50">
          <NavBar />
          <div className="mt-8 grid md:grid-cols-[300px_1fr] gap-8">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/photo_2025-03-07_20-50-09.jpg"
                alt="Арайлым"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">Дорогая Арайлым!</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  В этот прекрасный весенний день хотим поздравить тебя с 8 марта! Твоя энергия и позитив заряжают всю
                  группу.
                </p>
                <p>
                  Спасибо за твою отзывчивость и готовность помочь. Желаем тебе успехов в учебе, достижения всех целей и
                  много радостных моментов!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

