import Image from "next/image"

export function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-logo">
        <div className="relative h-32 w-32 animate-spin-slow">
          <Image
            src="/images/darkmont-d-logo.png"
            alt="Darkmont Elixir"
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
          />
        </div>
      </div>
    </div>
  )
}
