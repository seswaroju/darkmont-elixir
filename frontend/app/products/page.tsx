"use client"

import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Updated product data with enhanced descriptions, tasting notes, and ritual information
  const products = [
    {
      name: "Cardamom-infused Mixed Berry",
      price: 129,
      image: "/images/products/mixed-berry.png",
      category: "Signature Collection",
      description: "Bright berries layered with warm cardamom. Crisp, deep, and calm.",
      tastingNotes: ["Sweet berry opening", "Warm cardamom mid-notes", "Subtle oak finish"],
      ingredients: ["Nordic berries", "Cardamom pods", "Vanilla bean"],
      ritual:
        "Best served chilled at 14°C in a crystal glass. Allow 30 seconds after pouring to release the full bouquet of aromas.",
    },
    {
      name: "Mango-ginger with Turmeric",
      price: 149,
      image: "/images/products/mango-ginger.png",
      category: "Limited Edition",
      description: "Tropical sweetness meets warming spice. Vibrant, complex, and grounding.",
      tastingNotes: ["Tropical mango opening", "Spicy ginger warmth", "Earthy turmeric finish"],
      ingredients: ["Alphonso mangoes", "Himalayan ginger", "Turmeric root"],
      ritual: "Serve at room temperature in a wide-rimmed glass to experience the full aromatic journey.",
    },
    {
      name: "Lemon-mint with Tulsi",
      price: 139,
      image: "/images/products/lemon-mint.png",
      category: "Signature Collection",
      description: "Zesty citrus meets cooling mint. Refreshing, bright, and uplifting.",
      tastingNotes: ["Bright citrus opening", "Cool mint sensation", "Herbal tulsi depth"],
      ingredients: ["Sicilian lemons", "Fresh mint", "Holy basil (Tulsi)"],
      ritual: "Serve chilled with a sprig of fresh mint. Perfect as a morning ritual or afternoon refreshment.",
    },
    {
      name: "Masala Chai Spice",
      price: 159,
      image: "/images/products/masala-chai.png",
      category: "Reserve Collection",
      description: "Warming spices in perfect harmony. Comforting, complex, and meditative.",
      tastingNotes: ["Warm cinnamon and clove", "Cardamom and ginger mid-notes", "Black pepper finish"],
      ingredients: ["Assam black tea", "Cardamom", "Cinnamon", "Cloves", "Black pepper"],
      ritual: "Best enjoyed warm in small sips. Allow the complex spice notes to unfold gradually with each taste.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#2E2E2E]">
      <header className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/5 bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="container-luxury flex h-20 items-center justify-between py-4">
          <Logo />
          <MainNav />
          <div className="flex items-center gap-6">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-[#2E2E2E] hover:bg-[#D4AF37]/5 group">
                <ShoppingCart className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#800020] text-white text-xs">
                  3
                </span>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="hidden border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] sm:flex transition-all duration-300"
            >
              Sign In
            </Button>
            <Button className="hidden bg-[#D4AF37] text-white hover:bg-[#B38728] sm:flex transition-all duration-300">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-playfair font-light tracking-tight text-[#1A1A1A]">Our Elixir Collection</h1>
              <p className="mt-2 text-[#444444] font-light">Discover our exclusive collection of premium elixirs</p>
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="sm"
                className="border-[#D4AF37]/20 text-[#2E2E2E] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px] border-[#D4AF37]/20 bg-white text-[#2E2E2E] transition-all duration-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="border-[#D4AF37]/20 bg-white text-[#2E2E2E]">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="hidden md:col-span-3 md:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#1A1A1A]">Search</h3>
                  <div className="relative">
                    <Input
                      placeholder="Search elixirs..."
                      className="border-[#D4AF37]/20 bg-white text-[#2E2E2E] placeholder:text-[#444444]/50 focus-visible:ring-[#D4AF37]/30 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium text-[#1A1A1A]">Collections</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="signature"
                        className="h-4 w-4 rounded border-[#D4AF37]/20 bg-white text-[#D4AF37]"
                      />
                      <label htmlFor="signature" className="ml-2 text-sm text-[#444444]">
                        Signature Collection
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="limited"
                        className="h-4 w-4 rounded border-[#D4AF37]/20 bg-white text-[#D4AF37]"
                      />
                      <label htmlFor="limited" className="ml-2 text-sm text-[#444444]">
                        Limited Edition
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="reserve"
                        className="h-4 w-4 rounded border-[#D4AF37]/20 bg-white text-[#D4AF37]"
                      />
                      <label htmlFor="reserve" className="ml-2 text-sm text-[#444444]">
                        Reserve Collection
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium text-[#1A1A1A]">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="border-[#D4AF37]/20 bg-white text-[#2E2E2E] placeholder:text-[#444444]/50 transition-all duration-300"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        className="border-[#D4AF37]/20 bg-white text-[#2E2E2E] placeholder:text-[#444444]/50 transition-all duration-300"
                      />
                    </div>
                    <Button className="w-full bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden border border-[#D4AF37]/10 bg-white transition-all hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5 rounded-lg"
                  >
                    <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <div className="relative h-full w-full bg-white flex items-center justify-center p-4">
                          {/* Radial gradient background for better product visibility */}
                          <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>

                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={200}
                            height={300}
                            className="object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
                          />

                          {/* Hover overlay with "View Ritual" text */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-4 py-2 bg-[#1A1A1A]/70 text-white text-sm rounded-full backdrop-blur-sm font-serif italic">
                              View Ritual →
                            </span>
                          </div>
                        </div>
                        <div className="absolute left-4 top-4 bg-[#800020]/70 text-white px-3 py-1 text-xs font-medium">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-[#444444]/80 text-sm font-light">{product.description}</p>

                        {/* Tabs for product details - IMPROVED */}
                        <div className="mt-6">
                          <div className="tabs flex justify-start gap-6 mb-4 font-serif text-sm border-b border-[#D4AF37]/10">
                            <button
                              className={`tab pb-2 transition-all duration-300 ${
                                activeTab === "all"
                                  ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                                  : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                              }`}
                              onClick={() => setActiveTab("all")}
                            >
                              Aroma
                            </button>
                            <button
                              className={`tab pb-2 transition-all duration-300 ${
                                activeTab === "mouthfeel"
                                  ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                                  : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                              }`}
                              onClick={() => setActiveTab("mouthfeel")}
                            >
                              Mouthfeel
                            </button>
                            <button
                              className={`tab pb-2 transition-all duration-300 ${
                                activeTab === "notes"
                                  ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                                  : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                              }`}
                              onClick={() => setActiveTab("notes")}
                            >
                              Notes
                            </button>
                          </div>

                          {/* Tab content with improved styling */}
                          <div className="tab-content p-4 font-serif text-sm text-[#2E2E2E] bg-[#FAF9F6] border border-[#E6E2DC] rounded-lg shadow-sm">
                            <p className="leading-relaxed">
                              {activeTab === "all" &&
                                "Softly spiced cardamom greets the nose, followed by high floral notes and a hint of sun-dried berries. Subtle, deep, elegant."}
                              {activeTab === "mouthfeel" &&
                                "Silky and medium-bodied with a gentle effervescence that dances on the palate. Leaves a warm, lingering finish."}
                              {activeTab === "notes" && product.tastingNotes.join(", ")}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <p className="font-serif text-lg text-[#D4AF37]">${product.price}</p>
                          <Button
                            size="sm"
                            className="bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
