"use client";

import React, { useState } from "react";
import { TrendingUp, Users, Target, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

type TimeRange = "7d" | "30d" | "12m";

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
}

const dataByRange: Record<TimeRange, { metrics: Metric[]; chartPoints: number[] }> = {
  "7d": {
    metrics: [
      { label: "Active Visitors", value: "14,208", change: "+12.4%", trend: "up", icon: Users },
      { label: "Conversion Rate", value: "3.42%", change: "+0.8%", trend: "up", icon: Target },
      { label: "Revenue (ARR)", value: "$128,450", change: "+15.2%", trend: "up", icon: DollarSign },
    ],
    chartPoints: [40, 85, 45, 110, 80, 130, 160], // relative Y heights (out of 200)
  },
  "30d": {
    metrics: [
      { label: "Active Visitors", value: "58,940", change: "+18.9%", trend: "up", icon: Users },
      { label: "Conversion Rate", value: "3.55%", change: "-0.2%", trend: "down", icon: Target },
      { label: "Revenue (ARR)", value: "$134,800", change: "+22.4%", trend: "up", icon: DollarSign },
    ],
    chartPoints: [30, 60, 45, 95, 75, 120, 100, 140, 125, 175],
  },
  "12m": {
    metrics: [
      { label: "Active Visitors", value: "624,000", change: "+142.3%", trend: "up", icon: Users },
      { label: "Conversion Rate", value: "3.80%", change: "+1.2%", trend: "up", icon: Target },
      { label: "Revenue (ARR)", value: "$210,000", change: "+84.5%", trend: "up", icon: DollarSign },
    ],
    chartPoints: [20, 40, 65, 55, 90, 80, 120, 110, 150, 135, 170, 190],
  },
};

export function SaaSAnalyticsDemo() {
  const [range, setRange] = useState<TimeRange>("7d");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeData = dataByRange[range];
  const points = activeData.chartPoints;

  // Generate SVG Path for Area & Line chart
  const width = 500;
  const height = 180;
  const padding = 15;
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;

  const getCoordinates = () => {
    return points.map((p, i) => {
      const x = padding + (i / (points.length - 1)) * chartWidth;
      // invert Y since SVG coordinates start from top-left
      const y = height - padding - (p / 200) * chartHeight;
      return { x, y };
    });
  };

  const coords = getCoordinates();
  
  // Create path strings
  let linePath = "";
  let areaPath = "";
  if (coords.length > 0) {
    linePath = `M ${coords[0].x} ${coords[0].y} ` + coords.slice(1).map(c => `L ${c.x} ${c.y}`).join(" ");
    areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;
  }

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
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono)", color: "var(--volt)" }}>MOCK SaaS PLATFORM</span>
          <h4 style={{ fontSize: "1.125rem", margin: "2px 0 0", color: "var(--ink)", fontWeight: 700 }}>PulseMetrics Dashboard</h4>
        </div>

        {/* Range Buttons */}
        <div style={{ display: "flex", gap: "6px", background: "var(--surface-raised)", padding: "4px", borderRadius: "var(--radius-sm)", border: "1px solid var(--surface-border-subtle)" }}>
          {(["7d", "30d", "12m"] as TimeRange[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                padding: "4px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                background: range === r ? "var(--volt)" : "transparent",
                color: range === r ? "oklch(8% 0.014 265)" : "var(--ink-2)",
                fontWeight: 600,
                minHeight: "unset",
                minWidth: "unset",
                transition: "all 150ms ease",
              }}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "20px" }}>
        {activeData.metrics.map((metric, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              background: "var(--surface-raised)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--ink-3)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 500 }}>{metric.label}</span>
              <metric.icon className="w-4 h-4 text-volt" style={{ opacity: 0.8 }} />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", fontFamily: "var(--font-syne)" }}>
                {metric.value}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: metric.trend === "up" ? "oklch(70% 0.15 140)" : "oklch(60% 0.15 20)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {metric.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Graph Area */}
      <div
        style={{
          background: "var(--surface-raised)",
          border: "1px solid var(--surface-border-subtle)",
          borderRadius: "var(--radius-sm)",
          padding: "16px 12px 12px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--ink-2)", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
            <TrendingUp className="w-3.5 h-3.5 text-volt" /> Live Traffic Stream
          </span>
          <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-geist-mono)", color: "var(--ink-3)" }}>
            UPDATED REALTIME
          </span>
        </div>

        {/* SVG Chart */}
        <div style={{ position: "relative", width: "100%", height: `${height}px` }}>
          <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            {/* Grid Lines */}
            <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="var(--surface-border-subtle)" strokeDasharray="3 3" />
            <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="var(--surface-border-subtle)" strokeDasharray="3 3" />
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--surface-border-subtle)" strokeDasharray="3 3" />

            {/* Area Path with Volt Dim color */}
            <path
              d={areaPath}
              fill="url(#areaGradient)"
              style={{ transition: "d 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            />

            {/* Line Path with Volt solid color */}
            <path
              d={linePath}
              fill="none"
              stroke="var(--volt)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "d 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            />

            {/* Interactive Data Nodes */}
            {coords.map((c, idx) => (
              <g key={idx}>
                {/* Bigger transparent hover target */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="12"
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {/* Visible indicator circle */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={hoveredIndex === idx ? "5" : "3.5"}
                  fill={hoveredIndex === idx ? "var(--ink)" : "var(--surface)"}
                  stroke="var(--volt)"
                  strokeWidth="2"
                  style={{
                    transition: "r 150ms ease, fill 150ms ease",
                    pointerEvents: "none",
                  }}
                />
              </g>
            ))}

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--volt)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--volt)" stopOpacity="0.00" />
              </linearGradient>
            </defs>
          </svg>

          {/* Simple HTML custom tooltip inside container */}
          {hoveredIndex !== null && coords[hoveredIndex] && (
            <div
              style={{
                position: "absolute",
                left: `${(coords[hoveredIndex].x / width) * 100}%`,
                top: `${(coords[hoveredIndex].y / height) * 100 - 45}px`,
                transform: "translateX(-50%)",
                background: "var(--surface-high)",
                border: "1px solid var(--volt-border)",
                borderRadius: "4px",
                padding: "4px 8px",
                pointerEvents: "none",
                zIndex: 10,
                boxShadow: "var(--shadow-card)",
                whiteSpace: "nowrap",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "var(--ink-3)", fontFamily: "var(--font-geist-mono)" }}>
                POINT {hoveredIndex + 1}
              </div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--volt)" }}>
                Value: {points[hoveredIndex]}k
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.7rem", color: "var(--ink-3)" }}>
          * Hover nodes to view values. Click range selectors to load new data frames.
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--volt)", display: "flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
          Conversion +4.2% <TrendingUp className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
