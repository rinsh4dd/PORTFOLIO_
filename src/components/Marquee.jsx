"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  { name: "C#", img: "https://skillicons.dev/icons?i=c#" },
  { name: ".NET Core", img: "https://skillicons.dev/icons?i=dotnet" },
  { name: "Azure", img: "https://skillicons.dev/icons?i=azure" },
  { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "React", img: "https://techstack-generator.vercel.app/react-icon.svg" },
  { name: "JavaScript", img: "https://techstack-generator.vercel.app/js-icon.svg" },
  { name: "Redux", img: "https://techstack-generator.vercel.app/redux-icon.svg" },
  { name: "AWS", img: "https://techstack-generator.vercel.app/aws-icon.svg" },
  { name: "Docker", img: "https://skillicons.dev/icons?i=docker" },
  { name: "Git", img: "https://skillicons.dev/icons?i=git" },
  { name: "Postman", img: "https://skillicons.dev/icons?i=postman" },
  { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
  { name: "HTML5", img: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", img: "https://skillicons.dev/icons?i=css" },
  { name: "Linux", img: "https://skillicons.dev/icons?i=linux" },
  { name: "Vercel", img: "https://skillicons.dev/icons?i=vercel" },
  { name: "Figma", img: "https://skillicons.dev/icons?i=figma" },
];

export default function Marquee() {
  const itemsRef = useRef([]);

  useGSAP(() => {
    const items = itemsRef.current;

    // PERFORMANCE OPTIMIZATION: Setup quickSetters
    const setters = items.map((item) => {
      if (!item) return null;
      return {
        scale: gsap.quickSetter(item, "scale"),
        filter: gsap.quickSetter(item, "filter"),
        opacity: gsap.quickSetter(item, "opacity"),
      };
    });

    const updateSpotlight = () => {
      const centerX = window.innerWidth / 2;

      items.forEach((item, i) => {
        if (!item || !setters[i]) return;
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;

        // Calculate distance from center (0 to 1 range)
        const maxDist = window.innerWidth / 1.5;
        const dist = Math.abs(centerX - itemX);
        const normalizedDist = Math.min(dist / maxDist, 1);

        // Spotlight Strength (1 at center, 0 at edges)
        // Using a smoother power for liquid feel
        const spotlight = Math.pow(1 - normalizedDist, 3);

        // Dynamic properties
        const scale = 1 + spotlight * 0.12; // Extremely subtle, premium zoom
        const grayscale = (1 - spotlight) * 100;
        const opacity = 0.25 + spotlight * 0.75; // Fade to 25% at edges

        setters[i].scale(scale);
        setters[i].filter(`grayscale(${grayscale}%)`);
        setters[i].opacity(opacity);
      });
    };

    gsap.ticker.add(updateSpotlight);
    return () => gsap.ticker.remove(updateSpotlight);
  });

  return (
    <section id="skills" className="py-20 md:py-32 bg-[var(--background)] overflow-hidden border-y border-[var(--border-color)] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--accent)] opacity-[0.02] blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 px-6 md:px-12 max-w-[1800px] mx-auto w-full">
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-4 text-left">
              <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
                Technical Prowess
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase text-[var(--foreground)] leading-[0.9] tracking-tighter mb-4">
              Core <br />
              <span className="text-[var(--accent)]">Stack</span>
            </h2>
          </div>

          <p className="text-base md:text-lg opacity-60 max-w-sm font-light leading-relaxed md:text-right">
            A precise selection of technologies engineered for performance,
            scalability, and architectural excellence.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full">
          <div className="animate-marquee flex items-center gap-8 md:gap-14 whitespace-nowrap min-w-full py-16">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex items-center gap-4 md:gap-6 px-6 md:px-10 py-5 bg-white/[0.03] dark:bg-black/[0.1] backdrop-blur-2xl border border-white/10 dark:border-white/5 rounded-full shrink-0 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-colors duration-500 hover:border-[var(--accent)]"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--foreground)]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Fade mask for premium reveal */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}