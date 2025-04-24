"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface HorizontalScrollProps {
  children: React.ReactNode
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollContainer.scrollLeft += e.deltaY
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })

    // Add mouse drag scrolling
    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      scrollContainer.classList.add("active")
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseUp = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    scrollContainer.addEventListener("mousedown", handleMouseDown)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("mouseup", handleMouseUp)
    scrollContainer.addEventListener("mousemove", handleMouseMove)

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
      scrollContainer.removeEventListener("mousedown", handleMouseDown)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      scrollContainer.removeEventListener("mouseup", handleMouseUp)
      scrollContainer.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex gap-8 px-16">{children}</div>
    </div>
  )
}
