import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  centered?: boolean
}

export default function Logo({ centered = false }: LogoProps) {
  if (centered) {
    return (
      <Link href="/" className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900/90 p-3 shadow-lg backdrop-blur-sm">
          <div className="relative h-full w-full animate-pulse">
            <Image
              src="/images/darkmont-d-logo.png"
              alt="Darkmont Elixir"
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
            />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href="/" className="flex items-center">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F4EE] p-2 shadow-sm">
        <div className="relative h-full w-full">
          <Image
            src="/images/darkmont-d-logo.png"
            alt="Darkmont Elixir"
            fill
            className="object-contain drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]"
          />
        </div>
      </div>
      <span className="ml-3 text-xl font-semibold tracking-wide text-gray-900">Darkmont Elixir</span>
    </Link>
  )
}
