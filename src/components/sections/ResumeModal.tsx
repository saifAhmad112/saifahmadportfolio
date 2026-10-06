"use client";
import React from "react";
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, EDUCATION_DATA } from "@/data/portfolioData";
import { X, Printer, Mail, Phone, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-zinc-200 max-h-[90vh] overflow-y-auto">
        {/* Modal Controls */}
        <div className="sticky top-0 right-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">Curriculum Vitae</span>
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans">
          {/* Header */}
          <div className="text-center border-b border-zinc-800/80 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>
            <div className="flex justify-center gap-4 text-xs text-indigo-400 mt-2 font-mono">
              <a href="https://linkedin.com/in/saif-ahmad-siddique" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/saif-ahmad-siddique
              </a>
              <span>•</span>
              <a href="https://github.com/saifAhmad112" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/saifAhmad112
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <div><strong className="text-zinc-100">Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Next.js</div>
              <div><strong className="text-zinc-100">UI & Styling:</strong> Tailwind CSS, Bootstrap, Shadcn UI, Radix UI, Aceternity UI</div>
              <div><strong className="text-zinc-100">State / Data:</strong> TanStack Query, REST APIs, Pagination, Filtering, Sorting</div>
              <div><strong className="text-zinc-100">Backend & DB:</strong> Node.js, Express.js, RESTful APIs, CRUD, MongoDB</div>
              <div><strong className="text-zinc-100">Authentication:</strong> NextAuth.js, JWT, Role-Based Access Control</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
              Work Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-white">
                  <span>{exp.role} — <span className="text-indigo-300">{exp.company}</span></span>
                  <span className="text-xs text-zinc-400 font-normal">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 mt-2 text-xs text-zinc-300">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white sm:text-sm">{proj.title} | <span className="text-zinc-400 font-normal">{proj.tagline}</span></span>
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                      {proj.liveUrl.replace("https://", "")}
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1.5 text-zinc-300">
                    {proj.highlights.map((h, k) => (
                      <li key={k}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              Education
            </h2>
            <div className="space-y-1 text-xs text-zinc-300">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between">
                  <span><strong className="text-white">{edu.institution}</strong> — {edu.degree}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
