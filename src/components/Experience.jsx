"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. Line Drawing Animation (Fixed)
      // We set the initial state immediately to ensure it's hidden before animation starts
      gsap.set(".timeline-line", { scaleY: 0, transformOrigin: "top" });

      gsap.to(".timeline-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Starts when section top hits 60% of viewport
          end: "bottom 80%", // Ends when section bottom hits 80% of viewport
          scrub: 1, // Reduced scrub slightly for tighter response
          invalidateOnRefresh: true, // Helps recalculate on resize/refresh
        },
      });

      // 2. Content Fade In
      gsap.from(".exp-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%", // Triggers slightly earlier
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-[var(--border-color)] overflow-hidden"
    >
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <h2 className="text-sm font-mono text-[var(--accent)] uppercase tracking-widest mb-4 md:mb-0">
          ( 02 ) Professional History
        </h2>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
          <span>Career Timeline</span>
        </div>
      </div>

      {/* --- TIMELINE LAYOUT --- */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* --- TIMELINE LINE (FIXED) --- */}
        {/* Added z-0 to ensure it doesn't get hidden by container backgrounds */}
        <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-[1px] bg-[var(--border-color)] z-0">
          {/* Removed Tailwind origin-top to let GSAP handle it exclusively */}
          <div className="timeline-line w-full h-full bg-[var(--accent)]"></div>
        </div>

        {/* --- 01: CURRENT ROLE (Sharaco Technologies) --- */}
        {/* Added relative z-10 to content to ensure it sits ON TOP of the line */}
        <div className="md:col-span-3 md:text-right py-2 relative z-10">
          <h3 className="exp-content text-2xl font-black uppercase text-[var(--foreground)]">
            2026
          </h3>
          <span className="exp-content font-mono text-sm opacity-60 uppercase tracking-widest block mt-1">
            Jan — Present
          </span>
          <div className="exp-content mt-4 inline-block px-3 py-1 border border-[var(--accent)] rounded-full text-[10px] font-bold uppercase text-[var(--accent)]">
            Full-time
          </div>
        </div>

        <div className="md:col-span-9 md:pl-12 mb-20 relative z-10">
          <div className="mb-8">
            <h3 className="exp-content text-5xl md:text-7xl font-black uppercase text-[var(--foreground)] tracking-tighter mb-2">
              Sharaco Technologies
            </h3>
            <h4 className="exp-content text-xl md:text-2xl font-light text-[var(--foreground)] opacity-80">
              Software Engineer - .NET Backend
            </h4>
          </div>
          <p className="exp-content text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-3xl">
            Currently specializing in ASP.NET Web API and Core ecosystems.
            Focused on building scalable backend architectures and optimizing
            server-side performance for enterprise-level applications.
          </p>
        </div>

        {/* --- 02: PREVIOUS ROLE (Bridgeon) --- */}
        <div className="md:col-span-3 md:text-right py-2 relative z-10">
          <h3 className="exp-content text-2xl font-black uppercase text-[var(--foreground)]">
            2025
          </h3>
          <span className="exp-content font-mono text-sm opacity-60 uppercase tracking-widest block mt-1">
            Apr — Jan 2026
          </span>
          <div className="exp-content mt-4 inline-block px-3 py-1 border border-[var(--border-color)] rounded-full text-[10px] font-bold uppercase opacity-60">
            Trainee
          </div>
        </div>

        <div className="md:col-span-9 md:pl-12 relative z-10">
          <div className="mb-8">
            <h3 className="exp-content text-5xl md:text-7xl font-black uppercase text-[var(--foreground)] tracking-tighter mb-2">
              Bridgeon
            </h3>
            <h4 className="exp-content text-xl md:text-2xl font-light text-[var(--foreground)] opacity-80">
              .NET & React Developer Trainee
            </h4>
          </div>

          <p className="exp-content text-lg md:text-xl font-light leading-relaxed opacity-70 mb-12 max-w-3xl">
            Developed full-stack features contributing directly to ERP modules.
            Architected modular UI components in React and implemented secure
            JWT-based authentication and RBAC across multiple internal systems.
          </p>

          {/* --- KEY DELIVERABLES --- */}
          <div className="exp-content">
            <h5 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-8 border-b border-[var(--border-color)] pb-4">
              // Key Deliverables & Modules (Bridgeon)
            </h5>

            <div className="space-y-8">
              {/* Smart Serve */}
              <div className="group flex flex-col md:flex-row gap-6 hover:bg-[var(--card-bg)] p-6 -mx-6 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border-color)] rounded-full text-[var(--accent)] font-bold shrink-0">
                  01
                </div>
                <div>
                  <h6 className="text-xl font-bold uppercase mb-2 group-hover:text-[var(--accent)] transition-colors">
                    Smart Serve ERP
                  </h6>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed mb-3">
                    Built a comprehensive Vehicle Service Management System,
                    digitizing job cards and inventory tracking.
                  </p>
                  <div className="flex gap-3 text-xs font-mono opacity-50 uppercase">
                    <span>ASP.NET Core</span> <span>/</span> <span>Dapper</span>{" "}
                    <span>/</span> <span>React</span>
                  </div>
                </div>
              </div>

              {/* Smart Desk */}
              <div className="group flex flex-col md:flex-row gap-6 hover:bg-[var(--card-bg)] p-6 -mx-6 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border-color)] rounded-full text-[var(--accent)] font-bold shrink-0">
                  02
                </div>
                <div>
                  <h6 className="text-xl font-bold uppercase mb-2 group-hover:text-[var(--accent)] transition-colors">
                    Smart Desk System
                  </h6>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed mb-3">
                    Engineered multi-tenant architecture with strict RBAC for
                    SaaS-ready office environments.
                  </p>
                  <div className="flex gap-3 text-xs font-mono opacity-50 uppercase">
                    <span>EF Core</span> <span>/</span> <span>SQL Server</span>{" "}
                    <span>/</span> <span>Redux</span>
                  </div>
                </div>
              </div>

              {/* ShoeCart */}
              <div className="group flex flex-col md:flex-row gap-6 hover:bg-[var(--card-bg)] p-6 -mx-6 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border-color)] rounded-full text-[var(--accent)] font-bold shrink-0">
                  03
                </div>
                <div>
                  <h6 className="text-xl font-bold uppercase mb-2 group-hover:text-[var(--accent)] transition-colors">
                    ShoeCart E-Commerce
                  </h6>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed mb-3">
                    Developed a high-performance shopping platform focused on
                    state management efficiency and JWT auth.
                  </p>
                  <div className="flex gap-3 text-xs font-mono opacity-50 uppercase">
                    <span>Web API</span> <span>/</span>{" "}
                    <span>Authentication</span> <span>/</span>{" "}
                    <span>React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
