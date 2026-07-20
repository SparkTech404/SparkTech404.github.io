"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Award, Heart, Flame, Activity, User, Dumbbell, Sparkles } from "lucide-react";

type MobileTab = "dashboard" | "workouts" | "profile";

export function MobileAppDemo() {
  const [activeTab, setActiveTab] = useState<MobileTab>("dashboard");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(320);
  const [heartRate, setHeartRate] = useState(72);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulated live stats update (Heart rate fluctuates, calories tick when workout timer is active)
  useEffect(() => {
    let hrInterval: NodeJS.Timeout;
    if (isTimerRunning) {
      hrInterval = setInterval(() => {
        setHeartRate((prev) => Math.min(160, Math.max(110, prev + Math.floor(Math.random() * 7) - 3)));
        setCaloriesBurned((prev) => prev + 1);
      }, 1000);
    } else {
      hrInterval = setInterval(() => {
        setHeartRate((prev) => Math.min(85, Math.max(60, prev + Math.floor(Math.random() * 3) - 1)));
      }, 2000);
    }

    return () => clearInterval(hrInterval);
  }, [isTimerRunning]);

  // Stopwatch timer logic
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const startTimer = () => setIsTimerRunning(true);
  const pauseTimer = () => setIsTimerRunning(false);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
    setCaloriesBurned(320);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calories progress percentage (Max 600 kcal target)
  const caloriesTarget = 600;
  const progressPercent = Math.min(100, Math.round((caloriesBurned / caloriesTarget) * 100));

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "10px 0" }}>
      {/* Smartphone Mock Frame */}
      <div
        style={{
          width: "280px",
          height: "530px",
          borderRadius: "36px",
          background: "#08080c",
          border: "8px solid #1a1b24",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 0 1px #2e2f3f",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "var(--font-geist), sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Notch / Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "18px",
            background: "#000000",
            borderRadius: "10px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1a1a24", marginRight: "30px" }} />
          <div style={{ width: "30px", height: "3px", borderRadius: "2px", background: "#101014" }} />
        </div>

        {/* Status Bar */}
        <div
          style={{
            height: "32px",
            padding: "8px 20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.6875rem",
            color: "var(--ink-2)",
            zIndex: 40,
            background: "transparent",
            fontWeight: 600,
          }}
        >
          <span>9:41</span>
          <div style={{ display: "flex", gap: "4px" }}>
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Dynamic App Content Screen */}
        <div style={{ flex: 1, padding: "12px 16px 60px", overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {activeTab === "dashboard" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 500 }}>WELCOME BACK</span>
                  <h5 style={{ fontSize: "1rem", margin: 0, fontWeight: 800 }}>Alex Rivers</h5>
                </div>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "var(--volt-dim)",
                    border: "1px solid var(--volt-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-volt animate-pulse" />
                </div>
              </div>

              {/* Workout Session Card (Stopwatch) */}
              <div
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "16px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-geist-mono)", color: "var(--volt)", letterSpacing: "0.05em", alignSelf: "flex-start" }}>
                  {isTimerRunning ? "ACTIVE SESSION" : "WORKOUT TIMER"}
                </span>

                <div style={{ fontSize: "1.75rem", fontFamily: "var(--font-geist-mono)", fontWeight: 700, margin: "8px 0 4px", color: "var(--ink)" }}>
                  {formatTime(timerSeconds)}
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  {!isTimerRunning ? (
                    <button
                      onClick={startTimer}
                      style={{
                        padding: "6px 12px",
                        background: "var(--volt)",
                        color: "#000",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        minHeight: "unset",
                        minWidth: "unset",
                      }}
                    >
                      <Play className="w-3 h-3 fill-current" /> Start
                    </button>
                  ) : (
                    <button
                      onClick={pauseTimer}
                      style={{
                        padding: "6px 12px",
                        background: "var(--surface-high)",
                        color: "var(--ink)",
                        border: "1px solid var(--surface-border)",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        minHeight: "unset",
                        minWidth: "unset",
                      }}
                    >
                      <Pause className="w-3 h-3" /> Pause
                    </button>
                  )}
                  <button
                    onClick={resetTimer}
                    style={{
                      padding: "6px 8px",
                      background: "transparent",
                      color: "var(--ink-3)",
                      border: "none",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      minHeight: "unset",
                      minWidth: "unset",
                    }}
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                </div>
              </div>

              {/* Heart & Energy Indicators */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div style={{ background: "var(--surface-raised)", border: "1px solid var(--surface-border-subtle)", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "oklch(60% 0.15 20)" }}>
                    <Heart className="w-4 h-4 fill-current animate-pulse" />
                    <span style={{ fontSize: "0.6rem", fontWeight: 600 }}>PULSE</span>
                  </div>
                  <span style={{ fontSize: "1.125rem", fontWeight: 700, marginTop: "6px", fontFamily: "var(--font-geist-mono)" }}>
                    {heartRate} <span style={{ fontSize: "0.7rem", color: "var(--ink-3)" }}>BPM</span>
                  </span>
                </div>

                <div style={{ background: "var(--surface-raised)", border: "1px solid var(--surface-border-subtle)", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--volt)" }}>
                    <Flame className="w-4 h-4 fill-current" />
                    <span style={{ fontSize: "0.6rem", fontWeight: 600 }}>CALORIES</span>
                  </div>
                  <span style={{ fontSize: "1.125rem", fontWeight: 700, marginTop: "6px", fontFamily: "var(--font-geist-mono)" }}>
                    {caloriesBurned} <span style={{ fontSize: "0.7rem", color: "var(--ink-3)" }}>KCAL</span>
                  </span>
                </div>
              </div>

              {/* Circular Target Ring */}
              <div
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "16px",
                  padding: "16px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                {/* SVG Progress Ring */}
                <div style={{ position: "relative", width: "56px", height: "56px" }}>
                  <svg width="56" height="56" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="transparent" stroke="var(--surface)" strokeWidth="4" />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="transparent"
                      stroke="var(--volt)"
                      strokeWidth="4"
                      strokeDasharray={150}
                      strokeDashoffset={150 - (150 * progressPercent) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 28 28)"
                      style={{ transition: "stroke-dashoffset 300ms ease" }}
                    />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {progressPercent}%
                  </div>
                </div>
                <div>
                  <h6 style={{ fontSize: "0.8125rem", margin: 0, fontWeight: 700 }}>Daily Goal Progress</h6>
                  <p style={{ fontSize: "0.6875rem", color: "var(--ink-3)", margin: "2px 0 0", lineHeight: 1.2 }}>
                    Burn {caloriesTarget} kcal target. Keep moving!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "workouts" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h5 style={{ fontSize: "0.9375rem", margin: "0 0 4px", fontWeight: 800 }}>Explore Workouts</h5>

              {[
                { title: "High-Intensity Interval Training", desc: "Burn fat fast", dur: "20 min", cal: "280 kcal", color: "var(--volt)" },
                { title: "Power Weightlifting", desc: "Build lean muscle", dur: "45 min", cal: "380 kcal", color: "oklch(60% 0.15 20)" },
                { title: "Core & Abs Blast", desc: "Sculpt midsection", dur: "15 min", cal: "150 kcal", color: "oklch(55% 0.12 265)" },
                { title: "Vinyasa Flow Yoga", desc: "Flexibility & balance", dur: "30 min", cal: "120 kcal", color: "oklch(75% 0.1 190)" },
              ].map((wo, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface-raised)",
                    border: "1px solid var(--surface-border-subtle)",
                    borderRadius: "12px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--volt-border)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--surface-border-subtle)";
                  }}
                >
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "var(--surface-high)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: wo.color,
                      }}
                    >
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)" }}>{wo.title}</div>
                      <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>{wo.desc}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", fontSize: "0.6875rem", fontFamily: "var(--font-geist-mono)" }}>
                    <div style={{ color: "var(--ink-2)", fontWeight: 600 }}>{wo.dur}</div>
                    <div style={{ color: "var(--volt)" }}>{wo.cal}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "profile" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center", paddingTop: "10px" }}>
              {/* Avatar placeholder */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "var(--surface-high)",
                  border: "2px solid var(--volt-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <User className="w-8 h-8 text-volt" />
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "var(--volt)",
                    border: "2px solid #08080c",
                  }}
                />
              </div>

              <div>
                <h5 style={{ fontSize: "0.9375rem", margin: 0, fontWeight: 700 }}>Alex Rivers</h5>
                <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontFamily: "var(--font-geist-mono)" }}>MEMBER ID: #480291</span>
              </div>

              {/* Achievements banner */}
              <div
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-subtle)",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Award className="w-5 h-5 text-volt" />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>Power Streak Unlocked</div>
                  <div style={{ fontSize: "0.625rem", color: "var(--ink-3)" }}>7 consecutive workout days!</div>
                </div>
              </div>

              {/* Account Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", width: "100%" }}>
                {[
                  { val: "2,450", label: "TOTAL KCAL" },
                  { val: "14h 32m", label: "DURATION" },
                  { val: "18", label: "WORKOUTS" },
                ].map((st, i) => (
                  <div key={i} style={{ background: "var(--surface-high)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--volt)", fontFamily: "var(--font-geist-mono)" }}>{st.val}</span>
                    <span style={{ fontSize: "0.55rem", color: "var(--ink-3)", fontWeight: 600 }}>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Tab Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "52px",
            background: "#08080c",
            borderTop: "1px solid var(--surface-border-subtle)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: "8px",
            zIndex: 40,
          }}
        >
          {[
            { id: "dashboard", icon: Activity, label: "Home" },
            { id: "workouts", icon: Dumbbell, label: "Train" },
            { id: "profile", icon: User, label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MobileTab)}
              style={{
                background: "transparent",
                border: "none",
                color: activeTab === tab.id ? "var(--volt)" : "var(--ink-3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                fontSize: "0.55rem",
                fontWeight: 600,
                cursor: "pointer",
                padding: "4px 8px",
                minHeight: "unset",
                minWidth: "unset",
                transition: "color 150ms ease",
              }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Home Screen Indicator bar */}
        <div
          style={{
            position: "absolute",
            bottom: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "4px",
            background: "#3e3f4f",
            borderRadius: "2px",
            zIndex: 45,
          }}
        />
      </div>
    </div>
  );
}
