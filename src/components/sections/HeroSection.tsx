"use client";
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { AceternitySpotlight } from "@/components/ui/AceternitySpotlight";
import { BackgroundBeams } from "@/components/ui/AceternityBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderButton } from "@/components/ui/MovingBorders";
import {
  Sparkles,
  ArrowRight,
  Mail,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[88vh] w-full max-w-full flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 md:px-8 overflow-hidden bg-zinc-950">
      {/* Aceternity Spotlight glow effects positioned safely */}
      <AceternitySpotlight
        className="-top-40 left-0 md:left-40 md:-top-20 pointer-events-none max-w-none"
        fill="#818cf8"
      />
      <AceternitySpotlight
        className="top-20 -right-20 md:right-10 pointer-events-none max-w-none"
        fill="#06b6d4"
      />

      {/* Dynamic canvas beams */}
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 max-w-full"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 shadow-[0_0_20px_rgba(99,102,241,0.25)] text-center">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-zinc-300">
              3+ Years Experience • Available for Impactful Projects
            </span>
          </div>
        </motion.div>

        {/* Intro Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-indigo-400 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hello, I am {PERSONAL_INFO.name}</span>
        </motion.div>

        {/* Main Animated Title */}
        <div className="mb-5 max-w-4xl w-full px-1">
          <TextGenerateEffect
            words="Full Stack Web Developer Crafting Modern Next.js & AI Web Experiences"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          />
        </div>

        {/* Supporting Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          Specialized in building scalable production applications with{" "}
          <span className="text-zinc-200 font-semibold">React, Next.js, Tailwind CSS</span>, and{" "}
          <span className="text-zinc-200 font-semibold">MongoDB</span>. Experienced in real-time{" "}
          <span className="text-indigo-300 font-semibold">AI platforms & dashboards</span>,{" "}
          <span className="text-cyan-300 font-semibold">Shadcn & Aceternity UI</span> systems, and high-performance REST APIs.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects">
            <MovingBorderButton
              borderRadius="1rem"
              className="px-6 py-3 font-semibold text-sm gap-2"
              containerClassName="h-12 w-auto"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </MovingBorderButton>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-semibold text-sm transition-all shadow-lg inline-flex items-center gap-2 hover:border-indigo-500/40"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Contact Me</span>
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-semibold text-sm transition-all shadow-lg inline-flex items-center gap-2 hover:border-indigo-500/40"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Resume</span>
            </button>
          )}

          <a
            href="https://linkedin.com/in/saif-ahmad-siddique"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold text-sm transition-all inline-flex items-center gap-2"
          >
            <span>LinkedIn Profile</span>
          </a>
        </motion.div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              3+ Years
            </div>
            <span className="text-xs text-zinc-400 mt-1">Full Stack Experience</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              4+ Live Apps
            </div>
            <span className="text-xs text-zinc-400 mt-1">AI & SaaS Platforms</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              MERN & Next
            </div>
            <span className="text-xs text-zinc-400 mt-1">Full Stack Mastery</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              TanStack & Auth
            </div>
            <span className="text-xs text-zinc-400 mt-1">Caching & State Mgmt</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
