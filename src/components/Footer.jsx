"use client";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-title", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <footer
      ref={container}
      id="contact"
      className="py-32 flex flex-col items-center justify-center text-center bg-[var(--background)] border-t border-[var(--border-color)]"
    >
      <p className="font-mono text-[var(--accent)] mb-8 uppercase tracking-widest text-sm">
        Ready to Collaborate?
      </p>

      {/* Arrow + Text */}
      <Magnetic>
        <a
          href="mailto:rinshadcontacts@gmail.com"
          className="group relative inline-flex items-center gap-4 cursor-pointer"
        >
          <span className="footer-title text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
            Let&apos;s Talk
          </span>

          <FiArrowUpRight className="text-[var(--accent)] text-5xl md:text-6xl transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" />
        </a>
      </Magnetic>

      <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold uppercase tracking-widest">
        {[
          { name: "LinkedIn", url: "https://www.linkedin.com/in/rinsh4dd" },
          { name: "GitHub", url: "https://github.com/rinsh4dd" },
          { name: "Instagram", url: "https://instagram.com/rinsh4dd" },
        ].map((social) => (
          <Magnetic key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors relative group"
            >
              {social.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="mt-16 text-xs opacity-40 font-mono">
        © 2026 Mohammed Rinshad. Built with Next.js &amp; GSAP.
      </div>
    </footer>
  );
}
