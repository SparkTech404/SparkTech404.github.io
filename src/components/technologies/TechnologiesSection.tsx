"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", category: "UI" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express.js", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "Firebase", category: "Realtime" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "CI/CD" },
  { name: "Figma", category: "Design" },
  { name: "Vercel", category: "Hosting" },
];

// Double the array for seamless marquee loop
const row1 = [...technologies.slice(0, 8), ...technologies.slice(0, 8)];
const row2 = [...technologies.slice(8), ...technologies.slice(8)];

export function TechnologiesSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
        borderTop: "1px solid var(--surface-border-subtle)",
        overflow: "hidden",
      }}
    >
      <div className="section-container" style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          Technology stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--ink)",
            maxWidth: "24ch",
          }}
        >
          Powered by industry-leading tools.
        </motion.h2>
      </div>

      {/* Marquee rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Row 1 — left to right */}
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            overflow: "hidden",
          }}
        >
          <div
            className="animate-marquee"
            style={{ display: "flex", gap: "10px", width: "max-content" }}
          >
            {row1.map((tech, i) => (
              <div
                key={`r1-${tech.name}-${i}`}
                style={{
                  flexShrink: 0,
                  background: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "130px",
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {tech.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--ink-3)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              width: "max-content",
              animation: "marquee 32s linear infinite reverse",
            }}
          >
            {row2.map((tech, i) => (
              <div
                key={`r2-${tech.name}-${i}`}
                style={{
                  flexShrink: 0,
                  background: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "130px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {tech.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--ink-3)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
