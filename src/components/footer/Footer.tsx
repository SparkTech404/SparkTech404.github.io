"use client";

import React from "react";
import { Zap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Twitter, Linkedin, Github, Instagram } from "@/components/icons/SocialIcons";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Development Process", href: "/process" },
  { name: "FAQ", href: "/faq" },
];

const serviceLinks = [
  "Website Development",
  "Landing Page Development",
  "Web Application Development",
  "UI/UX Design",
  "SEO Optimization",
  "Website Maintenance",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/spark-tech-24840b423/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sparktech404/" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface-raised)",
        borderTop: "1px solid var(--surface-border-subtle)",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "clamp(28px, 4vw, 48px)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
            marginBottom: "clamp(40px, 5vw, 56px)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
            <img
              src="/logo-icon.jpg"
              alt="SparkTech Logo"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                Spark Tech{" "}
                <span style={{ color: "var(--volt)" }}>WS</span>
              </span>
            </Link>

            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                color: "var(--ink-3)",
                lineHeight: 1.65,
                maxWidth: "30ch",
              }}
            >
              Secure, scalable, and modern digital solutions designed to accelerate business growth.
            </p>

            {
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--surface-high)",
                    border: "1px solid var(--surface-border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink-3)",
                    transition: "color 150ms ease, border-color 150ms ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "var(--volt)";
                    el.style.borderColor = "var(--volt-border)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "var(--ink-3)";
                    el.style.borderColor = "var(--surface-border-subtle)";
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>}
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--ink-3)",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Services
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--ink-3)",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Contact
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a
                  href="https://wa.me/917060675133?text=Hello%20Spark%20Tech%20Web%20Solution%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--volt)" }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem", color: "var(--ink-3)", lineHeight: 1.45 }}>
                    +91 7060675133 <br />
                    <span style={{ fontSize: "0.75rem", color: "var(--ink-3)" }}>WhatsApp available</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sparkteck404@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none" }}
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--volt)" }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem", color: "var(--ink-3)", wordBreak: "break-all" }}>
                    sparkteck404@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--volt)" }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem", color: "var(--ink-3)", lineHeight: 1.45 }}>
                    Digital-first agency<br />Global service
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "clamp(20px, 3vw, 28px)",
            borderTop: "1px solid var(--surface-border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--ink-3)",
            }}
          >
            &copy; 2026{" "}
            <span style={{ color: "var(--ink)" }}>Spark Tech Web Solution</span>.
            All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--ink-3)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
