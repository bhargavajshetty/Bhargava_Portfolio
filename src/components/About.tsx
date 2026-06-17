"use client";

import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, GraduationCap } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay: index * 0.15,
      },
    }),
  };

  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      color: "text-electric-blue border-electric-blue/20 bg-electric-blue/5",
      desc: "Currently in my final year of Bachelor of Technology in Computer Science & Engineering at NMAM Institute of Technology. Equipped with core algorithmic knowledge and software development foundations.",
    },
    {
      icon: Brain,
      title: "AI & ML Focus",
      color: "text-electric-purple border-electric-purple/20 bg-electric-purple/5",
      desc: "Passionate about Machine Learning, NLP, and Deep Learning. Experienced in building models with TensorFlow/Keras and Scikit-learn, translating raw data into predictive intelligence.",
    },
    {
      icon: Code,
      title: "Full Stack Mastery",
      color: "text-electric-cyan border-electric-cyan/20 bg-electric-cyan/5",
      desc: "Experienced in constructing reactive user interfaces with Next.js, React, and Tailwind, combined with robust backend services using Spring Boot and secure relational/NoSQL databases.",
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving Mindset",
      color: "text-amber-400 border-amber-400/20 bg-amber-400/5",
      desc: "Driven by curiosity to design clean code and optimal architectures. Focused on constructing practical, impact-oriented systems that solve complex business and engineering tasks.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-space tracking-widest text-electric-blue uppercase mb-3"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100 max-w-2xl"
          >
            Passionate about creating scalable software and AI-driven solutions
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full" />
        </div>

        {/* Introduction Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="text-sm font-semibold font-space tracking-widest text-electric-cyan uppercase">
                The Philosophy
              </span>
              <h4 className="text-2xl font-bold font-space text-slate-100 mt-3 mb-6">
                Bridging data science architectures with functional product layouts.
              </h4>
              <p className="text-slate-400 leading-relaxed font-sans mb-6">
                As a final-year CS student, I focus on solving complex real-world problems. Whether building neural network-driven image classifiers or engineering interactive data dashboards, my focus is always on creating efficient, reliable, and user-centric systems.
              </p>
            </div>
            
            {/* Quick Stat Panel */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              <div>
                <p className="text-3xl font-extrabold text-electric-blue font-space">4+</p>
                <p className="text-xs text-slate-400 font-semibold tracking-wider font-space uppercase mt-1">
                  Core ML Projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-electric-purple font-space">10+</p>
                <p className="text-xs text-slate-400 font-semibold tracking-wider font-space uppercase mt-1">
                  Tools & Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Pillars Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="p-6 rounded-2xl glass-card flex flex-col items-start"
                >
                  <div className={`p-3 rounded-xl border mb-5 flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h5 className="text-lg font-bold font-space text-slate-100 mb-2">
                    {pillar.title}
                  </h5>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
