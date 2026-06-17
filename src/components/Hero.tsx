"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-32 pb-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Info Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5 w-fit mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cyan"></span>
            </span>
            <span className="text-xs font-semibold font-space tracking-wide text-electric-cyan uppercase">
              Actively Seeking Placement Opportunities
            </span>
          </motion.div>

          {/* Title and Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-space leading-tight mb-4 tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient animate-matrix-glow">
              Bhargava J Shetty
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 font-space tracking-wide mb-6"
          >
            Software Engineer <span className="text-electric-blue">|</span> AI & Data Science Enthusiast
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed font-sans"
          >
            Building intelligent systems through AI, Data and Software Engineering. final-year Computer Science student passionate about machine learning, deep learning architectures, and scalable full-stack web applications.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-cyan hover:to-electric-blue text-white font-medium transition-all shadow-[0_4px_20px_rgba(0,210,255,0.15)] hover:shadow-[0_4px_30px_rgba(0,210,255,0.3)] duration-300"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/Bhargava_J_Shetty_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-electric-blue/40 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-electric-purple" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <span className="text-xs font-semibold font-space tracking-widest text-slate-500 uppercase">
              Connect
            </span>
            <div className="h-px w-10 bg-slate-800" />
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/2 hover:bg-electric-blue/10 hover:border-electric-blue/30 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/2 hover:bg-electric-purple/10 hover:border-electric-purple/30 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:bhargavajshetty3@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/2 hover:bg-electric-cyan/10 hover:border-electric-cyan/30 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-5 flex justify-center relative select-none"
        >
          {/* Avatar Glass Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl p-3 glass-panel border border-white/5 shadow-2xl overflow-hidden group">
            {/* Glowing inner border on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 via-transparent to-electric-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated Glow Halo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-electric-blue via-electric-purple to-electric-cyan opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-700" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="/bhargava_avatar.png"
                alt="Bhargava J Shetty Avatar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
