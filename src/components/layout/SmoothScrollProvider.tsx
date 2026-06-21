import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface SmoothScrollContextType {
  lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const useSmoothScrollContext = () => useContext(SmoothScrollContext)

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Elegant exponential out curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis
    setLenisInstance(lenis)

    // 2. Connect Lenis scroll callback to GSAP ScrollTrigger updates
    lenis.on("scroll", () => {
      ScrollTrigger.update()
    })

    // 3. Connect Lenis RAF updates to the GSAP Ticker
    // GSAP ticker provides time in seconds, Lenis RAF expects milliseconds.
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000)
    }
    
    gsap.ticker.add(tickerUpdate)

    // Clean up
    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickerUpdate)
      lenisRef.current = null
      setLenisInstance(null)
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
