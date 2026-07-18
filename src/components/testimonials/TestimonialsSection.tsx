"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, NovaPay Fintech",
    review:
      "Spark Tech completely transformed our online presence. The website they built is blazing fast, SEO-optimized, and converts visitors into paying customers. Our organic traffic jumped 340% within 3 months.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "CEO, CloudStack Solutions",
    review:
      "Their full-stack team delivered our SaaS dashboard in just 5 weeks — production-ready with real-time analytics, role-based access, and flawless mobile responsiveness. Truly world-class engineering.",
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director, GreenLeaf Organics",
    review:
      "The landing page they built for our product launch was absolutely stunning. We saw a 280% increase in lead generation within the first week. The attention to detail was exceptional.",
    initials: "RV",
  },
  {
    name: "Sneha Kapoor",
    role: "CTO, HealthVault AI",
    review:
      "We needed a complex healthcare web application with HIPAA-compliant architecture. Spark Tech not only delivered on time but exceeded every technical benchmark. Their 24/7 support is unmatched.",
    initials: "SK",
  },
  {
    name: "Vikram Singh",
    role: "Co-Founder, EduBridge Learning",
    review:
      "From initial consultation to deployment, the entire experience was seamless. They redesigned our outdated platform into a modern, lightning-fast web app. Student engagement doubled overnight.",
    initials: "VS",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -48 : 48, opacity: 0 }),
  };

  return (
    <section
      style={{
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
        borderTop: "1px solid var(--surface-border-subtle)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(36px, 5vw, 56px)", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--volt)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 500,
              }}
            >
              Client testimonials
            </p>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Trusted by <span style={{ color: "var(--volt)" }}>industry leaders.</span>
            </h2>
          </div>

          {/* Navigation controls */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-md)",
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                color: "var(--ink-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 150ms ease, color 150ms ease",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-md)",
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                color: "var(--ink-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 150ms ease, color 150ms ease",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "220px" }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(24px, 4vw, 48px)",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 16 16" width="16" height="16" style={{ fill: "var(--volt)" }}>
                    <path d="M8 12.174L3.09 15l.92-5.367L.02 5.882l5.39-.784L8 0l2.59 5.098 5.39.784-3.99 3.751.92 5.367L8 12.174z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "var(--ink)",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                  maxWidth: "64ch",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.review}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--volt-dim)",
                    border: "1px solid var(--volt-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.8125rem",
                    color: "var(--volt)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: "var(--ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-3)",
                      marginTop: "2px",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "6px", marginTop: "20px", justifyContent: "center" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                height: "3px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                transition: "all 250ms ease",
                background: i === current ? "var(--volt)" : "var(--surface-border)",
                width: i === current ? "28px" : "10px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
