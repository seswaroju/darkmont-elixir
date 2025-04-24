"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/components/logo"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // In a real implementation, this would connect to an authentication service
      console.log("Signing in with:", email, password)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to home page after successful login
      window.location.href = "/"
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-ivory flex flex-col">
      {/* Liquid Gold Background Animation */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-dark/20 to-transparent"></div>
        <div className="liquid-animation"></div>
      </div>

      <div className="container-luxury flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo centered={true} />
          </div>

          <div className="bg-charcoal-light/50 backdrop-blur-md border border-gold-light/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-light text-ivory">Welcome Back</h1>
              <p className="mt-2 text-ivory/60 font-extralight">Sign in to access your account</p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-burgundy/20 border border-burgundy/30 rounded text-ivory/90 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-light text-ivory/80">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-charcoal border-gold-light/30 text-ivory focus:border-gold-light"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-light text-ivory/80">
                    Password
                  </label>
                  <Link href="/auth/forgot-password" className="text-xs text-gold-light hover:text-gold">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-charcoal border-gold-light/30 text-ivory focus:border-gold-light"
                  placeholder="••••••••"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gold-dark text-charcoal hover:bg-gold hover:text-charcoal"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-ivory/60">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-gold-light hover:text-gold">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center text-ivory/60 hover:text-ivory text-sm">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
