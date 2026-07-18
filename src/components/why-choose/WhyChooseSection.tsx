"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const features = [
  "Fast, on-schedule delivery with agile sprints",
  "Modern tech: Next.js, React 19, TypeScript",
  "SEO-first architecture with structured data",
  "Enterprise-grade security baked in from day one",
  "Mobile-first, responsive across every screen size",
  "95+ Lighthouse performance scores, guaranteed",
  "Transparent, affordable pricing — no hidden fees",
  "24/7 post-launch support and maintenance",
];

export function WhyChooseSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
        borderTop: "1px solid var(--surface-border-subtle)",
      }}
    >
      <div className="section-container">
        <div
          className="why-choose-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: Headline block */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                color: "var(--volt)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Why Spark Tech
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--ink)",
                marginBottom: "24px",
              }}
            >
              Built to outperform.<br />
              Designed to{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                style={{ color: "var(--volt)", display: "inline-block" }}
              >
                last.
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                fontFamily: "var(--font-geist), 'Geist', sans-serif",
                fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
                color: "var(--ink-2)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "42ch",
              }}
            >
              We merge technical mastery with honest communication. Every decision
              we make is driven by your business outcomes — not scope creep.
            </motion.p>

            {/* Stat callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                background: "var(--volt-dim)",
                border: "1px solid var(--volt-border)",
                borderRadius: "var(--radius-md)",
                padding: "14px 20px",
                marginBottom: "28px",
              }}
            >
              <span style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontWeight: 600,
                fontSize: "1.6rem",
                color: "var(--volt)",
                letterSpacing: "-0.02em",
              }}>
                99%
              </span>
              <span style={{
                fontFamily: "var(--font-geist), 'Geist', sans-serif",
                fontSize: "0.8125rem",
                color: "var(--ink-2)",
                lineHeight: 1.4,
              }}>
                Client satisfaction<br />across all projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <Link href="/contact" className="btn-volt">
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917060675133"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right: Feature list — slide in from right */}
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "15px 0",
                    borderBottom: i < features.length - 1 ? "1px solid var(--surface-border-subtle)" : "none",
                    cursor: "default",
                    transition: "background 200ms ease",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "var(--volt)", flexShrink: 0, marginTop: "2px" }}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist), 'Geist', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--ink-2)",
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
