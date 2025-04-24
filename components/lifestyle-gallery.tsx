"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function LifestyleGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gallery-item")
      items.forEach((item) => {
        observer.observe(item)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="container-luxury" ref={galleryRef}>
      <div className="gallery-grid">
        <div className="gallery-item-1 gallery-item reveal-element">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Luxury lifestyle"
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-ivory">
              <h3 className="text-xl font-serif">Evening Soirée</h3>
              <p className="text-ivory/70 font-extralight mt-2">The perfect complement to meaningful conversation</p>
            </div>
          </div>
        </div>
        <div className="gallery-item-2 gallery-item reveal-element">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Crystal glassware"
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-ivory">
              <h3 className="text-lg font-serif">Crystal Service</h3>
              <p className="text-ivory/70 font-extralight mt-1 text-sm">Handblown by master artisans</p>
            </div>
          </div>
        </div>
        <div className="gallery-item-3 gallery-item reveal-element">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Gold tray"
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-ivory">
              <h3 className="text-lg font-serif">Presentation</h3>
              <p className="text-ivory/70 font-extralight mt-1 text-sm">Served with intention</p>
            </div>
          </div>
        </div>
        <div className="gallery-item-4 gallery-item reveal-element">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=700"
              alt="Marble countertop"
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-ivory">
              <h3 className="text-lg font-serif">The Setting</h3>
              <p className="text-ivory/70 font-extralight mt-1 text-sm">
                Darkmont Elixir transforms any environment into an occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
