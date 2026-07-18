"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Custom, high-speed web architecture engineered using Next.js and React for maximum load speed, SEO rankings, and seamless scalability.",
    features: [
      "Custom Next.js & React App Architecture",
      "Core Web Vitals optimized (95+ score)",
      "Enterprise-grade security & SSL setup",
      "Seamless CMS integration (headless/API)",
    ],
    featured: true,
  },
  {
    id: "landing-page",
    title: "Landing Pages",
    description:
      "High-converting campaign pages that turn visitors into paying customers through persuasive design and strategic CTAs.",
    features: [
      "CRO-focused layouts",
      "A/B testing ready",
      "Lead form & CRM integrations",
    ],
    featured: false,
  },
  {
    id: "web-app",
    title: "Web Applications",
    description:
      "Scalable SaaS platforms, custom dashboards, and complex full-stack applications built for business-critical operations.",
    features: [
      "Full-stack Node.js & Next.js backend",
      "Real-time databases & auth",
      "Multi-tenant SaaS & RBAC",
    ],
    featured: false,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that captivate from first glance, crafted with user research, wireframes, and Figma prototypes.",
    features: [
      "Interactive Figma prototypes",
      "WCAG 2.1 accessibility",
      "Complete design system creation",
    ],
    featured: false,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Technical SEO from the code level — semantic HTML5, schema markup, Core Web Vitals, and crawl optimization.",
    features: [
      "OpenGraph & schema markup",
      "Keyword & architecture audit",
      "Fast indexing & crawlability",
    ],
    featured: false,
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "24/7 server monitoring, security patches, cloud backups, and performance tuning so you never worry about downtime.",
    features: [
      "24/7 incident monitoring",
      "Automated cloud backups",
      "Security patching & malware protection",
    ],
    featured: false,
  },
];

// 3D tilt card hook
function useTilt(intensity = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rotX = (y - 0.5) * -intensity;
    const rotY = (x - 0.5) * intensity;
    el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    el.style.boxShadow = `0 20px 40px oklch(0% 0 0 / 0.3), 0 0 0 1px var(--surface-border)`;
  }, [intensity]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
    el.style.transition = "transform 500ms cubic-bezier(0.23,1,0.32,1), box-shadow 500ms ease";
    setTimeout(() => { if (el) el.style.transition = ""; }, 500);
  }, []);

  return { ref, onMove, onLeave };
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ServiceCard({ service, isFeatured }: { service: typeof services[0]; isFeatured: boolean }) {
  const { ref, onMove, onLeave } = useTilt(isFeatured ? 4 : 7);
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        gridColumn: isFeatured ? "span 2" : undefined,
        background: "var(--surface-raised)",
        padding: isFeatured ? "clamp(28px, 4vw, 48px)" : "clamp(20px, 3vw, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: isFeatured ? "20px" : "14px",
        cursor: "default",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover spotlight */}
      <div
        className="card-spotlight"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), var(--volt-dim) 0%, transparent 60%)",
          opacity: 0,
          transition: "opacity 300ms ease",
          pointerEvents: "none",
        }}
      />

      {isFeatured ? (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}>
              {service.title}
            </span>
            <motion.span
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="tag tag-volt"
            >
              Featured
            </motion.span>
          </div>
          <p style={{
            fontFamily: "var(--font-geist), 'Geist', sans-serif",
            fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
            color: "var(--ink-2)",
            lineHeight: 1.7,
            maxWidth: "52ch",
          }}>
            {service.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {service.features.map((f) => (
              <motion.span
                key={f}
                className="tag"
                whileHover={{ borderColor: "var(--volt-border)", color: "var(--ink)", scale: 1.03 }}
                transition={{ duration: 0.15 }}
              >
                {f}
              </motion.span>
            ))}
          </div>
          <Link href="/contact" className="btn-volt" style={{ width: "fit-content", position: "relative", overflow: "hidden" }}>
            <span className="animate-spotlight" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, transparent, oklch(100% 0 0 / 0.2), transparent)",
              pointerEvents: "none",
            }} />
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </>
      ) : (
        <>
          <h3 style={{
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1.0625rem",
            letterSpacing: "-0.015em",
            color: "var(--ink)",
            lineHeight: 1.2,
          }}>
            {service.title}
          </h3>
          <p style={{
            fontFamily: "var(--font-geist), 'Geist', sans-serif",
            fontSize: "0.875rem",
            color: "var(--ink-2)",
            lineHeight: 1.6,
            flexGrow: 1,
          }}>
            {service.description}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {service.features.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span className="dot-volt animate-glow-pulse" style={{ marginTop: "5px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-3)", lineHeight: 1.4 }}>
                  {f}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
        borderTop: "1px solid var(--surface-border-subtle)",
      }}
    >
      <div className="section-container">
        {/* Section header */}
        <div style={{ marginBottom: "clamp(40px, 5vw, 60px)" }}>
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
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            What we build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--ink)",
              maxWidth: "24ch",
            }}
          >
            High-impact solutions for your{" "}
            <span style={{ color: "var(--volt)" }}>digital growth.</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--surface-border-subtle)",
            border: "1px solid var(--surface-border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isFeatured={service.featured} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "clamp(28px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9375rem", color: "var(--ink-3)" }}>
            Not sure which service fits your needs?
          </p>
          <Link href="/contact" className="btn-ghost">
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
