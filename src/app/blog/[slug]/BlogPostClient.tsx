"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

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

interface BlogPostClientProps {
  post: BlogPost;
  suggestedPosts: BlogPost[];
}

export default function BlogPostClient({ post, suggestedPosts }: BlogPostClientProps) {
  return (
    <div style={{ background: "var(--surface)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
      {/* Article Header */}
      <section className="section-container" style={{ paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Back link */}
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-geist)", fontSize: "0.8125rem", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px", transition: "color 150ms ease" }}>
            <ArrowLeft style={{ width: "14px", height: "14px" }} /> Back to blog
          </Link>

          {/* Category Tag */}
          <div style={{ marginBottom: "16px" }}>
            <span style={{ padding: "4px 12px", borderRadius: "99px", background: `${categoryColors[post.category]}18`, border: `1px solid ${categoryColors[post.category]}40`, fontFamily: "var(--font-geist-mono)", fontSize: "0.625rem", color: categoryColors[post.category], fontWeight: 700, letterSpacing: "0.06em" }}>
              {post.category.toUpperCase()}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4.5vw, 3rem)", color: "var(--ink)", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "20px" }}>
            {post.title}
          </h1>

          {/* Metadata */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", borderBottom: "1px solid var(--surface-border-subtle)", paddingBottom: "24px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-geist)", fontSize: "0.8125rem", color: "var(--ink-3)" }}>
              <Calendar style={{ width: "13px", height: "13px" }} />
              {formatDate(post.date)}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-geist)", fontSize: "0.8125rem", color: "var(--ink-3)" }}>
              <Clock style={{ width: "13px", height: "13px" }} />
              {post.readTime}
            </span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: "3px", padding: "3px 8px", borderRadius: "4px", background: "var(--surface-high)", fontFamily: "var(--font-geist)", fontSize: "0.6875rem", color: "var(--ink-3)" }}>
                  <Tag style={{ width: "9px", height: "9px" }} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-container" style={{ marginBottom: "clamp(60px, 8vw, 96px)" }}>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} style={{ maxWidth: "72ch" }} />
      </section>

      {/* Suggested Reading */}
      {suggestedPosts.length > 0 && (
        <section className="section-container" style={{ borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: "28px" }}>
            Suggested Reading
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {suggestedPosts.map((sp) => (
              <Link key={sp.slug} href={`/blog/${sp.slug}`} style={{ textDecoration: "none" }}>
                <article className="card-volt" style={{ background: "var(--surface-raised)", border: "1px solid var(--surface-border-subtle)", borderRadius: "20px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}>
                  <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "99px", background: `${categoryColors[sp.category]}18`, border: `1px solid ${categoryColors[sp.category]}40`, fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem", color: categoryColors[sp.category], fontWeight: 700, marginBottom: "16px" }}>
                    {sp.category.toUpperCase()}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.125rem", color: "var(--ink)", margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.35 }}>
                    {sp.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: "0.875rem", color: "var(--ink-3)", margin: "0 0 20px", lineHeight: 1.5, flex: 1 }}>
                    {sp.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "14px", marginTop: "auto" }}>
                    <span style={{ fontFamily: "var(--font-geist)", fontSize: "0.75rem", color: "var(--ink-3)" }}>{sp.readTime}</span>
                    <ArrowRight style={{ width: "14px", height: "14px", color: "var(--volt)" }} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
