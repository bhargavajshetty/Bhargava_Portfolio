"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll to change bg opacity and update active nav item
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            name: item.name,
            top: rect.top + window.scrollY - 120, // Offset for navbar
            bottom: rect.bottom + window.scrollY - 120,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ name: string; top: number; bottom: number }>;

      const scrollPos = window.scrollY;
      const current = sections.find(
        (sec) => scrollPos >= sec.top && scrollPos < sec.bottom
      );

      if (current) {
        setActiveSection(current.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 font-space text-xl font-bold tracking-wider text-slate-100 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-white/10 group-hover:border-electric-blue/50 transition-all">
            <Cpu className="w-5 h-5 text-electric-blue group-hover:text-electric-cyan transition-colors" />
            <div className="absolute inset-0 rounded-xl bg-electric-blue/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span>
            BHARGAVA J SHETTY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass-panel border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full font-space ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Availability Badge */}
        <div className="hidden md:block">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-semibold font-space text-xs tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Opportunities</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-xl md:hidden glass-panel border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 mx-6 p-6 rounded-2xl glass-panel border border-white/10 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`py-2 px-4 rounded-xl text-lg font-medium font-space ${
                  activeSection === item.name
                    ? "bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 border border-electric-blue/30 text-white"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-center justify-center gap-2.5 font-semibold font-space text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
