import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    const handleClose = () => setIsOpen(false);
    
    window.addEventListener('toggle-mobile-menu', handleToggle);
    window.addEventListener('close-mobile-menu', handleClose);
    
    return () => {
      window.removeEventListener('toggle-mobile-menu', handleToggle);
      window.removeEventListener('close-mobile-menu', handleClose);
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const menuItems = [
    { name: 'WORK', id: 'work' },
    { name: 'SERVICES', id: 'services' },
    { name: 'ABOUT', id: 'about' },
    { name: 'CONTACT', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-center items-center"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 material-symbols-outlined text-4xl text-on-surface hover:text-primary transition-colors cursor-crosshair"
          >
            close
          </button>
          
          <div className="flex flex-col items-center gap-10">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollTo(item.id)}
                className="font-label-mono text-3xl text-on-surface uppercase tracking-widest hover:text-primary transition-colors cursor-crosshair"
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <img 
                alt="Timeless Logo" 
                className="h-12 w-auto filter-timeless-red" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3K_O9_YxI-2QZqHqS632fG4dWe4U4mFhG61KAY6_gB7o6f-o4xQYjQ1gJ200vP9g7u7z16q-r-P4Iu-gX8qYn7P10A3gL2fH9Mh6D8y-5x9F2E-yI7S2-1gJ6y9k3TqF4G2M-W8M-Q7U-e3M" 
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
