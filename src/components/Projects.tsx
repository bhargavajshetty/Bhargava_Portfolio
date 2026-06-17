"use client";

import { motion } from "framer-motion";
import { ExternalLink, Server, Layers, Cpu, Code } from "lucide-react";

const GithubIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon: typeof Server;
  githubUrl: string;
  demoUrl: string;
  accent: string;
}

const projectsList: Project[] = [
  {
    title: "Indian Cuisine Image Classifier",
    description:
      "A deep learning image classification model trained on diverse Indian cuisine categories, optimized using transfer learning for accurate real-time prediction and served via a web dashboard.",
    techStack: ["TensorFlow", "Keras", "DenseNet121", "Streamlit"],
    icon: Cpu,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    accent: "from-electric-blue to-electric-cyan border-electric-blue/20 shadow-[0_0_20px_rgba(0,210,255,0.05)]",
  },
  {
    title: "Fake News Detection System",
    description:
      "An end-to-end NLP classifier that filters and detects misinformation in text news. Employs deep learning architectures for syntactic and context-aware pattern discovery.",
    techStack: ["Python", "NLP", "Scikit-learn", "LSTM"],
    icon: Layers,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    accent: "from-electric-purple to-pink-500 border-electric-purple/20 shadow-[0_0_20px_rgba(168,85,247,0.05)]",
  },
  {
    title: "Employee Mood Analyzer",
    description:
      "A lexical-based sentiment analyzer monitoring workplace feedback, automating sentiment metrics calculations, and helping human resources track department satisfaction levels.",
    techStack: ["Python", "NLTK", "VADER", "Pandas"],
    icon: Server,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    accent: "from-electric-cyan to-teal-500 border-electric-cyan/20 shadow-[0_0_20px_rgba(6,182,212,0.05)]",
  },
  {
    title: "Online Quiz System",
    description:
      "A full-stack, secure learning management platform enabling dynamic assessments, score reports, timer constraints, and structured backend database management.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    icon: Code,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    accent: "from-blue-600 to-indigo-600 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-12 relative">
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
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100"
          >
            Featured Engineering Projects
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-cyan to-electric-blue rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsList.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-3xl glass-panel border flex flex-col justify-between ${project.accent} group relative overflow-hidden`}
              >
                {/* Header Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-300">
                      <ProjectIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/5 bg-slate-950/40 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
                        title="View Code on GitHub"
                      >
                        <GithubIcon className="w-4.5 h-4.5" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/5 bg-slate-950/40 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-2xl font-bold font-space text-slate-100 mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold font-space tracking-wide bg-slate-950/60 border border-white/5 text-slate-300"
                    >
                      {tech}
                    </span>
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
