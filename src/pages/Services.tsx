

export function Services() {
  return (
    <div className="flex-grow px-margin-mobile md:px-margin-desktop py-16 lg:py-24 max-w-[1440px] mx-auto w-full relative">
      {/* Header Section */}
      <header className="mb-16 md:mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
          <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">// SYSTEM_DIAGNOSTICS_ACTIVE</span>
        </div>
        <h1 className="text-display-xl font-label-mono text-on-background uppercase mb-6 drop-shadow-lg">SERVICE TIERS</h1>
        <p className="font-label-mono text-label-mono text-on-surface-variant max-w-2xl leading-relaxed">
          &gt; SELECT DEPLOYMENT PROTOCOL. ALL PARAMETERS SUBJECT TO NETWORK STABILITY AND RESOURCE ALLOCATION. INITIALIZING COMPARISON MATRIX...
        </p>
      </header>

      {/* Comparison Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter relative z-10">
        {/* Features Column (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col justify-end gap-0 border-r border-surface-container-highest pr-gutter pb-module-padding">
          <div className="h-16 flex items-center border-b border-surface-container-highest">
            <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">Asset Delivery</span>
          </div>
          <div className="h-16 flex items-center border-b border-surface-container-highest">
            <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">Revision Cycles</span>
          </div>
          <div className="h-16 flex items-center border-b border-surface-container-highest">
            <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">Source File Access</span>
          </div>
          <div className="h-16 flex items-center">
            <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest">Direct Developer Link</span>
          </div>
        </div>

        {/* Tier 1: STANDARD_UNIT */}
        <div className="bg-[#1A1A1A] border border-[rgba(172,136,131,0.15)] flex flex-col relative group overflow-hidden">
          <div className="absolute inset-0 bg-surface-variant/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay halftone-bg"></div>
          <div className="p-module-padding border-b border-[rgba(172,136,131,0.15)] bg-surface-container-low/50 backdrop-blur-md flex justify-between items-start">
            <div>
              <h2 className="font-label-mono text-label-mono text-on-background uppercase mb-2">&gt; STANDARD_UNIT</h2>
              <span className="font-data-point text-data-point text-secondary-fixed-dim">BASE PROTOCOL</span>
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
            </div>
          </div>
          <div className="p-module-padding flex-grow flex flex-col gap-0">
            {/* Mobile Labels inline */}
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Asset Delivery</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">Standard ZIP</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Revision Cycles</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">01</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Source File Access</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-data-point text-data-point text-[#474746] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#474746] rounded-full inline-block"></span> OFFLINE
              </span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Direct Developer Link</div>
            <div className="h-16 flex items-center justify-between lg:justify-center">
              <span className="font-data-point text-data-point text-[#474746] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#474746] rounded-full inline-block"></span> OFFLINE
              </span>
            </div>
          </div>
          <div className="p-module-padding mt-auto">
            <button className="w-full py-4 border border-[rgba(172,136,131,0.15)] bg-transparent font-label-mono text-label-mono text-primary uppercase hover:bg-[rgba(172,136,131,0.1)] hover:text-error transition-all duration-300 cursor-crosshair">
              &gt; INIT_PROTOCOL
            </button>
          </div>
        </div>

        {/* Tier 2: EXTENDED_INTERFACE */}
        <div className="bg-[#1A1A1A] border border-primary-container relative group overflow-hidden shadow-[0_0_15px_rgba(190,17,17,0.1)] z-20 transform lg:-translate-y-4">
          <div className="absolute inset-0 bg-primary-container/5 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
          <div className="p-module-padding border-b border-primary-container/30 bg-surface-container-low/80 backdrop-blur-md flex justify-between items-start">
            <div>
              <h2 className="font-label-mono text-label-mono text-primary-container uppercase mb-2">&gt; EXTENDED_INTERFACE</h2>
              <span className="font-data-point text-data-point text-secondary-fixed-dim">OPTIMAL CONFIG</span>
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
            </div>
          </div>
          <div className="p-module-padding flex-grow flex flex-col gap-0 relative">
            {/* Mobile Labels inline */}
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Asset Delivery</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">Cloud Repos</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Revision Cycles</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">03</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Source File Access</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-data-point text-data-point text-primary-container flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full inline-block animate-pulse"></span> CONNECTED
              </span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Direct Developer Link</div>
            <div className="h-16 flex items-center justify-between lg:justify-center">
              <span className="font-data-point text-data-point text-[#474746] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#474746] rounded-full inline-block"></span> OFFLINE
              </span>
            </div>
          </div>
          <div className="p-module-padding mt-auto">
            <button className="w-full py-4 bg-[#b7b5b4] text-[#0e0e0e] font-label-mono text-label-mono uppercase hover:bg-primary-container hover:text-white transition-all duration-300 cursor-crosshair shadow-[0_0_10px_rgba(190,17,17,0.2)]">
              &gt; INIT_PROTOCOL
            </button>
          </div>
        </div>

        {/* Tier 3: FULL_SYSTEM_RECON */}
        <div className="bg-[#1A1A1A] border border-[rgba(172,136,131,0.15)] flex flex-col relative group overflow-hidden">
          <div className="absolute inset-0 bg-surface-variant/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay halftone-bg"></div>
          <div className="p-module-padding border-b border-[rgba(172,136,131,0.15)] bg-surface-container-low/50 backdrop-blur-md flex justify-between items-start">
            <div>
              <h2 className="font-label-mono text-label-mono text-on-background uppercase mb-2">&gt; FULL_SYSTEM_RECON</h2>
              <span className="font-data-point text-data-point text-secondary-fixed-dim">MAXIMUM OVERRIDE</span>
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
            </div>
          </div>
          <div className="p-module-padding flex-grow flex flex-col gap-0">
            {/* Mobile Labels inline */}
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Asset Delivery</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">Live Sync</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Revision Cycles</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-background">UNLIMITED</span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Source File Access</div>
            <div className="h-16 flex items-center justify-between lg:justify-center border-b border-surface-container-highest">
              <span className="font-data-point text-data-point text-primary-container flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full inline-block animate-pulse"></span> CONNECTED
              </span>
            </div>
            
            <div className="lg:hidden font-label-mono text-data-point text-secondary-fixed-dim mb-1 mt-4">Direct Developer Link</div>
            <div className="h-16 flex items-center justify-between lg:justify-center">
              <span className="font-data-point text-data-point text-primary-container flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full inline-block animate-pulse"></span> CONNECTED
              </span>
            </div>
          </div>
          <div className="p-module-padding mt-auto">
            <button className="w-full py-4 border border-[rgba(172,136,131,0.15)] bg-transparent font-label-mono text-label-mono text-primary uppercase hover:bg-[rgba(172,136,131,0.1)] hover:text-error transition-all duration-300 cursor-crosshair">
              &gt; INIT_PROTOCOL
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-24 halftone-divider w-full"></div>
    </div>
  );
}
