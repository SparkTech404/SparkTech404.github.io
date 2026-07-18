"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    label: "Universal Infrastructure",
    description:
      "We support any server, cloud platform, or hosting provider — AWS, GCP, Azure, Vercel, or shared hosting. Our team delivers best-in-class maintenance, security, and performance tuning regardless of your stack.",
    points: [
      "AWS, GCP & Azure cloud support",
      "High-speed performance tuning",
      "Enterprise security improvements",
      "Seamless scalability & uptime",
    ],
  },
  {
    label: "Our Mission",
    description:
      "To help businesses establish a strong, measurable online presence through modern technologies, deliberate design, and reliable engineering practices that compound over time.",
    points: [
      "Creative + engineering balance",
      "Business-outcome focused",
      "Long-term partnerships",
      "100% reliability commitment",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingTop: "clamp(48px, 7vw, 80px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      <div className="section-container">
        {/* Page header */}
        <div style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--volt)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            About us
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
              color: "var(--ink)",
              maxWidth: "20ch",
              marginBottom: "20px",
            }}
          >
            Why choose{" "}
            <span style={{ color: "var(--volt)" }}>
              Spark Tech?
            </span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "var(--ink-2)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            We provide reliable digital solutions for businesses of every size —
            from solo founders launching their first product to enterprises scaling globally.
          </motion.p>
        </div>

        {/* Two pillar cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(12px, 2vw, 20px)",
            marginBottom: "clamp(40px, 5vw, 60px)",
          }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    marginBottom: "12px",
                  }}
                >
                  {pillar.label}
                </h2>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.65,
                  }}
                >
                  {pillar.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--surface-border-subtle)",
                }}
              >
                {pillar.points.map((point) => (
                  <div
                    key={point}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "var(--volt)", flexShrink: 0, marginTop: "1px" }}
                      strokeWidth={2}
                    />
                    <span
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--ink-2)",
                        lineHeight: 1.4,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--surface-border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(24px, 3.5vw, 36px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: "6px",
              }}
            >
              Built for growth, engineered for speed.
            </h3>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.9rem",
                color: "var(--ink-3)",
                maxWidth: "52ch",
              }}
            >
              Every line of code adheres to WCAG accessibility, SEO architecture, and international best practices.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexShrink: 0, flexWrap: "wrap" }}>
            <Link href="/services" className="btn-ghost">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-volt">
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
