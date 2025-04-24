import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Baskervville } from "next/font/google"
import "./globals.css"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

// Load Cormorant Garamond font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

// Load Playfair Display for ultra-luxury headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

// Load Baskervville for elegant body text
const baskervville = Baskervville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Darkmont Elixir - Luxury Distilled",
  description: "Indulge in handcrafted elixirs made for those who savor the rare.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${baskervville.variable}`}>
      <body className="bg-charcoal text-ivory">{children}</body>
    </html>
  )
}
