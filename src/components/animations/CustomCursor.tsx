import React, { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import { cn } from "@/utils/cn"

interface CustomCursorProps {
  className?: string
}

/**
 * CustomCursor
 * High-performance cursor follower utilizing GSAP quickTo.
 * Supports magnetic and custom hover states using data attributes (e.g. `data-cursor="view"`).
 */
export const CustomCursor: React.FC<CustomCursorProps> = ({ className }) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const [cursorText, setCursorText] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const cursorOuter = cursorOuterRef.current
    const cursorInner = cursorInnerRef.current

    if (!cursorOuter || !cursorInner || typeof window === "undefined") return

    // GSAP quickTo for smooth lagging follow
    const xToOuter = gsap.quickTo(cursorOuter, "x", { duration: 0.4, ease: "power3" })
    const yToOuter = gsap.quickTo(cursorOuter, "y", { duration: 0.4, ease: "power3" })
    
    const xToInner = gsap.quickTo(cursorInner, "x", { duration: 0.1, ease: "power2.out" })
    const yToInner = gsap.quickTo(cursorInner, "y", { duration: 0.1, ease: "power2.out" })

    const onMouseMove = (e: MouseEvent) => {
      // Set to visible on first move
      if (!isVisible) setIsVisible(true)
      
      const { clientX: x, clientY: y } = e
      
      // Offset cursor sizes
      xToOuter(x - 16) // outer circle radius (32px / 2)
      yToOuter(y - 16)
      
      xToInner(x - 3)  // inner dot radius (6px / 2)
      yToInner(y - 3)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    // Dynamic hover states via event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorAttr = target.closest("[data-cursor]")
      
      if (cursorAttr) {
        setIsHovered(true)
        const type = cursorAttr.getAttribute("data-cursor")
        if (type && type !== "true") {
          setCursorText(type)
        }
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorAttr = target.closest("[data-cursor]")
      
      if (cursorAttr) {
        setIsHovered(false)
        setCursorText("")
      }
    }

    // Bind event listeners
    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)
    window.addEventListener("mouseover", onMouseOver)
    window.addEventListener("mouseout", onMouseOut)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
      window.removeEventListener("mouseover", onMouseOver)
      window.removeEventListener("mouseout", onMouseOut)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 mix-blend-difference hidden md:block transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {/* Outer Follower Ring */}
      <div
        ref={cursorOuterRef}
        className={cn(
          "absolute h-8 w-8 rounded-full border border-white transition-all duration-300 ease-out",
          isHovered && "h-14 w-14 border-white/40 bg-white/10"
        )}
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-white">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Pinpoint Dot */}
      <div
        ref={cursorInnerRef}
        className={cn(
          "absolute h-[6px] w-[6px] rounded-full bg-white transition-transform duration-200",
          isHovered && "scale-[0.2]"
        )}
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      />
    </div>
  )
}
