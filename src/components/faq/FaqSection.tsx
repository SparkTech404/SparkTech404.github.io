"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a website take to build and launch?",
    answer:
      "A standard modern website or landing page typically takes 1 to 3 weeks from initial design consultation to final deployment. More complex custom web applications, SaaS platforms, or e-commerce stores with extensive integrations usually take between 4 to 8 weeks depending on exact scope and feature requirements.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes! We specialize in revamping outdated, slow, or poorly converting websites. We modernize your UI/UX with contemporary glassmorphism and clean typography, migrate your platform to Next.js/React, and optimize Core Web Vitals to dramatically boost loading speeds and search engine rankings.",
  },
  {
    question: "Do you provide hosting and cloud deployment support?",
    answer:
      "Absolutely. Whether your application is hosted on AWS, Google Cloud Platform (GCP), Microsoft Azure, Vercel, or custom dedicated VPS servers, we handle total configuration, SSL certificates, domain DNS management, automated CI/CD pipelines, and high-availability cloud architecture setup.",
  },
  {
    question: "Can you maintain and optimize existing websites?",
    answer:
      "Yes, we provide ongoing 24/7 technical support, security improvements, database optimization, cloud backup scheduling, and speed enhancement packages for existing websites regardless of where they are currently hosted.",
  },
  {
    question: "Do you build custom web applications and enterprise tools?",
    answer:
      "Yes! We build high-scale custom SaaS web applications, internal enterprise dashboards, real-time data monitoring systems, and secure API bridges using full-stack technologies like Next.js 15, React 19, TypeScript, Node.js, Express, MongoDB, and Firebase.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Everything You Need to <span className="text-gradient">Know</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            Have questions about our process, timelines, or technical capabilities? We have answers.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/50 bg-slate-900/90 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 hover:border-white/20 bg-slate-950/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl transition-colors ${isOpen ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-slate-400"}`}>
                      <HelpCircle className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-cyan-300" : "text-white"}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${isOpen ? "bg-cyan-500/20 text-cyan-400 rotate-180" : "bg-white/5 text-slate-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Still have specific requirements or questions?{" "}
            <Link href="/contact" className="text-cyan-400 font-bold underline hover:text-cyan-300 transition-colors">
              Get in touch with our team directly &rarr;
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
