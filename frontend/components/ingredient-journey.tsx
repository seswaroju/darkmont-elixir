"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface IngredientJourneyProps {
  steps: {
    title: string
    description: string
    image: string
  }[]
}

export function IngredientJourney({ steps }: IngredientJourneyProps) {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-gold-light/10 bg-charcoal-light/50 backdrop-blur-sm">
      <div className="relative h-[500px] w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeStep === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={step.image || "/placeholder.svg"}
              alt={step.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-gold-light/50"></div>
                <span className="text-gold-light text-sm uppercase tracking-widest">Step {index + 1}</span>
              </div>
              <h3 className="text-2xl font-playfair text-ivory mb-4">{step.title}</h3>
              <p className="text-ivory/70 font-extralight tracking-wide leading-relaxed max-w-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextStep}
        className="absolute bottom-8 right-8 flex items-center gap-2 text-gold-light hover:text-gold transition-colors duration-300 group"
      >
        <span className="text-sm uppercase tracking-widest">Next</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <div className="absolute top-8 right-8 flex gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeStep === index ? "bg-gold-light w-6" : "bg-gold-light/30"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
