"use client";

import { useEffect, useRef, useState } from "react";

const roleWords = ["Full ", "Stack ", "Developer"];

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);
  const [entered, setEntered] = useState(false);
  const [typedRole, setTypedRole] = useState("");
  const flashSound = useRef(null);

  useEffect(() => {
    // Disable scroll when preloader is active - using a timeout ensure it hits after content paints
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };

    lockScroll();
    flashSound.current = new Audio(
      "/sounds/camera-flash-sound-effect-soundeffect-soundeffectnocopyright-shorts-128-ytshorts.savetube.me.mp3",
    );
    flashSound.current.preload = "auto";
    flashSound.current.volume = 0.35;
    flashSound.current.muted = true;
    flashSound.current.loop = true;
    void flashSound.current.play().catch(() => undefined);

    const entranceFrame = requestAnimationFrame(() => {
      setEntered(true);
    });

    let typingTimer;
    const typingStart = setTimeout(() => {
      let wordIndex = 0;
      let characterIndex = 0;

      const typeNextCharacter = () => {
        if (wordIndex === roleWords.length) {
          return;
        }

        const word = roleWords[wordIndex];
        if (characterIndex < word.length) {
          const nextCharacter = word[characterIndex];
          setTypedRole((value) => value + nextCharacter);
          characterIndex += 1;
          typingTimer = setTimeout(typeNextCharacter, 65);
          return;
        }

        wordIndex += 1;
        characterIndex = 0;
        const wordPause = wordIndex === 1 ? 360 : 520;
        typingTimer = setTimeout(typeNextCharacter, wordPause);
      };

      typeNextCharacter();
    }, 450);

    // 1. Start fading out after 2.2 seconds
    const timer = setTimeout(() => {
      setFade(true);
      const sound = flashSound.current;
      sound.currentTime = 0;
      sound.loop = false;
      sound.muted = false;
      void sound.play().catch(() => undefined);
    }, 2200);

    // 2. Remove from DOM after animation is done (2.7s total) and unlock scroll
    const cleanup = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }, 2700);

    return () => {
      cancelAnimationFrame(entranceFrame);
      clearTimeout(typingStart);
      clearTimeout(typingTimer);
      clearTimeout(timer);
      clearTimeout(cleanup);
      flashSound.current?.pause();
      flashSound.current = null;
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
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-white ${fade ? "preloader-flash" : "opacity-0"}`}
      />
      <div className="relative flex flex-col items-center">
        {/* Name with subtle glow */}
        <h1
          className={`text-4xl md:text-6xl font-black tracking-[0.2em] text-white uppercase transition-[transform,opacity,filter] duration-700 ease-out ${fade ? "-translate-y-6 scale-95 opacity-0 blur-sm" : entered ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-3 scale-90 opacity-0 blur-sm"}`}
        >
          RINSHAD
        </h1>

        {/* Job Title / Subtitle */}
        <p className={`mt-2 text-xs md:text-sm text-gray-400 tracking-[0.5em] uppercase transition-all duration-500 ease-out ${fade ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}>
          {typedRole}
          <span aria-hidden="true" className="ml-1 inline-block animate-pulse text-cyan-400">|</span>
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
