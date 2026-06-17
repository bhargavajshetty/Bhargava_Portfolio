import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const SectionDivider = () => (
  <div className="w-full max-w-5xl mx-auto px-6 py-6 md:py-12">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <>
      {/* Premium background particle effects & mouse glow */}
      <Background />

      {/* Floating glassmorphic header */}
      <Navbar />

      {/* Page Content layout - Using vertical flex layout to prevent section overlapping */}
      <main className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-12 md:gap-20 pt-16">
        <Hero />
        <SectionDivider />
        
        <About />
        <SectionDivider />
        
        <Skills />
        <SectionDivider />
        
        <Projects />
        <SectionDivider />
        
        <Experience />
        <SectionDivider />
        
        <Education />
        <SectionDivider />
        
        <Contact />
      </main>

      {/* Modern, minimalist footer */}
      <footer className="w-full border-t border-white/5 py-12 mt-24 relative z-10 text-center text-xs text-slate-500 font-space tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Bhargava J Shetty. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-electric-purple font-bold">Next.js</span>, <span className="text-electric-blue font-bold">Tailwind</span>, & <span className="text-electric-cyan font-bold">Framer Motion</span>
          </p>
        </div>
      </footer>
    </>
  );
}
