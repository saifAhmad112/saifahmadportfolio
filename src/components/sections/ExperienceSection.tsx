"use client";
import React from "react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import { getTechIcon } from "@/components/icons/TechIcons";
import {
  Briefcase,
  CheckCircle2,
  Building2
} from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="gradient" size="md" className="mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          Work Experience
        </Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Professional Career Journey
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Proven track record of delivering high-performance, modular web applications in fast-paced production environments.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CardSpotlight className="border border-zinc-800/80 bg-zinc-950/80 p-6 sm:p-8 rounded-3xl group shadow-2xl hover:border-indigo-500/40">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-indigo-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                    {exp.period}
                  </Badge>
                  <span className="text-xs text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm text-zinc-300 leading-relaxed my-6 font-normal">
                {exp.description}
              </p>

              {/* Key Achievements Bullet points from Resume */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Key Responsibilities & Impact:
                </h4>
                <ul className="space-y-2.5">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Tag Array */}
              <div className="pt-5 border-t border-zinc-800/60">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2.5">
                  Tech Stack Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      {getTechIcon(tech, "w-3.5 h-3.5")}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
