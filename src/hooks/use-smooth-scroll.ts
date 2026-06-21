import { useSmoothScrollContext } from "@/components/layout/SmoothScrollProvider"

/**
 * Custom hook to access the global Lenis smooth scrolling instance.
 * Allows manually triggering scroll-to animations, pausing, and resuming scrolling.
 * 
 * @example
 * const { lenis } = useSmoothScroll()
 * lenis?.scrollTo("#target-section", { offset: -100 })
 */
export function useSmoothScroll() {
  return useSmoothScrollContext()
}
