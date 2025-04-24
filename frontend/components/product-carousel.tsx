"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  name: string
  image: string
  category: string
  link: string
  notes: string[]
}

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  // Add horizontal wheel scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollContainer.scrollLeft += e.deltaY
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-8"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-8 px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card-luxury w-[300px] h-[500px] flex-shrink-0 border border-gold-light/10 bg-charcoal-light/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center group relative overflow-hidden snap-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-center">
                  <h3 className="text-xl font-serif text-gold-light mb-2">Tasting Notes</h3>
                  <ul className="text-ivory/80 text-sm font-extralight">
                    {product.notes.map((note, i) => (
                      <li key={i} className="mb-1">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={350}
                className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-6 text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-gold-light/70 mb-2">{product.category}</p>
                <h3 className="font-playfair text-xl text-ivory">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-light/50 backdrop-blur-sm border border-gold-light/10 flex items-center justify-center text-gold-light hover:bg-gold-light/10 transition-colors duration-300"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-light/50 backdrop-blur-sm border border-gold-light/10 flex items-center justify-center text-gold-light hover:bg-gold-light/10 transition-colors duration-300"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
