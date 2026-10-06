"use client";
import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, FolderGit2, ArrowUpRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Analytics",
    "AI & Marketplace",
    "Healthcare",
    "Marketplace & SaaS",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="gradient" size="md" className="mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Production Projects
        </Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Real-World Applications Built for Impact
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Explore production-grade AI platforms, real-time analytics dashboards, healthcare systems, and scalable marketplaces. All projects feature live demo links and detailed architectural breakdowns.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom callout */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-md">
          <div className="flex items-center gap-2 text-zinc-300 text-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Interested in seeing more code samples or custom demo builds?</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all hover:scale-105"
          >
            <span>Let&apos;s Discuss</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
