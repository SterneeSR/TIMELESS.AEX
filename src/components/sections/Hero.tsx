import { HeroDotMatrix } from '@/components/animations/HeroDotMatrix';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col pt-6 px-margin-mobile md:px-margin-desktop overflow-hidden bg-[#0A0A0A]">
      <HeroDotMatrix />
      
      {/* Integrated Hero Navbar */}
      <nav className="relative z-50 w-full flex justify-between items-center py-4">
        {/* Left: Logo & System Version */}
        <div className="flex-1 flex items-center justify-start">
          <div className="flex items-center gap-4 cursor-crosshair group">
            <img 
              alt="Timeless Logo" 
              className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity" 
              src="/LOGO.png" 
            />
            <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest hidden sm:block">SYSTEM.v.1.04</span>
          </div>
        </div>
        
        {/* Center: Navigation Links (Equally Spaced) */}
        <div className="flex-[2] flex justify-center items-center">
          <div className="flex items-center justify-between w-full max-w-md hidden md:flex">
            <button onClick={() => scrollTo('work')} className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors cursor-crosshair">Work</button>
            <button onClick={() => scrollTo('services')} className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors cursor-crosshair">Services</button>
            <button onClick={() => scrollTo('about')} className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors cursor-crosshair">About</button>
            <button onClick={() => scrollTo('contact')} className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors cursor-crosshair">Contact</button>
          </div>
        </div>
        
        {/* Right: Transmit Button */}
        <div className="flex-1 flex items-center justify-end">
          <button onClick={() => scrollTo('contact')} className="bg-primary text-on-primary font-label-mono text-[11px] px-8 py-3 uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all cursor-crosshair">
            Transmit
          </button>
        </div>

        {/* Mobile menu button (4x4 matrix) */}
        <div className="md:hidden flex-1 flex justify-end">
           <button onClick={() => window.dispatchEvent(new Event('toggle-mobile-menu'))} className="grid grid-cols-4 gap-1 p-2 cursor-crosshair group active:scale-95 transition-transform">
             {Array.from({ length: 16 }).map((_, i) => (
               <div key={i} className="w-1.5 h-1.5 bg-on-surface group-active:bg-primary transition-colors"></div>
             ))}
           </button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-gutter items-center flex-grow py-12">
        {/* Right Visual: The Eye (First on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-first lg:order-last lg:col-span-5 relative flex justify-center lg:justify-end w-full items-center"
        >
          <div className="relative w-full max-w-xs md:max-w-md aspect-square flex items-center justify-center">
            {/* The Eye Image with red tint */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                alt="Timeless Eye Sensor" 
                className="relative z-10 w-[90%] h-auto object-contain hover:scale-[1.02] transition-transform duration-700 ease-out" 
                style={{ filter: 'invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%) drop-shadow(0 0 20px rgba(190,17,17,0.3))' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnx6WZTZDGvTr0TAoXslLxiQolY1Mps55sFmPNl3d1X_USoSR2g24HVVUwjwPk1TBgS8I6NkPQh0ksn8DtfQVixrivTQYQr_VzaoeYbozX41Cc5jeIpptJO4_ZIs2Kgwbm9eHYqjAj_UmePynd98_lydPpV6OmB6cBBFTAc-6B4poIRbn-QEp80kkjfEb3xfpGin2p_ohmNtVRMVW9_IybnUTOwppGJbyo6p0gOp9Hy19V6uYPut_GC67zzsvkaxS76TA-cOdYhHY" 
              />
            </div>
            {/* HUD Overlays */}
            <div className="absolute bottom-4 right-4 text-right space-y-1">
              <p className="font-label-mono text-[10px] text-primary">GRID_SCAN: ACTIVE</p>
              <p className="font-label-mono text-[10px] text-on-surface-variant/40 hidden sm:block">RESOLUTION: 4K_NATIVE</p>
            </div>
          </div>
        </motion.div>

        {/* Left Content Area (Second on Mobile) */}
        <div className="order-last lg:order-first lg:col-span-7 space-y-6 mt-8 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <img 
              alt="Timeless Icon" 
              className="h-4 w-auto opacity-80" 
              src="/ICON.png" 
            />
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-primary">
              TIMELESS.AEX — CREATIVE TECHNOLOGY STUDIO
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-xl text-headline-lg-mobile md:text-display-xl leading-none text-on-surface max-w-2xl tracking-tight"
          >
            Design that <br /> <span className="text-primary italic">stays.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-md text-body-md text-on-surface-variant max-w-md"
          >
            Building brands, websites, and digital experiences designed to outlast trends. Engineered for longevity, decoded for impact.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6 pt-8"
          >
            <button onClick={() => scrollTo('work')} className="px-10 py-4 bg-primary text-on-primary font-label-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-crosshair">
              View Work
            </button>
            <button onClick={() => scrollTo('contact')} className="px-10 py-4 border border-surface-variant text-on-surface font-label-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all cursor-crosshair">
              Start a Project
            </button>
          </motion.div>
          
          {/* Technical Specs/Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-16 flex gap-12 border-t border-surface-variant/30 max-w-lg mt-auto"
          >
            <div className="space-y-1">
              <p className="font-label-mono text-[10px] text-primary/60 uppercase">UPTIME</p>
              <p className="font-label-mono text-sm text-on-surface">99.998%</p>
            </div>
            <div className="space-y-1">
              <p className="font-label-mono text-[10px] text-primary/60 uppercase">PROTOCOL</p>
              <p className="font-label-mono text-sm text-on-surface">Decoded.V2</p>
            </div>
            <div className="space-y-1">
              <p className="font-label-mono text-[10px] text-primary/60 uppercase">SIGNAL</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#BE1111]"></span>
                <span className="font-label-mono text-sm text-on-surface">Optimal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-crosshair" 
        onClick={() => scrollTo('work')}
      >
        <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Explore</span>
        <span className="material-symbols-outlined text-sm text-on-surface-variant">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
}
