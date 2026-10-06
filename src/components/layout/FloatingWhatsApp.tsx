"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const text = `*PORTFOLIO INQUIRY*
━━━━━━━━━━━━━━━━━━━━

*Hello Saif,*
I visited your portfolio website and would like to connect regarding an opportunity / project.

━━━━━━━━━━━━━━━━━━━━
*Sent via Portfolio Quick Chat*`;

    window.open(`https://wa.me/919582035423?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-zinc-900/95 border border-zinc-700/80 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-2 duration-300">
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">Chat with Saif on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Pulse Button */}
      <button
        onClick={openWhatsApp}
        className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat with Saif on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <FaWhatsapp className="w-6 h-6 text-white relative z-10" />
      </button>
    </div>
  );
};
