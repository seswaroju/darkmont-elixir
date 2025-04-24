"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) setIsVisible(true)

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")

      setIsHovering(isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  // Don't show custom cursor on touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return null

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}
