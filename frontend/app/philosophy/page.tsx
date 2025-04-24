import Image from "next/image"
import Link from "next/link"

import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

export default function PhilosophyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#2E2E2E]">
      <header className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/5 bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <MainNav />
          <div className="flex items-center gap-6">
            <Link href="/auth/signin">
              <button className="text-[#D4AF37] hover:text-[#B38728] transition-colors duration-300">Sign In</button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-texture-linen"></div>
          </div>

          {/* Subtle botanical illustration */}
          <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-[0.05]">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Botanical illustration"
              fill
              className="object-contain"
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-playfair font-light text-[#1A1A1A] mb-8">Our Philosophy</h1>

              {/* Pull quote - NEW */}
              <blockquote className="my-12 relative border-l-2 border-[#D4AF37]/30 pl-6 italic text-2xl font-serif text-[#D4AF37]/90">
                "We don't bottle drinks. We bottle intention."
              </blockquote>

              {/* Shorter paragraphs with better spacing - IMPROVED */}
              <div className="space-y-6 text-[#444444] leading-relaxed">
                <p>
                  At Darkmont, we believe that true luxury isn't about ostentation, but about the quiet confidence that
                  comes from knowing you've chosen something exceptional.
                </p>

                <p>
                  Our elixirs are crafted for those who understand that the finest pleasures in life are often found in
                  subtle moments of appreciation—a pause in the day, a breath between thoughts, the gentle unfurling of
                  complex flavors across the palate.
                </p>

                <h2 className="text-2xl font-playfair font-light text-[#1A1A1A] mt-12 mb-6">The Art of Presence</h2>

                <p>
                  In a world that moves ever faster, we stand for slowness. For intention. For the kind of attention to
                  detail that can only come from dedicating oneself to mastery.
                </p>

                <p>
                  Each bottle represents our unwavering commitment to perfection—a testament to the belief that true
                  luxury lies in the meticulous attention to detail and the patience to allow nature's finest
                  ingredients to reveal their essence.
                </p>

                {/* Pull quote - NEW */}
                <blockquote className="my-12 relative border-l-2 border-[#D4AF37]/30 pl-6 italic text-xl font-serif text-[#D4AF37]/90">
                  "Time slows. Senses awaken. A moment becomes eternal."
                </blockquote>

                <h2 className="text-2xl font-playfair font-light text-[#1A1A1A] mt-12 mb-6">Our Commitment</h2>

                <p>
                  We source only the finest ingredients, harvested at their peak and processed with reverence. Our
                  distillation methods honor centuries of tradition while embracing innovation where it enhances—never
                  replaces—the craft.
                </p>

                <p>
                  We limit our production not out of scarcity marketing, but because excellence cannot be rushed or
                  mass-produced. Each batch receives the full attention of our master distillers, ensuring a consistency
                  of quality that has become our hallmark.
                </p>

                <p>
                  When you choose Darkmont, you're not simply selecting a beverage. You're embracing a philosophy of
                  mindful consumption, of savoring rather than consuming, of quality over quantity.
                </p>

                <p>
                  We invite you to partake in this legacy, to savor each sip as a celebration of craftsmanship that has
                  remained unchanged through generations.
                </p>
              </div>

              {/* Founder signature - NEW */}
              <div className="mt-16 flex flex-col items-end">
                <div className="relative">
                  <svg
                    className="signature-animation h-12 w-48"
                    viewBox="0 0 200 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 100,25 C110,10 120,40 130,25 C140,10 150,40 160,25 C170,10 180,40 190,25"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="absolute -bottom-6 right-0 font-serif text-[#D4AF37]/80 italic">
                    Edward Darkmont, Founder
                  </span>
                </div>

                <div className="mt-12">
                  <Image
                    src="/images/darkmont-d-logo.png"
                    alt="Darkmont Logo"
                    width={40}
                    height={40}
                    className="opacity-60 ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
