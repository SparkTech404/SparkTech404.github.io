"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, NovaPay Fintech",
    review:
      "Spark Tech completely transformed our online presence. The website they built is blazing fast, SEO-optimized, and converts visitors into paying customers. Our organic traffic jumped 340% within 3 months!",
    rating: 5,
    gradient: "from-blue-600/30 to-purple-600/20",
    avatar: "AM",
    avatarBg: "from-blue-500 to-purple-600",
  },
  {
    name: "Priya Sharma",
    role: "CEO, CloudStack Solutions",
    review:
      "Their full-stack team delivered our SaaS dashboard in just 5 weeks — production-ready with real-time analytics, role-based access, and flawless mobile responsiveness. Truly world-class engineering.",
    rating: 5,
    gradient: "from-purple-600/30 to-pink-600/20",
    avatar: "PS",
    avatarBg: "from-purple-500 to-pink-600",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director, GreenLeaf Organics",
    review:
      "The landing page they built for our product launch was absolutely stunning. We saw a 280% increase in lead generation within the first week. The glassmorphism design was the cherry on top!",
    rating: 5,
    gradient: "from-cyan-600/30 to-blue-600/20",
    avatar: "RV",
    avatarBg: "from-cyan-500 to-blue-600",
  },
  {
    name: "Sneha Kapoor",
    role: "CTO, HealthVault AI",
    review:
      "We needed a complex healthcare web application with HIPAA-compliant architecture. Spark Tech not only delivered on time but exceeded every technical benchmark. Their 24/7 support is unmatched.",
    rating: 5,
    gradient: "from-emerald-600/30 to-cyan-600/20",
    avatar: "SK",
    avatarBg: "from-emerald-500 to-cyan-600",
  },
  {
    name: "Vikram Singh",
    role: "Co-Founder, EduBridge Learning",
    review:
      "From initial consultation to deployment, the entire experience was seamless. They redesigned our outdated platform into a modern, lightning-fast web app. Student engagement doubled overnight.",
    rating: 5,
    gradient: "from-amber-600/30 to-orange-600/20",
    avatar: "VS",
    avatarBg: "from-amber-500 to-orange-600",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

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
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            Our clients consistently achieve extraordinary digital results. Here&apos;s what they have to say.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card p-8 sm:p-12 bg-gradient-to-br ${t.gradient} border border-white/10 shadow-2xl relative overflow-hidden`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-white" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    5.0 Rating
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 relative z-10 max-w-3xl">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-black text-sm shadow-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">
                      {t.name}
                    </h4>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-8 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                      : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
