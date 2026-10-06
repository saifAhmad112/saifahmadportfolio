"use client";
import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import { getTechIcon } from "@/components/icons/TechIcons";
import { Cpu, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="gradient" size="md" className="mb-3">
          <Cpu className="w-3.5 h-3.5" />
          Technical Arsenal
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Modern Tech Stack & Specialized Skills
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Deep hands-on proficiency across the complete stack — from reactive frontends to data visualizers and robust database backends.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeTab === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <CardSpotlight className="h-full flex flex-col justify-between border border-zinc-800/80 bg-zinc-950/70 p-6 rounded-2xl group hover:border-indigo-500/40">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {getTechIcon(category.title, "w-4 h-4")}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill items */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-200 flex items-center gap-1.5">
                          {getTechIcon(skill.name, "w-3.5 h-3.5")}
                          {skill.name}
                        </span>

                        <div className="flex items-center gap-2">
                          {skill.tag && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              {skill.tag}
                            </span>
                          )}
                          <span className="text-[11px] text-zinc-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 + sIdx * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-5 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Production Ready
                </span>
                <span className="font-mono text-zinc-400">Next.js 14/15+</span>
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
