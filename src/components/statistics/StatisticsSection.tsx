"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, HeadphonesIcon, ThumbsUp } from "lucide-react";

const stats = [
  {
    label: "Projects Delivered",
    target: 100,
    suffix: "+",
    icon: Award,
    color: "text-blue-400",
    gradient: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    label: "Happy Clients",
    target: 50,
    suffix: "+",
    icon: Users,
    color: "text-purple-400",
    gradient: "from-purple-600/20 to-purple-900/10",
    border: "border-purple-500/30",
  },
  {
    label: "Technical Support",
    target: 24,
    suffix: "/7",
    icon: HeadphonesIcon,
    color: "text-cyan-400",
    gradient: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    label: "Client Satisfaction",
    target: 99,
    suffix: "%",
    icon: ThumbsUp,
    color: "text-emerald-400",
    gradient: "from-emerald-600/20 to-emerald-900/10",
    border: "border-emerald-500/30",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 25;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold font-mono tracking-tighter">
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br ${stat.gradient} border ${stat.border} shadow-2xl group`}
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`p-4 rounded-2xl bg-slate-900/80 border border-white/10 ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                <AnimatedNumber value={stat.target} suffix={stat.suffix} />
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
