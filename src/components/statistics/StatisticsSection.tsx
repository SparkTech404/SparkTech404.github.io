"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Projects Shipped", detail: "Across 12+ industries", fillPercent: 100 },
  { value: 50, suffix: "+", label: "Clients Served", detail: "Startups to enterprises", fillPercent: 50 },
  { value: 99, suffix: "%", label: "Satisfaction Rate", detail: "Based on client feedback", fillPercent: 99 },
  { value: 24, suffix: "/7", label: "Support Hours", detail: "Always on, always ready", fillPercent: 100 },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--surface-border-subtle)",
        borderBottom: "1px solid var(--surface-border-subtle)",
      }}
    >
      <div className="section-container">
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1px",
            background: "var(--surface-border-subtle)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ backgroundColor: "var(--surface-high)" }}
              style={{
                background: "var(--surface)",
                padding: "clamp(24px, 4vw, 40px) clamp(16px, 2.5vw, 28px)",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                position: "relative",
                overflow: "hidden",
                transition: "background 200ms ease",
              }}
            >
              {/* Animated progress fill bar at bottom */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: stat.fillPercent / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "2px",
                  width: "100%",
                  background: "var(--volt)",
                  transformOrigin: "left center",
                  boxShadow: "0 0 6px var(--volt-glow)",
                }}
              />

              <span
                className="stat-number"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist), 'Geist', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--ink-2)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist), 'Geist', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--ink-3)",
                  fontWeight: 400,
                  marginTop: "2px",
                }}
              >
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
