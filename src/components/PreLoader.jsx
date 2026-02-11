"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Disable scroll when preloader is active - using a timeout ensure it hits after content paints
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };

    lockScroll();

    // 1. Start fading out after 2.2 seconds
    const timer = setTimeout(() => {
      setFade(true);
    }, 2200);

    // 2. Remove from DOM after animation is done (2.7s total) and unlock scroll
    const cleanup = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${fade ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Name with subtle glow */}
        <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white uppercase animate-fade-in-up">
          RINSHAD
        </h1>

        {/* Job Title / Subtitle */}
        <p className="mt-2 text-xs md:text-sm text-gray-400 tracking-[0.5em] uppercase">
          Full Stack Developer
        </p>

        {/* Sleek Loading Line */}
        <div className="mt-8 h-[2px] w-0 bg-cyan-500 animate-expand-width rounded-full shadow-[0_0_10px_#06b6d4]"></div>
      </div>

      {/* Optional: Tech stack coordinates or minimal footer */}
      <div className="absolute bottom-10 text-[10px] text-gray-600 font-mono">
        .NET CORE // REACT
      </div>
    </div>
  );
}