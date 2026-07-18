"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a website take to build and launch?",
    answer:
      "A standard modern website or landing page typically takes 1–3 weeks from initial design consultation to final deployment. More complex custom web applications, SaaS platforms, or e-commerce stores with extensive integrations usually take 4–8 weeks depending on exact scope and feature requirements.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We specialize in revamping outdated, slow, or poorly converting websites. We modernize your UI/UX with contemporary design, migrate your platform to Next.js/React, and optimize Core Web Vitals to dramatically boost loading speeds and search engine rankings.",
  },
  {
    question: "Do you provide hosting and cloud deployment support?",
    answer:
      "Absolutely. Whether your application is hosted on AWS, Google Cloud Platform, Azure, Vercel, or a custom VPS, we handle full configuration — SSL certificates, domain DNS, automated CI/CD pipelines, and high-availability cloud architecture.",
  },
  {
    question: "Can you maintain and optimize existing websites?",
    answer:
      "Yes. We provide 24/7 technical support, security improvements, database optimization, cloud backup scheduling, and speed enhancement packages for existing websites regardless of their current host.",
  },
  {
    question: "Do you build custom web applications and enterprise tools?",
    answer:
      "Yes. We build high-scale SaaS web applications, internal enterprise dashboards, real-time data monitoring systems, and secure API integrations using full-stack technologies including Next.js 15, React 19, TypeScript, Node.js, MongoDB, and Firebase.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        paddingTop: "clamp(48px, 7vw, 80px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      <div className="section-container" style={{ maxWidth: "860px" }}>
        {/* Page header */}
        <div style={{ marginBottom: "clamp(40px, 5vw, 60px)" }}>
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
            FAQ
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
            Everything you need to{" "}
            <span style={{ color: "var(--volt)" }}>know.</span>
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
              maxWidth: "50ch",
            }}
          >
            Questions about our process, timelines, or technical capabilities? We have answers.
          </motion.p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                style={{
                  borderBottom: "1px solid var(--surface-border-subtle)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "clamp(18px, 2.5vw, 24px) 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                      color: isOpen ? "var(--volt)" : "var(--ink)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                      transition: "color 200ms ease",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "var(--radius-sm)",
                      background: isOpen ? "var(--volt-dim)" : "var(--surface-high)",
                      border: `1px solid ${isOpen ? "var(--volt-border)" : "var(--surface-border-subtle)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 200ms ease",
                    }}
                  >
                    <Plus
                      className="w-4 h-4"
                      style={{
                        color: isOpen ? "var(--volt)" : "var(--ink-3)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 250ms ease",
                      }}
                      strokeWidth={2}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                          color: "var(--ink-2)",
                          lineHeight: 1.7,
                          paddingBottom: "clamp(16px, 2vw, 24px)",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "clamp(28px, 4vw, 40px)" }}
        >
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "0.9375rem",
              color: "var(--ink-3)",
            }}
          >
            Still have questions?{" "}
            <Link
              href="/contact"
              style={{
                color: "var(--volt)",
                fontWeight: 600,
                textDecoration: "underline",
                textDecorationColor: "var(--volt-border)",
                textUnderlineOffset: "3px",
              }}
            >
              Talk to our team directly →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
