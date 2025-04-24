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
              <p className="text-sm text-ivory/60 mb-2">or</p>
              <a
                href="http://localhost:5050/api/auth/google/login"
                className="inline-flex items-center justify-center w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.5 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8.1 3.1l6-6C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.5-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.1l6.6 4.8C14.3 15.2 18.8 12 24 12c3.1 0 5.9 1.2 8.1 3.1l6-6C34.6 6.5 29.6 4 24 4 16.3 4 9.6 8.5 6.3 14.1z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.8 35.1 27 36 24 36c-5.2 0-9.7-3.5-11.3-8.3l-6.6 5.1C9.6 39.5 16.3 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.5 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8.1 3.1l6-6C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.5-.4-3.5z"
                  />
                </svg>
                Sign in with Google
              </a>
            </div>

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
