import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-charcoal-dark">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mt-6 text-sm text-zinc-400 font-extralight tracking-wide leading-relaxed">
              Crafting exceptional elixirs for the most discerning palates since 1897.
            </p>
            <p className="mt-4 text-sm text-gold-light/70 font-serif italic">
              "Crafted in silence. Sipped in reverence."
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white">
                  Cardamom-infused Mixed Berry
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white">
                  Mango-ginger with Turmeric
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white">
                  Lemon-mint with Tulsi
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white">
                  Masala Chai Spice
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-zinc-400 hover:text-white">
                  Crafting Process
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-zinc-400 hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-zinc-400 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider">Support</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-zinc-400 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-800 pt-8 text-center">
          <div className="mb-4">
            <div className="relative h-12 w-12 mx-auto">
              <Logo centered={true} />
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-extralight">
            © {new Date().getFullYear()} Darkmont Elixir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
