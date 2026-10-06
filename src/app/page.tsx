"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LiveAnalyticsPreview } from "@/components/sections/LiveAnalyticsPreview";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ResumeModal } from "@/components/sections/ResumeModal";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section with Aceternity effects */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <div className="relative z-10 space-y-12 sm:space-y-20 pb-20">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LiveAnalyticsPreview />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />

      {/* Resume Viewer / Printer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
