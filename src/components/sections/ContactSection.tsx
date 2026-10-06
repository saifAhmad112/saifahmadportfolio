"use client";
import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  MapPin,
  CheckCircle,
  Copy,
  Check,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formState.name || !formState.message) {
      alert("Please enter your name and message first!");
      return;
    }

    // Professional Executive WhatsApp Message Format
    const cleanText = `*PORTFOLIO INQUIRY*
━━━━━━━━━━━━━━━━━━━━

*Hello Saif,*
You have received a new inquiry from your developer portfolio:

• *Name:* ${formState.name}
• *Email:* ${formState.email || "Not specified"}
• *Regarding:* ${formState.subject || "General Consultation"}

*Message Details:*
"${formState.message}"

━━━━━━━━━━━━━━━━━━━━
*Sent via Saif Ahmad Siddique Portfolio*`;

    const whatsappUrl = `https://wa.me/919582035423?text=${encodeURIComponent(cleanText)}`;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    window.open(whatsappUrl, "_blank");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const handleSendMailto = () => {
    if (!formState.name || !formState.message) {
      alert("Please enter your name and message first!");
      return;
    }

    const emailSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject || `Message from ${formState.name}`}`
    );

    const emailBody = encodeURIComponent(
`Hi Saif Ahmad Siddique,

You have received a new message submitted through your Developer Portfolio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENDER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name    : ${formState.name}
• Email   : ${formState.email || "Not specified"}
• Subject : ${formState.subject || "General Inquiry"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formState.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent via Saif Ahmad Siddique Developer Portfolio`
    );

    const isMobile = typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saif.sid6@gmail.com&su=${emailSubject}&body=${emailBody}`;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    if (isMobile) {
      window.location.href = `mailto:saif.sid6@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    } else {
      window.open(gmailUrl, "_blank");
    }

    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="gradient" size="md" className="mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something Extraordinary Together
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-3">
          Have an exciting project, full-time engineering opportunity, or freelance inquiry? Send a message directly via WhatsApp or Email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct info & Quick copy cards */}
        <div className="lg:col-span-5 space-y-4">
          <CardSpotlight className="border border-zinc-800/80 bg-zinc-950/80 p-6 sm:p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Contact Information
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              I usually reply within 2-4 hours. Feel free to connect directly.
            </p>

            <div className="space-y-4">
              {/* WhatsApp / Phone Card with 1-click WhatsApp Link & Copy */}
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">WhatsApp & Phone</span>
                    <a
                      href="https://wa.me/919582035423"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-emerald-400 hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/919582035423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
                    title="Open WhatsApp Chat"
                  >
                    Chat
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                    className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-200 hover:text-indigo-400 truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                    {PERSONAL_INFO.location} (Open to Remote Globally)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links pills */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/saif-ahmad-siddique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-indigo-600/20 border border-zinc-800 hover:border-indigo-500/40 text-zinc-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <FaLinkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/saifAhmad112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <FaGithub className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
            </div>
          </CardSpotlight>
        </div>

        {/* Right Column: Interactive Form with 2 Direct Action Buttons */}
        <div className="lg:col-span-7">
          <CardSpotlight className="border border-zinc-800/80 bg-zinc-950/80 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Instant Delivery
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out the message below to send directly via WhatsApp (+91 9582035423) or Email.
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Your Email / Contact</label>
                  <input
                    type="text"
                    placeholder="alex@company.com or phone"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Subject / Project Category</label>
                <input
                  type="text"
                  placeholder="e.g. Full-Time Opportunity / Next.js Web App"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your requirements, project goals, or questions..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {isSubmitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle className="w-5 h-5" />
                  <span>Opening chat with your pre-filled message...</span>
                </div>
              )}

              {/* Action Buttons: 2 Buttons side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Send via WhatsApp Button */}
                <button
                  type="submit"
                  className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                {/* Send via Email Client Button */}
                <button
                  type="button"
                  onClick={handleSendMailto}
                  className="py-3.5 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Send via Gmail / Email</span>
                </button>
              </div>
            </form>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};
