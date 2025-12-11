"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      image: "/images/hero/slide-1.jpg",
      title: "Elevate Your Style",
      description: "Discover curated collection of premium, modern clothing designed for contemporary living",
      tag: "New Collection",
    },
    {
      image: "/images/hero/slide-9.jpg",
      title: "Premium Fashion",
      description: "Quality crafted pieces for every occasion and season",
      tag: "Trending Now",
    },
    {
      image: "/images/hero/slide-8.jpg",
      title: "Modern Elegance",
      description: "Timeless designs meeting contemporary trends",
      tag: "Exclusive",
    },
    {
      image: "/images/hero/slide-10.jpg",
      title: "Your Perfect Look",
      description: "Express yourself with our exclusive collection",
      tag: "Limited Edition",
    },
    {
      image: "/images/hero/slide-5.jpg",
      title: "Shop the Latest",
      description: "Find your new favorite piece from our curated selection",
      tag: "Sale",
    },
  ]

  const SLIDES_LENGTH = slides.length

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_LENGTH)
    }, 5000)
    return () => clearInterval(timer)
  }, [SLIDES_LENGTH, isAutoPlay])

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    // Resume auto-play after 8 seconds of inactivity
    const resumeTimer = setTimeout(() => setIsAutoPlay(true), 8000)
    return () => clearTimeout(resumeTimer)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_LENGTH)
    setIsAutoPlay(false)
  }, [SLIDES_LENGTH])

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_LENGTH) % SLIDES_LENGTH)
    setIsAutoPlay(false)
  }, [SLIDES_LENGTH])

  return (
    <section className="relative overflow-hidden h-96 md:h-[500px] lg:h-[600px] bg-background">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 z-10 max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium">
              {slides[currentSlide].tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-balance text-white/90">
            {slides[currentSlide].description}
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "w-8 bg-white shadow-lg" : "w-2.5 bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
        {currentSlide + 1} / {SLIDES_LENGTH}
      </div>
    </section>
  )
}
