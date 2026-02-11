"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";
import { FiArrowUpRight, FiCoffee } from "react-icons/fi";

export default function Coffee() {
    const container = useRef(null);
    const iconRef = useRef(null);

    useGSAP(() => {
        // Entrance animation
        gsap.from(".coffee-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power3.out",
        });

        // Continuous floating animation for the icon
        gsap.to(iconRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-[var(--border-color)] relative overflow-hidden"
        >
            {/* Elegant Floating Icon (Replacement for Three.js) */}
            <div
                ref={iconRef}
                className="absolute right-[10%] top-[20%] opacity-[0.05] dark:opacity-[0.08] pointer-events-none z-0"
            >
                <FiCoffee className="text-[15rem] md:text-[25rem] text-[var(--accent)]" />
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--accent)] opacity-[0.02] blur-[100px] pointer-events-none rounded-full"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">

                {/* Left: Title & Description */}
                <div className="flex-1 coffee-item">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
                        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
                            Fuel The Hustle
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black uppercase text-[var(--foreground)] leading-[0.9] tracking-tighter mb-8 max-w-2xl">
                        Buy Me a
                        <br />
                        <span className="text-[var(--accent)]">Coffee</span>
                    </h2>

                    <p className="text-lg md:text-xl opacity-60 max-w-lg font-light leading-relaxed">
                        If my tools or content have helped you, consider supporting my work.
                        Every cup powers the next innovation.
                    </p>
                </div>

                {/* Right: CTA Button */}
                <div className="flex flex-col items-start md:items-end gap-8 coffee-item">
                    <Magnetic>
                        <a
                            href="https://buymeacoffee.com/rinsh4dd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 px-8 py-6 border border-[var(--accent)] md:border-[var(--border-color)] hover:border-[var(--accent)] bg-[var(--accent)]/5 md:bg-[var(--background)] transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Button Hover Glow Overlay */}
                            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <span className="relative z-10 text-xl md:text-2xl font-black uppercase tracking-tight text-[var(--accent)] md:text-[var(--foreground)] group-hover:text-black transition-colors duration-500">
                                Support Now
                            </span>
                            <div className="relative z-10 p-3 border border-[var(--border-color)] group-hover:border-black/20 group-hover:bg-black/10 transition-all duration-500">
                                <FiArrowUpRight className="text-2xl text-[var(--foreground)] group-hover:text-black transition-colors" />
                            </div>
                        </a>
                    </Magnetic>

                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] opacity-30">
                        <FiCoffee className="text-[var(--accent)]" />
                        <span>Every contribution counts</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
