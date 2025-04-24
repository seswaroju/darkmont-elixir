interface IngredientStoryProps {
  name: string
  origin: string
  description: string
  image: string
}

export function IngredientStory({ name, origin, description, image }: IngredientStoryProps) {
  return (
    <div className="flex flex-col reveal-element">
      <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-ivory">
          <div className="text-xs uppercase tracking-widest text-gold-light/70">{origin}</div>
          <h3 className="text-xl font-serif">{name}</h3>
        </div>
      </div>
      <p className="text-ivory/70 font-extralight tracking-wide leading-relaxed">{description}</p>
    </div>
  )
}
