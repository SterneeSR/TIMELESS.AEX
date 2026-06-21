import { motion } from "framer-motion";

export function Services() {
  const modules = [
    {
      id: "01",
      title: "Brand Systems",
      desc: "Identity systems designed to create recognition, consistency, and long-term brand value.",
      status: "OPTIMAL"
    },
    {
      id: "02",
      title: "Digital Experiences",
      desc: "Websites and digital products focused on usability, performance, and modern interaction.",
      status: "OPTIMAL"
    },
    {
      id: "03",
      title: "Launch Packages",
      desc: "Complete brand and website packages designed for businesses entering or upgrading their online presence.",
      status: "OPTIMAL"
    }
  ];

  return (
    <section id="services" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-background border-t border-surface-variant/50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24 relative z-40">
        <div className="inline-flex items-center gap-4 mb-4">
          <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
          <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">// SYSTEM_DIAGNOSTICS_ACTIVE</span>
        </div>
        <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg mb-6">OPERATIONAL MODULES</h2>
        <p className="font-label-mono text-label-mono text-on-surface-variant max-w-2xl leading-relaxed">
          &gt; EXECUTION PROTOCOLS ONLINE. ENGAGING ALGORITHMIC SYSTEMS FOR BRAND ENGINEERING, DIGITAL EXPERIENCE DEVELOPMENT, AND LAUNCH ARCHITECTURE.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
        {modules.map((mod) => (
          <div key={mod.id} className="w-full border border-surface-variant bg-[#111] relative group overflow-hidden hover:border-primary/50 transition-colors duration-500 cursor-crosshair">
            {/* Idle Red Glow Line */}
            <div className="absolute top-0 left-0 w-[30%] h-[1px] bg-primary blur-[2px] shadow-[0_0_10px_#BE1111] opacity-30 animate-[scan_6s_linear_infinite] pointer-events-none z-40"></div>
            
            {/* Hover Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-primary blur-sm shadow-[0_0_15px_#BE1111] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] z-50 mix-blend-screen pointer-events-none"></div>
            
            <div className="absolute inset-0 bg-surface-variant/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay halftone-bg"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors duration-500"></div>
            
            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="flex-shrink-0">
                <span className="font-label-mono text-4xl text-surface-variant group-hover:text-primary transition-colors duration-500">
                  {mod.id}
                </span>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-label-mono text-2xl text-on-background uppercase mb-3 drop-shadow-sm">{mod.title}</h3>
                <p className="font-body-md text-secondary-fixed-dim leading-relaxed max-w-2xl">
                  {mod.desc}
                </p>
              </div>
              
              <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2 md:pl-8 md:border-l border-surface-variant w-full md:w-auto">
                <span className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase">STATUS</span>
                <span className="font-label-mono text-[12px] text-primary flex items-center gap-2 bg-primary/10 px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  {mod.status}
                </span>
              </div>
            </div>
            
            {/* Technical grid decoration */}
            <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none transition-opacity group-hover:opacity-30">
               <div className="grid grid-cols-4 gap-1">
                 {[...Array(16)].map((_, j) => (
                   <div key={j} className="w-1 h-1 bg-white rounded-full"></div>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
}
