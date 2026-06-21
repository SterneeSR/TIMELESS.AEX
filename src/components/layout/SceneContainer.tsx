import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Preload } from "@react-three/drei"
import { cn } from "@/utils/cn"

interface SceneContainerProps {
  children?: React.ReactNode
  className?: string
}

/**
 * SceneContainer
 * Houses the global React Three Fiber canvas for 3D elements and shaders.
 * Fixed to the viewport background, overlaying underneath content.
 */
export const SceneContainer: React.FC<SceneContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden",
        className
      )}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, 1.5]} // Capped DPR for mobile performance
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 5],
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          {/* Placeholder lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 3]} intensity={0.8} />
          <pointLight position={[-5, -5, -2]} intensity={0.2} />

          {/* User Scene Content */}
          {children}

          {/* Preload resources */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
