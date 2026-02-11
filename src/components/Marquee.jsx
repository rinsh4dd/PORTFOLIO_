const skills = [
  { name: "C#", img: "https://skillicons.dev/icons?i=c#" },
  { name: ".NET Core", img: "https://skillicons.dev/icons?i=dotnet" },
  { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "React", img: "https://techstack-generator.vercel.app/react-icon.svg" },
  { name: "JavaScript", img: "https://techstack-generator.vercel.app/js-icon.svg" },
  { name: "Redux", img: "https://techstack-generator.vercel.app/redux-icon.svg" },
  { name: "Azure", img: "https://skillicons.dev/icons?i=azure" },
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
  return (
    <section id="skills" className="py-20 md:py-32 bg-[var(--background)] overflow-hidden border-y border-[var(--border-color)] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--accent)] opacity-[0.02] blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-20">
        {/* Section Header - Perfectly synced with Coffee section */}
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

        {/* Marquee - Fluid & Responsive */}
        <div className="relative flex w-full">
          {/* Using a more fluid gap that scales with screen size */}
          <div className="animate-marquee flex items-center gap-8 md:gap-14 whitespace-nowrap min-w-full py-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 md:gap-6 px-6 md:px-8 py-4 md:py-5 group bg-[var(--card-bg)]/20 backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-700 rounded-full"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--foreground)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-700">
                  {skill.name}
                </span>
              </div>
            ))}
            {/* DUPLICATE FOR SEAMLESS LOOP */}
            {skills.map((skill, i) => (
              <div
                key={`dup-${i}`}
                className="flex items-center gap-4 md:gap-6 px-6 md:px-8 py-4 md:py-5 group bg-[var(--card-bg)]/20 backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-700 rounded-full"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--foreground)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-700">
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