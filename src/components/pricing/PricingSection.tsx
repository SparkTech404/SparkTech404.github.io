"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Personal sites & MVPs",
    price: "₹4,999",
    note: "starting at",
    features: [
      "Single-page responsive website",
      "Mobile-first modern UI design",
      "Basic SEO optimization setup",
      "Contact form integration",
      "SSL & Domain DNS configuration",
      "3 rounds of design revisions",
      "1-month post-launch support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    tagline: "Businesses ready to scale",
    price: "₹14,999",
    note: "starting at",
    features: [
      "Multi-page Next.js website (up to 8 pages)",
      "Premium UI/UX design",
      "Advanced SEO & Core Web Vitals tuning",
      "Dynamic contact form with email alerts",
      "Google Analytics & Search Console setup",
      "Custom animations with Framer Motion",
      "Cloud deployment (Vercel / AWS)",
      "3-months technical support & updates",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Full-stack SaaS & custom apps",
    price: "Custom",
    note: "tailored quote",
    features: [
      "Custom full-stack web application",
      "SaaS dashboard with role-based access",
      "REST/GraphQL API development",
      "MongoDB / Firebase real-time database",
      "Payment gateway integration",
      "CI/CD pipeline & automated testing",
      "Multi-cloud deployment & scaling",
      "24/7 lifetime priority support",
    ],
    featured: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function PricingSection() {
  const [hovered, setHovered] = useState<string | null>(null);

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
            Transparent pricing
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
              maxWidth: "20ch",
            }}
          >
            Affordable plans for every{" "}
            <span style={{ color: "var(--volt)" }}>business.</span>
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(12px, 2vw, 20px)",
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={card}
              onHoverStart={() => setHovered(plan.name)}
              onHoverEnd={() => setHovered(null)}
              style={{
                background: "var(--surface-raised)",
                border: plan.featured ? "1px solid var(--volt-border)" : "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(24px, 3.5vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative",
                boxShadow: plan.featured ? "var(--shadow-volt)" : "none",
                transition: "transform 300ms cubic-bezier(0.23,1,0.32,1), box-shadow 300ms ease",
                transform: hovered === plan.name && !plan.featured ? "translateY(-6px)" : "translateY(0)",
              }}
            >
                          {/* Card inner (z:1 to sit above the rotating border) */}
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "24px", height: "100%" }}>

                {/* Featured badge */}
                {plan.featured && (
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="pricing-badge"
                    style={{
                      position: "absolute",
                      top: "-1px",
                      right: "clamp(20px, 3vw, 32px)",
                      background: "var(--volt)",
                      color: "oklch(8% 0.014 265)",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "5px 12px",
                      borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                    Most Popular
                  </motion.div>
                )}

                {/* Plan name */}
                <div style={{ paddingTop: plan.featured ? "24px" : "0" }}>
                  <h3 style={{
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-3)" }}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div style={{ paddingBottom: "20px", borderBottom: "1px solid var(--surface-border-subtle)" }}>
                  <div
                    className="stat-number"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                  >
                    {plan.price}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.72rem",
                    color: "var(--ink-3)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                    display: "block",
                  }}>
                    {plan.note}
                  </span>
                </div>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                  {plan.features.map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.04, duration: 0.35 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                    >
                      <CheckCircle2
                        className="w-4 h-4"
                        style={{ color: "var(--volt)", flexShrink: 0, marginTop: "1px" }}
                        strokeWidth={2}
                      />
                      <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem", color: "var(--ink-2)", lineHeight: 1.45 }}>
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "13px 24px",
                    borderRadius: "var(--radius-md)",
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    transition: "opacity 150ms ease, transform 150ms ease",
                    ...(plan.featured
                      ? { background: "var(--volt)", color: "oklch(8% 0.014 265)", position: "relative", overflow: "hidden" }
                      : { background: "transparent", color: "var(--ink-2)", border: "1px solid var(--surface-border)" }),
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "0.8125rem",
            color: "var(--ink-3)",
            textAlign: "center",
            marginTop: "clamp(20px, 3vw, 32px)",
          }}
        >
          All plans include a free consultation. Prices vary by project scope.{" "}
          <Link
            href="/contact"
            style={{ color: "var(--volt)", textDecoration: "underline", textDecorationColor: "var(--volt-border)" }}
          >
            Contact us for a custom quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
