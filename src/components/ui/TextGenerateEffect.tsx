"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: 0,
      },
      {
        duration: duration ? duration : 0.8,
        delay: stagger(0.06),
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold max-w-full break-words", className)}>
      <motion.div ref={scope} className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1">
        {wordsArray.map((word, idx) => {
          const isHighlight =
            word.toLowerCase().includes("next.js") ||
            word.toLowerCase().includes("full") ||
            word.toLowerCase().includes("stack") ||
            word.toLowerCase().includes("ai") ||
            word.toLowerCase().includes("scalable") ||
            word.toLowerCase().includes("experiences");

          return (
            <motion.span
              key={word + idx}
              className={cn(
                "inline-block opacity-0 translate-y-3",
                isHighlight
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  : "text-zinc-100"
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};
