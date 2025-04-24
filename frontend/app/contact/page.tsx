import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

export default function ContactPage() {
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
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h1 className="text-4xl font-playfair font-light text-[#1A1A1A] mb-6">Contact Us</h1>

                  {/* Friendly introduction - NEW */}
                  <p className="text-[#444444] font-light leading-relaxed mb-8">
                    We'd love to hear from you. Whether you have a question about our elixirs, want to explore a
                    collaboration, or simply wish to share your Darkmont experience, we're listening.
                  </p>

                  {/* Contact information with icons - IMPROVED */}
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] font-medium mb-1">Email</h3>
                        <p className="text-[#444444] font-light">inquiries@darkmontexilir.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] font-medium mb-1">Phone</h3>
                        <p className="text-[#444444] font-light">+1 (800) 555-1234</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] font-medium mb-1">Visit</h3>
                        <p className="text-[#444444] font-light">
                          123 Botanical Way
                          <br />
                          Elderberry Hills, CA 94123
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social links - NEW */}
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-[#D4AF37]/70 font-light mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://instagram.com"
                        className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://facebook.com"
                        className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://linkedin.com"
                        className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="mailto:press@darkmontexilir.com"
                        className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Contact form with visual enhancements - IMPROVED */}
                  <div className="bg-white p-8 rounded-lg border border-[#D4AF37]/10 shadow-sm">
                    <h2 className="text-2xl font-serif text-[#1A1A1A] mb-6">Send a Message</h2>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-[#1A1A1A]">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="border-[#D4AF37]/20 focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/10"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-[#1A1A1A]">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="border-[#D4AF37]/20 focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-[#1A1A1A]">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          className="border-[#D4AF37]/20 focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/10"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[#1A1A1A]">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          className="border-[#D4AF37]/20 focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/10"
                        />
                      </div>

                      <Button className="w-full bg-[#D4AF37] text-white hover:bg-[#B38728]">Send Message</Button>

                      <p className="text-xs text-[#444444]/70 text-center">
                        We typically respond within 24-48 hours during business days.
                      </p>
                    </form>
                  </div>
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
