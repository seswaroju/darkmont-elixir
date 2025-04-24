"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("details")

  // Product data based on slug
  const getProductData = (slug: string) => {
    // This would normally come from a database
    const products = {
      "cardamom-infused-mixed-berry": {
        name: "Cardamom-infused Mixed Berry",
        slug: "cardamom-infused-mixed-berry",
        price: 129,
        description:
          "Our signature Cardamom-infused Mixed Berry elixir combines the rich sweetness of seasonal berries with the aromatic warmth of cardamom. This premium blend offers a perfect balance of fruity notes and exotic spices with a smooth, velvety finish that lingers on the palate.",
        details: [
          "750ml elegant glass bottle",
          "All-natural ingredients",
          "No artificial flavors or preservatives",
          "Limited production of 500 bottles per year",
          "Handcrafted in our historic distillery",
        ],
        features: [
          "Complex flavor profile with notes of blackberry, raspberry, strawberry, and cardamom",
          "Smooth, velvety finish",
          "Presented in a hand-blown glass decanter",
          "Includes certificate of authenticity",
          "Elegant gift packaging available",
        ],
        tastingNotes: [
          "Opening: Sweet berry notes with a hint of vanilla",
          "Mid-palate: Warm cardamom spice with subtle oak",
          "Finish: Lingering berry sweetness with balanced spice",
        ],
        pairingNotes: "Pairs beautifully with dark chocolate, aged cheeses, or as an elegant digestif.",
        servingSuggestion:
          "Best served chilled at 14°C in a crystal glass. Allow 30 seconds after pouring to release the full bouquet of aromas.",
        images: [
          "/images/products/mixed-berry.png",
          "/images/products/mixed-berry.png",
          "/images/products/mixed-berry.png",
          "/images/products/mixed-berry.png",
        ],
        category: "Signature Collection",
        quote: "A symphony of berries dancing with the warmth of ancient spice.",
      },
      "mango-ginger-with-turmeric": {
        name: "Mango-ginger with Turmeric",
        slug: "mango-ginger-with-turmeric",
        price: 149,
        description:
          "Our Mango-ginger with Turmeric elixir combines the tropical sweetness of ripe mangoes with the spicy warmth of ginger and the earthy notes of turmeric. This premium blend offers a perfect balance of fruity and spicy notes with anti-inflammatory properties.",
        details: [
          "750ml elegant glass bottle",
          "All-natural ingredients",
          "No artificial flavors or preservatives",
          "Limited production of 500 bottles per year",
          "Handcrafted in our historic distillery",
        ],
        features: [
          "Complex flavor profile with notes of mango, ginger, and turmeric",
          "Smooth, tropical finish",
          "Presented in a hand-blown glass decanter",
          "Includes certificate of authenticity",
          "Elegant gift packaging available",
        ],
        tastingNotes: [
          "Opening: Tropical mango sweetness with a hint of honey",
          "Mid-palate: Warming ginger spice with earthy turmeric",
          "Finish: Lingering tropical notes with a gentle spice warmth",
        ],
        pairingNotes: "Complements spicy cuisine, grilled seafood, or enjoyed on its own as a refreshing aperitif.",
        servingSuggestion: "Serve at room temperature in a wide-rimmed glass to experience the full aromatic journey.",
        images: [
          "/images/products/mango-ginger.png",
          "/images/products/mango-ginger.png",
          "/images/products/mango-ginger.png",
          "/images/products/mango-ginger.png",
        ],
        category: "Limited Edition",
        quote: "Tropical sweetness meets ancient wisdom in perfect harmony.",
      },
      "lemon-mint-with-tulsi": {
        name: "Lemon-mint with Tulsi",
        slug: "lemon-mint-with-tulsi",
        price: 139,
        description:
          "Our Lemon-mint with Tulsi elixir combines the zesty freshness of lemons with the cooling sensation of mint and the herbal benefits of tulsi (holy basil). This premium blend offers a refreshing and invigorating experience with every sip.",
        details: [
          "750ml elegant glass bottle",
          "All-natural ingredients",
          "No artificial flavors or preservatives",
          "Limited production of 500 bottles per year",
          "Handcrafted in our historic distillery",
        ],
        features: [
          "Refreshing flavor profile with notes of lemon, mint, and tulsi",
          "Crisp, clean finish",
          "Presented in a hand-blown glass decanter",
          "Includes certificate of authenticity",
          "Elegant gift packaging available",
        ],
        tastingNotes: [
          "Opening: Bright citrus with fresh mint awakening",
          "Mid-palate: Cool mint sensation with herbal tulsi depth",
          "Finish: Clean, refreshing with lingering herbal notes",
        ],
        pairingNotes:
          "Perfect with light salads, grilled vegetables, or as a refreshing palate cleanser between courses.",
        servingSuggestion:
          "Serve chilled with a sprig of fresh mint. Perfect as a morning ritual or afternoon refreshment.",
        images: [
          "/images/products/lemon-mint.png",
          "/images/products/lemon-mint.png",
          "/images/products/lemon-mint.png",
          "/images/products/lemon-mint.png",
        ],
        category: "Signature Collection",
        quote: "A breath of clarity in liquid form.",
      },
      "masala-chai-spice": {
        name: "Masala Chai Spice",
        slug: "masala-chai-spice",
        price: 159,
        description:
          "Our Masala Chai Spice elixir combines the rich, aromatic spices of traditional chai with a modern twist. This premium blend offers a warm, comforting experience with notes of cinnamon, cardamom, cloves, and ginger, perfect for any time of day.",
        details: [
          "750ml elegant glass bottle",
          "All-natural ingredients",
          "No artificial flavors or preservatives",
          "Limited production of 500 bottles per year",
          "Handcrafted in our historic distillery",
        ],
        features: [
          "Complex flavor profile with notes of cinnamon, cardamom, cloves, and ginger",
          "Warm, comforting finish",
          "Presented in a hand-blown glass decanter",
          "Includes certificate of authenticity",
          "Elegant gift packaging available",
        ],
        tastingNotes: [
          "Opening: Warm cinnamon and clove with a hint of black tea",
          "Mid-palate: Rich cardamom and ginger spice notes",
          "Finish: Lingering black pepper warmth with subtle sweetness",
        ],
        pairingNotes: "Complements desserts with warming spices, or enjoyed on its own as a comforting evening ritual.",
        servingSuggestion:
          "Best enjoyed warm in small sips. Allow the complex spice notes to unfold gradually with each taste.",
        images: [
          "/images/products/masala-chai.png",
          "/images/products/masala-chai.png",
          "/images/products/masala-chai.png",
          "/images/products/masala-chai.png",
        ],
        category: "Reserve Collection",
        quote: "The wisdom of ancient spices, captured in a moment of stillness.",
      },
    }

    return products[slug as keyof typeof products] || products["cardamom-infused-mixed-berry"]
  }

  const product = getProductData(params.slug)

  // Get other products for related products section
  const getRelatedProducts = (currentSlug: string) => {
    const allProducts = [
      {
        name: "Cardamom-infused Mixed Berry",
        price: 129,
        image: "/images/products/mixed-berry.png",
        category: "Signature Collection",
        slug: "cardamom-infused-mixed-berry",
      },
      {
        name: "Mango-ginger with Turmeric",
        price: 149,
        image: "/images/products/mango-ginger.png",
        category: "Limited Edition",
        slug: "mango-ginger-with-turmeric",
      },
      {
        name: "Lemon-mint with Tulsi",
        price: 139,
        image: "/images/products/lemon-mint.png",
        category: "Signature Collection",
        slug: "lemon-mint-with-tulsi",
      },
      {
        name: "Masala Chai Spice",
        price: 159,
        image: "/images/products/masala-chai.png",
        category: "Reserve Collection",
        slug: "masala-chai-spice",
      },
    ]

    return allProducts.filter((p) => p.slug !== currentSlug)
  }

  const relatedProducts = getRelatedProducts(params.slug)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

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
      <main className="flex-1 product-page py-20">
        <div className="container-luxury">
          <nav className="mb-12 flex items-center gap-2 text-sm text-[#444444]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-[#1A1A1A] transition-colors duration-300">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#1A1A1A]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/10 bg-white flex items-center justify-center p-8 shadow-sm">
                <div className="relative h-[500px] w-full">
                  {/* Radial gradient background for better product visibility */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>

                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] product-hover-glow transition-all duration-500 hover:scale-105"
                  />

                  {/* Light glint effect */}
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#D4AF37]/60 rounded-full blur-[1px] animate-pulse"></div>
                  <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#D4AF37]/40 rounded-full blur-[1px] animate-pulse animation-delay-700"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-[#D4AF37]/10 bg-white p-2 shadow-sm hover:border-[#D4AF37]/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 2}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2">{product.category}</div>
                <h1 className="text-4xl font-playfair font-light tracking-tight text-[#1A1A1A] product-title">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 4 ? "fill-[#D4AF37] text-[#D4AF37]" : "fill-[#D4AF37]/20 text-[#D4AF37]/20"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-[#444444]">(42 reviews)</span>
                  </div>
                  <span className="text-sm text-[#444444]">|</span>
                  <span className="text-sm text-[#444444]">In Stock</span>
                </div>
              </div>

              <div className="text-3xl font-serif text-[#D4AF37]">${product.price}</div>

              {/* Product quote - NEW */}
              <blockquote className="italic text-xl font-serif text-[#D4AF37]/80 border-l-2 border-[#D4AF37]/20 pl-4 my-6">
                {product.quote}
              </blockquote>

              <div className="space-y-4">
                <p className="text-[#444444] font-light leading-relaxed product-description">{product.description}</p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-4">
                  <span className="font-medium text-[#1A1A1A]">Quantity</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-r-none border-[#D4AF37]/20 text-[#2E2E2E] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <div className="flex h-8 w-12 items-center justify-center border-y border-[#D4AF37]/20 text-center">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-l-none border-[#D4AF37]/20 text-[#2E2E2E] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <Button className="flex-1 bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300 group">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#D4AF37]/20 text-[#2E2E2E] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="space-y-3 border-t border-[#D4AF37]/10 pt-6">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                  </div>
                  <span className="text-sm text-[#444444]">Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                  </div>
                  <span className="text-sm text-[#444444]">Secure payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                  </div>
                  <span className="text-sm text-[#444444]">Exclusive to Darkmont Elixir</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tasting Notes Section - IMPROVED */}
          <section className="mt-24">
            <h2 className="text-2xl font-playfair font-light text-[#1A1A1A] mb-8 text-center">
              The Sensory Experience
            </h2>

            <div className="tabs flex justify-center gap-6 mb-8 font-serif text-sm border-b border-[#D4AF37]/10">
              <button
                className={`tab pb-2 transition-all duration-300 ${
                  activeTab === "details"
                    ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                    : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`tab pb-2 transition-all duration-300 ${
                  activeTab === "tasting"
                    ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                    : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                }`}
                onClick={() => setActiveTab("tasting")}
              >
                Tasting Notes
              </button>
              <button
                className={`tab pb-2 transition-all duration-300 ${
                  activeTab === "serving"
                    ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                    : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                }`}
                onClick={() => setActiveTab("serving")}
              >
                Serving Ritual
              </button>
              <button
                className={`tab pb-2 transition-all duration-300 ${
                  activeTab === "reviews"
                    ? "border-b-2 border-[#B89B68] text-[#1A1A1A] opacity-100"
                    : "border-b-2 border-transparent text-[#2E2E2E] opacity-60 hover:opacity-100 hover:border-[#B89B68]/50"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>

            <div className="tab-content p-8 font-serif text-[#2E2E2E] bg-[#FAF9F6] border border-[#E6E2DC] rounded-lg shadow-sm max-w-3xl mx-auto">
              {activeTab === "details" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Product Details</h3>
                  <ul className="list-inside space-y-3 text-[#444444]">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></div>
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-medium text-[#1A1A1A] mt-8 mb-4">Features</h3>
                  <ul className="list-inside space-y-3 text-[#444444]">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "tasting" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Tasting Journey</h3>
                  <div className="space-y-6">
                    {product.tastingNotes.map((note, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-4 w-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></div>
                          </div>
                          <span className="font-medium text-[#1A1A1A]">{note.split(":")[0]}:</span>
                        </div>
                        <p className="text-[#444444] ml-7">{note.split(":")[1]}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4AF37]/10">
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Pairing Suggestions</h3>
                    <p className="text-[#444444] italic">{product.pairingNotes}</p>
                  </div>
                </div>
              )}

              {activeTab === "serving" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">The Ritual</h3>
                  <p className="text-[#444444] leading-relaxed">{product.servingSuggestion}</p>

                  <div className="mt-8 p-6 bg-white border border-[#D4AF37]/10 rounded-lg">
                    <h4 className="text-base font-medium text-[#1A1A1A] mb-3">Recommended Steps</h4>
                    <ol className="list-decimal list-inside space-y-3 text-[#444444]">
                      <li>Chill the bottle to the recommended temperature (14°C).</li>
                      <li>Select a crystal glass with a wide rim to capture the aromas.</li>
                      <li>Pour slowly, allowing the elixir to cascade gently.</li>
                      <li>Let rest for 30 seconds to release the full bouquet.</li>
                      <li>Sip slowly, allowing the flavors to unfold on your palate.</li>
                    </ol>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-8">
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Customer Reviews</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] font-serif">JP</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-[#1A1A1A]">Jonathan Pierce</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "fill-[#D4AF37] text-[#D4AF37]" : "fill-[#D4AF37]/20 text-[#D4AF37]/20"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-[#444444]">Verified Purchase - March 15, 2023</p>
                        <p className="mt-3 text-[#444444]">
                          The {product.name} is truly exceptional. The complexity of flavors and the smooth finish make
                          it my go-to for special occasions. Worth every penny.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] font-serif">VH</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-[#1A1A1A]">Victoria Harrington</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "fill-[#D4AF37] text-[#D4AF37]" : "fill-[#D4AF37]/20 text-[#D4AF37]/20"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-[#444444]">Verified Purchase - February 3, 2023</p>
                        <p className="mt-3 text-[#444444]">
                          As someone who has tasted the finest elixirs worldwide, I can confidently say that Darkmont
                          Elixir stands in a league of its own. The {product.name} has a remarkable depth of flavor.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] font-serif">AR</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-[#1A1A1A]">Alexander Rothschild</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "fill-[#D4AF37] text-[#D4AF37]" : "fill-[#D4AF37]/20 text-[#D4AF37]/20"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-[#444444]">Verified Purchase - January 12, 2023</p>
                        <p className="mt-3 text-[#444444]">
                          The packaging alone is a work of art, but the elixir inside is truly divine. The balance of
                          flavors is perfect, and the finish is incredibly smooth. A masterpiece.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Founder Signature - NEW */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <svg className="signature-animation h-12 w-48" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 100,25 C110,10 120,40 130,25 C140,10 150,40 160,25 C170,10 180,40 190,25"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />
              </svg>
              <span className="absolute -bottom-6 left-0 right-0 text-center font-serif text-[#D4AF37]/80 italic">
                Edward Darkmont, Founder
              </span>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-24">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-playfair font-light text-[#1A1A1A]">You May Also Like</h2>
                <p className="mt-2 text-[#444444] font-light">Explore similar premium elixirs</p>
              </div>
              <Link
                href="/products"
                className="flex items-center gap-2 text-[#D4AF37] hover:text-[#B38728] group transition-all duration-300"
              >
                <span>View All Products</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
