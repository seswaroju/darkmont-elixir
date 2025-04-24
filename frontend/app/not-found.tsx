import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] text-[#2E2E2E] p-4">
      <div className="max-w-md text-center">
        <Logo centered={true} />

        <h1 className="mt-12 text-4xl font-playfair font-light text-[#1A1A1A]">You've wandered off path...</h1>

        <p className="mt-6 text-[#444444] font-light">
          The page you're looking for seems to have been misplaced, like a rare ingredient in our distillery.
        </p>

        <div className="mt-12 relative h-40 w-40 mx-auto">
          <Image src="/images/darkmont-d-logo.png" alt="Darkmont Elixir" fill className="object-contain opacity-30" />
        </div>

        <Button asChild className="mt-12 bg-[#D4AF37] text-white hover:bg-[#B38728] transition-all duration-300">
          <Link href="/" className="inline-flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
