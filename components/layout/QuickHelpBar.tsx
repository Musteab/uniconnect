"use client";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function QuickHelpBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="rounded-full shadow-glow flex items-center gap-3 px-4 py-2 border border-white/10 bg-[#111827]/95 text-white">
        <a href="https://wa.me/60143859084" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-accent">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <span className="text-white/30">|</span>
        <a href="tel:+60" className="flex items-center gap-2 text-sm hover:text-accent">
          <Phone className="h-4 w-4" /> Call
        </a>
        <span className="text-white/30">|</span>
        <a href="mailto:hello@uniconnect.example.com" className="flex items-center gap-2 text-sm hover:text-accent">
          <Mail className="h-4 w-4" /> Email
        </a>
      </div>
    </div>
  );
}

