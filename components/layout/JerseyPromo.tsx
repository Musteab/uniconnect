"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JerseyPromo() {
  const [open, setOpen] = useState(false);

  // Show once per browser session after a short delay
  useEffect(() => {
    try {
      if (sessionStorage.getItem("jersey_promo_dismissed") === "1") return;
    } catch {}
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const closeSession = () => {
    try { sessionStorage.setItem("jersey_promo_dismissed", "1"); } catch {}
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeSession(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          className="fixed bottom-5 right-5 z-[70] w-[320px] max-w-[92vw] rounded-xl border border-white/10 bg-[#0F172A] text-white shadow-2xl overflow-hidden"
          role="dialog"
          aria-label="Uni-Connect Jersey Promo"
        >
          <button aria-label="Close" onClick={closeSession} className="absolute top-2 right-2 h-7 w-7 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition">×</button>
          <div className="relative">
            <video
              src="https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952695/uniconnect/txyyj6vjf1o1ixsycsyt.mov"
              className="w-full aspect-video object-cover"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />
          </div>
          <div className="p-4">
            <div className="text-sm leading-snug text-white/90">
              Get an exclusive Uniconnect jersey upon successful enrolment or by refering your to apply thru us.
            </div>
            <div className="mt-3 flex items-center justify-end gap-2">
              <button onClick={closeSession} className="inline-flex items-center rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10 transition">Close</button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
