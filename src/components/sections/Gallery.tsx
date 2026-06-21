import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    "1.png", "2.png", "20210414_170013.jpg", "20210419_182929.jpg", 
    "20221104_193913.png", "20221113_233311.jpg", "20231005_003935.jpg", 
    "20260616_161234.png", "404-icon.png", "6177169420380653091.jpg", 
    "6336698185228684294.jpg", "Beige Minimalist Inspirational Quotes Poster (3).png", 
    "Beige Minimalist Inspirational Quotes Poster (4).png", "ChatGPT Image May 17, 2026, 01_12_03 AM.png", 
    "Co-rider rating and feedback.png", "Gemini_Generated_Image_om7ze8om7ze8om7z.png", 
    "JD MUSIQ (10).png", "JD MUSIQ (7).png", "MIBA.png", 
    "OR-ThedamalKandenV2.1.png", "OR-ThedamalKandenV3.png", "PantherineAuctorius.png", 
    "RCN-Logo-2.png", "Rider-Payment.png", "THEDAMAL (5).png", 
    "WPS Photo(11).png", "WPS Photo(12).png", "WhatsApp Image 2024-11-15 at 6.39.53 AM.jpeg", 
    "WhatsApp Image 2026-01-09 at 8.48.46 PM.jpeg", "WhoAmIWithoutMySuffering.png", 
    "Your paragraph text (2).png", "file_0000000037487207b96d481e14540534.png", "nanokart.png"
  ];

  return (
    <section id="gallery" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-[#0a0a0a] min-h-screen">
      <div className="absolute inset-0 dotted-grid-bg opacity-20 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto mb-16 relative z-40 text-center">
          <h2 className="text-display-xl font-label-mono text-primary uppercase drop-shadow-lg mb-2">DATABASE</h2>
          <p className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">
            // VISUAL ARCHIVE
          </p>
        </div>

        {/* 
        Optimized CSS Masonry: 
        - Retains original image ratios naturally via standard block flow
        - Avoids layout thrashing (flex-grow) for massive performance gains
        - Uses simple hardware-accelerated transforms on hover 
      */}
      <div className="w-full max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 relative z-10 px-2 md:px-0" style={{ contentVisibility: 'auto' }}>
        {images.map((filename, i) => (
          <div 
            key={filename} 
            className="relative w-full break-inside-avoid overflow-hidden border border-surface-variant bg-[#111] group cursor-crosshair transform-gpu transition-all duration-300 hover:scale-[1.02] hover:z-20 hover:border-primary/50 hover:shadow-2xl"
          >
            {/* Removed heavy CSS filters like grayscale & mix-blend for rendering performance */}
            <img 
              src={`/elements/GALLERY/${filename}`} 
              alt={`Archive Element ${i}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain bg-black"
            />
            
            <div className="absolute bottom-2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span className="font-label-mono text-[10px] text-primary bg-black/90 px-2 py-1 border border-primary/30 uppercase">
                ASSET_{i.toString().padStart(3, '0')}
              </span>
            </div>
          </div>
        ))}
        </div>
      </motion.div>
    </section>
  );
}
