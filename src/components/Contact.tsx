"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 relative">
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
            Connection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-space text-slate-100"
          >
            Start a Conversation
          </motion.h3>
          <div className="w-16 h-1 mt-4 bg-gradient-to-r from-electric-cyan to-electric-blue rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left direct contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl glass-panel border border-white/5"
          >
            <div>
              <h4 className="text-xl font-bold font-space text-slate-100 mb-2">
                Let&apos;s Build Together
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                Recruiters and collaborators: drop a message here or connect via email or socials. I usually respond within 24 hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-5">
                <a
                  href="mailto:bhargavajshetty3@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 hover:bg-electric-blue/5 border border-white/5 hover:border-electric-blue/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-space text-slate-500 uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-sm font-semibold font-space text-slate-300 group-hover:text-white transition-colors">
                      bhargavajshetty3@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 hover:bg-electric-purple/5 border border-white/5 hover:border-electric-purple/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-electric-purple/10 text-electric-purple border border-electric-purple/20">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-space text-slate-500 uppercase tracking-wider">
                      LinkedIn Connection
                    </p>
                    <p className="text-sm font-semibold font-space text-slate-300 group-hover:text-white transition-colors">
                      linkedin.com/in/bhargavashetty
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 hover:bg-electric-cyan/5 border border-white/5 hover:border-electric-cyan/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-space text-slate-500 uppercase tracking-wider">
                      GitHub Workspace
                    </p>
                    <p className="text-sm font-semibold font-space text-slate-300 group-hover:text-white transition-colors">
                      github.com/bhargavashetty
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Download card */}
            <a
              href="/Bhargava_J_Shetty_Resume.pdf"
              download
              className="mt-8 flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 border border-electric-blue/30 hover:border-electric-blue/60 transition-all group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-electric-blue" />
                <span className="text-sm font-semibold font-space text-slate-200">
                  Bhargava_J_Shetty_Resume.pdf
                </span>
              </div>
              <span className="text-xs font-semibold font-space text-electric-blue group-hover:text-electric-cyan transition-colors">
                Download
              </span>
            </a>
          </motion.div>

          {/* Right message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-white/5 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold font-space text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-electric-blue/50 text-slate-100 font-sans focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold font-space text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-electric-blue/50 text-slate-100 font-sans focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold font-space text-slate-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-electric-blue/50 text-slate-100 font-sans focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-cyan hover:to-electric-blue text-white font-semibold font-space transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
