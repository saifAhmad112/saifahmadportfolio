"use client";
import React, { useState, useEffect } from "react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import {
  BarChart3,
  Globe2,
  Cpu,
  Terminal,
  Activity,
  TrendingUp,
  Play,
  Pause
} from "lucide-react";

export const LiveAnalyticsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"analytics" | "editor" | "geo">("analytics");
  const [activeUsers, setActiveUsers] = useState(1482);
  const [isLive, setIsLive] = useState(true);
  const [promptText, setPromptText] = useState(
    "Analyze the conversion rate of guest visitors vs authenticated users for our Next.js + TanStack Query backend service."
  );

  // Simulated live counter
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 7) - 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [isLive]);

  // Sample country stats
  const countryData = [
    { country: "United States", visitors: "42.8k", percentage: 78, color: "bg-indigo-500" },
    { country: "India", visitors: "38.2k", percentage: 70, color: "bg-purple-500" },
    { country: "Germany", visitors: "19.5k", percentage: 48, color: "bg-cyan-500" },
    { country: "United Kingdom", visitors: "14.1k", percentage: 36, color: "bg-emerald-500" },
    { country: "Japan", visitors: "11.7k", percentage: 28, color: "bg-amber-500" },
  ];

  // 48-hour timeline bars
  const timelinePoints = [
    35, 45, 52, 60, 48, 70, 85, 92, 78, 65, 88, 95,
    72, 80, 84, 91, 98, 105, 94, 88, 110, 115, 125, 132
  ];

  return (
    <section id="live-analytics" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="ai" size="md" className="mb-3">
          <Activity className="w-3.5 h-3.5 text-purple-400" />
          Interactive Feature Demo
        </Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Live AI Dashboard & Analytics Engine
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Interactive preview demonstrating the core technologies built for <span className="text-indigo-400 font-semibold">GLEQ AI Admin</span>: real-time streaming state, interactive charts, and dynamic Markdown processing.
        </p>
      </div>

      {/* Demo Container */}
      <CardSpotlight className="border border-zinc-800/90 bg-zinc-950/80 p-5 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-2xl">
        {/* Top interactive toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">GLEQ Engine Dashboard v2.4</span>
                <span className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">React 19 • Next.js • TanStack Query • KaTeX</span>
            </div>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center gap-1.5 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "analytics"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                48h Metrics
              </span>
            </button>
            <button
              onClick={() => setActiveTab("geo")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "geo"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                Geo Map
              </span>
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "editor"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Prompt Editor
              </span>
            </button>
          </div>
        </div>

        {/* Content Body Based on Tab */}
        <div className="mt-6">
          {activeTab === "analytics" && (
            <div className="space-y-6">
              {/* Stat Counters Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span>Active Users (Live)</span>
                    <button
                      onClick={() => setIsLive(!isLive)}
                      className="text-zinc-400 hover:text-white"
                    >
                      {isLive ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="text-2xl font-black text-white font-mono flex items-center gap-2">
                    <span>{activeUsers.toLocaleString()}</span>
                    <span className="text-xs font-sans text-emerald-400 font-semibold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-0.5" /> +14.2%
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">Real-time socket stream</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="text-xs text-zinc-400 mb-1">48h Request Volume</div>
                  <div className="text-2xl font-black text-white font-mono">1.48M</div>
                  <div className="text-[11px] text-indigo-400 mt-1">99.98% uptime SLA</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="text-xs text-zinc-400 mb-1">Guest Conversion</div>
                  <div className="text-2xl font-black text-white font-mono">34.8%</div>
                  <div className="text-[11px] text-purple-400 mt-1">+6.1% this week</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="text-xs text-zinc-400 mb-1">Avg Response Latency</div>
                  <div className="text-2xl font-black text-white font-mono">42ms</div>
                  <div className="text-[11px] text-cyan-400 mt-1">Edge cached</div>
                </div>
              </div>

              {/* 48h Timeline Visualization (D3 style bar chart) */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">48-Hour Live Traffic & Concurrency Waveform</h4>
                    <p className="text-xs text-zinc-400">Interactive SVG Area & Bar metrics</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">Interval: 2-Hour Buckets</span>
                </div>

                <div className="h-32 flex items-end justify-between gap-1.5 sm:gap-2 pt-6 px-1">
                  {timelinePoints.map((val, idx) => {
                    const heightPercent = (val / 140) * 100;
                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center group relative h-full justify-end"
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-zinc-900 text-indigo-300 text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-700 whitespace-nowrap z-20">
                          {val * 12} req/s
                        </div>

                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full rounded-t-sm bg-gradient-to-t from-indigo-600/40 via-purple-500/70 to-cyan-400 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-cyan-300 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-2 border-t border-zinc-800/60 pt-2">
                  <span>48h Ago</span>
                  <span>24h Ago</span>
                  <span>12h Ago</span>
                  <span>Now (Live)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "geo" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Country Breakdown bars */}
              <div className="space-y-3.5">
                <h4 className="text-sm font-bold text-white mb-2">
                  Country-Based Visitor Density & Hover Scaling
                </h4>
                {countryData.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-zinc-200">{item.country}</span>
                      <span className="font-mono text-zinc-400">{item.visitors} active sessions</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Illustration Box */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center justify-center text-center min-h-[220px]">
                <Globe2 className="w-16 h-16 text-indigo-400 animate-pulse mb-3" />
                <h5 className="text-base font-bold text-white">Geospatial Heatmap Renderer</h5>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                  Built for dynamic geographic drill-downs and real-time visitor density analysis.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Real-time Geo
                  </span>
                  <span className="text-[10px] px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Density Matrix
                  </span>
                  <span className="text-[10px] px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Color Scale
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "editor" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">AI Agent Prompt & Query Console</h4>
                  <p className="text-xs text-zinc-400">Interactive live tester for AI agent prompts and queries</p>
                </div>
                <button
                  onClick={() =>
                    setPromptText(
                      "Optimize user retrieval caching using TanStack Query & NextAuth JWT validation."
                    )
                  }
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"
                >
                  Load Sample Query
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase">Input Prompt</label>
                  <textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    rows={4}
                    className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase">Processed Output</label>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-200 min-h-[95px] flex items-center justify-center font-mono text-center">
                    <span className="text-indigo-300">{promptText}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardSpotlight>
    </section>
  );
};
