import { useState, useEffect } from 'react';

export function TopNavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight - 100);

      const sections = ['work', 'services', 'about', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    const baseClasses = "font-label-mono text-label-mono uppercase tracking-widest transition-all duration-300 px-3 py-2 cursor-crosshair active:scale-95";
    
    if (isActive) {
      return `${baseClasses} text-primary border-b-2 border-primary pb-1 hover:bg-surface-variant/50`;
    }
    
    return `${baseClasses} text-on-surface-variant hover:text-primary hover:bg-surface-variant/50`;
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full bg-background/90 backdrop-blur-xl border-b border-surface-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 h-20 z-50 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isVisible ? 'translate-y-0 shadow-[0_10px_30px_rgba(190,17,17,0.05)]' : '-translate-y-full'}`}
    >
      <div className="flex items-center gap-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 cursor-crosshair group">
          <img 
            alt="Timeless Logo" 
            className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity filter-white group-hover:filter-timeless-red" 
            src="/LOGO.png" 
          />
          <span className="hidden md:block font-label-mono text-xs uppercase tracking-widest text-primary">System.v.1.04</span>
        </button>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollTo('work')} className={getLinkClasses('work')}>Work</button>
        <button onClick={() => scrollTo('services')} className={getLinkClasses('services')}>Services</button>
        <button onClick={() => scrollTo('about')} className={getLinkClasses('about')}>About</button>
        <button onClick={() => scrollTo('contact')} className={getLinkClasses('contact')}>Contact</button>
        <button onClick={() => scrollTo('contact')} className="bg-primary text-on-primary font-label-mono text-xs px-6 py-2 uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-crosshair ml-4">
          Transmit
        </button>
      </div>

      {/* Mobile Menu Button (4x4 matrix) */}
      <div className="md:hidden flex items-center justify-end">
        <button onClick={() => window.dispatchEvent(new Event('toggle-mobile-menu'))} className="grid grid-cols-4 gap-1 p-2 cursor-crosshair group active:scale-95 transition-transform">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-on-surface group-active:bg-primary transition-colors"></div>
          ))}
        </button>
      </div>
    </nav>
  );
}
