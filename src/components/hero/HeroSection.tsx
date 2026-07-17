"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  LayoutTemplate,
  Terminal,
  Palette,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  Users,
  Globe,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const bentoRightCards = [
  {
    title: "Website Development",
    description: "High-speed, SEO-ready modern web architecture built for scale.",
    icon: Code2,
    gradient: "from-blue-600/20 to-blue-900/10",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Landing Pages",
    description: "High-converting, visually stunning campaigns designed for maximum ROI.",
    icon: LayoutTemplate,
    gradient: "from-purple-600/20 to-purple-900/10",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Web Applications",
    description: "Enterprise SaaS & custom full-stack platforms engineered for performance.",
    icon: Terminal,
    gradient: "from-cyan-600/20 to-cyan-900/10",
    border: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description: "Futuristic, user-centric interfaces crafted with modern glassmorphism.",
    icon: Palette,
    gradient: "from-purple-600/20 to-pink-900/10",
    border: "group-hover:border-pink-500/50",
    iconColor: "text-pink-400",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and dominate search engines with clean semantic structure.",
    icon: SearchCheck,
    gradient: "from-blue-600/20 to-cyan-900/10",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Website Maintenance",
    description: "24/7 security updates, speed tuning, and rock-solid cloud reliability.",
    icon: ShieldCheck,
    gradient: "from-cyan-600/20 to-blue-900/10",
    border: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    colSpan: "col-span-1 md:col-span-2",
  },
];

const trustedLogos = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative py-12 lg:py-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Large Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 glass-card p-8 sm:p-10 lg:p-12 flex flex-col relative overflow-hidden group bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-blue-950/40 border border-white/10 hover:border-blue-500/30 shadow-2xl"
          >
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl group-hover:bg-blue-600/25 transition-all duration-700 pointer-events-none" />

            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
              >
                <Sparkles className="w-4 h-4 animate-spin text-cyan-400" style={{ animationDuration: "8s" }} />
                <span>Spark Tech Web Solution</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-white mb-6">
                Empowering Your{" "}
                <span className="text-gradient block mt-1">Digital Future</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                We build modern, high-performance digital solutions that help businesses establish a strong online presence, streamline operations, and accelerate growth. Whether it's a startup launching its first product, a growing business expanding its digital reach, or an enterprise modernizing its infrastructure, we design and develop websites, landing pages, custom web applications, and business platforms tailored to specific goals.

Every project is built with a focus on speed, security, scalability, and user experience. Our development process combines responsive design, clean code architecture, SEO best practices, and performance optimization to ensure every solution delivers measurable business value across all devices and platforms.

Beyond development, we partner with clients throughout the entire product lifecycle—from strategy and UI/UX design to deployment, maintenance, feature enhancements, and long-term technical support. We create solutions that are not only visually compelling but also reliable, future-ready, and capable of growing alongside the business. Whether the objective is generating leads, improving customer engagement, automating workflows, or building a scalable SaaS platform, we deliver technology that drives real business outcomes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-base transition-all duration-200 text-center"
              >
                <span>View Services</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
            </div>

            {/* Quick Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "100+", label: "Projects Delivered", icon: TrendingUp, color: "text-blue-400" },
                { value: "50+", label: "Happy Clients", icon: Users, color: "text-purple-400" },
                { value: "99%", label: "Client Satisfaction", icon: Star, color: "text-cyan-400" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                  <div className="text-xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Trusted Tech Stack */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em] block mb-3">Built With Industry-Leading Tech</span>
              <div className="flex items-center gap-2">
                {trustedLogos.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Bento Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {bentoRightCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                className={`${card.colSpan}`}
              >
                <Link
                  href="/services"
                  className={`glass-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-white/[0.08] ${card.border} bg-gradient-to-br ${card.gradient} transition-all duration-300 block h-full`}
                >
                  {/* Subtle Hover Glow */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all pointer-events-none" />

                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${card.badgeColor}`}>
                      Premium
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                    <span>Explore Feature</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Social Proof / Clients Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 glass-card px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-cyan-950/40 border border-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AM", "PS", "RV", "SK", "VS"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-black border-2 border-slate-950 shadow-lg"
                >
                  {initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 text-xs font-bold border-2 border-slate-950">
                +45
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-300 ml-1">5.0</span>
              </div>
              <p className="text-slate-400 text-xs font-medium">
                Trusted by <span className="text-white font-bold">50+ businesses</span> across India, US & UK
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            {[
              { icon: Globe, label: "Global Service", color: "text-blue-400" },
              { icon: Zap, label: "Same-Day Response", color: "text-cyan-400" },
              { icon: CheckCircle2, label: "Money-Back Guarantee", color: "text-emerald-400" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
