import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"

import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

export default function JournalPage() {
  // Journal entries with thumbnails and content
  const journalEntries = [
    {
      id: 1,
      title: "The Story Behind Cardamom Elixir",
      excerpt:
        "How a chance encounter in a spice market led to our signature blend. Discover the journey from concept to creation of our most beloved elixir.",
      date: "April 12, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "the-story-behind-cardamom-elixir",
      category: "Craft & Process",
    },
    {
      id: 2,
      title: "Rituals of Stillness: How We Slow Down",
      excerpt:
        "In a world that moves ever faster, we explore the art of intentional pauses. Our founder shares personal rituals that inspire our approach to craftsmanship.",
      date: "March 28, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "rituals-of-stillness",
      category: "Philosophy",
    },
    {
      id: 3,
      title: "Why We Ferment with Purpose, Not Pressure",
      excerpt:
        "The science and art behind our unique fermentation process. Learn how patience yields complexity and how we honor time as an essential ingredient.",
      date: "February 15, 2023",
      image: "/placeholder.svg?height=400&width=600",
      slug: "ferment-with-purpose",
      category: "Craft & Process",
    },
  ]

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
        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-playfair font-light text-[#1A1A1A] mb-6">Journal</h1>
              <p className="text-[#444444] text-lg font-light mb-16">
                Insights, stories, and reflections from the world of Darkmont Elixir.
              </p>

              {/* Featured Article */}
              <div className="mb-24">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src={journalEntries[0].image || "/placeholder.svg"}
                    alt={journalEntries[0].title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-all duration-2000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-light mb-2 inline-block">
                      {journalEntries[0].category}
                    </span>
                    <h2 className="text-3xl font-serif text-white mb-2">{journalEntries[0].title}</h2>
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{journalEntries[0].date}</span>
                    </div>
                    <p className="text-white/90 font-light max-w-2xl">{journalEntries[0].excerpt}</p>
                    <Link
                      href={`/journal/${journalEntries[0].slug}`}
                      className="mt-4 inline-flex items-center text-[#D4AF37] hover:text-white transition-colors duration-300 font-serif italic"
                    >
                      Read the full story <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Journal Entries */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {journalEntries.slice(1).map((entry) => (
                  <div key={entry.id} className="group">
                    <Link href={`/journal/${entry.slug}`} className="block">
                      <div className="relative h-[240px] w-full overflow-hidden rounded-lg mb-4">
                        <Image
                          src={entry.image || "/placeholder.svg"}
                          alt={entry.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-light mb-2 inline-block">
                        {entry.category}
                      </span>
                      <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                        {entry.title}
                      </h3>
                      <div className="flex items-center text-[#444444]/70 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{entry.date}</span>
                      </div>
                      <p className="text-[#444444] font-light">{entry.excerpt}</p>
                      <span className="mt-4 inline-flex items-center text-[#D4AF37] group-hover:text-[#B38728] transition-colors duration-300 font-serif italic">
                        Read More{" "}
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
