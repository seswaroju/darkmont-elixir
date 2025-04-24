interface TestimonialProps {
  quote: string
  author: string
  title: string
  image: string
}

export function Testimonial({ quote, author, title, image }: TestimonialProps) {
  return (
    <div className="p-8 border border-gold-light/10 bg-charcoal-light/50 backdrop-blur-sm reveal-element">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.33333 13.3333C9.33333 12.2288 10.2288 11.3333 11.3333 11.3333H13.3333C14.4379 11.3333 15.3333 12.2288 15.3333 13.3333V21.3333C15.3333 22.4379 14.4379 23.3333 13.3333 23.3333H11.3333C10.2288 23.3333 9.33333 22.4379 9.33333 21.3333V13.3333Z"
              fill="url(#quote-gradient)"
              fillOpacity="0.5"
            />
            <path
              d="M17.3333 13.3333C17.3333 12.2288 18.2288 11.3333 19.3333 11.3333H21.3333C22.4379 11.3333 23.3333 12.2288 23.3333 13.3333V21.3333C23.3333 22.4379 22.4379 23.3333 21.3333 23.3333H19.3333C18.2288 23.3333 17.3333 22.4379 17.3333 21.3333V13.3333Z"
              fill="url(#quote-gradient)"
              fillOpacity="0.5"
            />
            <defs>
              <linearGradient
                id="quote-gradient"
                x1="16"
                y1="11.3333"
                x2="16"
                y2="23.3333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D4AF37" />
                <stop offset="1" stopColor="#D4AF37" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="font-serif text-ivory/80 italic leading-relaxed flex-grow">{quote}</p>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gold-light/20">
            <img src={image || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-gold-light font-light">{author}</p>
            <p className="text-ivory/50 text-sm font-extralight">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
