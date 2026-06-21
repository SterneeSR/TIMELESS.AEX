import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { name: "SCAN", desc: "Initial requirement gathering and feasibility assessment." },
    { name: "ANALYZE", desc: "Data processing, strategic planning, and architecture design." },
    { name: "DESIGN", desc: "Visual language creation and UI/UX interface prototyping." },
    { name: "BUILD", desc: "Engineering the digital experience with modern frameworks." },
    { name: "DEPLOY", desc: "Final testing, optimization, and system launch." },
  ];

  return (
    <section id="process" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-[#0a0a0a]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto mb-20 relative z-40 text-center">
          <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg mb-4">SYSTEM PIPELINE</h2>
        </div>

        <div className="w-full max-w-5xl mx-auto relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] z-0 overflow-hidden">
           {/* Base line */}
           <div className="absolute inset-0 bg-surface-variant/50"></div>
           {/* Continuous energy stream */}
           <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] -translate-x-full animate-[scan_4s_linear_infinite]"></div>
           <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full animate-[scan_2.5s_linear_infinite]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={step.name} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border border-surface-variant bg-surface-container flex items-center justify-center mb-6 relative group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 cursor-crosshair">
                <span className="font-label-mono text-xl text-secondary-fixed-dim group-hover:text-primary transition-colors">
                  0{i + 1}
                </span>
                
                {/* Rings */}
                <div className="absolute inset-2 rounded-full border border-surface-variant/30 group-hover:animate-[spin_4s_linear_infinite] group-hover:border-primary/20"></div>
                <div className="absolute inset-4 rounded-full border border-surface-variant/20 group-hover:animate-[spin_3s_linear_infinite_reverse] group-hover:border-primary/20"></div>

                {/* Mobile connecting line */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-8 bg-surface-variant"></div>
                )}
              </div>
              <h3 className="font-label-mono text-lg text-on-background uppercase mb-3 text-center">{step.name}</h3>
              <p className="font-body-md text-sm text-secondary-fixed-dim text-center leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        </div>
      </motion.div>
    </section>
  );
}
