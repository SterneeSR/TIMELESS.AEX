import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We want the loading line and boot sequence to reflect actual loading
    // We cap the progress at 90% until the document is fully loaded.
    
    // Simulate initial connection/parsing speed
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Cap at 90% while waiting for actual load
        if (prev >= 90) return 90;
        return prev + Math.random() * 15;
      });
    }, 100);

    const handleLoad = () => {
      // Once loaded, immediately jump to 100% and finish
      setProgress(100);
      clearInterval(interval);
      setTimeout(() => onComplete(), 400); // Wait for the 100% animation to finish
    };

    if (document.readyState === "complete") {
      // If already loaded, still give it a tiny delay to show the boot screen briefly
      setTimeout(handleLoad, 800);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Red Loading Line at Top of Page */}
        <div className="absolute top-0 left-0 w-full h-[3px]">
          <motion.div 
            className="h-full bg-primary shadow-[0_0_10px_#cf1414]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>

        <div className="absolute inset-0 halftone-bg opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10%] w-full animate-[scan_4s_linear_infinite] mix-blend-screen"></div>
        
        <div className="flex flex-col items-center relative z-10 w-full max-w-sm px-8">
          <motion.img 
            src="/LOGO.png" 
            alt="Timeless Logo" 
            className="w-48 md:w-64 mb-12 filter brightness-200"
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          <div className="w-full">
            <div className="flex justify-between items-end mb-2">
              <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest flicker-on-hover">SYSTEM_BOOT</span>
              <span className="font-label-mono text-[10px] text-primary">{progress}%</span>
            </div>
            <div className="h-0.5 w-full bg-surface-variant relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
