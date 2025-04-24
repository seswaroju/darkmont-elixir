interface LuxuryCounterProps {
  count: number
  total: number
  label: string
}

export function LuxuryCounter({ count, total, label }: LuxuryCounterProps) {
  const percentage = (count / total) * 100

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-ivory/60 text-xs uppercase tracking-widest font-light">{label}</span>
        <span className="text-gold-light font-serif">
          {count} <span className="text-ivory/40 text-sm">of {total}</span>
        </span>
      </div>
      <div className="h-px w-full bg-ivory/10 relative">
        <div
          className="absolute top-0 left-0 h-px bg-gradient-to-r from-gold-light to-gold-dark transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
