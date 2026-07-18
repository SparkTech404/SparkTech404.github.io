"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ padding: "12px clamp(1rem, 4vw, 2.5rem)" }}
      >
        <div
          className="max-w-screen-xl mx-auto flex items-center justify-between transition-all duration-300"
          style={
            isScrolled
              ? {
                  background: "oklch(8.5% 0.014 265 / 0.92)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "10px 20px",
                }
              : { padding: "6px 0" }
          }
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "var(--volt)",
                color: "oklch(8% 0.014 265)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Zap className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), 'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.9375rem",
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                SPARK TECH
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
                  fontSize: "0.6rem",
                  color: "var(--ink-3)",
                  letterSpacing: "0.07em",
                  marginTop: "2px",
                }}
              >
                WEB SOLUTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "var(--font-geist), 'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: isActive(link.href) ? "var(--volt)" : "var(--ink-2)",
                  padding: "6px 13px",
                  borderRadius: "var(--radius-sm)",
                  transition: "color 150ms ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-volt"
              style={{ padding: "9px 18px", fontSize: "0.875rem" }}
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden flex items-center justify-center cursor-pointer"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-md)",
              background: "var(--surface-raised)",
              border: "1px solid var(--surface-border-subtle)",
              color: "var(--ink-2)",
              flexShrink: 0,
            }}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile Side Panel Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 60,
                background: "oklch(0% 0 0 / 0.7)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />

            {/* Side Panel */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 70,
                width: "min(320px, 85vw)",
                background: "var(--surface-raised)",
                borderLeft: "1px solid var(--surface-border-subtle)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  borderBottom: "1px solid var(--surface-border-subtle)",
                  flexShrink: 0,
                }}
              >
                {/* Logo in drawer */}
                <Link
                  href="/"
                  onClick={closeDrawer}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "7px",
                      background: "var(--volt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Zap className="w-4 h-4" style={{ color: "oklch(8% 0.014 265)" }} strokeWidth={2.5} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-syne), 'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.9375rem",
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    SPARK TECH
                  </span>
                </Link>

                {/* Close button */}
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close menu"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-high)",
                    border: "1px solid var(--surface-border-subtle)",
                    color: "var(--ink-3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav
                style={{
                  padding: "12px 12px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeDrawer}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "13px 16px",
                        borderRadius: "var(--radius-md)",
                        background: isActive(link.href) ? "var(--volt-dim)" : "transparent",
                        border: isActive(link.href) ? "1px solid var(--volt-border)" : "1px solid transparent",
                        textDecoration: "none",
                        transition: "background 150ms ease, border-color 150ms ease",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-syne), 'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: isActive(link.href) ? "var(--volt)" : "var(--ink)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {link.name}
                      </span>
                      <ChevronRight
                        className="w-4 h-4"
                        style={{
                          color: isActive(link.href) ? "var(--volt)" : "var(--ink-3)",
                        }}
                        strokeWidth={2}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div
                style={{
                  padding: "20px 24px 32px",
                  borderTop: "1px solid var(--surface-border-subtle)",
                  flexShrink: 0,
                }}
              >
                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className="btn-volt"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Contact snippets */}
                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <a
                    href="https://wa.me/917060675133"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-geist), 'Geist', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-3)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span className="dot-volt" style={{ width: "6px", height: "6px", flexShrink: 0 }} />
                    +91 7060675133 (WhatsApp)
                  </a>
                  <a
                    href="mailto:sparktech1404@gmail.com"
                    style={{
                      fontFamily: "var(--font-geist), 'Geist', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-3)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span className="dot-volt" style={{ width: "6px", height: "6px", flexShrink: 0 }} />
                    sparktech1404@gmail.com
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
