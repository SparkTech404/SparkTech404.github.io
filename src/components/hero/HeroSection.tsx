"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const trustedBy = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "AWS", "Vercel", "Figma",
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "AWS", "Vercel", "Figma",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Magnetic button hook
function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
      el.style.transition = "transform 500ms cubic-bezier(0.23,1,0.32,1)";
      setTimeout(() => { if (el) el.style.transition = ""; }, 500);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return ref;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const ySpring = useSpring(y, { stiffness: 80, damping: 20 });

  const ctaRef = useMagnet(0.3);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(48px, 6vw, 72px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated dot-grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, oklch(30% 0.02 265) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Animated volt streak lines */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Horizontal volt line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            position: "absolute",
            top: "38%",
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, var(--volt-border) 20%, var(--volt-border) 80%, transparent 100%)",
            transformOrigin: "left center",
          }}
        />
        {/* Vertical volt line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "62%",
            width: "1px",
            background: "linear-gradient(180deg, transparent 0%, var(--volt-border) 25%, var(--volt-border) 75%, transparent 100%)",
            transformOrigin: "center top",
          }}
        />
      </div>

      {/* Floating decorative volt orb — top right */}
      <motion.div
        className="animate-float"
        style={{
          position: "absolute",
          top: "12%",
          right: "8%",
          width: "clamp(80px,10vw,140px)",
          height: "clamp(80px,10vw,140px)",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, var(--volt-dim) 0%, transparent 70%)",
          border: "1px solid var(--volt-border)",
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />
      <motion.div
        className="animate-float delay-300"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "18%",
          width: "clamp(40px,5vw,64px)",
          height: "clamp(40px,5vw,64px)",
          borderRadius: "50%",
          border: "1px solid var(--volt-border)",
          pointerEvents: "none",
          opacity: 0.35,
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div style={{ y: ySpring, opacity }} className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Tag line */}
          <motion.div variants={item} style={{ marginBottom: "clamp(20px, 3vw, 32px)", display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="animate-glow-pulse dot-volt" style={{ width: "8px", height: "8px" }} />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                color: "var(--volt)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Web Development Agency · India
            </span>
          </motion.div>

          {/* Hero Headline — word-by-word stagger */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)",
              letterSpacing: "-0.038em",
              lineHeight: 1.05,
              color: "var(--ink)",
              maxWidth: "14ch",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            We build the web{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ color: "var(--volt)", display: "inline-block" }}
            >
              you deserve.
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "var(--font-geist), 'Geist', sans-serif",
              fontSize: "clamp(0.9375rem, 1.6vw, 1.2rem)",
              color: "var(--ink-2)",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            High-performance websites, landing pages, and scalable web applications
            engineered for speed, SEO, and measurable business growth.
          </motion.p>

          {/* CTAs — magnetic primary button */}
          <motion.div
            variants={item}
            className="hero-ctas"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "clamp(40px, 6vw, 64px)" }}
          >
            <Link
              href="/contact"
              ref={ctaRef}
              className="btn-volt"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Spotlight sweep on button */}
              <span
                className="animate-spotlight"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, transparent, oklch(100% 0 0 / 0.25), transparent)",
                  pointerEvents: "none",
                }}
              />
              Start Your Project
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/services" className="btn-ghost">
              View Services
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div variants={item}>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--ink-3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Built with industry-leading tech
            </p>
            <div
              style={{
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                className="animate-marquee"
                style={{ display: "flex", gap: "8px", width: "max-content" }}
              >
                {trustedBy.map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="tag"
                    style={{ flexShrink: 0 }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
