"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, Database, LayoutGrid, Zap } from "lucide-react";

export default function Experience() {
  const contributions = [
    {
      title: "AI Task Optimizer",
      desc: "Developed machine learning components to automate and optimize resource scheduling, improving task allocation efficiency.",
      icon: Zap,
      accent: "text-electric-blue border-electric-blue/20 bg-electric-blue/5",
    },
    {
      title: "ETL Pipelines",
      desc: "Designed and engineered reliable ETL data pipelines to ingest, transform, and clean raw transaction and system logs.",
      icon: Database,
      accent: "text-electric-purple border-electric-purple/20 bg-electric-purple/5",
    },
    {
      title: "BI Dashboards (Power BI & Tableau)",
      desc: "Synthesized raw analytical data into interactive dashboards, aiding executives in identifying core efficiency roadblocks.",
      icon: LayoutGrid,
      accent: "text-electric-cyan border-electric-cyan/20 bg-electric-cyan/5",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-space tracking-widest text-electric-blue uppercase mb-3"
          >
            History
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100"
          >
            Professional Experience
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full" />
        </div>

        {/* Experience Showcase Panel */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="p-8 rounded-3xl glass-panel border border-electric-blue/20 relative overflow-hidden group shadow-[0_0_30px_rgba(0,210,255,0.02)]"
          >
            {/* Corner Light Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none group-hover:bg-electric-blue/10 transition-all duration-700" />
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-electric-blue/10 border border-electric-blue/30 text-electric-blue flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-space text-slate-100">
                    Data Science & Analytics Intern
                  </h4>
                  <p className="text-sm font-semibold font-space text-slate-400 mt-0.5">
                    Zidio Development
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400 font-space text-sm bg-slate-950/60 px-4 py-2 rounded-xl border border-white/5 w-fit">
                <Calendar className="w-4 h-4 text-electric-purple" />
                <span>March 2025 – May 2025</span>
              </div>
            </div>

            {/* Main Details and Core Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contributions.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/2 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`p-2.5 rounded-xl border w-fit mb-4 ${item.accent}`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold font-space text-slate-100 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra details on agile framework */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5 text-slate-400 text-sm font-sans">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <CheckCircle className="w-4.5 h-4.5 text-electric-cyan" /> Agile Development Environment:
              </span>
              <span>Participated in weekly sprints, backlog grooming, and code walkthroughs to ship data modules rapidly.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
