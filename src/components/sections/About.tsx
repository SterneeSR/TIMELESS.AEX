import { motion } from "framer-motion";

export function About() {
  const areasOfFocus = [
    { name: "Web Development", icon: "code" },
    { name: "Brand Systems", icon: "category" },
    { name: "Creative Technology", icon: "memory" },
    { name: "Data Science", icon: "bar_chart" },
    { name: "AI Systems", icon: "smart_toy" },
    { name: "Music Production", icon: "graphic_eq" },
  ];

  const skills = [
    {
      category: "DEVELOPMENT",
      items: [
        { name: "React", level: 95 },
        { name: "Django", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 95 },
      ]
    },
    {
      category: "DESIGN",
      items: [
        { name: "Branding", level: 90 },
        { name: "UI/UX", level: 95 },
        { name: "Photoshop", level: 85 },
        { name: "Illustrator", level: 80 },
      ]
    },
    {
      category: "SYSTEMS",
      items: [
        { name: "Data Science", level: 80 },
        { name: "AI Integration", level: 75 },
        { name: "Architecture", level: 85 },
      ]
    }
  ];

  return (
    <section id="about" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-background border-t border-surface-variant/50 overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto flex flex-col relative z-10"
      >
        
        {/* About Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#BE1111]"></span>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">// STUDIO_IDENTIFICATION</span>
          </div>
          <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg">ABOUT TIMELESS.AEX</h2>
        </div>

        {/* Eye Animation (Narrow Crop) */}
        <div className="w-full h-40 md:h-56 lg:h-64 overflow-hidden mb-16 border border-surface-variant relative bg-black group">
          <div className="absolute inset-0 halftone-bg opacity-30 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src="/animated-pixel-eye.gif" 
            alt="System Eye Animation" 
            className="w-full h-full object-cover object-[left_65%] translate-x-[17px] translate-y-[3px] scale-[1.05] opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[10%] w-full animate-[scan_2s_linear_infinite] pointer-events-none z-20"></div>
        </div>

        {/* The rest of the content */}
        <div className="flex flex-col gap-16">
          {/* About Text */}
          <div className="space-y-6 font-body-md text-secondary-fixed-dim leading-relaxed max-w-3xl">
            <p className="text-lg text-on-surface-variant">
              Timeless.aex is an independent Creative Technology Studio founded by Sternee S R.
            </p>
            <p>
              The studio exists at the intersection of design, development, branding, data, and storytelling. Its mission is to build digital experiences that remain effective long after trends disappear.
            </p>
          </div>

          {/* Areas of Focus */}
          <div>
            <h3 className="font-label-mono text-sm text-on-surface-variant uppercase mb-6 tracking-widest border-b border-surface-variant pb-2">AREAS OF FOCUS</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areasOfFocus.map(area => (
                <div key={area.name} className="flex flex-col gap-2 p-4 border border-surface-variant bg-[#131313] group hover:border-primary/50 transition-colors cursor-crosshair relative overflow-hidden">
                  {/* Idle ambient sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-[scan_4s_ease-in-out_infinite] pointer-events-none opacity-50 mix-blend-screen"></div>
                  
                  <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
                  <span className="material-symbols-outlined text-surface-variant group-hover:text-primary transition-colors relative z-10">{area.icon}</span>
                  <span className="font-label-mono text-[10px] md:text-xs text-secondary-fixed-dim group-hover:text-on-background uppercase mt-2 relative z-10">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-label-mono text-sm text-on-surface-variant uppercase mb-6 tracking-widest border-b border-surface-variant pb-2">SKILL MATRIX</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
              {skills.map(group => (
                <div key={group.category} className="flex flex-col gap-4">
                  <h4 className="font-label-mono text-[10px] text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 border border-primary"></span>
                    {group.category}
                  </h4>
                  <div className="flex flex-col gap-4">
                    {group.items.map(item => (
                      <div key={item.name} className="flex flex-col gap-1.5 group cursor-crosshair">
                        <div className="flex justify-between items-end">
                          <span className="font-label-mono text-[10px] text-secondary-fixed-dim group-hover:text-on-background transition-colors">{item.name}</span>
                          <span className="font-label-mono text-[8px] text-primary/70">{item.level}%</span>
                        </div>
                        {/* Segmented Hardware Style Progress */}
                        <div className="flex gap-[2px] w-full">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 flex-1 transition-all duration-500 group-hover:brightness-125 ${i < Math.floor(item.level / 10) ? 'bg-primary/90 shadow-[0_0_8px_rgba(190,17,17,0.6)]' : 'bg-surface-variant/20'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
