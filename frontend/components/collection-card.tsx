import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CollectionCardProps {
  name: string
  description: string
  notes: string[]
  image: string
  link: string
}

export function CollectionCard({ image, name, description, notes, link }: CollectionCardProps) {
  return (
    <div className="collection-item relative overflow-hidden rounded-lg border border-gold-light/10 bg-charcoal-light/50 backdrop-blur-sm h-[450px] w-full max-w-xs mx-auto">
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <Image src={image || "/placeholder.svg"} alt={name} width={200} height={350} className="object-contain" />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-burgundy/80 to-burgundy/60 text-gold-light px-3 py-1 backdrop-blur-sm border border-gold-light/20 font-serif text-sm">
          Limited Edition
        </div>
      </div>

      <div className="collection-item-details">
        <h3 className="text-xl font-playfair text-ivory mb-2">{name}</h3>
        <p className="text-ivory/70 font-extralight text-sm mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-gold-light text-sm font-serif mb-2">Tasting Notes:</h4>
          <ul className="text-ivory/70 font-extralight text-sm">
            {notes.map((note, index) => (
              <li key={index} className="flex items-center gap-2 mb-1">
                <div className="w-1 h-1 rounded-full bg-gold-light/50"></div>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={link} className="inline-flex items-center gap-1 text-gold-light hover:text-gold text-sm group">
          <span>Discover</span>
          <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
