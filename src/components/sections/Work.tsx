import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Work() {
  const projects = [
    {
      id: "petronex",
      title: "Petronex",
      type: "Corporate Website",
      status: "LIVE",
      description: "Professional web presence developed to establish authority and communicate industrial services.",
      tech: ["Web Development", "UI/UX", "Corporate Identity"],
      offset: "md:translate-x-[0%] md:translate-y-[0%]",
      zIndex: "z-30",
      images: ["/elements/PETRONEX-CAROUSEL/1P.png", "/elements/PETRONEX-CAROUSEL/2P.png", "/elements/PETRONEX-CAROUSEL/3P.png", "/elements/PETRONEX-CAROUSEL/4P.png"]
    },
    {
      id: "miba",
      title: "Miba Nexus",
      type: "Digital Marketing Agency",
      status: "LIVE",
      description: "Brand-focused website designed to communicate services, credibility, and growth.",
      tech: ["Web Development", "Branding", "Digital Experience"],
      offset: "md:translate-x-[50%] md:translate-y-[20%]",
      zIndex: "z-20",
      images: ["/elements/MIBA-NEXUS-CAROUSEL/1M.png", "/elements/MIBA-NEXUS-CAROUSEL/2M.png", "/elements/MIBA-NEXUS-CAROUSEL/3M.png", "/elements/MIBA-NEXUS-CAROUSEL/4M.png", "/elements/MIBA-NEXUS-CAROUSEL/5M.png", "/elements/MIBA-NEXUS-CAROUSEL/6M.png"]
    },
    {
      id: "rcn",
      title: "RCN",
      type: "Outreach & E-Commerce",
      status: "LIVE",
      description: "Functions as both an outreach platform and digital showcase for startups under the incubation centre.",
      tech: ["Python", "Django", "Railway", "SendGrid"],
      offset: "md:translate-x-[15%] md:translate-y-[50%]",
      zIndex: "z-10",
      images: ["/elements/RCN-CAROUSEL/1R.png", "/elements/RCN-CAROUSEL/2R.png", "/elements/RCN-CAROUSEL/3R.png", "/elements/RCN-CAROUSEL/4R.png", "/elements/RCN-CAROUSEL/5R.png", "/elements/RCN-CAROUSEL/6R.png", "/elements/RCN-CAROUSEL/7R.png", "/elements/RCN-CAROUSEL/8R.png", "/elements/RCN-CAROUSEL/9R.png", "/elements/RCN-CAROUSEL/10R.png"]
    }
  ];

  const ProjectCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      let interval: ReturnType<typeof setInterval>;
      if (isHovered && images.length > 1) {
        interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 1000);
      } else {
        setCurrentIndex(0);
      }
      return () => clearInterval(interval);
    }, [isHovered, images.length]);

    const variants = {
      enter: { x: "100%", opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: 0 }
    };

    return (
      <div 
        className="w-full h-full relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screenshot`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "linear", duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="work" className="min-h-screen w-full px-margin-mobile md:px-margin-desktop py-24 relative overflow-hidden flex flex-col items-center bg-[#070707]">
      {/* Interesting Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[150px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[30%] -right-[20%] w-[60%] h-[80%] rounded-full bg-primary/5 blur-[150px] animate-[pulse_8s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#111111] blur-[100px]"></div>
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto mb-20 md:mb-32 relative z-40"
      >
        <div className="inline-flex items-center gap-4 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">// SYSTEM_DEPLOYMENTS</span>
        </div>
        <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg">WORK</h2>
      </motion.div>

      {/* Floating Windows Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl mx-auto h-[1600px] md:h-[900px] flex flex-col md:block items-center gap-16 md:gap-0"
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            className={cn(
              "md:absolute top-0 left-0 md:w-[480px] w-full border border-surface-variant bg-[#131313] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group hover:z-50 hover:scale-[1.03] overflow-hidden",
              project.offset,
              project.zIndex
            )}
            style={{
              boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(190, 17, 17, 0.05)"
            }}
          >
            {/* Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-primary blur-sm shadow-[0_0_15px_#BE1111] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] z-50 mix-blend-screen pointer-events-none"></div>

            {/* OS Window Header */}
            <div className="border-b border-surface-variant p-3 flex justify-between items-center bg-surface-container-low cursor-move">
              <span className="font-label-mono text-[10px] text-secondary-fixed-dim flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px] text-primary">terminal</span>
                {project.title.toUpperCase().replace(/\s+/g, '_')}.EXE 
                <span className="w-1.5 h-1.5 bg-[#474746] rounded-full group-hover:bg-primary transition-colors"></span>
              </span>
              <div className="flex items-center gap-2 text-secondary-fixed-dim">
                <span className="material-symbols-outlined text-[14px]">remove</span>
                <span className="material-symbols-outlined text-[14px]">crop_square</span>
                <span className="material-symbols-outlined text-[14px]">close</span>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-1 border-b border-surface-variant bg-surface-container overflow-hidden">
              <div className="aspect-[16/10] bg-surface-container-highest w-full border border-surface-variant scanline relative flex items-center justify-center halftone-bg overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
                <span className="font-label-mono text-sm text-secondary-fixed-dim uppercase tracking-widest absolute mix-blend-difference z-10 text-center flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-3xl opacity-50 group-hover:text-primary group-hover:opacity-100 transition-colors duration-500">data_object</span>
                  {project.title} <br/> <span className="text-[10px] opacity-50">// VISUAL_FEED_OFFLINE</span>
                </span>
                <ProjectCarousel images={project.images} title={project.title} />
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col gap-4 bg-background/90 backdrop-blur-sm relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-label-mono text-xl md:text-2xl text-on-background uppercase">{project.title}</h3>
                  <p className="font-label-mono text-[10px] text-primary mt-1">{project.type}</p>
                </div>
                <span className="font-label-mono text-[10px] text-on-primary bg-primary/80 px-2 py-1 flex items-center gap-1">
                  <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                  {project.status}
                </span>
              </div>
              <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed min-h-[60px]">
                {project.description}
              </p>
              <div className="mt-4 pt-4 border-t border-surface-variant flex flex-wrap gap-2 font-label-mono text-[10px] text-secondary-fixed-dim">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 border border-surface-variant bg-surface-container-low flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px] text-primary/70">code</span>
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
