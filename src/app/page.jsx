import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ReflexGame from "@/components/Game";

export default function Home() {
  return (
    <main className="bg-[var(--background)] selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Experience />
      <Projects />
      <Coffee />
      <Footer />
    </main>
  );
}
