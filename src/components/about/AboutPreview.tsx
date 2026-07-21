"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

export function AboutPreview() {
  const points = [
    "High-Performance Modern Web Stacks",
    "Tailored User Experience & Brand Design",
    "Continuous SEO & Performance Optimization",
  ];

  return (
    <section
      style={{
        paddingBlock: "clamp(50px, 8vw, 100px)",
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid var(--surface-border-subtle)",
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Premium Interactive Card visual, resembling the sneaker card preview style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard
              borderRadius="24px"
              glowColor="rgba(180, 255, 0, 0.04)"
              borderGlowColor="rgba(180, 255, 0, 0.2)"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Abstract decorative floating graphics for high-end look */}
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  right: "-20%",
                  width: "180px",
                  height: "180px",
                  background: "radial-gradient(circle, var(--volt-glow) 0%, transparent 70%)",
                  opacity: 0.15,
                  pointerEvents: "none",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--volt-dim)",
                    border: "1px solid var(--volt-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--volt)",
                  }}
                >
                  <Shield size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>
                    Our Quality Promise
                  </h4>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink-3)", fontFamily: "var(--font-geist-mono)" }}>
                    VERIFIED.01
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.9375rem", color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
                We build digital platforms that combine high engineering standards with deliberate UI/UX design. We don&apos;t build generic websites; we create custom, fast web solution assets that scale.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--surface-border-subtle)",
                }}
              >
                <div>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--volt)", display: "block" }}>
                    100%
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink-3)" }}>
                    Production-ready
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)", display: "block" }}>
                    &lt; 0.3s
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink-3)" }}>
                    Avg. Load Speeds
                  </span>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right Column: Copywriting content + Action Redirect Button */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div className="tag tag-volt" style={{ alignSelf: "flex-start" }}>
                <Sparkles className="w-3 h-3" /> INTRODUCING SPARK TECH
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: "var(--ink)",
                  margin: "8px 0 0 0",
                }}
              >
                Engineering with <br />
                <span className="text-glow-continuous">Creative Purpose</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-geist), sans-serif",
                  fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
                  color: "var(--ink-2)",
                  lineHeight: 1.7,
                  marginBlock: "8px 16px",
                  maxWidth: "46ch",
                }}
              >
                Spark Tech Web Solution is a specialized digital-first agency. We build custom-crafted web architectures that increase conversions, load instantly, and elevate brand authority.
              </p>
            </motion.div>

            {/* Core Values Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <CheckCircle2 className="w-4 h-4 text-volt flex-shrink-0" />
                  <span style={{ fontSize: "0.9rem", color: "var(--ink-2)" }}>{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Direct Link Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Link
                href="/about"
                className="btn-volt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
