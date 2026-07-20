"use client";

import React, { useState } from "react";
import { Sliders, Layout, Paintbrush, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";

type AccentColor = "volt" | "pink" | "blue";
type LayoutAlign = "left" | "center";
type Mode = "dark" | "light";

interface AccentStyle {
  hex: string;
  glow: string;
  name: string;
}

const accentStyles: Record<AccentColor, AccentStyle> = {
  volt: { hex: "oklch(83% 0.28 120)", glow: "oklch(83% 0.28 120 / 0.25)", name: "Volt Green" },
  pink: { hex: "oklch(65% 0.25 340)", glow: "oklch(65% 0.25 340 / 0.25)", name: "Cyber Pink" },
  blue: { hex: "oklch(65% 0.20 220)", glow: "oklch(65% 0.20 220 / 0.25)", name: "Arctic Blue" },
};

export function LandingPageCustomizerDemo() {
  const [accent, setAccent] = useState<AccentColor>("volt");
  const [layout, setLayout] = useState<LayoutAlign>("left");
  const [mode, setMode] = useState<Mode>("dark");

  const activeAccent = accentStyles[accent];

  // Colors for preview screen
  const bgColor = mode === "dark" ? "oklch(8.5% 0.014 265)" : "oklch(97% 0.005 265)";
  const textColor = mode === "dark" ? "oklch(96% 0.006 265)" : "oklch(15% 0.01 265)";
  const cardColor = mode === "dark" ? "oklch(11.5% 0.016 265)" : "oklch(92% 0.005 265)";
  const borderColor = mode === "dark" ? "oklch(18% 0.015 265)" : "oklch(88% 0.005 265)";
  const subtextColor = mode === "dark" ? "oklch(70% 0.01 265)" : "oklch(40% 0.01 265)";

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "20px",
        fontFamily: "var(--font-geist), sans-serif",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono)", color: "var(--volt)" }}>MOCK DESIGN LAB</span>
        <h4 style={{ fontSize: "1.125rem", margin: "2px 0 0", color: "var(--ink)", fontWeight: 700 }}>Landing Page Customizer</h4>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "20px", alignItems: "start" }}>
        {/* Editor controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Accent Customizer */}
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
              <Paintbrush className="w-3.5 h-3.5" /> ACCENT COLOR
            </span>
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {(Object.keys(accentStyles) as AccentColor[]).map((col) => (
                <button
                  key={col}
                  onClick={() => setAccent(col)}
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    border: accent === col ? "2px solid var(--ink)" : "2px solid transparent",
                    background: accentStyles[col].hex,
                    cursor: "pointer",
                    padding: 0,
                    minHeight: "unset",
                    minWidth: "unset",
                  }}
                  title={accentStyles[col].name}
                />
              ))}
            </div>
          </div>

          {/* Alignment Selector */}
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
              <Layout className="w-3.5 h-3.5" /> TEXT ALIGNMENT
            </span>
            <div style={{ display: "flex", gap: "6px", marginTop: "4px", background: "var(--surface-raised)", padding: "3px", borderRadius: "6px", border: "1px solid var(--surface-border-subtle)" }}>
              {(["left", "center"] as LayoutAlign[]).map((align) => (
                <button
                  key={align}
                  onClick={() => setLayout(align)}
                  style={{
                    flex: 1,
                    fontSize: "0.6875rem",
                    padding: "4px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    background: layout === align ? "var(--surface-high)" : "transparent",
                    color: layout === align ? "var(--volt)" : "var(--ink-3)",
                    fontWeight: 600,
                    minHeight: "unset",
                    minWidth: "unset",
                  }}
                >
                  {align.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Dark / Light Toggle */}
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
              {mode === "dark" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />} COLOUR MODE
            </span>
            <div style={{ display: "flex", gap: "6px", marginTop: "4px", background: "var(--surface-raised)", padding: "3px", borderRadius: "6px", border: "1px solid var(--surface-border-subtle)" }}>
              <button
                onClick={() => setMode("dark")}
                style={{
                  flex: 1,
                  fontSize: "0.6875rem",
                  padding: "4px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: mode === "dark" ? "var(--surface-high)" : "transparent",
                  color: mode === "dark" ? "var(--volt)" : "var(--ink-3)",
                  fontWeight: 600,
                  minHeight: "unset",
                  minWidth: "unset",
                }}
              >
                DARK
              </button>
              <button
                onClick={() => setMode("light")}
                style={{
                  flex: 1,
                  fontSize: "0.6875rem",
                  padding: "4px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: mode === "light" ? "var(--surface-high)" : "transparent",
                  color: mode === "light" ? "var(--volt)" : "var(--ink-3)",
                  fontWeight: 600,
                  minHeight: "unset",
                  minWidth: "unset",
                }}
              >
                LIGHT
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Preview Screen */}
        <div
          style={{
            background: bgColor,
            border: `1px solid ${borderColor}`,
            borderRadius: "14px",
            height: "190px",
            overflow: "hidden",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: layout,
            alignItems: layout === "center" ? "center" : "flex-start",
            transition: "all 300ms ease",
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.6rem",
              fontWeight: 700,
              color: activeAccent.hex,
              background: `${activeAccent.hex}15`,
              border: `1px solid ${activeAccent.hex}35`,
              borderRadius: "99px",
              padding: "2px 8px",
              marginBottom: "10px",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <Sparkles className="w-2.5 h-2.5" /> STACK BUILDER
          </div>

          {/* Heading */}
          <h5
            style={{
              fontSize: "1rem",
              lineHeight: 1.15,
              fontWeight: 800,
              color: textColor,
              margin: "0 0 6px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Launch Your Next Big{" "}
            <span style={{ color: activeAccent.hex, textShadow: `0 0 12px ${activeAccent.glow}` }}>
              Web SaaS
            </span>
          </h5>

          {/* Paragraph */}
          <p
            style={{
              fontSize: "0.6875rem",
              color: subtextColor,
              margin: "0 0 12px",
              lineHeight: 1.35,
              maxWidth: "240px",
            }}
          >
            Get blazing fast response times, SEO-ready codebases, and premium interactions out of the box.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              style={{
                background: activeAccent.hex,
                color: mode === "dark" ? "oklch(8% 0.014 265)" : "#ffffff",
                fontSize: "0.6875rem",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                minHeight: "unset",
                minWidth: "unset",
                boxShadow: `0 0 16px ${activeAccent.glow}`,
              }}
            >
              Get Started <ArrowRight className="w-3 h-3" />
            </button>
            <button
              style={{
                background: "transparent",
                color: textColor,
                fontSize: "0.6875rem",
                padding: "5px 10px",
                borderRadius: "6px",
                border: `1px solid ${borderColor}`,
                fontWeight: 600,
                cursor: "pointer",
                minHeight: "unset",
                minWidth: "unset",
              }}
            >
              Docs
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "12px", fontSize: "0.7rem", color: "var(--ink-3)" }}>
        * Change layout configuration in left panel. See live compilation in right preview viewport.
      </div>
    </div>
  );
}
