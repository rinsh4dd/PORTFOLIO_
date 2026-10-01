"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef();
  const scrollContainer = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("all", () => {
        const getScrollDistance = () =>
          Math.max(scrollContainer.current.scrollWidth - window.innerWidth, 0);

        gsap.to(scrollContainer.current, {
          x: () => -getScrollDistance(),
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
    },
    { scope: container },
  );

  const projects = [
    {
      id: "01",
      title: "Flowbee Booking",
      category: "Appointment Scheduling Platform",
      link: "https://booking.flowbee.io",
      description:
        "Enterprise appointment scheduling platform engineered with ASP.NET Core, C#, Dapper, and Stored Procedures. Features multi-country, timezone-aware booking and slot availability handling local working hours, staff schedules, holidays, and cool-off periods. Designed round-robin staff assignment and conflict detection with transaction-safe database operations to prevent double bookings. Developed automated WhatsApp and Email notifications for confirmations, reminders, and cancellations, with comprehensive audit logging and reporting APIs.",
      stack: ["ASP.NET Core", "C#", "Dapper", "SQL Server", "WhatsApp API", "React.js"],
      theme: "light",
    },
    {
      id: "02",
      title: "Al Azima",
      category: "Meat E-Commerce Platform",
      link: null,
      description:
        "High-performance e-commerce backend platform built with ASP.NET Core, EF Core, and SQL Server. Developed RESTful APIs for customer authentication, profiles, dynamic product catalog, cart, coupons, checkout, and order lifecycle management. Implemented JWT/OTP authentication, refresh tokens, role-based authorization, and standardized API responses. Built custom product configurator with dynamic pricing for weight, cut type, marination, and packaging options, plus admin APIs for inventory, orders, and analytics.",
      stack: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "JWT", "FluentValidation"],
      theme: "dark",
    },
    {
      id: "03",
      title: "KOOTAAN CSM",
      category: "CSM SaaS Platform",
      link: null,
      description:
        "Scalable Customer Service Management SaaS platform built on ASP.NET Core and SQL Server. Developed and maintained RESTful APIs driving business logic and high-throughput data access via ADO.NET. Integrated notification services for application and business events. Designed and optimized complex SQL queries and stored procedures for critical application workflows, while troubleshooting and resolving production performance issues.",
      stack: ["ASP.NET Core", "C#", "ADO.NET", "SQL Server", "Notification Services"],
      theme: "light",
    },
    {
      id: "04",
      title: "Centralized Notifications",
      category: "Multi-Channel Messaging Infrastructure",
      link: null,
      description:
        "Architected a reusable, high-throughput centralized notification service across multiple enterprise applications. Implemented queue-based asynchronous delivery with scheduling, retry handling, and status tracking. Built dynamic config-driven templates supporting company, branch, and event-level notification rules. Developed bulk notification processing using SQL Table-Valued Parameters (TVPs) and implemented an orchestration layer for lookup, encryption, and queue dispatch.",
      stack: ["ASP.NET Core", "C#", "SQL Server", "Queue Delivery", "WhatsApp API", "SMTP Email"],
      theme: "dark",
    },
  ];

  return (
    <section
      ref={container}
      id="projects"
      className="relative h-[100svh] overflow-hidden flex items-center bg-[var(--background)] border-t border-[var(--border-color)]"
    >
      {/* Background Grid (Optimized with simpler mask for performance) */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* PERFORMANCE FIX: 
         Added 'will-change-transform' to hint browser about movement.
      */}
      <div
        ref={scrollContainer}
        className="relative z-10 flex h-full flex-row items-center gap-6 px-6 md:gap-12 md:px-12 lg:gap-24 lg:px-24 will-change-transform"
      >
        {/* --- 1. INTRO CARD --- */}
        <div className="w-[86vw] shrink-0 flex flex-col justify-center z-10 md:w-[55vw] lg:w-[35vw]">
          <div className="mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
            <span className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]">
              Featured Systems – Production APIs, SaaS &amp; Architecture
            </span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-[var(--foreground)] leading-[0.8] tracking-tighter uppercase">
            Selected
            <br />
            <span className="text-transparent text-stroke-foreground">
              Works
            </span>
          </h2>
          <p className="mt-8 text-xl opacity-60 max-w-md font-light leading-relaxed">
            Engineering scalable backends, high-throughput APIs, and enterprise SaaS solutions.
          </p>
        </div>

        {/* --- 2. PROJECTS LOOP --- */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card-mobile relative h-[72svh] w-[86vw] shrink-0 group md:h-[70vh] md:w-[55vw] lg:h-[75vh] lg:w-[45vw]"
          >
            {/* CARD CONTAINER */}
            <div
              className={`
                    absolute inset-0 border flex flex-col overflow-hidden shadow-2xl p-8 md:p-12 transition-all duration-500 rounded-2xl lg:rounded-none
                    ${project.theme === "dark"
                  ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                  : "bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--accent)]"
                }
                `}
            >
              {/* Background Index Number */}
              <span
                className={`
                        absolute -bottom-10 -right-10 text-[30vh] lg:text-[40vh] font-black leading-none select-none pointer-events-none transition-opacity
                        ${project.theme === "dark" ? "text-[var(--background)] opacity-[0.05]" : "text-[var(--foreground)] opacity-[0.03] group-hover:opacity-[0.05]"}
                    `}
              >
                {project.id}
              </span>

              {/* Header */}
              <div className="flex justify-between items-start z-10 mb-8 md:mb-12">
                <div className="flex-1 min-w-0 pr-4">
                  <span
                    className={`font-mono text-[10px] md:text-xs tracking-widest uppercase mb-3 block opacity-60 ${project.theme === "dark" ? "text-[var(--accent)]" : "text-[var(--accent)]"}`}
                  >
                    {project.category}
                  </span>
                  <h3
                    className={`text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter ${project.theme === "dark" ? "" : "text-[var(--foreground)]"}`}
                  >
                    {project.title}
                  </h3>
                </div>
                {project.link ? (
                  <Magnetic>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                                  inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-all cursor-pointer
                                  ${project.theme === "dark"
                          ? "border-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black"
                          : "border-[var(--foreground)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-black"
                        }
                            `}
                      aria-label={`Open ${project.title} live link`}
                    >
                      <FiArrowUpRight className="text-2xl md:text-3xl" />
                    </a>
                  </Magnetic>
                ) : (
                  <Magnetic>
                    <div
                      className={`
                                  flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-all opacity-40
                                  ${project.theme === "dark"
                          ? "border-[var(--background)]"
                          : "border-[var(--foreground)]"
                        }
                            `}
                      title="Enterprise production project"
                    >
                      <FiArrowUpRight className="text-2xl md:text-3xl" />
                    </div>
                  </Magnetic>
                )}
              </div>

              {/* Content Area - Fixed & Truncated */}
              <div className="z-10 flex flex-col flex-1 justify-between overflow-hidden">
                <div className="max-w-2xl">
                  <p className="text-sm md:text-base opacity-70 mb-8 border-l-2 border-[var(--accent)] pl-4 md:pl-6 font-light leading-relaxed line-clamp-4 md:line-clamp-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-6">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className={`
                                    px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase border transition-colors cursor-default
                                    ${project.theme === "dark"
                          ? "border-[var(--background)]/30 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                          : "border-[var(--foreground)]/20 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                        }
                                `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* --- 3. CTA CARD --- */}
        <div className="w-[86vw] flex flex-col items-center justify-center shrink-0 z-10 gap-8 md:w-[55vw] lg:w-[40vw]">
          <div className="w-full h-[1px] bg-[var(--foreground)] opacity-20"></div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--foreground)]">
            Have a concept?
          </p>
          <a
            href="mailto:rinshadcontacts@gmail.com"
            className="text-7xl md:text-9xl font-black uppercase text-[var(--foreground)] hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
