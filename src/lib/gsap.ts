import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register core plugins so they are available globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export * from "gsap"
export { ScrollTrigger }
