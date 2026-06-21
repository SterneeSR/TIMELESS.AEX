import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-variant bg-surface-container-lowest py-module-padding px-margin-mobile md:px-margin-desktop relative z-50 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              alt="Timeless Icon" 
              className="w-4 h-4 grayscale opacity-50" 
              src="/ICON.png" 
            />
            <span className="font-label-mono text-label-mono text-primary uppercase">© 2026 TIMELESS.AEX // SYSTEM STATUS: OPTIMAL</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 mt-4 md:mt-0">
          <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors flicker-on-hover cursor-crosshair" href="#">Location: Neo-Coimbatore</a>
          <Link to="/privacy" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors flicker-on-hover cursor-crosshair">Privacy Protocol</Link>
          <Link to="/terms" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors flicker-on-hover cursor-crosshair">System Agreement</Link>
        </div>
        <div className="flex md:justify-end mt-4 md:mt-0">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors flicker-on-hover cursor-crosshair">Terminal Access</Link>
        </div>
      </div>
    </footer>
  );
}
