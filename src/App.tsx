import { useState } from "react"
import { RootLayout } from "@/components/layout/RootLayout"
import { Home } from "@/pages/Home"
import { Terms } from "@/pages/Terms"
import { Privacy } from "@/pages/Privacy"
import { MobileMenu } from "@/components/layout/MobileMenu"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Preloader } from "@/components/ui/Preloader"
import { AnimatePresence } from "framer-motion"

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      </AnimatePresence>

      <RootLayout>
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
