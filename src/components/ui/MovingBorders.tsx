"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({
  borderRadius = "1.5rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 4000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden group inline-flex items-center justify-center",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <div
          className={cn(
            "absolute inset-[-100%] animate-[spin_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#38bdf8_50%,#818cf8_100%)] opacity-75 group-hover:opacity-100 transition-opacity",
            borderClassName
          )}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>

      <div
        className={cn(
          "relative bg-zinc-950/[0.92] border border-zinc-800/80 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};
