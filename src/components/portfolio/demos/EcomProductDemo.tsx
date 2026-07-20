"use client";

import React, { useState } from "react";
import { ShoppingBag, ChevronRight, X, Sparkles, Volume2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ColorOption = "volt" | "pink" | "red" | "grey";
type SwitchOption = "red" | "blue" | "brown";

interface KeyboardColor {
  id: ColorOption;
  name: string;
  hex: string;
  fill: string;
  stroke: string;
}

const colorData: Record<ColorOption, KeyboardColor> = {
  volt: { id: "volt", name: "Acid Volt", hex: "oklch(83% 0.28 120)", fill: "oklch(83% 0.28 120 / 0.15)", stroke: "oklch(83% 0.28 120)" },
  pink: { id: "pink", name: "Cyber Pink", hex: "oklch(65% 0.25 340)", fill: "oklch(65% 0.25 340 / 0.15)", stroke: "oklch(65% 0.25 340)" },
  red: { id: "red", name: "Crimson Forge", hex: "oklch(55% 0.22 25)", fill: "oklch(55% 0.22 25 / 0.15)", stroke: "oklch(55% 0.22 25)" },
  grey: { id: "grey", name: "Obsidian Grey", hex: "oklch(40% 0.02 265)", fill: "oklch(40% 0.02 265 / 0.15)", stroke: "oklch(50% 0.02 265)" },
};

const switchData: Record<SwitchOption, { name: string; type: string; sound: string; desc: string }> = {
  red: { name: "Apex Linear Red", type: "Linear / Smooth", sound: "Quiet & Fast", desc: "Optimal for gaming and high-speed typing without sound distractions." },
  blue: { name: "Apex Clicky Blue", type: "Tactile / Clicky", sound: "Loud & Crispy", desc: "Highly tactile with a sharp click sound. Perfect for tactile feel lovers." },
  brown: { name: "Apex Silent Brown", type: "Tactile / Gentle", sound: "Subtle Bump", desc: "A gentle tactile bump with a silent output, balancing speed and typing feel." },
};

export function EcomProductDemo() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>("volt");
  const [selectedSwitch, setSelectedSwitch] = useState<SwitchOption>("red");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showWaves, setShowWaves] = useState(false);

  const activeColor = colorData[selectedColor];
  const activeSwitch = switchData[selectedSwitch];

  const triggerSoundWave = () => {
    setShowWaves(true);
    setTimeout(() => setShowWaves(false), 800);
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "20px",
        fontFamily: "var(--font-geist), sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono)", color: "var(--volt)" }}>MOCK STORE</span>
          <h4 style={{ fontSize: "1.125rem", margin: "2px 0 0", color: "var(--ink)", fontWeight: 700 }}>Apex Pro 75 Keyboard</h4>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            position: "relative",
            width: "36px",
            height: "36px",
            borderRadius: "var(--radius-sm)",
            background: "var(--surface-raised)",
            border: "1px solid var(--surface-border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--ink-2)",
            minWidth: "unset",
            minHeight: "unset",
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--volt)",
            }}
          />
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "20px", alignItems: "center" }}>
        {/* Dynamic Graphic representation of Keyboard */}
        <div
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--surface-border-subtle)",
            borderRadius: "var(--radius-sm)",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Sound Waves Animation Overlay */}
          {showWaves && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                pointerEvents: "none",
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  style={{
                    width: "3px",
                    height: "30px",
                    background: "var(--volt)",
                    borderRadius: "2px",
                    animation: `float 0.8s ease-in-out infinite alternate`,
                    animationDelay: `${item * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Rendered SVG Keyboard */}
          <svg viewBox="0 0 160 80" width="130" height="70" style={{ filter: "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.4))" }}>
            {/* Case Outer */}
            <rect x="5" y="10" width="150" height="60" rx="6" fill="#12131c" stroke={activeColor.stroke} strokeWidth="2.5" />
            
            {/* Grid layout for keys */}
            <g fill="none" stroke="#222432" strokeWidth="0.8">
              {/* Row 1 */}
              <rect x="9" y="14" width="142" height="9" rx="1" fill="#1e202f" />
              {/* Row 2 */}
              <rect x="9" y="25" width="142" height="9" rx="1" fill="#1e202f" />
              {/* Row 3 */}
              <rect x="9" y="36" width="142" height="9" rx="1" fill="#1e202f" />
              {/* Row 4 */}
              <rect x="9" y="47" width="142" height="9" rx="1" fill="#1e202f" />
              {/* Row 5 */}
              <rect x="9" y="58" width="142" height="9" rx="1" fill="#1e202f" />
            </g>

            {/* Accent keycaps colored by current state */}
            {/* ESC Key */}
            <rect x="10" y="15" width="10" height="7" rx="1" fill={activeColor.stroke} />
            {/* Enter Key */}
            <rect x="135" y="37" width="15" height="7" rx="1" fill={activeColor.stroke} />
            {/* Spacebar */}
            <rect x="45" y="59" width="60" height="7" rx="1" fill={activeColor.stroke} />
            
            {/* Switch Core colors under spacebar or accent */}
            <circle cx="75" cy="62.5" r="1.5" fill={selectedSwitch === "red" ? "#ff4242" : selectedSwitch === "blue" ? "#4285ff" : "#b07b3c"} />
          </svg>

          {/* Indicator label */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "8px",
              background: "var(--surface-high)",
              border: "1px solid var(--surface-border-subtle)",
              borderRadius: "4px",
              padding: "2px 6px",
              fontSize: "0.6rem",
              fontFamily: "var(--font-geist-mono)",
              color: "var(--ink-2)",
            }}
          >
            {activeColor.name.toUpperCase()}
          </div>
        </div>

        {/* Customization Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Color Switchers */}
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600 }}>CHASSIS ACCENT</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {(Object.keys(colorData) as ColorOption[]).map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedColor(col)}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: selectedColor === col ? "2px solid #ffffff" : "2px solid transparent",
                    background: colorData[col].hex,
                    cursor: "pointer",
                    padding: 0,
                    minWidth: "unset",
                    minHeight: "unset",
                  }}
                  title={colorData[col].name}
                />
              ))}
            </div>
          </div>

          {/* Switch Selectors */}
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600 }}>SWITCH TYPE</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "4px" }}>
              {(Object.keys(switchData) as SwitchOption[]).map((sw) => (
                <button
                  key={sw}
                  onClick={() => {
                    setSelectedSwitch(sw);
                    triggerSoundWave();
                  }}
                  style={{
                    background: selectedSwitch === sw ? "var(--surface-high)" : "transparent",
                    border: selectedSwitch === sw ? "1px solid var(--volt-border)" : "1px solid transparent",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    cursor: "pointer",
                    minWidth: "unset",
                    minHeight: "unset",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: selectedSwitch === sw ? "var(--volt)" : "var(--ink)" }}>
                      {switchData[sw].name.split(" ").slice(1).join(" ")}
                    </div>
                    <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>
                      {switchData[sw].type}
                    </div>
                  </div>

                  <Volume2 className="w-3 h-3 text-volt" style={{ opacity: selectedSwitch === sw ? 1 : 0.2 }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "0.7rem", color: "var(--ink-3)", marginTop: "12px", lineHeight: 1.35 }}>
        {activeSwitch.desc}
      </p>

      {/* Add to Cart Trigger */}
      <button
        onClick={() => {
          setIsCartOpen(true);
        }}
        className="btn-volt"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "12px",
          fontSize: "0.8125rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          borderRadius: "8px",
        }}
      >
        <ShoppingBag className="w-4 h-4" /> Customize & Buy (Demo)
      </button>

      {/* Cart Slider Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "#000000",
                zIndex: 60,
              }}
            />

            {/* Slider Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "200px",
                background: "var(--surface-raised)",
                borderLeft: "1px solid var(--surface-border-subtle)",
                zIndex: 70,
                padding: "16px 14px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>Review Specs</span>
                <button
                  onClick={() => setIsCartOpen(false)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "var(--ink-3)",
                    cursor: "pointer",
                    padding: 0,
                    minWidth: "unset",
                    minHeight: "unset",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Specs List */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--surface-border-subtle)", borderRadius: "6px", padding: "8px" }}>
                  <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>KEYBOARD BASE</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", marginTop: "2px" }}>Apex Pro 75</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--volt)" }}>$189.99</div>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--surface-border-subtle)", borderRadius: "6px", padding: "8px" }}>
                  <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>ACCENT STYLE</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", marginTop: "2px" }}>{activeColor.name}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--ink-3)" }}>Included</div>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--surface-border-subtle)", borderRadius: "6px", padding: "8px" }}>
                  <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>SWITCHES</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", marginTop: "2px" }}>{activeSwitch.name.split(" ").slice(1).join(" ")}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--ink-3)" }}>Included</div>
                </div>
              </div>

              {/* Total checkout */}
              <div style={{ borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "10px" }}>
                  <span style={{ color: "var(--ink-2)" }}>Total</span>
                  <span style={{ fontWeight: 700, color: "var(--volt)" }}>$189.99</span>
                </div>
                <button
                  onClick={() => alert("This is a demo store configuration! Checkout is fully simulated.")}
                  className="btn-volt"
                  style={{ width: "100%", padding: "8px", fontSize: "0.75rem", borderRadius: "6px" }}
                >
                  Reserve Specs
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
