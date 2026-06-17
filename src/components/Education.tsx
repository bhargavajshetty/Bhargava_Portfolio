"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  const subjects = [
    "Design and Analysis of Algorithms",
    "Database Management Systems",
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data Analytics",
    "Software Engineering Foundations",
    "Object-Oriented Programming (OOPs)",
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-12 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-space tracking-widest text-electric-cyan uppercase mb-3"
          >
            Education
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100"
          >
            Academic Foundations
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-cyan to-electric-purple rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl glass-panel border border-white/5 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Institution details */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold font-space mb-6">
                  <Award className="w-3.5 h-3.5" />
                  B.Tech Program
                </div>
                
                <h4 className="text-2xl font-bold font-space text-slate-100 mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-lg font-medium text-slate-300 font-space mb-4">
                  NMAM Institute of Technology, Nitte
                </p>

                <div className="flex flex-wrap gap-4 text-slate-400 text-sm font-space">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-electric-blue" />
                    <span>Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-electric-purple" />
                    <span>2022 – 2026</span>
                  </div>
                </div>
              </div>

              {/* Coursework details */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-electric-cyan" />
                  <span className="font-bold font-space text-slate-200 text-sm uppercase tracking-wider">
                    Core Coursework
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {subjects.map((subj) => (
                    <li key={subj} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-purple mt-1.5 shrink-0" />
                      <span>{subj}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
