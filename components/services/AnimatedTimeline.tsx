"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Consultation", detail: "Understand your goals & profile.", eta: "30–60 min" },
    { title: "Shortlisting", detail: "Curate target universities.", eta: "3–5 days" },
    { title: "Applications", detail: "Prepare and submit documents.", eta: "2–4 weeks" },
    { title: "Offer & Visa", detail: "Offer review and visa processing.", eta: "1–6 weeks" },
    { title: "Pre-Departure", detail: "Accommodation & briefing.", eta: "1–2 weeks" },
  ];

  return (
    <div ref={ref} className="relative mt-4 grid gap-6 sm:grid-cols-[1fr]">
      <div className="relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
        <motion.div style={{ height }} className="absolute left-3 top-0 w-px bg-accent origin-top" />
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[9px] top-1 h-3 w-3 rounded-full bg-accent shadow-glow" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="font-medium">{s.title}</div>
                <div className="text-xs text-dark/70">Estimated: {s.eta}</div>
              </div>
              <div className="text-sm text-dark/70">{s.detail}</div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

