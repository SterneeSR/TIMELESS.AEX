import { create } from "zustand"

interface UIState {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  cursorType: string
  setCursorType: (type: string) => void
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void
}

interface AudioState {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  activeTrackId: string | null
  setActiveTrackId: (trackId: string | null) => void
  volume: number
  setVolume: (volume: number) => void
}

/**
 * useUIStore
 * Handles visual interface triggers and themes.
 */
export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  cursorType: "default",
  setCursorType: (cursorType) => set({ cursorType }),
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}))

/**
 * useAudioStore
 * Orchestrates background audio showcases and media player controls.
 */
export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  activeTrackId: null,
  setActiveTrackId: (activeTrackId) => set({ activeTrackId }),
  volume: 0.8,
  setVolume: (volume) => set({ volume }),
}))
