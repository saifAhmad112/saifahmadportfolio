import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-zinc-900 bg-zinc-950/90 text-zinc-400 py-12 px-4 md:px-8 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
              SS
            </div>
            <span className="text-base font-bold text-white">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm">
            {PERSONAL_INFO.role} • 3+ Years Building Modern Web Applications & AI Dashboards
          </p>
        </div>

        {/* Social and links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/saifAhmad112"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-800/60 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/saif-ahmad-siddique"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-800/60 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:saif.sid6@gmail.com"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-800/60 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+919582035423"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-800/60 transition-all"
            aria-label="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4 text-xs">
          <span>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </span>
          <a
            href="#"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
