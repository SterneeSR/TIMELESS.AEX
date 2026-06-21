import tailwindAnimate from "tailwindcss-animate"
import tailwindTypography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "display-xl": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "data-point": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "label-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" }],
        "headline-lg-mobile": ["32px", { lineHeight: "38px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-xl": ["clamp(2.5rem, 6vw + 1rem, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["clamp(2rem, 5vw + 1rem, 3rem)", { lineHeight: "1.2", fontWeight: "600" }],
        "data-point": ["10px", { lineHeight: "12px", fontWeight: "700" }],
      },
      colors: {
        "surface-container": "#1f1f1f",
        "surface": "#131313",
        "tertiary-fixed": "#e2e2e2",
        "surface-container-low": "#1b1b1b",
        "primary-fixed": "#ffdad5",
        "inverse-on-surface": "#303030",
        "primary-fixed-dim": "#ffb4aa",
        "on-tertiary-fixed-variant": "#454747",
        "on-secondary-fixed": "#1c1b1b",
        "tertiary-fixed-dim": "#c6c6c6",
        "secondary-fixed-dim": "#c8c6c5",
        "on-secondary": "#313030",
        "on-primary-fixed-variant": "#930005",
        "surface-container-highest": "#353535",
        "error": "#ffb4ab",
        "primary-container": "#be1111",
        "surface-tint": "#ffb4aa",
        "on-primary-fixed": "#410001",
        "primary": "#BE1111",
        "on-primary": "#ffffff",
        "on-surface": "#e2e2e2",
        "on-error": "#690005",
        "tertiary-container": "#5e5f5f",
        "surface-container-high": "#2a2a2a",
        "secondary-container": "#474746",
        "inverse-primary": "#bd1010",
        "on-tertiary": "#2f3131",
        "secondary": "#c8c6c5",
        "outline": "#be1111", /* unified red for outline */
        "secondary-fixed": "#e5e2e1",
        "on-secondary-fixed-variant": "#474746",
        "on-primary-container": "#ffcec7",
        "on-error-container": "#ffdad6",
        "on-background": "#e2e2e2",
        "error-container": "#93000a",
        "background": "#131313",
        "tertiary": "#c6c6c6",
        "surface-bright": "#393939",
        "on-tertiary-fixed": "#1a1c1c",
        "inverse-surface": "#e2e2e2",
        "surface-dim": "#131313",
        "outline-variant": "#be1111", /* unified red */
        "surface-variant": "#353535",
        "on-secondary-container": "#b7b5b4",
        "surface-container-lowest": "#0e0e0e",
        "on-tertiary-container": "#d9d9d9",
        "on-surface-variant": "#e5bdb8",
        
        // Retain original generic variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "margin-mobile": "20px",
        "unit": "4px",
        "module-padding": "32px",
        "margin-desktop": "64px",
        "gutter": "24px",
      },
      transitionTimingFunction: {
        "studio-expo": "cubic-bezier(0.85, 0, 0.15, 1)",
        "studio-spring": "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pixel-reveal": {
          "0%": { clipPath: "inset(100% 0 0 0)", opacity: "0", transform: "translateY(20px)" },
          "100%": { clipPath: "inset(0% 0 0 0)", opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(1000%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pixel-reveal": "pixel-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        flicker: "flicker 0.1s infinite",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindTypography,
  ],
}
