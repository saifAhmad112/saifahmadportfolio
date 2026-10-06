import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "gradient" | "success" | "ai";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-medium rounded-full transition-all";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
    lg: "text-sm px-4 py-1.5",
  };

  const variantStyles = {
    default: "bg-zinc-800/80 text-zinc-200 border border-zinc-700/60",
    secondary: "bg-zinc-900/90 text-zinc-400 border border-zinc-800",
    outline: "bg-transparent text-zinc-300 border border-zinc-700/80 hover:border-zinc-500",
    gradient:
      "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 text-indigo-300 border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.15)]",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]",
    ai: "bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.2)]",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
