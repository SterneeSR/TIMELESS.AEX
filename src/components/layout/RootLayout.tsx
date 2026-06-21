import React from "react"
import { SmoothScrollProvider } from "./SmoothScrollProvider"
import { CustomCursor } from "@/components/animations/CustomCursor"
import { SceneContainer } from "./SceneContainer"
import { cn } from "@/utils/cn"
import { TopNavBar } from "./TopNavBar"
import { Footer } from "./Footer"

interface RootLayoutProps {
  children: React.ReactNode
  className?: string
}

/**
 * RootLayout
 * The structural core wrapper for the studio project.
 * Integrates:
 * - Smooth scroll contexts (Lenis)
 * - Canvas overlays (React Three Fiber)
 * - Custom interactive cursor (GSAP)
 * - Timeless.aex navigation and footer
 */
export const RootLayout: React.FC<RootLayoutProps> = ({ children, className }) => {
  return (
    <SmoothScrollProvider>
      <div
        className={cn(
          "relative min-h-screen w-full overflow-x-hidden bg-background text-on-background antialiased selection:bg-white selection:text-black flex flex-col dot-matrix-bg",
          className
        )}
      >
        {/* Backdrop 3D Scene Layer */}
        <SceneContainer />

        {/* Custom follower cursor */}
        <CustomCursor />

        <TopNavBar />

        {/* Main page content wrapper */}
        <main className="relative z-10 w-full min-h-screen flex-grow flex flex-col">
          {children}
        </main>
        
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
export default RootLayout
