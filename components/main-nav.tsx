"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface MainNavProps {
  isTransparent?: boolean
}

export default function MainNav({ isTransparent = false }: MainNavProps) {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className={`z-50 ${isTransparent && !scrolled ? "text-[#2E2E2E] hover:bg-[#D4AF37]/5" : ""}`}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col bg-[#FAF9F6] p-6 pt-20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-[#2E2E2E] hover:text-[#D4AF37]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-6">
              <Button
                variant="outline"
                className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]"
              >
                Sign In
              </Button>
              <Button className="bg-[#D4AF37] text-white hover:bg-[#B38728]">Sign Up</Button>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <nav
      className={`flex items-center px-6 py-3 rounded-full ${scrolled ? "bg-[#F7F4EE]/90 shadow-md" : ""} transition-all duration-300`}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-sm font-medium mx-5 ${
            isTransparent && !scrolled ? "text-gray-900" : "text-gray-700"
          } transition-colors hover:text-[#8A9A5B] tracking-wide`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
