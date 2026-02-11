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
    }).from(".hero-pill", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
      <p className="hero-pill text-[var(--accent)] font-mono mb-6 tracking-[0.4em] uppercase text-[10px] md:text-xs opacity-80">
        .NET Backend Developer • ASP.NET Core Specialist
      </p>

      <div className="overflow-hidden mb-2">
        <h1 className="text-[14vw] md:text-[13vw] leading-[0.85] font-black uppercase tracking-tighter text-[var(--foreground)]">
          {Array.from("MOHAMMED").map((char, i) => (
            <span key={i} className="hero-char inline-block will-change-transform">{char}</span>
          ))}
        </h1>
      </div>

      <div className="overflow-hidden">
        <h1 className="text-[14vw] md:text-[13vw] leading-[0.85] font-black uppercase tracking-tighter text-[var(--foreground)] ml-[6vw]">
          {Array.from("RINSHAD").map((char, i) => (
            <span key={i} className="hero-char inline-block will-change-transform">{char}</span>
          ))}
          <span className="hero-char inline-block text-[var(--accent)]">.</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 mt-16">
        {['ASP.NET Core', 'EF Core', 'SQL Server', 'React'].map((tech) => (
          <span key={tech} className="hero-pill px-6 py-3 bg-[var(--card-bg)]/20 backdrop-blur-xl border border-[var(--border-color)] rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all duration-500 cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}