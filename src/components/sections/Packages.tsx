import { motion } from "framer-motion";

export function Packages() {
  const categories = [
    {
      title: "WEB DEVELOPMENT",
      levels: [
        { name: "Essential", price: "₹15,000", level: "LEVEL 01" },
        { name: "Business", price: "₹40,000", level: "LEVEL 02" },
        { name: "Signature", price: "₹90,000", level: "LEVEL 03" },
        { name: "Custom Projects", price: "Starting ₹1.5L+", level: "OVERRIDE" },
      ]
    },
    {
      title: "BRANDING",
      levels: [
        { name: "Brand Foundation", price: "₹10,000", level: "LEVEL 01" },
        { name: "Brand Identity", price: "₹25,000", level: "LEVEL 02" },
        { name: "Signature System", price: "₹50,000+", level: "LEVEL 03" },
      ]
    },
    {
      title: "LAUNCH PACKAGES",
      levels: [
        { name: "Launch Starter", price: "₹25,000", level: "LEVEL 01" },
        { name: "Launch Pro", price: "₹50,000", level: "LEVEL 02" },
        { name: "Launch Signature", price: "₹1,00,000", level: "LEVEL 03" },
      ]
    }
  ];

  return (
    <section id="packages" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto mb-16 relative z-40">
          <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg mb-6">DEPLOYMENT TIERS</h2>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="border border-surface-variant bg-[#111] p-8 flex flex-col group relative overflow-hidden">
            {/* Idle Red Glow Line */}
            <div className="absolute top-0 left-0 w-[30%] h-[1px] bg-primary blur-[2px] shadow-[0_0_10px_#BE1111] opacity-30 animate-[scan_6s_linear_infinite] pointer-events-none z-40"></div>
            
            {/* Hover Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-primary blur-sm shadow-[0_0_15px_#BE1111] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] z-50 mix-blend-screen pointer-events-none"></div>

            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h3 className="font-label-mono text-xl text-primary uppercase mb-8 border-b border-surface-variant pb-4 tracking-widest relative z-10">
              {cat.title}
            </h3>
            
            <div className="flex flex-col gap-6 relative z-10 flex-grow">
              {cat.levels.map((lvl) => (
                <div key={lvl.name} className="flex flex-col group/item cursor-crosshair">
                  <span className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase mb-1 flex items-center gap-2 group-hover/item:text-primary transition-colors">
                    <span className="w-1 h-1 bg-surface-variant group-hover/item:bg-primary transition-colors"></span>
                    {lvl.level}
                  </span>
                  <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
                    <span className="font-label-mono text-sm md:text-base text-on-background uppercase">{lvl.name}</span>
                    <span className="font-label-mono text-sm text-secondary-fixed-dim">{lvl.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 relative z-10">
               <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-4 border border-[rgba(172,136,131,0.15)] bg-transparent font-label-mono text-label-mono text-on-background uppercase hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 cursor-crosshair tracking-widest">
                &gt; INITIATE
              </button>
            </div>
          </div>
        ))}
        </div>
      </motion.div>
    </section>
  );
}
