interface PressLogoProps {
  name: string
}

export function PressLogo({ name }: PressLogoProps) {
  // Map of luxury publication names to their elegant styling
  const logoStyles: Record<string, { fontFamily: string; fontStyle?: string }> = {
    Vogue: { fontFamily: "var(--font-playfair)", fontStyle: "italic" },
    Forbes: { fontFamily: "var(--font-inter)" },
    "Robb Report": { fontFamily: "var(--font-cormorant)" },
    "Financial Times": { fontFamily: "var(--font-cormorant)", fontStyle: "italic" },
  }

  const style = logoStyles[name] || { fontFamily: "var(--font-cormorant)" }

  return (
    <div className="press-logo-container">
      <div className="text-ivory/80 text-lg tracking-wide press-logo-text" style={style}>
        {name}
      </div>
    </div>
  )
}
