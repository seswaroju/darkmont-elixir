import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  image: string
  category: string
  description?: string
}

export default function ProductCard({ name, price, image, category, description }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden border border-[#D4AF37]/10 bg-white transition-all hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5 rounded-lg">
      <Link href={`/products/${name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <div className="relative h-full w-full bg-white flex items-center justify-center p-4">
            {/* Radial gradient background for better product visibility */}
            <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>

            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={200}
              height={300}
              className="object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
            />

            {/* Hover overlay with "View Details" text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 bg-[#1A1A1A]/70 text-white text-sm rounded-full backdrop-blur-sm font-serif italic">
                View Details →
              </span>
            </div>
          </div>
          <div className="absolute left-4 top-4 bg-[#800020]/70 text-white px-3 py-1 text-xs font-medium">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300">
            {name}
          </h3>
          {description && <p className="mt-2 text-[#444444]/80 text-sm font-light">{description}</p>}
          <div className="mt-4 flex items-center justify-between">
            <p className="font-serif text-lg text-[#D4AF37]">${price}</p>
            <Button
              size="sm"
              className="bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
