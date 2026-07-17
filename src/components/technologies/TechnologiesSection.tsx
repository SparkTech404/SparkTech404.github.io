"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Code,
  Layers,
  Server,
  Database,
  GitBranch,
  Terminal,
  ChevronDown,
} from "lucide-react";

const technologies = [
  
  {
    name: "React",
    category: "Interactive Component UI",
    icon: Layers,
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    borderGlow: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
  },
  {
    name: "Next.js",
    category: "Full-Stack & SSR Engine",
    icon: Server,
    badgeColor: "bg-slate-500/10 text-white border-slate-500/30",
    borderGlow: "hover:border-white/50 hover:shadow-white/20",
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First Glass UI",
    icon: Layers,
    badgeColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    borderGlow: "hover:border-cyan-400/50 hover:shadow-cyan-400/20",
  },
  {
    name: "Node.js",
    category: "Backend Runtime Environment",
    icon: Server,
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    borderGlow: "hover:border-green-500/50 hover:shadow-green-500/20",
  },
  {
    name: "Express.js",
    category: "High-Speed REST API Framework",
    icon: Server,
    badgeColor: "bg-slate-400/10 text-slate-300 border-slate-400/30",
    borderGlow: "hover:border-slate-300/50 hover:shadow-slate-300/20",
  },
  {
    name: "MongoDB",
    category: "NoSQL Cloud Database",
    icon: Database,
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
  },
  {
    name: "SupaBase",
    category: "NoSQL Cloud Database",
    icon: Database,
    badgeColor: "bg-darkorchid-500/10 text-darkorchid-400 border-darkorchid-500/30",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
  },
  {
    name: "Firebase",
    category: "Realtime Cloud & Auth",
    icon: Database,
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    borderGlow: "hover:border-amber-500/50 hover:shadow-amber-500/20",
  },
  {
    name: "HTML5",
    category: "Markup & Core Structure",
    icon: Code,
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    borderGlow: "hover:border-orange-500/50 hover:shadow-orange-500/20",
  },
  {
    name: "CSS3",
    category: "Styling & Animations",
    icon: PaletteIcon,
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    borderGlow: "hover:border-blue-500/50 hover:shadow-blue-500/20",
  },
  {
    name: "JavaScript",
    category: "Dynamic Web Logic",
    icon: Terminal,
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    borderGlow: "hover:border-yellow-500/50 hover:shadow-yellow-500/20",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Architecture",
    icon: Code,
    badgeColor: "bg-blue-600/10 text-blue-400 border-blue-600/30",
    borderGlow: "hover:border-blue-600/50 hover:shadow-blue-600/20",
  },
  {
    name: "Git",
    category: "Distributed Version Control",
    icon: GitBranch,
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    borderGlow: "hover:border-red-500/50 hover:shadow-red-500/20",
  },
  {
    name: "GitHub",
    category: "Code Repository & CI/CD",
    icon: GitBranch,
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    borderGlow: "hover:border-purple-500/50 hover:shadow-purple-500/20",
  },
];

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

export function TechnologiesSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleTechnologies = expanded
    ? technologies
    : technologies.slice(0, 4);

  return (
    <section
      id="technologies"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Technology Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Powered by Modern{" "}
            <span className="text-gradient">Cutting-Edge Tech</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            We leverage industry-standard languages, modern frameworks, and
            robust cloud infrastructure to guarantee maximum stability and
            performance.
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {visibleTechnologies.map((tech, idx) => (
              <motion.div
                layout
                key={tech.name}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`glass-card p-6 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-950 border border-white/10 ${tech.borderGlow} transition-all duration-300 shadow-lg`}
              >
                {/* Glow */}
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl border ${tech.badgeColor} shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                    STACK #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {tech.category}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-slate-300">
                  <span>Enterprise Ready</span>

                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:animate-ping" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand Button */}
        {!expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => setExpanded(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 px-8 py-4 text-white font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <span>Explore More Technologies</span>

              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-180" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
