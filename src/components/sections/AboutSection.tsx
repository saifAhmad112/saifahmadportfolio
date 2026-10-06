"use client";
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import {
  User,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Sparkles,
  Globe2,
  Code2,
  Layers
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="gradient" size="md" className="mb-3">
          <User className="w-3.5 h-3.5" />
          About Me
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Passionate Engineer Driving Scalable Web & AI Systems
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Deep architectural knowledge in React, Next.js, modern UI systems and state management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio Card */}
        <div className="lg:col-span-7">
          <CardSpotlight className="border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-8 rounded-3xl h-full shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Full Stack Background</h3>
                <p className="text-xs text-zinc-400">3+ Years Building Production Web Applications</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Core Competencies & Engineering Focus
            </h4>

            <div className="space-y-3">
              {PERSONAL_INFO.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0 border border-emerald-500/20">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </CardSpotlight>
        </div>

        {/* Right Column: Quick Bio Matrix & Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <CardSpotlight className="border border-zinc-800/80 bg-zinc-950/70 p-6 rounded-3xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-cyan-400" />
              Location & Quick Contact
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-zinc-400 uppercase">Location</span>
                  <span className="text-zinc-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[11px] text-zinc-400 uppercase">Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-zinc-200 hover:text-indigo-400 font-medium transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-zinc-400 uppercase">Phone</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-zinc-200 hover:text-emerald-400 font-medium transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Architecture Philosophy Card */}
          <CardSpotlight className="border border-zinc-800/80 bg-gradient-to-br from-indigo-950/30 via-zinc-950 to-purple-950/20 p-6 rounded-3xl">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-300 font-semibold text-sm">
              <Layers className="w-4 h-4" />
              <span>Design & Component Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              &quot;I believe in building clean, reusable component libraries that minimize technical debt. By leveraging modern primitives like Shadcn UI, Aceternity UI, and TanStack Query, I build interfaces that are lightning-fast, visually breathtaking, and easy to scale.&quot;
            </p>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};
