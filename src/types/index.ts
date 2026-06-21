/**
 * Timeless.aex TypeScript Schema Interfaces
 * Enforces strict type-safety across creative studio features.
 */

// --- Portfolio & Case Studies ---

export interface ProjectMetadata {
  client?: string
  role?: string
  year: number
  location?: string
  services?: string[]
}

export interface PortfolioProject {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  thumbnailUrl: string
  videoUrl?: string // optional hover video reel
  tags: string[]
  metadata: ProjectMetadata
  featured: boolean
}

export interface CaseStudySection {
  id: string
  type: "text" | "image" | "double-image" | "video" | "canvas-3d"
  title?: string
  content?: string
  mediaUrls?: string[]
  layout?: "full" | "grid" | "split"
}

export interface CaseStudy {
  id: string
  projectId: string
  heroImageUrl: string
  challenge: string
  approach: string
  outcome: string
  sections: CaseStudySection[]
  results: {
    label: string
    value: string
  }[]
}

// --- Branding & Assets ---

export interface BrandingAsset {
  id: string
  type: "logo" | "typography" | "palette" | "pattern"
  url: string
  alt: string
  dimensions?: { width: number; height: number }
}

export interface BrandingShowcase {
  id: string
  brandName: string
  description: string
  assets: BrandingAsset[]
  accentColor: string
}

// --- Media & Gallery ---

export interface GalleryItem {
  id: string
  type: "image" | "video" | "interactive-3d"
  src: string
  title: string
  description?: string
  aspectRatio: "square" | "portrait" | "landscape" | "video"
  modelPath?: string // for interactive-3d types
}

// --- Audio & Music Showcase ---

export interface AudioShowcaseItem {
  id: string
  title: string
  artist?: string
  audioUrl: string
  coverImageUrl?: string
  duration: number // in seconds
  waveform?: number[] // array of normalized points for visualizer
}

// --- Contact Form ---

export interface ContactFormValues {
  name: string
  email: string
  company?: string
  projectType: string[] // multi-select tags
  budgetRange?: string
  message: string
  timeline?: string
}
