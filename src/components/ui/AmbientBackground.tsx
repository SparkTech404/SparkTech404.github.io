"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "var(--surface)",
      }}
    >
      {/* Volt green blur orb - top-left */}
      <div
        className="animate-orb-1"
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--volt-dim) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.5,
        }}
      />

      {/* Deep purple/indigo blur orb - middle-right */}
      <div
        className="animate-orb-2"
        style={{
          position: "absolute",
          top: "35vh",
          right: "-15vw",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(30% 0.12 265 / 0.18) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.7,
        }}
      />

      {/* Volt green blur orb - bottom-left */}
      <div
        className="animate-orb-3"
        style={{
          position: "absolute",
          bottom: "-15vh",
          left: "5vw",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--volt-dim) 0%, transparent 75%)",
          filter: "blur(110px)",
          opacity: 0.4,
        }}
      />

      {/* Dark overlay grid for extra texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, oklch(25% 0.015 265 / 0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
