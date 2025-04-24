interface AwardBadgeProps {
  name: string
  year: string
  category: string
  description: string
}

export function AwardBadge({ name, year, category, description }: AwardBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs reveal-element">
      <div className="w-24 h-24 rounded-full border-2 border-gold-light/30 flex items-center justify-center mb-6">
        <div className="w-20 h-20 rounded-full border border-gold-light/50 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gold-dark/20 backdrop-blur-sm flex flex-col items-center justify-center">
            <span className="text-gold font-serif text-sm">{year}</span>
            <span className="text-gold-light font-serif text-xs">{category}</span>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-serif text-gold-light">{name}</h3>
      <p className="mt-2 text-ivory/60 font-extralight text-sm">{description}</p>
    </div>
  )
}
