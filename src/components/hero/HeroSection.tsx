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

      {/* Animated Circuit Board Tracks */}
      <CircuitBackground />

      {/* Animated volt streak lines - framing the content block cleanly */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        
        {/* Top Horizontal Bounding Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            position: "absolute",
            top: "14%",
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, var(--volt-border) 20%, var(--volt-border) 80%, transparent 100%)",
            transformOrigin: "left center",
          }}
        />
        {/* Top Horizontal Sweep */}
        <motion.div
          initial={{ left: "-20%" }}
          animate={{ left: "120%" }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "14%",
            width: "140px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--volt), transparent)",
          }}
        />

        {/* Bottom Horizontal Bounding Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            position: "absolute",
            bottom: "0px",
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, var(--volt-border) 20%, var(--volt-border) 80%, transparent 100%)",
            transformOrigin: "right center",
          }}
        />
        {/* Bottom Horizontal Sweep */}
        <motion.div
          initial={{ right: "-20%" }}
          animate={{ right: "120%" }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "0px",
            width: "140px",
            height: "1px",
            background: "linear-gradient(270deg, transparent, var(--volt), transparent)",
          }}
        />

        {/* Left Bounding Vertical Line - Desktop Only */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.15 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="hidden md:block"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "8%",
            width: "1px",
            background: "linear-gradient(180deg, transparent 0%, var(--volt-border) 25%, var(--volt-border) 75%, transparent 100%)",
            transformOrigin: "center top",
          }}
        />
        {/* Left Vertical Sweep */}
        <motion.div
          initial={{ top: "-20%" }}
          animate={{ top: "120%" }}
          className="hidden md:block"
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "8%",
            width: "1px",
            height: "140px",
            background: "linear-gradient(180deg, transparent, var(--volt), transparent)",
          }}
        />

        {/* Right Bounding Vertical Line - Desktop Only */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.15 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="hidden md:block"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "8%",
            width: "1px",
            background: "linear-gradient(180deg, transparent 0%, var(--volt-border) 25%, var(--volt-border) 75%, transparent 100%)",
            transformOrigin: "center bottom",
          }}
        />
        {/* Right Vertical Sweep */}
        <motion.div
          initial={{ top: "120%" }}
          animate={{ top: "-20%" }}
          className="hidden md:block"
          transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: "8%",
            width: "1px",
            height: "140px",
            background: "linear-gradient(0deg, transparent, var(--volt), transparent)",
          }}
        />
      </div>

      {/* Atmospheric radial backlight spotlight directly behind the header */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.55, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "42%",
          left: "48%",
          transform: "translate(-50%, -50%)",
          width: "clamp(380px, 60vw, 750px)",
          height: "clamp(380px, 60vw, 750px)",
          background: "radial-gradient(circle, rgba(180, 255, 0, 0.07) 0%, transparent 65%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Animated Holographic Monogram Logo Character */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(260px, 40vw, 480px)",
          height: "clamp(260px, 40vw, 480px)",
          pointerEvents: "none",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer Tech Ring 1 (Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "110%",
            height: "110%",
            borderRadius: "50%",
            border: "1.5px dashed rgba(180, 255, 0, 0.28)",
          }}
        />

        {/* Outer Tech Ring 2 (Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "125%",
            height: "125%",
            borderRadius: "50%",
            border: "1px solid rgba(180, 255, 0, 0.15)",
            borderLeftColor: "rgba(180, 255, 0, 0.5)",
            borderRightColor: "rgba(180, 255, 0, 0.5)",
          }}
        />

        {/* Central pulsating, floating monogram image */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [0.96, 1.04, 0.96],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "70%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.35, // highly visible but elegant watermark
            mixBlendMode: "screen", // keys out the black background
            overflow: "hidden", // crops the bottom text
            position: "relative",
            borderRadius: "40px",
          }}
        >
          <img
            src="/logo.png"
            alt="SparkTech Monogram Character"
            style={{
              width: "100%",
              height: "135%", // scale vertically to push text out
              objectFit: "cover",
              objectPosition: "top center", // keep only the top monogram
              filter: "drop-shadow(0 0 45px rgba(180, 255, 0, 0.65))",
            }}
          />
        </motion.div>
      </div>

      {/* Floating decorative volt orb — top right */}
      <motion.div
        className="animate-float"
        style={{
          position: "absolute",
          top: "12%",
          right: "12%",
          width: "clamp(80px,10vw,140px)",
          height: "clamp(80px,10vw,140px)",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, var(--volt-dim) 0%, transparent 70%)",
          border: "1px solid var(--volt-border)",
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />
      <motion.div
        className="animate-float delay-300"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "22%",
          width: "clamp(40px,5vw,64px)",
          height: "clamp(40px,5vw,64px)",
          borderRadius: "50%",
          border: "1px solid var(--volt-border)",
          pointerEvents: "none",
          opacity: 0.25,
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div style={{ y: ySpring, opacity, position: "relative", zIndex: 1 }} className="section-container">
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
            <span
              style={{
                background: "linear-gradient(180deg, #ffffff 40%, #a3a3a3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              We build the
            </span>{" "}
            <br />
            <span
              style={{
                background: "linear-gradient(180deg, #ffffff 40%, #a3a3a3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              web
            </span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.03 }}
              className="text-glow-continuous"
              style={{
                display: "inline-block",
                cursor: "default",
              }}
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

const CircuitBackground = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.35,
      }}
    >
      <defs>
        <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--volt)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id="glow-circuit" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <style>{`
        .circuit-track {
          stroke: rgba(180, 255, 0, 0.07);
          stroke-width: 1.0;
          fill: none;
        }
        .circuit-pulse {
          stroke: var(--volt);
          stroke-width: 2.0;
          fill: none;
          stroke-linecap: round;
          filter: url(#glow-circuit);
          stroke-dasharray: 80 400;
        }
        .pulse-fast { animation: pulse-flow 7s linear infinite; }
        .pulse-medium { animation: pulse-flow 10s linear infinite; }
        .pulse-slow { animation: pulse-flow 14s linear infinite; }
        
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: -1.5s; }
        .delay-2 { animation-delay: -3s; }
        .delay-3 { animation-delay: -4.5s; }
        .delay-4 { animation-delay: -6s; }
        .delay-5 { animation-delay: -7.5s; }
        .delay-6 { animation-delay: -9s; }
        .delay-7 { animation-delay: -10.5s; }

        .circuit-node {
          fill: oklch(20% 0.02 265);
          stroke: var(--volt);
          stroke-width: 1.2;
          filter: url(#glow-circuit);
        }

        @keyframes pulse-flow {
          0% {
            stroke-dashoffset: 480;
          }
          100% {
            stroke-dashoffset: -480;
          }
        }
      `}</style>

      {/* --- LEFT BUS CHANNEL (5 Parallel Lines) --- */}
      <path className="circuit-track" d="M 80 150 L 80 280 L 230 430 L 480 430" />
      <path className="circuit-track" d="M 88 150 L 88 277 L 235 424 L 480 424" />
      <path className="circuit-track" d="M 96 150 L 96 274 L 240 418 L 480 418" />
      <path className="circuit-track" d="M 104 150 L 104 271 L 245 412 L 480 412" />
      <path className="circuit-track" d="M 112 150 L 112 268 L 250 406 L 480 406" />

      <path className="circuit-pulse pulse-fast delay-0" d="M 80 150 L 80 280 L 230 430 L 480 430" />
      <path className="circuit-pulse pulse-fast delay-2" d="M 88 150 L 88 277 L 235 424 L 480 424" />
      <path className="circuit-pulse pulse-fast delay-4" d="M 96 150 L 96 274 L 240 418 L 480 418" />
      <path className="circuit-pulse pulse-fast delay-1" d="M 104 150 L 104 271 L 245 412 L 480 412" />
      <path className="circuit-pulse pulse-fast delay-3" d="M 112 150 L 112 268 L 250 406 L 480 406" />

      <circle className="circuit-node" cx="480" cy="430" r="2.5" />
      <circle className="circuit-node" cx="480" cy="424" r="2.5" />
      <circle className="circuit-node" cx="480" cy="418" r="2.5" />
      <circle className="circuit-node" cx="480" cy="412" r="2.5" />
      <circle className="circuit-node" cx="480" cy="406" r="2.5" />


      {/* --- RIGHT BUS CHANNEL (5 Parallel Lines) --- */}
      <path className="circuit-track" d="M 1840 180 L 1570 180 L 1420 330 L 1420 680" />
      <path className="circuit-track" d="M 1840 188 L 1573 188 L 1426 334 L 1426 680" />
      <path className="circuit-track" d="M 1840 196 L 1576 196 L 1432 338 L 1432 680" />
      <path className="circuit-track" d="M 1840 204 L 1580 204 L 1438 342 L 1438 680" />
      <path className="circuit-track" d="M 1840 212 L 1583 212 L 1444 346 L 1444 680" />

      <path className="circuit-pulse pulse-medium delay-1" d="M 1840 180 L 1570 180 L 1420 330 L 1420 680" />
      <path className="circuit-pulse pulse-medium delay-3" d="M 1840 188 L 1573 188 L 1426 334 L 1426 680" />
      <path className="circuit-pulse pulse-medium delay-5" d="M 1840 196 L 1576 196 L 1432 338 L 1432 680" />
      <path className="circuit-pulse pulse-medium delay-2" d="M 1840 204 L 1580 204 L 1438 342 L 1438 680" />
      <path className="circuit-pulse pulse-medium delay-4" d="M 1840 212 L 1583 212 L 1444 346 L 1444 680" />

      <circle className="circuit-node" cx="1420" cy="680" r="2.5" />
      <circle className="circuit-node" cx="1426" cy="680" r="2.5" />
      <circle className="circuit-node" cx="1432" cy="680" r="2.5" />
      <circle className="circuit-node" cx="1438" cy="680" r="2.5" />
      <circle className="circuit-node" cx="1444" cy="680" r="2.5" />


      {/* --- BOTTOM BUS CHANNEL (5 Parallel Lines) --- */}
      <path className="circuit-track" d="M 700 1000 L 700 880 L 600 780 L 450 780" />
      <path className="circuit-track" d="M 708 1000 L 708 883 L 606 781 L 450 781" />
      <path className="circuit-track" d="M 716 1000 L 716 886 L 612 782 L 450 782" />
      <path className="circuit-track" d="M 724 1000 L 724 889 L 618 783 L 450 783" />
      <path className="circuit-track" d="M 732 1000 L 732 892 L 624 784 L 450 784" />

      <path className="circuit-pulse pulse-slow delay-2" d="M 700 1000 L 700 880 L 600 780 L 450 780" />
      <path className="circuit-pulse pulse-slow delay-4" d="M 708 1000 L 708 883 L 606 781 L 450 781" />
      <path className="circuit-pulse pulse-slow delay-6" d="M 716 1000 L 716 886 L 612 782 L 450 782" />
      <path className="circuit-pulse pulse-slow delay-3" d="M 724 1000 L 724 889 L 618 783 L 450 783" />
      <path className="circuit-pulse pulse-slow delay-5" d="M 732 1000 L 732 892 L 624 784 L 450 784" />

      <circle className="circuit-node" cx="450" cy="780" r="2.5" />
      <circle className="circuit-node" cx="450" cy="781" r="2.5" />
      <circle className="circuit-node" cx="450" cy="782" r="2.5" />
      <circle className="circuit-node" cx="450" cy="783" r="2.5" />
      <circle className="circuit-node" cx="450" cy="784" r="2.5" />


      {/* --- TOP-CENTER CENTER-LEFT BUS CHANNEL (4 Parallel Lines) --- */}
      <path className="circuit-track" d="M 750 80 L 750 180 L 650 280 L 520 280" />
      <path className="circuit-track" d="M 758 80 L 758 177 L 656 275 L 520 275" />
      <path className="circuit-track" d="M 766 80 L 766 174 L 662 270 L 520 270" />
      <path className="circuit-track" d="M 774 80 L 774 171 L 668 265 L 520 265" />

      <path className="circuit-pulse pulse-medium delay-6" d="M 750 80 L 750 180 L 650 280 L 520 280" />
      <path className="circuit-pulse pulse-medium delay-0" d="M 758 80 L 758 177 L 656 275 L 520 275" />
      <path className="circuit-pulse pulse-medium delay-3" d="M 766 80 L 766 174 L 662 270 L 520 270" />
      <path className="circuit-pulse pulse-medium delay-1" d="M 774 80 L 774 171 L 668 265 L 520 265" />

      <circle className="circuit-node" cx="520" cy="280" r="2.5" />
      <circle className="circuit-node" cx="520" cy="275" r="2.5" />
      <circle className="circuit-node" cx="520" cy="270" r="2.5" />
      <circle className="circuit-node" cx="520" cy="265" r="2.5" />


      {/* --- TOP-CENTER CENTER-RIGHT BUS CHANNEL (4 Parallel Lines) --- */}
      <path className="circuit-track" d="M 1150 80 L 1150 180 L 1250 280 L 1380 280" />
      <path className="circuit-track" d="M 1142 80 L 1142 177 L 1244 275 L 1380 275" />
      <path className="circuit-track" d="M 1134 80 L 1134 174 L 1238 270 L 1380 270" />
      <path className="circuit-track" d="M 1126 80 L 1126 171 L 1232 265 L 1380 265" />

      <path className="circuit-pulse pulse-medium delay-7" d="M 1150 80 L 1150 180 L 1250 280 L 1380 280" />
      <path className="circuit-pulse pulse-medium delay-2" d="M 1142 80 L 1142 177 L 1244 275 L 1380 275" />
      <path className="circuit-pulse pulse-medium delay-5" d="M 1134 80 L 1134 174 L 1238 270 L 1380 270" />
      <path className="circuit-pulse pulse-medium delay-1" d="M 1126 80 L 1126 171 L 1232 265 L 1380 265" />

      <circle className="circuit-node" cx="1380" cy="280" r="2.5" />
      <circle className="circuit-node" cx="1380" cy="275" r="2.5" />
      <circle className="circuit-node" cx="1380" cy="270" r="2.5" />
      <circle className="circuit-node" cx="1380" cy="265" r="2.5" />


      {/* --- DIAGONAL CROSSOVER BUS 1 (3 Parallel Lines) --- */}
      <path className="circuit-track" d="M 300 100 L 450 250 L 450 400 L 550 500" />
      <path className="circuit-track" d="M 308 100 L 455 247 L 455 397 L 550 492" />
      <path className="circuit-track" d="M 316 100 L 460 244 L 460 394 L 550 484" />

      <path className="circuit-pulse pulse-fast delay-2" d="M 300 100 L 450 250 L 450 400 L 550 500" />
      <path className="circuit-pulse pulse-fast delay-4" d="M 308 100 L 455 247 L 455 397 L 550 492" />
      <path className="circuit-pulse pulse-fast delay-6" d="M 316 100 L 460 244 L 460 394 L 550 484" />

      <circle className="circuit-node" cx="550" cy="500" r="2.5" />
      <circle className="circuit-node" cx="550" cy="492" r="2.5" />
      <circle className="circuit-node" cx="550" cy="484" r="2.5" />


      {/* --- DIAGONAL CROSSOVER BUS 2 (3 Parallel Lines) --- */}
      <path className="circuit-track" d="M 1620 100 L 1470 250 L 1470 400 L 1370 500" />
      <path className="circuit-track" d="M 1612 100 L 1465 247 L 1465 397 L 1370 492" />
      <path className="circuit-track" d="M 1604 100 L 1460 244 L 1460 394 L 1370 484" />

      <path className="circuit-pulse pulse-medium delay-1" d="M 1620 100 L 1470 250 L 1470 400 L 1370 500" />
      <path className="circuit-pulse pulse-medium delay-3" d="M 1612 100 L 1465 247 L 1465 397 L 1370 492" />
      <path className="circuit-pulse pulse-medium delay-5" d="M 1604 100 L 1460 244 L 1460 394 L 1370 484" />

      <circle className="circuit-node" cx="1370" cy="500" r="2.5" />
      <circle className="circuit-node" cx="1370" cy="492" r="2.5" />
      <circle className="circuit-node" cx="1370" cy="484" r="2.5" />


      {/* --- ORGANIC SINGLE LINES WITH TERMINATING CHIPS --- */}
      {/* Mid Left branch */}
      <path className="circuit-track" d="M 80 480 L 220 480 L 300 560 L 300 680 L 240 740" />
      <path className="circuit-pulse pulse-fast delay-1" d="M 80 480 L 220 480 L 300 560 L 300 680 L 240 740" />
      <circle className="circuit-node" cx="240" cy="740" r="3" />

      {/* Mid Right branch */}
      <path className="circuit-track" d="M 1850 400 L 1700 400 L 1600 500 L 1600 620 L 1720 740" />
      <path className="circuit-pulse pulse-slow delay-0" d="M 1850 400 L 1700 400 L 1600 500 L 1600 620 L 1720 740" />
      <circle className="circuit-node" cx="1720" cy="740" r="3" />

      {/* Bottom Right Track */}
      <path className="circuit-track" d="M 1800 780 L 1800 880 L 1650 1030 L 1420 1030" />
      <path className="circuit-pulse pulse-medium delay-4" d="M 1800 780 L 1800 880 L 1650 1030 L 1420 1030" />
      <circle className="circuit-node" cx="1420" cy="1030" r="3" />
    </svg>
  </div>
);

