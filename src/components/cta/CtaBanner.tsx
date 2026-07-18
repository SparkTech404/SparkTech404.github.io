"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const perks = [
  { icon: Zap, label: "Same-day response" },
  { icon: Shield, label: "Money-back guarantee" },
  { icon: Clock, label: "24/7 support included" },
];

export function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      style={{
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            background: "var(--volt)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 72px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "clamp(24px, 3vw, 36px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dot grid overlay on volt background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, oklch(20% 0.01 265 / 0.25) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              pointerEvents: "none",
            }}
          />

          {/* Sweeping light ray — runs on repeat */}
          <motion.div
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "30%",
              background: "linear-gradient(90deg, transparent, oklch(100% 0 0 / 0.12), transparent)",
              transform: "skewX(-15deg)",
              pointerEvents: "none",
            }}
          />

          {/* Corner glow */}
          <div
            style={{
              position: "absolute",
              bottom: "-40%",
              right: "-10%",
              width: "60%",
              height: "120%",
              background: "radial-gradient(circle at center, oklch(65% 0.28 120 / 0.4) 0%, transparent 70%)",
              pointerEvents: "none",
              filter: "blur(60px)",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                color: "oklch(18% 0.02 265)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              Ready to launch?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.038em",
                lineHeight: 1.05,
                color: "oklch(8% 0.014 265)",
                maxWidth: "18ch",
              }}
            >
              Ready to build something great?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.36, duration: 0.55 }}
            style={{
              fontFamily: "var(--font-geist), 'Geist', sans-serif",
              fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
              color: "oklch(18% 0.02 265)",
              lineHeight: 1.65,
              maxWidth: "48ch",
              position: "relative",
              zIndex: 1,
            }}
          >
            Join 50+ businesses who trust Spark Tech for premium web development,
            SEO, and long-term technical partnership. Free consultation — no strings attached.
          </motion.p>

          {/* Perks row with stagger */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } },
            }}
            style={{ display: "flex", flexWrap: "wrap", gap: "20px", position: "relative", zIndex: 1 }}
          >
            {perks.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-geist), 'Geist', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "oklch(15% 0.018 265)",
                }}
              >
                <Icon className="w-4 h-4" strokeWidth={2.5} />
                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", position: "relative", zIndex: 1 }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "oklch(8% 0.014 265)",
                color: "var(--volt)",
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.9375rem",
                borderRadius: "var(--radius-md)",
                padding: "13px 28px",
                textDecoration: "none",
                transition: "opacity 150ms ease, transform 150ms ease",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "oklch(12% 0.016 265)",
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontWeight: 600,
                fontSize: "0.9375rem",
                borderRadius: "var(--radius-md)",
                padding: "12px 24px",
                border: "1px solid oklch(15% 0.018 265 / 0.4)",
                textDecoration: "none",
                transition: "border-color 150ms ease, transform 150ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(15% 0.018 265 / 0.8)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(15% 0.018 265 / 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
