"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GlowCard
            borderRadius="32px"
            glowColor="rgba(180, 255, 0, 0.06)"
            borderGlowColor="rgba(180, 255, 0, 0.3)"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--surface-border-subtle)",
              position: "relative",
            }}
          >
            {/* Grid Pattern Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                pointerEvents: "none",
              }}
            />

            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: "var(--volt-dim)",
                  border: "1px solid var(--volt-border)",
                  color: "var(--volt)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Free Strategy Consultation</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontFamily: "var(--font-syne), 'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  maxWidth: "24ch",
                  margin: "0 auto 24px auto",
                }}
              >
                Ready to launch your<br />
                <span
                  style={{
                    color: "var(--volt)",
                    textShadow: "0 0 30px var(--volt-glow)",
                  }}
                >
                  next masterpiece?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: "var(--font-geist), 'Geist', sans-serif",
                  fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
                  color: "var(--ink-2)",
                  lineHeight: 1.6,
                  maxWidth: "48ch",
                  margin: "0 auto 40px auto",
                }}
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
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--surface-border-subtle)",
                      color: "var(--ink-2)",
                    }}
                  >
                    <pill.icon className="w-4 h-4" style={{ color: "var(--volt)" }} />
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
                <Link href="/contact" className="btn-volt" style={{ padding: "16px 36px" }}>
                  <span>Start Your Project Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link href="/services" className="btn-ghost" style={{ padding: "16px 32px" }}>
                  <span>Explore Our Services</span>
                </Link>
              </motion.div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
