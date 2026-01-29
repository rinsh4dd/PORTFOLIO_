export default function Marquee() {
  return (
    // Adjusted padding: py-6 for mobile, py-10 for desktop
    <div className="py-6 md:py-10 bg-[var(--foreground)] overflow-hidden border-y border-[var(--border-color)]">
      
      {/* Adjusted gap: gap-8 for mobile, gap-16 for desktop */}
      <div className="animate-marquee flex items-center gap-8 md:gap-16 whitespace-nowrap">
        
        {/* --- CONTENT BLOCK 1 --- */}
        {/* Font size: text-3xl for mobile, text-7xl for desktop */}
        <span className="text-3xl md:text-7xl font-black uppercase text-[var(--background)] tracking-tighter">
          Building Scalable Systems
        </span>
        
        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

        <span className="text-3xl md:text-7xl font-black uppercase text-[#ccff00] text-stroke-accent tracking-tighter">
          Clean Architecture
        </span>

        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

        <span className="text-3xl md:text-7xl font-black uppercase text-[var(--background)] tracking-tighter">
          High Performance
        </span>

        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

        {/* --- REPEAT CONTENT (For smooth infinite loop) --- */}
        
        <span className="text-3xl md:text-7xl font-black uppercase text-[var(--background)] tracking-tighter">
          Building Scalable Systems
        </span>
        
        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

        <span className="text-3xl md:text-7xl font-white uppercase text-transparent text-stroke-accent tracking-tighter">
          Clean Architecture
        </span>

        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

        <span className="text-3xl md:text-7xl font-black uppercase text-[var(--background)] tracking-tighter">
          High Performance
        </span>
        
        <span className="text-xl md:text-4xl text-[var(--accent)] font-mono font-bold tracking-widest">
          ///
        </span>

      </div>
    </div>
  );
}