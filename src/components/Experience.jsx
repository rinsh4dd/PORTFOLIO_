"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef();

  useGSAP(
    () => {
      // 1. Line Drawing Animation
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1.5,
          }
        }
      );

      // 2. Row Animation (Fade In Up)
      const rows = gsap.utils.toArray(".experience-row");
      rows.forEach((row) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  const experiences = [
    {
      year: "2026",
      status: "Present",
      type: "Full Time",
      company: "Sharaco Technologies",
      role: "Software Engineer - .NET Backend",
      description: "Currently specializing in ASP.NET Web API and Core ecosystems. Focused on building scalable backend architectures and optimizing server-side performance for enterprise-level applications.",
      deliverables: []
    },
    {
      year: "2025",
      status: "Internship",
      type: "Trainee",
      company: "Bridgeon",
      role: ".NET & React Developer Trainee",
      description: "Operating within an Agile development team, I architect scalable backend solutions using the .NET ecosystem. Managed CI/CD pipelines and reacted full-stack features.",
      deliverables: [
        {
          id: "01",
          title: "Smart Serve ERP",
          desc: "Vehicle Service Management System. Digitized job cards, reducing manual processing by 40%.",
          stack: ["ASP.NET Core", "Dapper", "React"]
        },
        {
          id: "02",
          title: "Smart Desk System",
          desc: "SaaS-ready office system with multi-tenant architecture and strict RBAC.",
          stack: ["EF Core", "SQL Server", "Redux"]
        },
        {
          id: "03",
          title: "ShoeCart E-Commerce",
          desc: "High-performance shopping platform with real-time cart updates and JWT auth.",
          stack: ["Web API", "Authentication", "React"]
        }
      ]
    }
  ];

  return (
    <section
      ref={container}
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-[var(--border-color)]"
    >
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <h2 className="text-sm font-mono text-[var(--accent)] uppercase tracking-widest mb-4 md:mb-0">
          Professional Backend Development Experience (C# / .NET)
        </h2>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
          <span>Career Timeline</span>
        </div>
      </div>

      <div className="relative">
        {/* Timeline Line (Visual Connector) */}
        <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-[1px] bg-[var(--border-color)] z-0">
          <div className="timeline-line absolute top-0 left-0 w-full h-full bg-[var(--accent)] origin-top"></div>
        </div>

        <div className="flex flex-col gap-24">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">

              {/* --- LEFT COL: DATES --- */}
              <div className="md:col-span-3 md:text-right">
                <h3 className="text-4xl md:text-5xl font-black uppercase text-[var(--foreground)] tracking-tight items-center flex md:justify-end gap-3">
                  {exp.year}
                  {/* Dot indicator for timeline */}
                  <span className="hidden md:block w-3 h-3 bg-[var(--background)] border-2 border-[var(--accent)] rounded-full translate-x-[26px]"></span>
                </h3>
                <span className="font-mono text-sm opacity-60 uppercase tracking-widest block mt-1">
                  {exp.status}
                </span>
                <div className="mt-4 inline-block px-3 py-1 border border-[var(--accent)] rounded-full text-[10px] font-bold uppercase text-[var(--accent)]">
                  {exp.type}
                </div>
              </div>

              {/* --- RIGHT COL: DETAILS --- */}
              <div className="md:col-span-9 md:pl-8">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-6xl font-black uppercase text-[var(--foreground)] tracking-tighter mb-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-light text-[var(--foreground)] opacity-80">
                    {exp.role}
                  </h4>
                </div>

                <p className="text-lg md:text-xl font-light leading-relaxed opacity-70 mb-12 max-w-3xl">
                  {exp.description}
                </p>

                {/* Deliverables Grid (If available) */}
                {exp.deliverables.length > 0 && (
                  <div className="grid grid-cols-1 gap-6">
                    {exp.deliverables.map((item) => (
                      <div key={item.id} className="group p-6 md:p-8 bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-2xl border border-white/5 hover:border-[var(--accent)]/30 rounded-3xl transition-all duration-700 hover:bg-[var(--card-bg)] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                          <div className="flex-1">
                            <h5 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors duration-500">
                              {item.title}
                            </h5>
                            <p className="text-base font-light opacity-60 leading-relaxed max-w-xl mb-6">
                              {item.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.stack.map(tech => (
                                <span key={tech} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 bg-[var(--foreground)]/5 rounded-full border border-[var(--border-color)]">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="text-5xl font-black opacity-[0.03] text-[var(--foreground)] group-hover:opacity-[0.08] group-hover:text-[var(--accent)] transition-all duration-700">
                            {item.id}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
