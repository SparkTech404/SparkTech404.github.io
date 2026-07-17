"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Layout,
  Cpu,
  Palette,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: Globe,
    shortDesc:
      "Custom, high-speed, and responsive website architecture engineered using cutting-edge frameworks for superior performance.",
    fullDesc:
      "Our website development service focuses on creating blazingly fast, secure, and modern digital platforms. We don't rely on bloated templates—every project is custom-coded using Next.js, React, and TypeScript to ensure maximum load speeds, top-tier SEO rankings, and seamless scalability across all devices.",
    features: [
      "Custom Next.js & React App Architecture",
      "Core Web Vitals & PageSpeed Optimized (95+ score)",
      "Enterprise Grade Security & SSL Setup",
      "Seamless CMS Integration (Headless/API)",
    ],
    gradient: "from-blue-600/20 via-blue-900/10 to-transparent",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    glow: "hover:border-blue-500/50 hover:shadow-blue-500/20",
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    icon: Layout,
    shortDesc:
      "High-converting, visually captivating campaign pages crafted specifically to boost sales, leads, and customer acquisition.",
    fullDesc:
      "A great product needs a high-converting landing page. We combine persuasive copywriting structure with breathtaking UI aesthetics, micro-animations, and strategic call-to-action triggers that turn casual visitors into loyal paying customers.",
    features: [
      "Conversion-Rate Optimization (CRO) Focused",
      "A/B Testing Ready Layouts",
      "Engaging Framer Motion Micro-Animations",
      "Instant Lead Form & CRM Integrations",
    ],
    gradient: "from-purple-600/20 via-purple-900/10 to-transparent",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    glow: "hover:border-purple-500/50 hover:shadow-purple-500/20",
  },
  {
    id: "web-app",
    title: "Web Application Development",
    icon: Cpu,
    shortDesc:
      "Scalable SaaS platforms, custom dashboards, and complex full-stack web applications tailored to your business operations.",
    fullDesc:
      "Transform your complex business ideas into robust SaaS platforms and internal web tools. Our full-stack engineering team builds secure APIs, real-time databases, and interactive cloud dashboards that process millions of requests smoothly.",
    features: [
      "Full-Stack Node.js, Express & Next.js Backend",
      "MongoDB & Firebase Real-time Data Sync",
      "Multi-Tenant SaaS & Role-Based Access Control",
      "High Availability & Cloud Native Deployment",
    ],
    gradient: "from-cyan-600/20 via-cyan-900/10 to-transparent",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    glow: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: Palette,
    shortDesc:
      "Futuristic, human-centered interfaces combining glassmorphism, elegant typography, and intuitive user experiences.",
    fullDesc:
      "We design digital experiences that captivate from the very first glance. By conducting user research and prototyping in Figma, we craft clean, accessible, and futuristic interfaces that make using your software an absolute delight.",
    features: [
      "Interactive Figma Prototypes & Wireframes",
      "Modern Glassmorphism & Bento Grid Systems",
      "WCAG 2.1 Accessibility & Contrast Compliance",
      "Complete Design System & Token Creation",
    ],
    gradient: "from-purple-600/20 via-pink-900/10 to-transparent",
    iconBg: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    glow: "hover:border-pink-500/50 hover:shadow-pink-500/20",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    icon: ShieldCheck,
    shortDesc:
      "Reliable ongoing technical support, cloud optimization, security patches, and 24/7 server monitoring.",
    fullDesc:
      "Never worry about downtime, broken plugins, or security bottlenecks again. We provide comprehensive technical support, performance tuning, regular cloud backups, and proactive security monitoring for websites hosted anywhere.",
    features: [
      "24/7 Server Monitoring & Incident Resolution",
      "Automated Cloud Backups & Disaster Recovery",
      "Security Patching & Malware Protection",
      "Continuous Speed Optimization & Database Cleanups",
    ],
    gradient: "from-cyan-600/20 via-blue-900/10 to-transparent",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    glow: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: TrendingUp,
    shortDesc:
      "Dominate search engine results with semantic HTML5 architecture, fast page loads, and technical SEO excellence.",
    fullDesc:
      "True SEO starts at the code level. We optimize your technical architecture, meta tags, structured schema markup, and Core Web Vitals to ensure top search engine rankings, increased organic traffic, and higher domain authority.",
    features: [
      "Semantic HTML5 & OpenGraph Meta Structuring",
      "Comprehensive Schema.org Rich Snippet Setup",
      "Keyword Optimization & Site Architecture Audit",
      "Blazing Fast Indexing & Crawlability Enhancement",
    ],
    gradient: "from-blue-600/20 via-purple-900/10 to-transparent",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    glow: "hover:border-blue-500/50 hover:shadow-blue-500/20",
  },
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Premium Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            High-Impact Solutions for Your <span className="text-gradient">Digital Growth</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            We combine state-of-the-art engineering with mesmerizing UI aesthetics to deliver end-to-end software services.
          </motion.p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${service.gradient} border border-white/[0.08] ${service.glow} shadow-xl`}
            >
              {/* Top Accent Icon & Title */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${service.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-cyan-400 group/btn transition-colors focus:outline-none"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
                </button>
                <span className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Learn More Modal Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl glass-card p-6 sm:p-8 bg-slate-900 border border-white/20 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl border ${selectedService.iconBg}`}>
                    <selectedService.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                Key Features & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-semibold transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                >
                  <span>Request Service Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
