"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Cloud,
  ShieldAlert,
  Gauge,
  Target,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Spark Tech Web Solution</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Choose <span className="text-gradient">Spark Tech Web Solution?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            At Spark Tech Web Solution, we provide reliable digital solutions for businesses of every size.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Universal Technical Support & Infrastructure (Large Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-blue-950/40 border border-white/10 hover:border-blue-500/40 group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Cloud className="w-48 h-48 text-blue-500 -mr-10 -mt-10" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-md shadow-blue-500/20">
                <Server className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
                Universal Infrastructure & Cloud Readiness
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Any Server. Any Cloud. Unmatched Support.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Whether your website is hosted on any server, cloud platform, or hosting provider, we deliver the best technical support, optimization, maintenance, security improvements, and scalable solutions.
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              {[
                { label: "AWS, GCP & Azure Cloud Support", icon: Cloud },
                { label: "High-Speed Performance Tuning", icon: Gauge },
                { label: "Enterprise Security Improvements", icon: ShieldAlert },
                { label: "Seamless Scalability & Uptime", icon: Cpu },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Our Mission (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-purple-950/40 border border-white/10 hover:border-purple-500/40 group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Target className="w-44 h-44 text-purple-500 -mr-8 -mt-8" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-md shadow-purple-500/20">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 block mb-2">
                Our Mission & Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Establishing Your Digital Dominance
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Our mission is to help businesses establish a strong online presence through modern technologies, creative design, and reliable development practices.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="font-semibold">Creative + Engineering</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
                100% Reliability
              </span>
            </div>
          </motion.div>

          {/* Card 3: Modern Practices & Speed (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12 glass-card p-8 sm:p-10 bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-cyan-950/30 border border-white/10 hover:border-cyan-500/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/30">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  Built for Growth, Engineered for Speed
                </h4>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Every line of code we write adheres to international best practices, WCAG accessibility, and SEO architecture so your business stays ahead of the competition.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/10"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
