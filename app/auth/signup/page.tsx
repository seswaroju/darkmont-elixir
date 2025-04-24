"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Logo from "@/components/logo"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      // In a real implementation, this would connect to an authentication service
      console.log("Signing up with:", name, email, password)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to home page after successful registration
      window.location.href = "/"
    } catch (err) {
      setError("An error occurred during registration. Please try again.")
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

      <div className="container-luxury flex-1 flex flex-col items-center justify-center relative z-10 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo centered={true} />
          </div>

          <div className="bg-charcoal-light/50 backdrop-blur-md border border-gold-light/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-light text-ivory">Join the Inner Circle</h1>
              <p className="mt-2 text-ivory/60 font-extralight">Create your account to access exclusive benefits</p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-burgundy/20 border border-burgundy/30 rounded text-ivory/90 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-light text-ivory/80">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-charcoal border-gold-light/30 text-ivory focus:border-gold-light"
                  placeholder="John Doe"
                />
              </div>

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
                <label htmlFor="password" className="block text-sm font-light text-ivory/80">
                  Password
                </label>
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

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-light text-ivory/80">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-charcoal border-gold-light/30 text-ivory focus:border-gold-light"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="border-gold-light/50 data-[state=checked]:bg-gold-dark data-[state=checked]:border-gold-dark"
                />
                <label htmlFor="terms" className="text-xs text-ivory/70 font-extralight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-gold-light hover:text-gold">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-gold-light hover:text-gold">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gold-dark text-charcoal hover:bg-gold hover:text-charcoal"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-ivory/60">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-gold-light hover:text-gold">
                  Sign in
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
