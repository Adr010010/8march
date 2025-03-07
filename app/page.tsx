import Image from "next/image"
import { NavBar } from "@/components/nav-bar"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-700 p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[400px_1fr] gap-4 rounded-3xl bg-gray-600 text-white overflow-hidden">
        <div className="relative p-8 bg-pink rounded-2xl">
          <div className="space-y-6">
            <h1 className="text-7xl font-light tracking-wider text-gray-300">8-March</h1>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-pink-300">Дорогие девушки!</h2>
              <p className="text-gray-300 leading-relaxed">
                В этот прекрасный день 8 марта мы хотим сказать вам спасибо за вашу доброту, красоту и улыбки, которые
                делают наш мир ярче! ✨
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
          </div>
        </div>
        <div className="p-6">
          <NavBar />
          <div className="mt-8 grid md:grid-cols-[300px_1fr] gap-8">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src='/photo_2025-03-07_20-51-49.jpg'
                alt="Student"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">Дорогие одногруппницы!</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  В этот замечательный день, 8 марта, мы хотим выразить вам огромную благодарность за то, что вы с нами!
                  Мы знаем, что мир IT – не самое простое место, но ваша целеустремленность, ум и энергия делают его
                  гораздо светлее и приятнее.
                </p>
                <p>
                  Вы вдохновляете нас своим трудолюбием, поддержкой и всегда позитивным настроем. Благодаря вам каждая
                  пара, проект и даже самые сложные задачи становятся легче и интереснее.
                </p>
                <p>
                  Спасибо, что вы с нами разделяете все радости и трудности учебы. Пусть ваши идеи и мечты сбываются, а
                  каждый новый день приносит только радость, развитие и успех!
                </p>
                <p>С праздником вас, наши самые умные и замечательные девушки!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

