"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, ShoppingCart, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MainNav from "@/components/main-nav"
import Logo from "@/components/logo"
import { PressLogo } from "@/components/press-logo"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"


export default function Home() {
  // Fix the hero section and scrolling issues
  const heroRef = useRef<HTMLDivElement>(null)
  const crownJewelRef = useRef<HTMLElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const pourAudioRef = useRef<HTMLAudioElement | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  type Product = {
    id: number;
    name: string;
    price: number;
    flavor: string;
  };
  
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('http://localhost:5050/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5050/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("❌ Failed to connect to backend"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-green-600">
        {message || "Connecting..."}
      </h1>
    </main>
  );

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Initialize audio
  useEffect(() => {
    pourAudioRef.current = new Audio("/sounds/pour-sound.mp3")
    pourAudioRef.current.volume = 0.3
  }, [])

  // Play sound on button hover if enabled
  const playPourSound = () => {
    if (audioEnabled && pourAudioRef.current) {
      pourAudioRef.current.currentTime = 0
      pourAudioRef.current.play().catch((e) => console.log("Audio play prevented:", e))
    }
  }

  // Scroll to crown jewel section
  const scrollToCrownJewel = () => {
    if (crownJewelRef.current) {
      crownJewelRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Simplify the parallax effect to ensure it works properly
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      if (scrollPosition < window.innerHeight) {
        const translateY = scrollPosition * 0.2 // Reduced intensity for better performance
        heroRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reveal animation for elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal-element").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Fix the header scroll state detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        // Lower threshold for better responsiveness
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle newsletter signup
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would connect to a newsletter service
    console.log("Newsletter signup:", email)
    setEmail("")
    // Show success message or toast notification
  }

  // Ingredient journey steps
  const journeySteps = [
    {
      title: "Hand-Harvested Ingredients",
      description:
        "Our berries are hand-harvested under moonlight from the pristine Nordic forests, when their essential oils reach peak potency. Each berry is carefully selected for its perfect ripeness and flavor profile.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      title: "Small-Batch Distillation",
      description:
        "Using our century-old copper stills, our master distillers carefully extract the essence of each ingredient. The process is monitored by hand, ensuring that every batch meets our exacting standards.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      title: "Aged to Perfection",
      description:
        "Each elixir is aged for 24 months in rare oak barrels within our temperature-controlled underground cellars, allowing the flavors to develop their full complexity and depth.",
      image: "/placeholder.svg?height=500&width=800",
    },
  ]

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-[#2E2E2E] font-sans">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Monogram Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 monogram-pattern"></div>
      </div>

      {/* Parchment Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 parchment-texture"></div>
      </div>

      {/* Leaf Illustrations - NEW */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40">
          <Leaf className="w-full h-full text-[#8A9A5B]" />
        </div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 transform rotate-45">
          <Leaf className="w-full h-full text-[#8A9A5B]" />
        </div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 transform -rotate-15">
          <Leaf className="w-full h-full text-[#8A9A5B]" />
        </div>
      </div>

      {/* Fix the header class to properly apply the scrolled styles */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#8A9A5B]/5 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-luxury flex h-24 items-center justify-between py-4">
          {/* Logo moved to left - NEW */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation in center - NEW */}
          <div className="flex-1 flex justify-center">
            <MainNav isTransparent={!scrolled} />
          </div>

          {/* Cart and buttons on right - UPDATED */}
          <div className="flex items-center gap-8">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-gray-900 hover:bg-[#8A9A5B]/5 group">
                <ShoppingCart className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8A9A5B] text-white text-xs">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button
                variant="outline"
                className="hidden border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-[#8A9A5B]/30 sm:flex transition-all duration-300"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="hidden bg-[#8A9A5B] text-white hover:bg-[#7A8A4B] hover:text-white sm:flex transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 z-10">
        {/* Hero Section - UPDATED with new content */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
          {/* Background with subtle texture and radial gradient */}
          <div className="absolute inset-0 z-0" ref={heroRef}>
            <div className="absolute inset-0 bg-gradient-radial from-white via-[#FAF9F6] to-[#F4F1EB]/50"></div>

            {/* Subtle linen texture */}
            <div className="absolute inset-0 bg-texture-linen opacity-[0.03] mix-blend-soft-light"></div>

            {/* Subtle botanical pattern */}
            <div className="absolute inset-0 botanical-pattern opacity-[0.02]"></div>
          </div>

          {/* Content */}
          <div className="container-luxury relative z-20 flex flex-col items-center justify-center px-4 py-16 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text & CTAs */}
              <div className="flex flex-col items-start text-left reveal-element w-1/2 pr-8">
                <div className="mb-4 overflow-hidden">
                  {/* NEW headline and subheading with updated colors */}
                  <h1 className="font-playfair text-5xl font-bold tracking-wider leading-relaxed sm:text-6xl md:text-7xl text-balance slide-up text-gray-900">
                    <span className="block mb-4">Refresh Your</span>
                    <span className="block mb-4">Wellness</span>
                    <span className="text-[#8A9A5B] italic">Journey.</span>
                  </h1>
                </div>

                <div className="overflow-hidden">
                  {/* NEW subheading with updated colors */}
                  <p className="mt-8 max-w-xl text-xl text-gray-700 font-light tracking-wide leading-relaxed slide-up-delay-1">
                    Premium prebiotic drinks crafted with natural ingredients for gut health and vitality.
                  </p>
                  <p className="mt-2 max-w-xl text-lg text-[#8A9A5B]/90 font-serif italic tracking-wide leading-relaxed slide-up-delay-1">
                    Botanicals, refined to ritual. Sip slowly.
                  </p>
                </div>

                {/* NEW benefit badge */}
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-[#F7F4EE] rounded-full border border-[#8A9A5B]/20">
                  <div className="w-4 h-4 mr-2 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#8A9A5B]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Supports Digestive Health</span>
                </div>

                <div className="relative mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md reveal-element">
                  {/* NEW primary CTA with updated colors */}
                  <Button
                    className="relative bg-[#8A9A5B] text-white hover:bg-[#7A8A4B] overflow-hidden group px-8 py-3"
                    onMouseEnter={playPourSound}
                  >
                    <span className="relative z-10 font-medium text-base tracking-wide flex items-center">
                      Shop Now
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>

                  {/* NEW secondary CTA with updated colors */}
                  <Link
                    href="/about"
                    className="flex items-center justify-center gap-2 text-gray-800 hover:text-[#7A8A4B] group transition-all duration-300 border border-gray-300 rounded-md px-8 py-3 hover:bg-gray-50"
                  >
                    <span className="font-medium">Learn More</span>
                  </Link>
                </div>

                {/* Product tag - NEW */}
                <div className="mt-10 bg-[#F7F4EE] p-4 rounded-lg border border-[#8A9A5B]/10 max-w-xs">
                  <p className="text-xs uppercase tracking-widest text-[#8A9A5B]/70 mb-1">Featured Product</p>
                  <h3 className="text-lg font-serif text-gray-900">Lemon Prebiotic Drink</h3>
                  <p className="text-sm text-gray-700 mt-1">Refreshing citrus with prebiotics for gut health</p>
                </div>

                {/* Press Mentions - UNCHANGED */}
                <div className="mt-16 reveal-element slide-up-delay-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-light">As Featured In</p>
                  <div className="flex flex-wrap items-center gap-8">
                    <PressLogo name="Vogue" />
                    <PressLogo name="Forbes" />
                    <PressLogo name="Robb Report" />
                    <PressLogo name="Financial Times" />
                  </div>
                </div>
              </div>

              {/* Right Side - Product Spotlight with lighter styling */}
              <div className="flex flex-col items-center">
                {/* Enhanced product presentation with soft glow */}
                <div className="relative">
                  {/* Soft radial gradient background */}
                  <div className="absolute -inset-4 bg-gradient-radial from-white via-[#FAF9F6] to-transparent rounded-full"></div>

                  {/* Subtle reflective surface */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[30px]">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#8A9A5B]/10 to-transparent rounded-full blur-md"></div>
                    <div className="w-3/4 h-[1px] mx-auto bg-[#8A9A5B]/5"></div>
                  </div>

                  {/* Product container with softer shadow */}
                  <div className="w-[300px] h-[500px] flex items-center justify-center relative">
                    <div className="relative product-hover-glow">
                      <Image
                        src="/images/products/lemon-mint.png"
                        alt="Lemon-mint with Tulsi Elixir"
                        width={250}
                        height={450}
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
                        priority
                      />

                      {/* Light glint effect */}
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#8A9A5B]/60 rounded-full blur-[1px] animate-pulse"></div>
                      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#8A9A5B]/40 rounded-full blur-[1px] animate-pulse animation-delay-700"></div>

                      {/* Product badge with lighter styling */}
                      <div className="absolute -right-10 top-10 bg-gradient-to-r from-[#8A9A5B]/70 to-[#8A9A5B]/50 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-[#8A9A5B]/10 shadow-lg transform rotate-12 font-serif text-sm">
                        <span className="drop-shadow-sm">Limited Edition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator with animation - UPDATED */}
          <button
            onClick={scrollToCrownJewel}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 animate-float-gentle group"
          >
            <p className="text-[#8A9A5B]/70 text-xs tracking-widest uppercase mb-3 font-light group-hover:text-[#8A9A5B] transition-colors duration-300">
              Discover Our Flavors
            </p>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#8A9A5B]/20 group-hover:border-[#8A9A5B]/40 transition-colors duration-300">
              <ChevronDown className="h-4 w-4 text-[#8A9A5B]/60 group-hover:text-[#8A9A5B] transition-colors duration-300" />
            </div>
          </button>
        </section>

        {/* Product Tease Section - NEW */}
        <section ref={crownJewelRef} className="py-24 relative overflow-hidden">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-light text-[#1A1A1A] mb-4">Our Signature Elixirs</h2>
              <p className="text-[#444444] font-light max-w-2xl mx-auto">
                Each elixir in our collection tells a unique story, offering a distinct sensory experience crafted for
                those who appreciate the extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Elixir 1 */}
              <div className="group">
                <Link href="/products/cardamom-infused-mixed-berry" className="block">
                  <div className="relative h-[350px] overflow-hidden rounded-lg mb-4 bg-white p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5">
                    <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src="/images/products/mixed-berry.png"
                        alt="Cardamom-infused Mixed Berry"
                        width={150}
                        height={300}
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <span className="text-xs font-serif italic text-[#D4AF37]">View Ritual →</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 text-center">
                    Cardamom-infused Mixed Berry
                  </h3>
                  <p className="text-[#444444]/80 text-sm font-light text-center mt-1">
                    Bright berries layered with warm cardamom. Crisp, deep, and calm.
                  </p>
                </Link>
              </div>

              {/* Elixir 2 */}
              <div className="group">
                <Link href="/products/mango-ginger-with-turmeric" className="block">
                  <div className="relative h-[350px] overflow-hidden rounded-lg mb-4 bg-white p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5">
                    <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src="/images/products/mango-ginger.png"
                        alt="Mango-ginger with Turmeric"
                        width={150}
                        height={300}
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <span className="text-xs font-serif italic text-[#D4AF37]">View Ritual →</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 text-center">
                    Mango-ginger with Turmeric
                  </h3>
                  <p className="text-[#444444]/80 text-sm font-light text-center mt-1">
                    Tropical sweetness meets warming spice. Vibrant, complex, and grounding.
                  </p>
                </Link>
              </div>

              {/* Elixir 3 */}
              <div className="group">
                <Link href="/products/lemon-mint-with-tulsi" className="block">
                  <div className="relative h-[350px] overflow-hidden rounded-lg mb-4 bg-white p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5">
                    <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src="/images/products/lemon-mint.png"
                        alt="Lemon-mint with Tulsi"
                        width={150}
                        height={300}
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <span className="text-xs font-serif italic text-[#D4AF37]">View Ritual →</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 text-center">
                    Lemon-mint with Tulsi
                  </h3>
                  <p className="text-[#444444]/80 text-sm font-light text-center mt-1">
                    Zesty citrus meets cooling mint. Refreshing, bright, and uplifting.
                  </p>
                </Link>
              </div>

              {/* Elixir 4 */}
              <div className="group">
                <Link href="/products/masala-chai-spice" className="block">
                  <div className="relative h-[350px] overflow-hidden rounded-lg mb-4 bg-white p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5">
                    <div className="absolute inset-0 bg-gradient-radial from-[#f5f5f5] to-white opacity-50"></div>
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src="/images/products/masala-chai.png"
                        alt="Masala Chai Spice"
                        width={150}
                        height={300}
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <span className="text-xs font-serif italic text-[#D4AF37]">View Ritual →</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 text-center">
                    Masala Chai Spice
                  </h3>
                  <p className="text-[#444444]/80 text-sm font-light text-center mt-1">
                    Warming spices in perfect harmony. Comforting, complex, and meditative.
                  </p>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#8A9A5B] hover:text-[#7A8A4B] group transition-all duration-300 font-serif"
              >
                <span>Explore the full collection</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ritual Story Section - NEW */}
        <section className="py-24 bg-[#FCFBF8]">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative overflow-hidden rounded-lg h-[500px] reveal-element">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Ritual moment"
                  fill
                  className="object-cover object-center hover:scale-105 transition-all duration-3000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent"></div>
              </div>

              <div className="reveal-element">
                <h2 className="text-3xl font-playfair font-light text-[#1A1A1A] mb-8">The Art of Ritual</h2>

                <div className="space-y-6 text-[#444444] font-light leading-relaxed">
                  <p>
                    In a world that moves ever faster, we stand for slowness. For intention. For the kind of attention
                    to detail that can only come from dedicating oneself to mastery.
                  </p>

                  <blockquote className="border-l-2 border-[#D4AF37]/30 pl-6 italic text-xl font-serif text-[#D4AF37]/90 my-8">
                    "Time slows. Senses awaken. A moment becomes eternal."
                  </blockquote>

                  <p>
                    Each Darkmont Elixir is an invitation to pause—to create a moment of presence in your day. To notice
                    the subtle interplay of flavors, the gentle cascade of aromas, the way light plays through the
                    liquid in your glass.
                  </p>

                  <p>This is not consumption. This is communion with craft.</p>
                </div>

                <Link
                  href="/philosophy"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B38728] group mt-8 transition-all duration-300"
                >
                  <span className="font-serif italic">Discover our philosophy</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote Section - NEW */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-linen opacity-[0.03]"></div>

          <div className="container-luxury relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <Image
                  src="/images/darkmont-d-logo.png"
                  alt="Darkmont Logo"
                  width={60}
                  height={60}
                  className="opacity-60 mx-auto"
                />
              </div>

              <blockquote className="text-2xl font-serif italic text-[#1A1A1A] mb-8">
                "When I established Darkmont in 1897, I sought to create not merely a beverage, but an experience that
                transcends time—a moment of reflection and appreciation for the finer elements of life."
              </blockquote>

              <p className="text-[#444444] font-light mb-6">
                Each bottle represents our unwavering commitment to perfection—a testament to the belief that true
                luxury lies in the meticulous attention to detail and the patience to allow nature's finest ingredients
                to reveal their essence.
              </p>

              <div className="mt-12 flex justify-center">
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
                  <span className="absolute -bottom-6 left-0 right-0 text-center font-serif text-[#D4AF37]/80 italic">
                    Edward Darkmont, Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Preview Section - NEW */}
        <section className="py-24 bg-[#FCFBF8]">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-light text-[#1A1A1A] mb-4">From Our Journal</h2>
              <p className="text-[#444444] font-light max-w-2xl mx-auto">
                Insights, stories, and reflections from the world of Darkmont Elixir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Journal Entry 1 */}
              <div className="group">
                <Link href="/journal/the-story-behind-cardamom-elixir" className="block">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="The Story Behind Cardamom Elixir"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-light mb-2 inline-block">
                    Craft & Process
                  </span>
                  <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                    The Story Behind Cardamom Elixir
                  </h3>
                  <p className="text-[#444444] font-light">
                    How a chance encounter in a spice market led to our signature blend. Discover the journey from
                    concept to creation.
                  </p>
                  <span className="mt-4 inline-flex items-center text-[#D4AF37] group-hover:text-[#B38728] transition-colors duration-300 font-serif italic">
                    Read More{" "}
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              {/* Journal Entry 2 */}
              <div className="group">
                <Link href="/journal/rituals-of-stillness" className="block">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Rituals of Stillness"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-light mb-2 inline-block">
                    Philosophy
                  </span>
                  <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                    Rituals of Stillness: How We Slow Down
                  </h3>
                  <p className="text-[#444444] font-light">
                    In a world that moves ever faster, we explore the art of intentional pauses. Our founder shares
                    personal rituals.
                  </p>
                  <span className="mt-4 inline-flex items-center text-[#D4AF37] group-hover:text-[#B38728] transition-colors duration-300 font-serif italic">
                    Read More{" "}
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              {/* Journal Entry 3 */}
              <div className="group">
                <Link href="/journal/ferment-with-purpose" className="block">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Why We Ferment with Purpose"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-light mb-2 inline-block">
                    Craft & Process
                  </span>
                  <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                    Why We Ferment with Purpose, Not Pressure
                  </h3>
                  <p className="text-[#444444] font-light">
                    The science and art behind our unique fermentation process. Learn how patience yields complexity.
                  </p>
                  <span className="mt-4 inline-flex items-center text-[#D4AF37] group-hover:text-[#B38728] transition-colors duration-300 font-serif italic">
                    Read More{" "}
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B38728] group transition-all duration-300 font-serif"
              >
                <span>View all journal entries</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section - NEW */}
        <section className="py-24">
          <div className="container-luxury">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-light text-[#1A1A1A] mb-4">Join the Ritual</h2>
              <p className="text-[#444444] font-light mb-8">
                Subscribe to receive exclusive insights, early access to limited releases, and invitations to our
                private tasting events.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow border-[#D4AF37]/20 focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/10"
                />
                <Button
                  type="submit"
                  className="bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300"
                >
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-[#444444]/70 mt-4">
                We respect your privacy and will never share your information. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with lighter styling */}
      <footer className="border-t border-[#D4AF37]/5 bg-white">
        <div className="container-luxury py-16">
          <div className="flex flex-col items-center mb-12">
            <div className="relative h-16 w-16">
              <Image
                src="/images/darkmont-d-logo.png"
                alt="Darkmont Elixir"
                fill
                className="object-contain opacity-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <p className="text-sm text-[#444444]/90 font-extralight tracking-wide leading-relaxed max-w-md drop-cap">
                Crafting exceptional elixirs for the most discerning palates since 1897. Each bottle represents our
                unwavering commitment to perfection—a testament to the belief that true luxury lies in the meticulous
                attention to detail.
              </p>
              <p className="mt-4 text-sm text-[#D4AF37]/70 font-serif italic">
                "Crafted in silence. Sipped in reverence."
              </p>

              {/* Social Links - NEW */}
              <div className="mt-6 flex space-x-4">
                <Link
                  href="https://instagram.com"
                  className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="p-2 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-[#D4AF37]/60">Explore</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/about" className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/philosophy"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journal"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-[#D4AF37]/60">Connect</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stockists"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Stockists
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#444444]/80 hover:text-[#D4AF37] transition-colors duration-300">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-[#D4AF37]/5 pt-8 text-center">
            <p className="text-sm text-[#444444]/50 font-extralight">
              © {new Date().getFullYear()} Darkmont Elixir. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
