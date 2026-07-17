"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Crown,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for personal sites & MVPs",
    price: "₹4,999",
    period: "starting at",
    icon: Zap,
    features: [
      "Single-page responsive website",
      "Mobile-first modern UI design",
      "Basic SEO optimization setup",
      "Contact form integration",
      "SSL & Domain DNS configuration",
      "3 rounds of design revisions",
      "1-month post-launch support",
    ],
    gradient: "from-slate-900/90 to-blue-950/40",
    border: "border-white/10 hover:border-blue-500/50",
    buttonStyle:
      "bg-white/10 hover:bg-white/20 text-white border border-white/10",
    popular: false,
  },
  {
    name: "Professional",
    tagline: "For businesses ready to scale",
    price: "₹14,999",
    period: "starting at",
    icon: Star,
    features: [
      "Multi-page Next.js website (up to 8 pages)",
      "Premium glassmorphism UI/UX design",
      "Advanced SEO & Core Web Vitals tuning",
      "Dynamic contact form with email alerts",
      "Google Analytics & Search Console setup",
      "Custom animations with Framer Motion",
      "Cloud deployment (Vercel / AWS)",
      "3-months technical support & updates",
    ],
    gradient: "from-blue-950/50 via-purple-950/40 to-cyan-950/30",
    border: "border-cyan-500/40 hover:border-cyan-400",
    buttonStyle:
      "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "Full-stack SaaS & custom applications",
    price: "Custom",
    period: "tailored quote",
    icon: Crown,
    features: [
      "Custom full-stack web application",
      "SaaS dashboard with role-based access",
      "REST/GraphQL API development",
      "MongoDB / Firebase real-time database",
      "Payment gateway integration (Razorpay/Stripe)",
      "CI/CD pipeline & automated testing",
      "Multi-cloud deployment & scaling",
      "24/7 lifetime priority support",
    ],
    gradient: "from-slate-900/90 to-purple-950/40",
    border: "border-white/10 hover:border-purple-500/50",
    buttonStyle:
      "bg-white/10 hover:bg-white/20 text-white border border-white/10",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Affordable Plans for{" "}
            <span className="text-gradient">Every Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            No hidden fees. No surprises. Choose the plan that fits your goals
            and let us handle the rest.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${plan.gradient} border ${plan.border} transition-all duration-300 shadow-xl ${
                plan.popular ? "ring-2 ring-cyan-500/40" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-lg">
                    ⚡ Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 shadow-lg">
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400">{plan.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 ${plan.buttonStyle}`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          All plans include free consultation. Prices may vary based on specific
          project requirements.{" "}
          <Link
            href="/contact"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Contact us for a custom quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
