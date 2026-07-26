"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  Business: "oklch(83% 0.28 120)",
  "Web Design": "oklch(70% 0.2 200)",
  Development: "oklch(72% 0.18 270)",
  SEO: "oklch(80% 0.22 50)",
};

export default function BlogClientPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = blogPosts.find(p => p.featured);
  const regularPosts = activeCategory === "All"
    ? blogPosts.filter(p => !p.featured)
    : filtered;

  return (
    <div style={{ paddingBottom: "clamp(80px, 10vw, 120px)", background: "var(--surface)" }}>
      {/* Hero */}
      <section className="section-container" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "99px", background: "var(--volt-dim)", border: "1px solid var(--volt-border)", marginBottom: "20px" }}>
            <BookOpen style={{ width: "13px", height: "13px", color: "var(--volt)" }} />
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--volt)", letterSpacing: "0.06em" }}>RESOURCES & INSIGHTS</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px" }}>The Spark Tech Blog</h1>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: "clamp(1rem, 2.5vw, 1.125rem)", color: "var(--ink-3)", maxWidth: "560px", lineHeight: 1.6 }}>Practical guides, web trends, and strategies to help your business grow online.</p>
        </motion.div>
      </section>

      {/* Filter Categories */}
      <section className="section-container" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", borderBottom: "1px solid var(--surface-border-subtle)", paddingBottom: "16px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "99px",
                border: activeCategory === cat ? "1px solid var(--volt-border)" : "1px solid var(--surface-border-subtle)",
                background: activeCategory === cat ? "var(--volt-dim)" : "transparent",
                color: activeCategory === cat ? "var(--volt)" : "var(--ink-2)",
                fontFamily: "var(--font-geist)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 150ms ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Card */}
      {featured && activeCategory === "All" && (
        <section className="section-container" style={{ marginBottom: "50px" }}>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
            <article className="card-volt" style={{ background: "var(--surface-raised)", border: "1px solid var(--surface-border-subtle)", borderRadius: "24px", padding: "clamp(24px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "20px", cursor: "pointer" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ padding: "4px 10px", borderRadius: "99px", background: "var(--volt-dim)", border: "1px solid var(--volt-border)", fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem", color: "var(--volt)", fontWeight: 700 }}>FEATURED</span>
                <span style={{ padding: "4px 10px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--surface-border-subtle)", fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem", color: "var(--ink-2)", fontWeight: 700 }}>{featured.category.toUpperCase()}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "var(--ink)", margin: 0, letterSpacing: "-0.025em" }}>{featured.title}</h2>
              <p style={{ fontFamily: "var(--font-geist)", fontSize: "0.9375rem", color: "var(--ink-3)", margin: 0, lineHeight: 1.6 }}>{featured.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "20px", marginTop: "10px" }}>
                <div style={{ display: "flex", gap: "16px", color: "var(--ink-3)", fontFamily: "var(--font-geist)", fontSize: "0.8125rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar style={{ width: "13px", height: "13px" }} />{formatDate(featured.date)}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock style={{ width: "13px", height: "13px" }} />{featured.readTime}</span>
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--volt)", fontFamily: "var(--font-geist)", fontSize: "0.875rem", fontWeight: 700 }}>Read Article <ArrowRight style={{ width: "14px", height: "14px" }} /></span>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Grid List */}
      <section className="section-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "28px" }}>
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article className="card-volt" style={{ background: "var(--surface-raised)", border: "1px solid var(--surface-border-subtle)", borderRadius: "20px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", cursor: "pointer", transition: "all 200ms ease" }}>
                <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "99px", background: `${categoryColors[post.category]}18`, border: `1px solid ${categoryColors[post.category]}40`, fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem", color: categoryColors[post.category], fontWeight: 700, marginBottom: "16px" }}>{post.category.toUpperCase()}</span>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "var(--ink)", margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.35 }}>{post.title}</h3>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: "0.875rem", color: "var(--ink-3)", margin: "0 0 24px", lineHeight: 1.55, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", color: "var(--ink-3)", fontFamily: "var(--font-geist)", fontSize: "0.75rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "3px" }}><Calendar style={{ width: "12px", height: "12px" }} />{formatDate(post.date)}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "3px" }}><Clock style={{ width: "12px", height: "12px" }} />{post.readTime}</span>
                  </div>
                  <ArrowRight style={{ width: "15px", height: "15px", color: "var(--volt)" }} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
