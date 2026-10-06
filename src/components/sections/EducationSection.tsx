"use client";
import React from "react";
import { EDUCATION_DATA } from "@/data/portfolioData";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="gradient" size="md" className="mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Background
        </Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Education & Qualifications
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Strong academic foundations supporting a rigorous approach to software engineering and problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <CardSpotlight className="h-full flex flex-col justify-between border border-zinc-800/80 bg-zinc-950/70 p-6 rounded-3xl group hover:border-indigo-500/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" size="sm">
                    {edu.type}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {edu.institution}
                </h3>
                <div className="text-sm font-semibold text-indigo-400 mt-1 mb-3">
                  {edu.degree}
                </div>

                {edu.field && (
                  <div className="text-xs text-zinc-300 font-medium mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.field}</span>
                  </div>
                )}

                {edu.details && (
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/60 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Completed</span>
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
