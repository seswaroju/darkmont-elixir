"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Logo from "@/components/logo"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Cardamom-infused Mixed Berry",
      price: 129,
      image: "/images/products/mixed-berry.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Mango-ginger with Turmeric",
      price: 149,
      image: "/images/products/mango-ginger.png",
      quantity: 2,
    },
    {
      id: 3,
      name: "Lemon-mint with Tulsi",
      price: 139,
      image: "/images/products/lemon-mint.png",
      quantity: 1,
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 15
  const total = subtotal + shipping

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <MainNav />
          <div className="flex items-center gap-6">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-xs">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="hidden border-amber-700 text-amber-500 hover:bg-zinc-900 hover:border-amber-500 sm:flex"
            >
              Sign In
            </Button>
            <Button className="hidden bg-amber-700 text-white hover:bg-amber-800 sm:flex">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Shopping Cart</span>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="mt-2 text-zinc-400">Review your items before proceeding to checkout</p>

          {cartItems.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 p-12 text-center">
              <ShoppingCart className="h-12 w-12 text-zinc-600" />
              <h2 className="mt-4 text-xl font-medium">Your cart is empty</h2>
              <p className="mt-2 text-zinc-400">Looks like you haven't added any items to your cart yet.</p>
              <Button asChild className="mt-6 bg-amber-700 text-white hover:bg-amber-800">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-zinc-800">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium">
                                <h3>
                                  <Link
                                    href={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="hover:text-amber-500"
                                  >
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="ml-4">${item.price * item.quantity}</p>
                              </div>
                              <p className="mt-1 text-sm text-zinc-400">Signature Collection</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7 rounded-r-none border-zinc-800 text-white hover:bg-zinc-900"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <div className="flex h-7 w-10 items-center justify-center border-y border-zinc-800 text-center text-sm">
                                  {item.quantity}
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7 rounded-l-none border-zinc-800 text-white hover:bg-zinc-900"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-zinc-400 hover:text-white"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="mr-1 h-4 w-4" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
                  <h2 className="text-lg font-medium">Order Summary</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-400">Subtotal</p>
                      <p className="text-sm font-medium">${subtotal}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-400">Shipping</p>
                      <p className="text-sm font-medium">${shipping}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-400">Tax</p>
                      <p className="text-sm font-medium">Calculated at checkout</p>
                    </div>
                    <Separator className="border-zinc-800" />
                    <div className="flex items-center justify-between">
                      <p className="text-base font-medium">Total</p>
                      <p className="text-base font-medium">${total}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-4">
                      <label htmlFor="coupon" className="block text-sm font-medium">
                        Coupon Code
                      </label>
                      <div className="mt-1 flex">
                        <Input
                          type="text"
                          id="coupon"
                          placeholder="Enter coupon code"
                          className="rounded-r-none border-zinc-800 bg-black text-white placeholder:text-zinc-500"
                        />
                        <Button className="rounded-l-none bg-amber-700 text-white hover:bg-amber-800">Apply</Button>
                      </div>
                    </div>

                    <Button className="w-full bg-amber-700 text-white hover:bg-amber-800">Proceed to Checkout</Button>

                    <div className="mt-4 text-center text-sm text-zinc-400">
                      <p>Secure checkout powered by Stripe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
