"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your business goals, target audience, and project scope to formulate the perfect digital strategy.",
    icon: MessageSquare,
    color: "from-blue-600 to-blue-500",
    badge: "Discovery & Requirements",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating comprehensive technical specifications, database architecture, milestones, and project roadmaps.",
    icon: FileSpreadsheet,
    color: "from-blue-500 to-purple-600",
    badge: "Architecture Roadmap",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Crafting futuristic, human-centered wireframes and interactive Figma prototypes with modern glassmorphism.",
    icon: Palette,
    color: "from-purple-600 to-pink-600",
    badge: "Figma Prototyping",
  },
  {
    step: "04",
    title: "Development",
    description: "Writing clean, high-performance code using React, Next.js, TypeScript, Tailwind CSS, and robust backend APIs.",
    icon: Code2,
    color: "from-pink-600 to-cyan-500",
    badge: "Full-Stack Coding",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous quality assurance, cross-browser compatibility, WCAG accessibility, and Core Web Vitals speed audits.",
    icon: CheckCheck,
    color: "from-cyan-500 to-blue-600",
    badge: "QA & Security Audit",
  },
  {
    step: "06",
    title: "Deployment",
    description: "Launching smoothly to global cloud networks (AWS/Vercel/GCP) with zero downtime and SSL/DNS setup.",
    icon: Rocket,
    color: "from-blue-600 to-purple-600",
    badge: "Live Cloud Launch",
  },
  {
    step: "07",
    title: "Maintenance",
    description: "Continuous 24/7 technical support, server monitoring, security patching, and ongoing speed optimization.",
    icon: ShieldCheck,
    color: "from-purple-600 to-cyan-400",
    badge: "Lifetime Support",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Workflow</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            A Proven <span className="text-gradient">7-Step Development Process</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            From the initial handshake to lifetime post-launch maintenance, our structured methodology ensures seamless execution and absolute transparency.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)] opacity-40" />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8"
                >
                  {/* Left Side (for even steps on desktop) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:text-right order-2 lg:order-1" : "order-2 lg:order-3 lg:col-start-8"}`}>
                    <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-950 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl group">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-cyan-400 border border-white/10">
                          {item.badge}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-slate-600 group-hover:text-slate-400 transition-colors font-mono">
                          STEP #{item.step}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Indicator (Desktop) */}
                  <div className="hidden lg:flex lg:col-span-2 order-1 lg:order-2 justify-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-xl shadow-purple-500/30 flex items-center justify-center`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                        <item.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Node Icon Header (Only visible on small screens) */}
                  <div className="flex lg:hidden items-center gap-4 order-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg flex items-center justify-center flex-shrink-0`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                        Step {item.step} — {item.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
