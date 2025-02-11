"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AutoScrollCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-RLflKUo5vmCyP076Sch9oUsa1gTYEL.png",
      alt: "Woman with Cathay Mastercard benefits promotion",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-A0OopnLcnD8r25UADJrTGO7NaHE8C0.png",
      alt: "Woman using RentSmart app in modern living room",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Eig6wn6jvsgSeMcPn3F40dcgHfAunO.png",
      alt: "Woman at airport with passport and miles rewards promotion",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

