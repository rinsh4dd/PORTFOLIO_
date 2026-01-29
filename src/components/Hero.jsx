"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-char", {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
    })
    .from(".hero-pill", { 
      opacity: 0, 
      scale: 0.8, 
      stagger: 0.1, 
      ease: "back.out(1.7)" 
    }, "-=0.5");
    
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="min-h-dvh flex flex-col justify-center px-4 md:px-12 pt-16 md:pt-20 overflow-x-hidden"
    >
      <p className="text-[var(--accent)] font-mono mb-4 text-sm md:text-base tracking-widest uppercase">
        Full Stack Developer
      </p>
      
      {/* --- FIRST NAME --- */}
      <div className="overflow-hidden">
        {/* Adjusted size: 11.5vw for mobile ensures 8 chars fit (8 * 11.5 = 92vw) */}
        <h1 className="text-[11.5vw] md:text-[10vw] leading-[0.85] font-black uppercase tracking-tighter text-[var(--foreground)] whitespace-nowrap">
          {Array.from("MOHAMMED").map((char, i) => (
            <span key={i} className="hero-char inline-block">{char}</span>
          ))}
        </h1>
      </div>
      
      {/* --- SECOND NAME --- */}
      <div className="overflow-hidden">
        {/* Removed left margin on mobile (ml-0) to prevent overflow */}
        <h1 className="text-[11.5vw] md:text-[10vw] leading-[0.85] font-black uppercase tracking-tighter text-[var(--foreground)] ml-0 md:ml-[5vw] whitespace-nowrap">
          {Array.from("RINSHAD").map((char, i) => (
            <span key={i} className="hero-char inline-block">{char}</span>
          ))}
          <span className="hero-char inline-block text-[var(--accent)]">.</span>
        </h1>
      </div>

      {/* --- TECH PILLS --- */}
      <div className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-12">
        {['ASP.NET Core', 'React.js', 'SQL Server'].map((tech) => (
          <span 
            key={tech} 
            className="hero-pill px-4 py-2 md:px-6 md:py-3 border border-[var(--border-color)] rounded-full text-xs md:text-sm font-bold uppercase hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}