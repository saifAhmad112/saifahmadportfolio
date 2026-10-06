import React from "react";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Globe,
  Server,
  BarChart3,
  Flame,
  Palette,
  Atom,
  Workflow,
  ShieldCheck,
  Zap,
  Boxes
} from "lucide-react";

export const getTechIcon = (name: string, className: string = "w-4 h-4") => {
  const normalized = name.toLowerCase();

  if (normalized.includes("react")) return <Atom className={`${className} text-cyan-400`} />;
  if (normalized.includes("next")) return <Globe className={`${className} text-white`} />;
  if (normalized.includes("node")) return <Server className={`${className} text-emerald-400`} />;
  if (normalized.includes("express")) return <Terminal className={`${className} text-zinc-300`} />;
  if (normalized.includes("mongo")) return <Database className={`${className} text-green-500`} />;
  if (normalized.includes("tailwind")) return <Palette className={`${className} text-sky-400`} />;
  if (normalized.includes("shadcn")) return <Layers className={`${className} text-zinc-100`} />;
  if (normalized.includes("aceternity")) return <Sparkles className={`${className} text-purple-400`} />;
  if (normalized.includes("radix")) return <Boxes className={`${className} text-indigo-400`} />;
  if (normalized.includes("query") || normalized.includes("tanstack"))
    return <Flame className={`${className} text-red-400`} />;
  if (normalized.includes("auth")) return <ShieldCheck className={`${className} text-emerald-400`} />;
  if (normalized.includes("chart")) return <BarChart3 className={`${className} text-amber-400`} />;
  if (normalized.includes("api")) return <Workflow className={`${className} text-blue-400`} />;
  if (normalized.includes("type")) return <Code2 className={`${className} text-blue-500`} />;

  return <Zap className={`${className} text-indigo-400`} />;
};
