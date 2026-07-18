"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We analyze your business goals, target audience, and project scope to formulate the perfect digital strategy.",
    icon: MessageSquare,
    badge: "Discovery & Requirements",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Creating comprehensive technical specifications, database architecture, milestones, and project roadmaps.",
    icon: FileSpreadsheet,
    badge: "Architecture Roadmap",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description:
      "Crafting human-centered wireframes and interactive Figma prototypes focused on conversion and clarity.",
    icon: Palette,
    badge: "Figma Prototyping",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Writing clean, high-performance code using React, Next.js, TypeScript, and robust backend APIs.",
    icon: Code2,
    badge: "Full-Stack Coding",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Rigorous QA, cross-browser compatibility, WCAG accessibility, and Core Web Vitals speed audits.",
    icon: CheckCheck,
    badge: "QA & Security Audit",
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Launching to global cloud networks (AWS/Vercel/GCP) with zero downtime, SSL, and DNS configuration.",
    icon: Rocket,
    badge: "Live Cloud Launch",
  },
  {
    step: "07",
    title: "Maintenance",
    description:
      "24/7 technical support, server monitoring, security patching, and continuous speed optimization.",
    icon: ShieldCheck,
    badge: "Lifetime Support",
  },
];

export function ProcessTimeline() {
  return (
    <section
      id="process"
      style={{
        paddingTop: "clamp(48px, 7vw, 80px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      <div className="section-container">
        {/* Page header */}
        <div style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            How we work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
              color: "var(--ink)",
              maxWidth: "20ch",
              marginBottom: "16px",
            }}
          >
            A proven{" "}
            <span style={{ color: "var(--volt)" }}>
              7-step process.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
              color: "var(--ink-2)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            From initial consultation to lifetime post-launch maintenance — our structured
            methodology ensures seamless execution and absolute transparency at every stage.
          </motion.p>
        </div>

        {/* Steps list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "clamp(20px, 3vw, 36px)",
                paddingTop: "clamp(24px, 3vw, 36px)",
                paddingBottom: "clamp(24px, 3vw, 36px)",
                borderBottom:
                  idx < processSteps.length - 1
                    ? "1px solid var(--surface-border-subtle)"
                    : "none",
                alignItems: "flex-start",
              }}
            >
              {/* Step number + icon */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--volt-dim)",
                    border: "1px solid var(--volt-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <step.icon
                    className="w-5 h-5"
                    style={{ color: "var(--volt)" }}
                    strokeWidth={1.8}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.72rem",
                    color: "var(--ink-3)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--volt)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  {step.badge}
                </span>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                    color: "var(--ink-2)",
                    lineHeight: 1.65,
                    maxWidth: "60ch",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
