import Image from "next/image"

export function FounderQuote() {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
      <div className="relative h-[500px] overflow-hidden rounded-lg reveal-element">
        <Image src="/placeholder.svg?height=500&width=400" alt="Founder" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent/30"></div>
      </div>
      <div className="flex flex-col justify-center reveal-element">
        <div className="mb-8">
          <Image src="/images/darkmont-d-logo.png" alt="Darkmont Logo" width={60} height={60} className="opacity-70" />
        </div>
        <h2 className="text-4xl font-playfair font-light tracking-wide text-ivory">A Note from Our Founder</h2>
        <div className="mt-8 text-ivory/70 font-extralight tracking-wide leading-relaxed space-y-6">
          <p className="font-serif italic text-lg">
            "When I established Darkmont in 1897, I sought to create not merely a beverage, but an experience that
            transcends time—a moment of reflection and appreciation for the finer elements of life.
          </p>
          <p className="font-serif italic text-lg">
            I wanted to bottle that rare feeling of timeless elegance. Each sip is a moment of pause, a nod to
            excellence. Each bottle represents our unwavering commitment to perfection, a testament to the belief that
            true luxury lies in the meticulous attention to detail and the patience to allow nature's finest ingredients
            to reveal their essence.
          </p>
          <p className="font-serif italic text-lg">
            I invite you to partake in this legacy, to savor each sip as a celebration of craftsmanship that has
            remained unchanged through generations."
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px w-16 bg-gold-light/50"></div>
          <div className="relative">
            <svg className="signature-animation h-12 w-48" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 100,25 C110,10 120,40 130,25 C140,10 150,40 160,25 C170,10 180,40 190,25"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
              />
            </svg>
            <span className="absolute -bottom-6 left-0 font-serif text-gold-light italic">Edward Darkmont</span>
          </div>
        </div>
      </div>
    </div>
  )
}
