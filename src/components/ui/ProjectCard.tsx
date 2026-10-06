"use client";
import React, { useState } from "react";
import { Project } from "@/types";
import { ExternalLink, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import { getTechIcon } from "@/components/icons/TechIcons";
import { Badge } from "@/components/ui/Badge";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardSpotlight
        className="h-full flex flex-col justify-between group border border-zinc-800/80 bg-zinc-950/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
        spotlightColor="rgba(99, 102, 241, 0.12)"
        borderGlowColor="rgba(129, 140, 248, 0.35)"
      >
        <div>
          {/* Top category & live badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <Badge variant="gradient" size="sm">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              {project.category}
            </Badge>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all group-hover:scale-105"
            >
              <span>Live App</span>
              <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 font-medium mt-1 mb-4 leading-relaxed">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Metrics pills if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-3 px-3.5 mb-5 rounded-xl bg-zinc-900/80 border border-zinc-800/90 text-center">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-bold text-indigo-300 truncate">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Key Achievements/Highlights Accordion */}
          <div className="mb-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-xs font-semibold text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/60 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                {isExpanded ? "Hide key technical highlights" : `View ${project.highlights.length} technical highlights`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2 mt-3 pl-1 overflow-hidden"
                >
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-4 border-t border-zinc-800/60">
          <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all"
              >
                {getTechIcon(tech, "w-3 h-3")}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};
