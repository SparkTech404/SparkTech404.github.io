"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(true); // default to true to prevent flash before client mount

  useEffect(() => {
    // Check if visited in this session
    const visited = sessionStorage.getItem("spark-tech-visited");
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    } else {
      setHasVisited(false);
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("spark-tech-visited", "true");
    document.body.style.overflow = "";
    setIsLoading(false);
  };

  if (!isLoading || hasVisited) return null;

  const letterContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const lineVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  const brandRevealVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isLoading && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] as const },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "var(--surface)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Main loader panel */}
          <div className="flex flex-col items-center gap-6 max-w-lg px-6 text-center select-none">
            {/* Staggered text "SPARK TECH" */}
            <motion.div
              variants={letterContainerVariants}
              initial="initial"
              animate="animate"
              style={{
                display: "flex",
                gap: "0.2em",
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--ink)",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              {"SPARK".split("").map((char, index) => (
                <motion.span key={`spark-${index}`} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <span style={{ width: "0.3em" }} />
              {"TECH".split("").map((char, index) => (
                <motion.span key={`tech-${index}`} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Glowing Accent Line */}
            <motion.div
              variants={lineVariants}
              initial="initial"
              animate="animate"
              style={{
                height: "2px",
                width: "80px",
                backgroundColor: "var(--surface-border)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "var(--volt)",
                  boxShadow: "var(--shadow-volt)",
                }}
              />
            </motion.div>

            {/* Glowing Brand Acronym */}
            <motion.div
              variants={brandRevealVariants}
              initial="initial"
              animate="animate"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--ink-2)",
                letterSpacing: "0.15em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>WEB SOLUTION</span>
              <span
                style={{
                  color: "var(--volt)",
                  textShadow: "0 0 16px var(--volt-glow)",
                  fontWeight: 800,
                }}
              >
                WS
              </span>
            </motion.div>
          </div>

          {/* Micro loading status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "40px",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.75rem",
              color: "var(--ink-3)",
              letterSpacing: "0.05em",
            }}
          >
            SYS.INIT // CORE_LOADED
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
