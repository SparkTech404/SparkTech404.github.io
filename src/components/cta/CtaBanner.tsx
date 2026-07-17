"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.25),transparent_50%)]" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide mb-8"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Limited Offer — Free Strategy Consultation</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
            >
              Ready to Launch Your
              <br />
              <span className="bg-white/20 px-4 py-1 rounded-xl inline-block mt-2">
                Next Digital Masterpiece?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Join 50+ businesses who trust Spark Tech for premium web
              development, SEO optimization, and 24/7 technical support. Let&apos;s
              discuss your vision — no strings attached.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
            >
              {[
                { icon: Zap, label: "Lightning Fast Delivery" },
                { icon: Shield, label: "Enterprise Security" },
                { icon: Clock, label: "24/7 Premium Support" },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs sm:text-sm font-medium"
                >
                  <pill.icon className="w-4 h-4" />
                  <span>{pill.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-white text-slate-900 font-bold text-base shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Your Project Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
