

export function Gallery() {
  return (
    <div className="flex-grow flex w-full relative">
      {/* Sidebar */}
      <aside className="w-64 border-r border-surface-variant hidden lg:flex flex-col p-8 shrink-0 relative z-10 bg-background/50 backdrop-blur-sm">
        <h3 className="font-label-mono text-label-mono text-primary uppercase mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">folder_open</span>
          PROJECT DIRECTORY
        </h3>
        
        <nav className="flex flex-col gap-4 font-label-mono text-label-mono text-secondary-fixed-dim">
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">folder</span>
            /active_recon/
          </a>
          <div className="flex flex-col gap-3 pl-6 text-primary">
            <a href="#" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">description</span>
              SYSTEM_RECON_V1.EXE
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[14px]">description</span>
              NEO_OS_INTERFACE.MDS
            </a>
          </div>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-[14px]">folder</span>
            /archived_protocols/
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">folder</span>
            /experimental/
          </a>
        </nav>

        <div className="mt-auto border-t border-surface-variant pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-mono text-[10px] text-secondary-fixed-dim">CPU USAGE</span>
            <span className="font-label-mono text-[10px] text-primary">42%</span>
          </div>
          <div className="w-full h-1 bg-surface-variant">
            <div className="h-full bg-primary w-[42%]"></div>
          </div>
          <div className="flex items-center gap-2 mt-4 font-label-mono text-[10px] text-primary">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            LINK: ACTIVE
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-12 max-w-[1200px] relative z-10">
        <header className="mb-12">
          <p className="font-label-mono text-label-mono text-primary mb-2">ROOT@TIMELESS_AEX:~/WORK</p>
          <h1 className="font-display-xl text-4xl md:text-5xl text-on-background uppercase tracking-tight mb-8 drop-shadow-md">
            CREATIVE<br />INTELLIGENCE.
          </h1>
          <div className="w-full h-4 border-b border-surface-variant mt-8 dot-matrix-bg opacity-30"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <article className="border border-surface-variant bg-[#1A1A1A] flex flex-col group hover:border-primary/50 transition-colors duration-300">
            <div className="border-b border-surface-variant p-3 flex justify-between items-center bg-surface-container-low">
              <span className="font-label-mono text-[10px] text-primary flex items-center gap-2">
                SYSTEM_RECON_V1 <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              </span>
              <div className="flex items-center gap-2 text-secondary-fixed-dim">
                <span className="material-symbols-outlined text-[14px]">remove</span>
                <span className="material-symbols-outlined text-[14px]">close</span>
              </div>
            </div>
            <div className="p-4 bg-surface-container overflow-hidden">
              <div className="aspect-[16/9] bg-background w-full border border-surface-variant scanline relative">
                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" alt="Radar system" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-label-mono text-xl text-on-background uppercase">SYSTEM RECONNAISSANCE</h2>
                <span className="font-label-mono text-[10px] text-on-primary bg-[#690005] px-2 py-1">PROTOCOL: HIGH</span>
              </div>
              <p className="font-body-md text-sm text-secondary-fixed-dim mb-6 leading-relaxed">
                Autonomous data visualization engine designed for real-time asset monitoring in high-latency environments.
              </p>
              <div className="mt-auto pt-4 border-t border-surface-variant flex gap-4 font-label-mono text-[10px] text-secondary-fixed-dim">
                <span>&gt; WebGL</span>
                <span>&gt; Three.js</span>
                <span>&gt; Neural Link</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="border border-surface-variant bg-[#1A1A1A] flex flex-col group hover:border-primary/50 transition-colors duration-300">
            <div className="border-b border-surface-variant p-3 flex justify-between items-center bg-surface-container-low">
              <span className="font-label-mono text-[10px] text-secondary-fixed-dim flex items-center gap-2">
                NEO_OS_INTERFACE <span className="w-1.5 h-1.5 bg-[#474746] rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 text-secondary-fixed-dim">
                <span className="material-symbols-outlined text-[14px]">remove</span>
                <span className="material-symbols-outlined text-[14px]">close</span>
              </div>
            </div>
            <div className="p-4 bg-surface-container overflow-hidden">
              <div className="aspect-[16/9] bg-background w-full border border-surface-variant scanline relative">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="OS UI" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-label-mono text-xl text-on-background uppercase">NEO-OPERATING SYSTEM</h2>
                <span className="font-label-mono text-[10px] text-secondary-fixed-dim bg-surface-variant px-2 py-1">V2.0.4-STABLE</span>
              </div>
              <p className="font-body-md text-sm text-secondary-fixed-dim mb-6 leading-relaxed">
                A bespoke OS shell constructed for creative directors, focusing on tactile feedback and zero-latency workflow orchestration.
              </p>
              <div className="mt-auto pt-4 border-t border-surface-variant flex gap-4 font-label-mono text-[10px] text-secondary-fixed-dim">
                <span>&gt; C++ Shell</span>
                <span>&gt; Rust</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
