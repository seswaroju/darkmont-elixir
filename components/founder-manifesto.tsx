import Image from "next/image"

export function FounderManifesto() {
  return (
    <div className="relative py-16 px-8 md:py-24 md:px-16 border border-gold-light/10 bg-charcoal-light/50 backdrop-blur-sm rounded-lg overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-texture-silk opacity-5"></div>

      {/* Wax seal */}
      <div className="absolute top-8 right-8 wax-seal">
        <div className="text-ivory/90 font-serif text-xs">D.E.</div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-playfair font-light tracking-wide text-ivory mb-8">Our Philosophy</h2>

        <p className="text-2xl font-serif italic text-ivory/90 mb-12 leading-relaxed">
          "We don't bottle drinks. We bottle presence."
        </p>

        <p className="text-ivory/70 font-extralight tracking-wide leading-relaxed mb-8">
          At Darkmont, we believe that true luxury isn't about ostentation, but about the quiet confidence that comes
          from knowing you've chosen something exceptional. Our elixirs are crafted for those who understand that the
          finest pleasures in life are often found in subtle moments of appreciation.
        </p>

        <p className="text-ivory/70 font-extralight tracking-wide leading-relaxed mb-12">
          Each bottle represents our unwavering commitment to perfection—a testament to the belief that true luxury lies
          in the meticulous attention to detail and the patience to allow nature's finest ingredients to reveal their
          essence.
        </p>

        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="signature-animation h-12 w-48" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 100,25 C110,10 120,40 130,25 C140,10 150,40 160,25 C170,10 180,40 190,25"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
              />
            </svg>
            <span className="absolute -bottom-6 left-0 right-0 text-center font-serif text-gold-light italic">
              Edward Darkmont, Founder
            </span>
          </div>

          <div className="mt-12">
            <Image
              src="/images/darkmont-d-logo.png"
              alt="Darkmont Logo"
              width={40}
              height={40}
              className="opacity-70 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
