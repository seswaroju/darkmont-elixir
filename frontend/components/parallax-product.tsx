"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxProductProps {
  image: string
  label: string
  description: string
}

export function ParallaxProduct({ image, label, description }: ParallaxProductProps) {
  const productRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!productRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as a percentage of the viewport
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      // Apply subtle parallax effect
      productRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${y * -5}deg)
        translateZ(50px)
      `
    }

    // Show product details on click
    const handleClick = () => {
      if (detailsRef.current) {
        detailsRef.current.classList.toggle("opacity-0")
        detailsRef.current.classList.toggle("pointer-events-none")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    if (productRef.current) {
      productRef.current.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (productRef.current) {
        productRef.current.removeEventListener("click", handleClick)
      }
    }
  }, [])

  return (
    <div className="relative h-[600px] w-[350px] reveal-element cursor-pointer" ref={productRef}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-light/20 to-transparent rounded-full blur-xl animate-pulse"></div>

      {/* Product Image */}
      <div className="relative h-full w-full transition-all duration-700">
        <Image
          src={image || "/placeholder.svg"}
          alt="Signature Elixir"
          fill
          className="object-contain drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)] product-reflection"
        />

        {/* Reflective base */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-radial from-gold-light/10 to-transparent blur-md"></div>

        {/* Light sheen effect */}
        <div className="absolute inset-0 product-light-sheen"></div>

        {/* Floating badge */}
        <div className="absolute -right-10 top-10 bg-gradient-to-r from-burgundy/80 to-burgundy/60 text-gold-light px-6 py-3 rounded-full backdrop-blur-sm border border-gold-light/30 shadow-lg transform rotate-12 font-serif">
          Limited Edition
        </div>

        {/* Sparkle effects */}
        <div className="absolute top-1/4 right-1/4 h-3 w-3 bg-gold-light rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 left-1/3 h-2 w-2 bg-gold-light rounded-full animate-ping opacity-75 animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/4 h-2 w-2 bg-gold-light rounded-full animate-ping opacity-75 animation-delay-1500"></div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full">
        <h3 className="text-2xl font-playfair font-light text-gold">{label}</h3>
        <p className="text-ivory/70 font-extralight tracking-wide">{description}</p>
      </div>

      {/* Product Details Modal (hidden by default) */}
      <div
        ref={detailsRef}
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-md flex flex-col items-center justify-center p-6 opacity-0 pointer-events-none transition-opacity duration-500"
      >
        <h3 className="text-xl font-playfair text-gold mb-4">Tasting Notes</h3>
        <p className="text-ivory/80 font-baskervville text-center mb-6">
          Opens with bright berry notes, followed by warm cardamom spice. The mid-palate reveals subtle hints of vanilla
          and oak from the aging process.
        </p>
        <div className="text-xs uppercase tracking-widest text-gold-light/70">Tap to close</div>
      </div>
    </div>
  )
}
