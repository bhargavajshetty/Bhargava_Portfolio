"use client";

import { motion } from "framer-motion";
import { Terminal, Brain, CodeXml, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    accentColor: "border-electric-blue/30 text-electric-blue shadow-[0_0_15px_rgba(0,210,255,0.05)]",
    glowColor: "rgba(0, 210, 255, 0.15)",
    skills: ["Python", "SQL", "JavaScript", "C"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    accentColor: "border-electric-purple/30 text-electric-purple shadow-[0_0_15px_rgba(168,85,247,0.05)]",
    glowColor: "rgba(168, 85, 247, 0.15)",
    skills: ["TensorFlow", "Keras", "NLP", "Deep Learning", "Scikit-learn"],
  },
  {
    title: "Frameworks & Libraries",
    icon: CodeXml,
    accentColor: "border-electric-cyan/30 text-electric-cyan shadow-[0_0_15px_rgba(6,182,212,0.05)]",
    glowColor: "rgba(6, 182, 212, 0.15)",
    skills: ["Spring Boot", "Streamlit", "Tailwind CSS"],
  },
  {
    title: "Developer Tools & Databases",
    icon: Wrench,
    accentColor: "border-slate-500/30 text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]",
    glowColor: "rgba(255, 255, 255, 0.05)",
    skills: ["Git", "GitHub", "Docker", "MySQL", "MongoDB", "Power BI", "Tableau"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-space tracking-widest text-electric-purple uppercase mb-3"
          >
            My Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100"
          >
            Core Technologies & Expertise
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-purple to-electric-cyan rounded-full" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl glass-panel border ${category.accentColor} relative group overflow-hidden`}
              >
                {/* Background glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${category.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Category Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-space text-slate-100">
                    {category.title}
                  </h4>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-xl text-sm font-semibold font-space tracking-wide bg-slate-950/80 border border-white/5 text-slate-300 hover:text-white hover:border-white/25 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
