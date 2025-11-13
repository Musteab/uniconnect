"use client";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { useState } from "react";

export default function QuickHelpBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 md:left-6 z-40">
      <div className="rounded-full shadow-glow flex flex-wrap items-center justify-center sm:justify-start gap-3 px-4 py-2 border border-white/10 bg-[#111827]/95 text-white max-w-[calc(100vw-2rem)]">
        <a href="https://wa.me/60143859084" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <span className="text-white/30">|</span>
        <a href="tel:+60143859084" className="flex items-center gap-2 text-sm hover:text-accent">
          <Phone className="h-4 w-4" /> Call
        </a>
        <span className="text-white/30">|</span>
        <a href="mailto:uniconnectagency@gmail.com" className="flex items-center gap-2 text-sm hover:text-accent">
          <Mail className="h-4 w-4" /> Email
        </a>
        <button
          type="button"
          aria-label="Hide contact shortcuts"
          className="ml-1 rounded-full border border-white/20 p-1 hover:bg-white/10 transition"
          onClick={() => setVisible(false)}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
