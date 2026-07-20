"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  techs: string[];
  demoUrl: string;
  imageUrl: string;
  stats: { label: string; value: string }[];
}

const projects: ProjectItem[] = [
  {
    id: "buildora-ai",
    title: "Buildora AI",
    tag: "AI SaaS Platform",
    description: "An AI-powered website builder that transforms natural language prompts into production-ready, responsive websites in seconds. Built with a modern full-stack architecture featuring secure authentication, AI code generation, live previews, credit-based usage, and seamless deployment for a complete no-code web development experience.",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "OpenRouter AI",
      "Razorpay",
      "Vercel"
    ],
    demoUrl: "https://buildora-ai-five.vercel.app/",
    imageUrl: "/buildora_ai.png",
    stats: [
      { label: "AI Generation", value: "Instant" },
      { label: "Authentication", value: "Secure" },
      { label: "Deployment", value: "Live" },
    ],
  },
  {
    id: "hotel-pacific",
    title: "Hotel Pacific",
    tag: "Luxury City Resort",
    description: "A premium luxury city hotel storefront designed for Hotel Pacific. Integrates fluid scroll animations, dynamic booking options, elegant gallery viewing panels, and modern city branding.",
    techs: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://hotel-pacific.vercel.app/",
    imageUrl: "/hotel_pacific.png",
    stats: [
      { label: "Sector", value: "Hospitality" },
      { label: "Animations", value: "Fluid" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    id: "hotel-sachin",
    title: "Sachin International",
    tag: "Luxury Hotel Portal",
    description: "A luxury hotel storefront and booking portal designed for Sachin International in Roorkee. Features modern glassmorphic interface panels, fluid layout sections, and high-end brand presentation.",
    techs: ["React", "TypeScript", "Vite", "TailwindCSS"],
    demoUrl: "https://hotel-sachin-teal.vercel.app/",
    imageUrl: "/hotel_sachin.png",
    stats: [
      { label: "Sector", value: "Hospitality" },
      { label: "Platform", value: "Vite SPA" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    id: "elysof-v3",
    title: "ElySof Skincare v3",
    tag: "v3 Production (Latest)",
    description: "The latest premium Ayurvedic skincare storefront. Features dynamic shopping carts, custom ingredient lists, responsive layouts, and performance-tuned micro-interactions.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://elysof-ui.vercel.app/",
    imageUrl: "/elysof_v3.png",
    stats: [
      { label: "Vitals Score", value: "100%" },
      { label: "Load Time", value: "0.2s" },
      { label: "Status", value: "Production" },
    ],
  },
  {
    id: "elysof-v2",
    title: "ElySof Skincare v2",
    tag: "v2 Archive",
    description: "The second iteration of the ElySof skincare web application. Refines visual structures, introduces smooth transitions, and updates layout readability.",
    techs: ["HTML5", "CSS3", "JavaScript", "FontAwesome"],
    demoUrl: "https://elysof-web-v2.vercel.app/",
    imageUrl: "/elysof_v2.png",
    stats: [
      { label: "Platform", value: "Static Site" },
      { label: "Responsive", value: "Yes" },
      { label: "Status", value: "Archived" },
    ],
  },
  {
    id: "elysof-v1",
    title: "ElySof Skincare v1",
    tag: "v1 Archive",
    description: "The first design draft of the ElySof landing storefront. Implements Ayurvedic values, pure product highlights, and a clean minimalist aesthetic.",
    techs: ["React", "Next.js", "Vite", "TypeScript", "TailwindCSS"],
    demoUrl: "https://elysof.vercel.app/",
    imageUrl: "/elysof_v1.png",
    stats: [
      { label: "Platform", value: "React SPA" },
      { label: "Asset Type", value: "Blueprint" },
      { label: "Status", value: "Archived" },
    ],
  },
];

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 65,
      damping: 18,
      mass: 0.8,
    },
  },
};

export function PortfolioSection() {
  return (
    <section style={{ paddingBlock: "clamp(40px, 8vw, 80px)", position: "relative", zIndex: 10 }}>
      <div className="section-container">

        {/* Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <motion.div variants={headerItemVariants} className="tag tag-volt" style={{ marginBottom: "12px" }}>
            <Sparkles className="w-3.5 h-3.5" /> OUR PRODUCTION WORK
          </motion.div>
          <motion.h2
            variants={headerItemVariants}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              maxWidth: "24ch",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Our Featured <span className="text-glow-continuous">Client Projects</span>
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            style={{ color: "var(--ink-2)", fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)", maxWidth: "56ch" }}
          >
            Directly browse the live web applications and custom design solutions developed for our clients.
          </motion.p>
        </motion.div>

        {/* Card Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto",
            perspective: "1200px",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="card"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                padding: 0,
                position: "relative",
                transition: "border-color 300ms ease, box-shadow 300ms ease",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--volt-border)";
                e.currentTarget.style.boxShadow = "0 12px 40px oklch(83% 0.28 120 / 0.08)";
                const img = e.currentTarget.querySelector(".project-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--surface-border-subtle)";
                e.currentTarget.style.boxShadow = "none";
                const img = e.currentTarget.querySelector(".project-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image Preview Block */}
              <div
                style={{
                  height: "220px",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--surface-high)",
                  borderBottom: "1px solid var(--surface-border-subtle)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>

              {/* Text details padded block */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span className="tag tag-volt" style={{ alignSelf: "flex-start", fontSize: "0.6875rem", padding: "2px 8px" }}>
                      {project.tag}
                    </span>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--ink)", fontWeight: 800, margin: 0 }}>
                      {project.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--ink-2)", margin: 0, lineHeight: 1.45 }}>
                    {project.description}
                  </p>
                </div>

                {/* Lower block (Tech Chips + Link button) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-geist-mono)",
                          background: "oklch(14% 0.018 265)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          color: "var(--ink-3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action link */}
                  <div style={{ borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "16px" }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        background: "var(--volt)",
                        color: "oklch(8% 0.014 265)",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        width: "100%",
                        textAlign: "center",
                        transition: "opacity 150ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Visit Demo Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
