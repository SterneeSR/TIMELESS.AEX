/**
 * Timeless.aex Design Tokens & Theme Configuration
 * Accessible in JavaScript/TypeScript for GSAP, Canvas, and style manipulation,
 * mirroring our Tailwind CSS configuration.
 */

export const theme = {
  colors: {
    dark: {
      background: "0 0% 3%", // hsl representation
      foreground: "0 0% 98%",
      primary: "0 0% 98%",
      primaryForeground: "0 0% 9%",
      secondary: "0 0% 12%",
      secondaryForeground: "0 0% 98%",
      muted: "0 0% 12%",
      mutedForeground: "0 0% 63.9%",
      accent: "0 0% 12%",
      accentForeground: "0 0% 98%",
      border: "0 0% 14.9%",
      input: "0 0% 14.9%",
      ring: "0 0% 83.1%",
    },
    light: {
      background: "0 0% 100%",
      foreground: "0 0% 3.9%",
      primary: "0 0% 9%",
      primaryForeground: "0 0% 98%",
      secondary: "0 0% 96.1%",
      secondaryForeground: "0 0% 9%",
      muted: "0 0% 96.1%",
      mutedForeground: "0 0% 45.1%",
      accent: "0 0% 96.1%",
      accentForeground: "0 0% 9%",
      border: "0 0% 89.8%",
      input: "0 0% 89.8%",
      ring: "0 0% 3.9%",
    },
  },
  easings: {
    // Elegant, slow-in, fast-out curves popular in high-end design portfolios
    studioExpo: [0.85, 0, 0.15, 1],
    studioExpoStr: "cubic-bezier(0.85, 0, 0.15, 1)",
    
    // Snappy, organic-feeling spring curve
    studioSpring: [0.43, 0.13, 0.23, 0.96],
    studioSpringStr: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
    
    // GSAP ready ease strings
    gsap: {
      expoInOut: "power4.inOut",
      expoOut: "power4.out",
      expoIn: "power4.in",
      spring: "customSpring", // Configured via CustomEase in GSAP registration
    },
  },
  durations: {
    fast: 0.2,     // hover effects, minor tabs
    normal: 0.4,   // typical modal / component reveal
    slow: 0.8,     // page transitions
    deluxe: 1.2,   // heavy landing page entrance animation
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1400,
  },
  layout: {
    gridCols: 12,
    gridGap: "24px",
    headerHeight: "80px",
  },
} as const

export type Theme = typeof theme
export type ColorTheme = typeof theme.colors.dark
