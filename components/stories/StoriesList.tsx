"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import VideoThumbnail from "@/components/stories/VideoThumbnail";

const stories = [
  { name: "Hudhaifa", from: "Kenya", to: "Malaysia", uni: "Taylor's University", src: "/stories/hudhaifa.mov", fromFlag: "🇰🇪", toFlag: "🇲🇾", blurb: "From Nairobi to Subang Jaya — Hudhaifa shares how Uni-Connect helped with shortlisting, application polishing, and a smooth enrollment at Taylor's." },
  { name: "Gracious", from: "Zimbabwe", to: "Malaysia", uni: "APU", src: "/stories/gracious.mov", fromFlag: "🇿🇼", toFlag: "🇲🇾", blurb: "Gracious found the right tech pathway at APU. Visa guidance and scholarship insights made the journey quicker and more affordable." },
  { name: "Lavendar", from: "Kenya", to: "Malaysia", uni: "Sunway", src: "/stories/lavender.mov", fromFlag: "🇰🇪", toFlag: "🇲🇾", blurb: "Lavendar highlights Sunway's vibrant campus life and how pre-departure support made settling in seamless from day one." },
  { name: "Shumira", from: "Zimbabwe", to: "Malaysia", uni: "UCSI", src: "/stories/shumira.mov", fromFlag: "🇿🇼", toFlag: "🇲🇾", blurb: "Shumira's journey to UCSI shows the power of clear timelines, document checks, and ongoing post-arrival support." },
];

export default function StoriesList() {
  const [open, setOpen] = useState<string | null>(null);
  const active = stories.find((s) => s.src === open) || null;
  return (
    <>
      <div className="mt-8 grid gap-6">
        {stories.map((s) => (
          <div key={s.src} className="rounded-xl border border-white/10 bg-light text-dark p-4 sm:p-5">
            <div className="grid sm:grid-cols-3 gap-4 items-start">
              <div className="sm:col-span-1">
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <VideoThumbnail src={s.src} alt={`${s.name} story`} className="w-full h-full" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <div className="text-xs text-dark/70">{s.fromFlag} {s.from} → {s.toFlag} {s.to}</div>
                  <div className="text-xs text-accent">{s.uni}</div>
                </div>
                <p className="text-sm text-dark/80 mt-2">{s.blurb}</p>
                <button onClick={() => setOpen(s.src)} className="mt-3 inline-flex items-center rounded-md bg-accent text-white px-3 py-1 text-xs hover:bg-accent/90">Play video</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal open={!!active} onClose={() => setOpen(null)}>
        {active && (
          <div className="text-slate-900">
            <div className="font-semibold">{active.name} — {active.fromFlag} {active.from} → {active.toFlag} {active.to}</div>
            <div className="text-xs text-slate-600 mb-2">{active.uni}</div>
            <div className="w-full flex justify-center">
              <video src={active.src} controls className="w-full max-w-xl max-h-[60vh] rounded-md object-contain" />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

