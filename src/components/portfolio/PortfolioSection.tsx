"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  techs: string[];
  demoUrl: string;
  imageUrl: string;
  stats: { label: string; value: string }[];
  category: "app" | "design";
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
    category: "app",
  },
  {
    id: "zerolag",
    title: "ZeroLag",
    tag: "UTM Builder",
    description: "A high-performance UTM marketing campaign link builder. Designed to generate zero-latency campaign parameters, custom UTM presets, and instant link copying with advanced search optimization.",
    techs: ["Next.js", "TypeScript", "TailwindCSS", "SEO Engine"],
    demoUrl: "https://zero-lag-utms.vercel.app/",
    imageUrl: "/zerolag.png",
    stats: [
      { label: "Sector", value: "Marketing Tech" },
      { label: "Performance", value: "100%" },
      { label: "Status", value: "Live" },
    ],
    category: "app",
  },
  {
    id: "occasions",
    title: "Occasions",
    tag: "Event Platform",
    description: "A premium event planning and coordination portal. Features dynamic scheduling tools, custom occasion customization interfaces, and fluid, high-fidelity responsive layouts.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite"],
    demoUrl: "https://occassions.vercel.app/",
    imageUrl: "/occasions.png",
    stats: [
      { label: "Sector", value: "Event Planning" },
      { label: "Platform", value: "Vite SPA" },
      { label: "Status", value: "Live" },
    ],
    category: "app",
  },
  {
    id: "baatcheet",
    title: "Aurameet (BaatCheet)",
    tag: "Chat Application",
    description: "A real-time instant messaging platform. Features socket-based live rooms, secure chat rooms, interactive user profiles, and dynamic UI panels for seamless desktop and mobile conversation.",
    techs: ["React", "Node.js", "Express", "Socket.io"],
    demoUrl: "https://baatcheet-88e9.onrender.com/",
    imageUrl: "/baatcheet.png",
    stats: [
      { label: "Protocol", value: "WebSockets" },
      { label: "Hosting", value: "Render" },
      { label: "Status", value: "Live" },
    ],
    category: "app",
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
    category: "design",
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
    category: "design",
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
    category: "design",
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
    category: "design",
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
    category: "design",
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

export function PortfolioSection({ isPreview = false }: { isPreview?: boolean }) {
  const webApps = projects.filter((p) => p.category === "app");
  const webDesigns = projects.filter((p) => p.category === "design");

  const renderProjectCard = (project: ProjectItem) => (
    <motion.div
      key={project.id}
      variants={cardVariants}
      className="card"
      style={{
        background: "var(--surface-raised)",
        border: "1px solid var(--surface-border-subtle)",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: 0,
        position: "relative",
        transition: "border-color 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--volt-border)";
        e.currentTarget.style.boxShadow = "0 12px 40px oklch(83% 0.28 120 / 0.06)";
        const img = e.currentTarget.querySelector(".project-img") as HTMLElement;
        if (img) img.style.transform = "scale(1.08) translate(-4px, -2px)";
        const arrow = e.currentTarget.querySelector(".card-arrow-indicator") as HTMLElement;
        if (arrow) {
          arrow.style.opacity = "1";
          arrow.style.transform = "translate(0, 0)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--surface-border-subtle)";
        e.currentTarget.style.boxShadow = "none";
        const img = e.currentTarget.querySelector(".project-img") as HTMLElement;
        if (img) img.style.transform = "scale(1) translate(0px, 0px)";
        const arrow = e.currentTarget.querySelector(".card-arrow-indicator") as HTMLElement;
        if (arrow) {
          arrow.style.opacity = "0";
          arrow.style.transform = "translate(-6px, 6px)";
        }
      }}
    >
      {/* Image Preview Block - Framed like the sneaker card */}
      <div
        style={{
          padding: "12px",
          paddingBottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            height: "210px",
            overflow: "hidden",
            position: "relative",
            background: "var(--surface-high)",
            borderRadius: "16px",
            border: "1px solid var(--surface-border-subtle)",
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
              transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          {/* Floating tag in top-right of image container, like MOE45FW */}
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              fontSize: "0.65rem",
              fontFamily: "var(--font-geist-mono)",
              color: "rgba(255, 255, 255, 0.8)",
              background: "rgba(10, 11, 18, 0.65)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              letterSpacing: "0.05em",
            }}
          >
            {project.id.toUpperCase().replace("-", "")}
          </span>
        </div>
      </div>

      {/* Text details padded block */}
      <div
        style={{
          padding: "20px 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          gap: "18px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span className="tag tag-volt" style={{ alignSelf: "flex-start", fontSize: "0.6875rem", padding: "2px 8px" }}>
              {project.tag}
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <h3 style={{ fontSize: "1.25rem", color: "var(--ink)", fontWeight: 800, margin: 0 }}>
                {project.title}
              </h3>
              {/* Dynamic Action Arrow */}
              <div
                className="card-arrow-indicator"
                style={{
                  color: "var(--volt)",
                  opacity: 0,
                  transform: "translate(-6px, 6px)",
                  transition: "opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </div>
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
  );

  const previewProjects = projects.filter((p) =>
    ["hotel-sachin", "elysof-v3", "hotel-pacific"].includes(p.id)
  );

  return (
    <section style={{ paddingBlock: "clamp(40px, 8vw, 80px)", position: "relative", zIndex: 10 }}>
      <div className="section-container">

        {/* Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 64px)", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <motion.div variants={headerItemVariants} className="tag tag-volt" style={{ marginBottom: "12px" }}>
            <Sparkles className="w-3.5 h-3.5" /> {isPreview ? "CLIENT PROJECTS PREVIEW" : "OUR PRODUCTION WORK"}
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
            {isPreview 
              ? "Take a look at some of the web applications and premium design custom systems built for our clients."
              : "Directly browse the live web applications and custom design solutions developed for our clients."}
          </motion.p>
        </motion.div>

        {isPreview ? (
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
                maxWidth: "1200px",
                perspective: "1200px",
              }}
            >
              {previewProjects.map(renderProjectCard)}
            </motion.div>
            
            <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
              <Link
                href="/portfolio"
                className="btn-volt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Show More Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Web Applications Section */}
            <div style={{ marginBottom: "64px" }}>
              <div style={{ marginBottom: "28px", borderBottom: "1px solid var(--surface-border-subtle)", paddingBottom: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", fontWeight: 700, color: "var(--volt)", textTransform: "uppercase" }}>
                  SaaS & Interactive Platforms
                </span>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--ink)", margin: 0 }}>
                  Web Applications
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "32px",
                  maxWidth: "1200px",
                  perspective: "1200px",
                }}
              >
                {webApps.map(renderProjectCard)}
              </motion.div>
            </div>

            {/* Website Designs Section */}
            <div>
              <div style={{ marginBottom: "28px", borderBottom: "1px solid var(--surface-border-subtle)", paddingBottom: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", fontWeight: 700, color: "var(--volt)", textTransform: "uppercase" }}>
                  Premium Storefronts & Visual UIs
                </span>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--ink)", margin: 0 }}>
                  Website Designs
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "32px",
                  maxWidth: "1200px",
                  perspective: "1200px",
                }}
              >
                {webDesigns.map(renderProjectCard)}
              </motion.div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
