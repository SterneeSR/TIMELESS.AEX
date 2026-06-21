import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SoundLab() {
  const tracks = [
    {
      id: "DEMO 2-27042026_0225_0_JD_PIV2",
      description: "Composed by JD Barani",
      genre: "Soulful/Dream Pop",
      status: "Work In Progress",
      image: "/elements/SOUND-LAB-SLIDESHOW/DEMO 2-27042026_0225_0_JD_PIV2.png"
    },
    {
      id: "DEMO 24052026_1102_0",
      description: "Random Inspiration",
      genre: "90s Synth Pop",
      status: "Archived",
      image: "/elements/SOUND-LAB-SLIDESHOW/DEMO 24052026_1102_0.png"
    },
    {
      id: "DEMO 5_06042025_0741_1",
      description: "A song about sleep",
      genre: "Lofi",
      status: "Archived",
      image: "/elements/SOUND-LAB-SLIDESHOW/DEMO 5_06042025_0741_1.png"
    },
    {
      id: "DEMO 29052026_0201_0",
      description: "A Porter Robinson inspired track",
      genre: "Ambient electronic music",
      status: "v1 Complete",
      image: "/elements/SOUND-LAB-SLIDESHOW/DEMO 29052026_0201_0.png"
    },
    {
      id: "DEMO 18062026_1156_1",
      description: "A song made from overwhelming thoughts",
      genre: "Pop",
      status: "Archived",
      image: "/elements/SOUND-LAB-SLIDESHOW/DEMO 18062026_1156_1.png"
    },
    {
      id: "Dirty Diana V2",
      description: "An attempt to Recreate MJ's song",
      genre: "Pop Rock",
      status: "Archived",
      image: "/elements/SOUND-LAB-SLIDESHOW/Dirty Diana V2.png"
    },
    {
      id: "09052025-T1-OTR-DCDE",
      description: "First ever full fledged production",
      genre: "Electronic Pop",
      status: "Archived",
      image: "/elements/SOUND-LAB-SLIDESHOW/09052025-T1-OTR-DCDE.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tracks.length);
    }, 6500); // 6.5 seconds
    return () => clearInterval(timer);
  }, [tracks.length]);

  const currentTrack = tracks[currentIndex];

  const imageVariants = {
    enter: { opacity: 0, filter: 'blur(8px) contrast(150%)' },
    center: { opacity: 1, filter: 'blur(0px) contrast(100%)' },
    exit: { opacity: 0, filter: 'blur(8px) contrast(150%)' }
  };

  return (
    <section id="sound-lab" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] mix-blend-screen grayscale pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto relative z-40 text-center mb-16">
          <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg mb-6">SOUND LAB</h2>
          <p className="font-body-md text-secondary-fixed-dim leading-relaxed max-w-2xl mx-auto">
            Beyond design and development, music production serves as a creative exploration space. The same principles used in digital experiences are applied to composition, storytelling, rhythm, and atmosphere.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto relative z-40">
          <div 
            className="w-full border border-surface-variant bg-[#131313] shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(190, 17, 17, 0.05)" }}
          >
          {/* OS Window Header */}
          <div className="border-b border-surface-variant p-3 flex justify-between items-center bg-surface-container-low cursor-move">
            <span className="font-label-mono text-[10px] text-secondary-fixed-dim flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px] text-primary">terminal</span>
              SOUND_LAB.EXE 
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full animate-pulse"></span>
            </span>
            <div className="flex items-center gap-2 text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[14px]">remove</span>
              <span className="material-symbols-outlined text-[14px]">crop_square</span>
              <span className="material-symbols-outlined text-[14px]">close</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[700px] md:h-[450px]">
             {/* Left: Memory Archive Image Viewer */}
             <div className="relative flex-1 bg-black border-b md:border-b-0 md:border-r border-surface-variant overflow-hidden">
                <div className="absolute inset-0 halftone-bg opacity-30 mix-blend-overlay z-20 pointer-events-none"></div>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    src={currentTrack.image}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-center z-10 grayscale-[30%] opacity-80 mix-blend-screen"
                  />
                </AnimatePresence>
                {/* CRT Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[10%] w-full animate-[scan_4s_linear_infinite] pointer-events-none z-30 mix-blend-screen"></div>
             </div>

             {/* Right/Bottom: Metadata Panel */}
             <div className="w-full md:w-[350px] bg-[#0a0a0a] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="font-display-xl text-8xl text-surface-variant">{String(currentIndex + 1).padStart(2, '0')}</span>
                </div>

                <div className="relative z-10">
                   <h3 className="font-label-mono text-[10px] text-primary mb-8 tracking-widest uppercase border-b border-surface-variant pb-2 flex justify-between items-center">
                     <span>METADATA_EXTRACT</span>
                     <span className="text-[8px] text-secondary-fixed-dim">{String(currentIndex + 1).padStart(2, '0')}/{String(tracks.length).padStart(2, '0')}</span>
                   </h3>
                   
                   <AnimatePresence mode="wait">
                     <motion.div 
                       key={currentIndex}
                       initial={{ opacity: 0, x: 5 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -5 }}
                       transition={{ duration: 0.5 }}
                       className="flex flex-col gap-6"
                     >
                       <div className="flex flex-col gap-1">
                         <span className="font-label-mono text-[8px] text-surface-variant uppercase">FILE_ID</span>
                         <span className="font-label-mono text-xs text-on-background break-words">{currentTrack.id}</span>
                       </div>

                       <div className="flex flex-col gap-1">
                         <span className="font-label-mono text-[8px] text-surface-variant uppercase">DESCRIPTION</span>
                         <span className="font-label-mono text-[11px] text-secondary-fixed-dim leading-relaxed">{currentTrack.description}</span>
                       </div>

                       <div className="flex flex-col gap-1">
                         <span className="font-label-mono text-[8px] text-surface-variant uppercase">GENRE_PROFILE</span>
                         <span className="font-label-mono text-[10px] text-primary bg-primary/10 px-2 py-1 w-fit border border-primary/20">{currentTrack.genre.toUpperCase()}</span>
                       </div>
                     </motion.div>
                   </AnimatePresence>
                </div>
                
                <div className="pt-6 border-t border-surface-variant flex justify-between items-end relative z-10 mt-8 md:mt-0">
                   <div className="flex flex-col gap-1">
                     <span className="font-label-mono text-[8px] text-surface-variant uppercase">SYSTEM_STATUS</span>
                     <span className="font-label-mono text-[10px] text-on-primary bg-primary/80 px-2 py-1 flex items-center gap-2">
                       <span className="w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></span>
                       {currentTrack.status.toUpperCase()}
                     </span>
                   </div>
                   
                   {/* Audio Waveform Mock */}
                   <div className="flex gap-1 items-end h-6 opacity-70">
                     <span className="w-1 bg-primary animate-[pulse_1s_ease-in-out_infinite]" style={{ height: '60%' }}></span>
                     <span className="w-1 bg-primary animate-[pulse_1.2s_ease-in-out_infinite]" style={{ height: '100%' }}></span>
                     <span className="w-1 bg-primary animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '40%' }}></span>
                     <span className="w-1 bg-primary animate-[pulse_1.5s_ease-in-out_infinite]" style={{ height: '80%' }}></span>
                   </div>
                </div>
             </div>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
