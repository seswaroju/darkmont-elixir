import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductFeatureProps {
  image: string
  title: string
  description: string
  link: string
  linkText: string
  reverse?: boolean
}

export default function ProductFeature({
  image,
  title,
  description,
  link,
  linkText,
  reverse = false,
}: ProductFeatureProps) {
  return (
    <div className="container-luxury">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
        <div
          className={`relative h-[600px] overflow-hidden rounded-lg reveal-element ${reverse ? "md:order-last" : ""}`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-center scale-110 hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
        </div>

        <div className="flex flex-col justify-center reveal-element">
          <h2 className="text-4xl font-playfair font-light tracking-wide text-ivory mb-6">{title}</h2>
          <p className="text-ivory/70 font-extralight tracking-wide leading-relaxed mb-8">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-gold-light hover:text-gold border-b border-gold-light/30 pb-1 w-fit group"
          >
            <span className="font-light tracking-wider">{linkText}</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
