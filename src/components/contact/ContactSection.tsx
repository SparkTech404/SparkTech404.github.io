"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { Twitter, Linkedin, Github, Instagram } from "@/components/icons/SocialIcons";

const serviceOptions = [
  "Website Development",
  "Landing Page Development",
  "Web Application Development",
  "UI/UX Design",
  "Website Maintenance",
  "SEO Optimization",
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Geist Mono', monospace",
  fontSize: "0.72rem",
  color: "var(--ink-3)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "8px",
  fontWeight: 500,
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const payload = {
        ...formData,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "46e5c165-5f74-4741-b028-bd8f06064908",
        subject: `New Project Inquiry from ${formData.name}`,
        from_name: "Spark Tech Web Solution Portal",
      };
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Failed to submit.");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "Website Development", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An error occurred.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "clamp(48px, 7vw, 80px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      <div className="section-container">
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
            Get in touch
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
            Let&apos;s build your{" "}
            <span style={{ color: "var(--volt)" }}>next big project.</span>
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
            Reach out to discuss your project — we&apos;ll respond within 2 business hours.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            alignItems: "start",
          }}
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Phone */}
            <a
              href="https://wa.me/917060675133?text=Hello%20Spark%20Tech%20Web%20Solution%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "20px",
                textDecoration: "none",
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--volt-border)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border-subtle)"; }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--volt-dim)",
                  border: "1px solid var(--volt-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone className="w-4 h-4" style={{ color: "var(--volt)" }} strokeWidth={2} />
              </div>
              <div>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "0.68rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                  WhatsApp & Phone
                </span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ink)" }}>
                  +91 7060675133
                </span>
                <span style={{ display: "block", fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-3)", marginTop: "2px" }}>
                  Mon–Sat: 9 AM – 8 PM IST
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sparktech1404@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "20px",
                textDecoration: "none",
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--volt-border)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border-subtle)"; }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--volt-dim)",
                  border: "1px solid var(--volt-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail className="w-4 h-4" style={{ color: "var(--volt)" }} strokeWidth={2} />
              </div>
              <div>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "0.68rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                  Email
                </span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--ink)", wordBreak: "break-all" }}>
                  sparktech1404@gmail.com
                </span>
                <span style={{ display: "block", fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-3)", marginTop: "2px" }}>
                  24/7 Response guaranteed
                </span>
              </div>
            </a>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "var(--surface-raised)",
                border: "1px solid var(--surface-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--volt-dim)",
                  border: "1px solid var(--volt-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin className="w-4 h-4" style={{ color: "var(--volt)" }} strokeWidth={2} />
              </div>
              <div>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "0.68rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                  Location
                </span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--ink)" }}>
                  Remote-first
                </span>
                <span style={{ display: "block", fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-3)", marginTop: "2px" }}>
                  Serving US, UK, EU & India
                </span>
              </div>
            </div>

            {/* Socials */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    flex: 1,
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-raised)",
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
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--surface-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(24px, 4vw, 40px)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: "6px",
              }}
            >
              Send us a message
            </h2>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                color: "var(--ink-3)",
                marginBottom: "28px",
                lineHeight: 1.5,
              }}
            >
              Fill out the form below — our lead engineer responds within 2 business hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div className="contact-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="contact-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7060675133"
                    className="input-field"
                  />
                </div>

                {/* Service dropdown */}
                <div style={{ position: "relative" }}>
                  <label style={labelStyle}>Service</label>
                  {serviceDropdownOpen && (
                    <div
                      style={{ position: "fixed", inset: 0, zIndex: 30 }}
                      onClick={() => setServiceDropdownOpen(false)}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="input-field"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 40,
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9375rem", color: "var(--ink)" }}>
                      {formData.service}
                    </span>
                    <ChevronDown
                      className="w-4 h-4"
                      style={{
                        color: "var(--volt)",
                        transition: "transform 200ms ease",
                        transform: serviceDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {serviceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 6px)",
                          left: 0,
                          right: 0,
                          zIndex: 50,
                          background: "var(--surface-high)",
                          border: "1px solid var(--volt-border)",
                          borderRadius: "var(--radius-md)",
                          overflow: "hidden",
                        }}
                      >
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setFormData((prev) => ({ ...prev, service: opt })); setServiceDropdownOpen(false); }}
                            style={{
                              width: "100%",
                              padding: "10px 14px",
                              textAlign: "left",
                              background: formData.service === opt ? "var(--volt-dim)" : "transparent",
                              color: formData.service === opt ? "var(--volt)" : "var(--ink-2)",
                              fontFamily: "'Geist', sans-serif",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                              border: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "8px",
                              transition: "background 150ms ease",
                            }}
                          >
                            <span>{opt}</span>
                            {formData.service === opt && (
                              <CheckCircle2 className="w-4 h-4" style={{ color: "var(--volt)", flexShrink: 0 }} />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, goals, and timeline..."
                  className="input-field"
                  style={{ resize: "none" }}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--volt-dim)",
                    border: "1px solid var(--volt-border)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--volt)", flexShrink: 0, marginTop: "1px" }} />
                  <div>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "var(--volt)", display: "block" }}>Message sent!</span>
                    <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-2)" }}>Our team will respond within 2 business hours.</span>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    background: "oklch(30% 0.1 20 / 0.15)",
                    border: "1px solid oklch(60% 0.15 20 / 0.3)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <AlertCircle className="w-4 h-4" style={{ color: "oklch(65% 0.15 20)", flexShrink: 0, marginTop: "1px" }} />
                  <div>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "oklch(70% 0.12 20)", display: "block" }}>Failed to send</span>
                    <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8125rem", color: "var(--ink-2)" }}>{errorMessage || "Please try again or call +91 7060675133."}</span>
                  </div>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-volt"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: status === "loading" ? 0.6 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-4 h-4" strokeWidth={2} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
