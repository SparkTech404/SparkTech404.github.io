"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("spark-tech-visited");
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    } else {
      setHasVisited(false);
      document.body.style.overflow = "hidden";
      // Auto-dismiss after the animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && !hasVisited) {
      sessionStorage.setItem("spark-tech-visited", "true");
      document.body.style.overflow = "";
    }
  }, [isLoading, hasVisited]);

  if (!isLoading || hasVisited) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Center content */}
          <div className="flex items-center gap-4 select-none">
            {/* SPARK TECH — instant pop */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(1.8rem, 7vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--ink)",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              SPARK TECH
            </motion.span>

            {/* Volt accent dot */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" as const }}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "var(--volt)",
                boxShadow: "0 0 20px var(--volt-glow), 0 0 40px var(--volt-dim)",
                flexShrink: 0,
              }}
            />

            {/* WS badge */}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" as const }}
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
                fontWeight: 800,
                color: "var(--volt)",
                textShadow: "0 0 12px var(--volt-glow)",
                letterSpacing: "0.08em",
                lineHeight: 1,
              }}
            >
              WS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
