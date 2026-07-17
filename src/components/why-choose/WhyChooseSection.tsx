"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  ShieldCheck,
  Search,
  Smartphone,
  Gauge,
  Tag,
  Sparkles,
} from "lucide-react";

const advantages = [
  {
    title: "Modern Technologies",
    description: "Built on Next.js 15, React 19, TypeScript, and Tailwind CSS for peak velocity and enterprise security.",
    icon: Zap,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    color: "text-cyan-400",
    bg: "from-cyan-600/20 to-blue-900/10",
    border: "border-cyan-500/30 hover:border-cyan-400",
  },
  {
    title: "Fast Delivery",
    description: "Agile sprints and structured milestone delivery ensure your product launches on exact schedule without delays.",
    icon: Clock,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "text-blue-400",
    bg: "from-blue-600/20 to-purple-900/10",
    border: "border-blue-500/30 hover:border-blue-400",
  },
  {
    title: "Secure Development",
    description: "Multi-layered defense, HTTPS encryption, XSS protection, and strict authentication best practices built-in.",
    icon: ShieldCheck,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2",
    color: "text-purple-400",
    bg: "from-purple-600/20 to-pink-900/10",
    border: "border-purple-500/30 hover:border-purple-400",
  },
  {
    title: "SEO Friendly",
    description: "Semantic HTML architecture, dynamic OpenGraph metadata, and Schema.org rich snippets for high ranking.",
    icon: Search,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "text-emerald-400",
    bg: "from-emerald-600/20 to-teal-900/10",
    border: "border-emerald-500/30 hover:border-emerald-400",
  },
  {
    title: "Mobile Responsive",
    description: "Mobile-first layouts crafted to look and feel flawless across smartphones, tablets, laptops, and 4K displays.",
    icon: Smartphone,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "text-blue-400",
    bg: "from-blue-600/20 to-cyan-900/10",
    border: "border-blue-500/30 hover:border-blue-400",
  },
  {
    title: "Performance Optimized",
    description: "Zero bloat, automated image compression, code splitting, and edge CDN caching delivering 95+ Lighthouse scores.",
    icon: Gauge,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "text-cyan-400",
    bg: "from-cyan-600/20 to-blue-900/10",
    border: "border-cyan-500/30 hover:border-cyan-400",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, value-driven investment plans tailored for ambitious startups and expanding corporate enterprises.",
    icon: Tag,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "text-amber-400",
    bg: "from-amber-600/20 to-orange-900/10",
    border: "border-amber-500/30 hover:border-amber-400",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Spark Tech Advantage</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Industry Leaders Choose <span className="text-gradient">Our Agency</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            We merge technological mastery with crystal-clear communication and dedicated support to build lasting partnerships.
          </motion.p>
        </div>

        {/* 8 Premium Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-7 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${item.bg} border ${item.border} transition-all duration-300 shadow-xl ${item.colSpan}`}
            >
              {/* Glow Corner */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                <span>Spark Guaranteed</span>
                <span className="text-cyan-400">★ ★ ★ ★ ★</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
