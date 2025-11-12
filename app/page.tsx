"use client";
import PageTransition from "@/components/layout/PageTransition";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import VideoThumbnail from "@/components/stories/VideoThumbnail";
import bigLogo from "../src/uni-connect-logo.png";
import UniversityStrip from "@/components/UniversityStrip";

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video className="absolute inset-0 -z-20 h-full w-full object-cover" src="/hero-video.mp4" autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
        <div className="container-px max-w-7xl mx-auto py-20 sm:py-28">
          <div className="hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 drop-shadow-lg w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <Image src={bigLogo} alt="Uni-Connect" fill priority sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem" className="object-contain" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
          >
            Study Abroad, Simplified.
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Uni-Connect helps students get into top universities with expert guidance, visa support, and scholarships.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="https://wa.me/60143859084">Get Started</Button>
            <Button href="/services" variant="secondary">Explore Services</Button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, label: "Students Placed", value: "3,500+" },
              { icon: Building2, label: "Partner Universities", value: "120+" },
              { icon: CheckCircle2, label: "Success Rate", value: "96%" }
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 * i }} className="glass rounded-xl p-5 flex items-center gap-3">
                <s.icon className="text-accent" />
                <div>
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-sm text-dark/70">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container-px max-w-7xl mx-auto py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why Choose Uni-Connect</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Expert Advisors", "End-to-End Support", "Scholarship Focus", "Global Network"].map((f) => (
            <motion.div key={f} whileHover={{ y: -4 }} className="rounded-xl border p-5 shadow-sm hover:shadow-glow transition">
              <div className="text-lg font-medium">{f}</div>
              <p className="text-sm text-dark/70 mt-2">We guide you through every step with care.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="container-px max-w-7xl mx-auto py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Popular Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Application Assistance", "Visa Support", "Scholarship Consultation", "Accommodation Help"].map((s) => (
            <a key={s} href="/services" className="rounded-xl border p-5 hover:bg-light transition">
              <div className="font-medium">{s}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Partner Universities */}
      <UniversityStrip />

      {/* Student Stories */}
      <section className="container-px max-w-7xl mx-auto py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Student Success Stories</h2>
        <StoriesGrid />
      </section>
    </PageTransition>
  );
}

// Stories data and grid
const stories = [
  { name: "Hudhaifa", from: "Kenya", to: "Malaysia", uni: "Taylor's University", src: "/stories/hudhaifa.mov" },
  { name: "Gracious", from: "Zimbabwe", to: "Malaysia", uni: "APU", src: "/stories/gracious.mov" },
  { name: "Lavendar", from: "Kenya", to: "Malaysia", uni: "Sunway", src: "/stories/lavender.mov" },
  { name: "Shumira", from: "Zimbabwe", to: "Malaysia", uni: "UCSI", src: "/stories/shumira.mov" },
];

function StoriesGrid() {
  const [open, setOpen] = useState<string | null>(null);
  const active = stories.find((s) => s.src === open) || null;
  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stories.map((s) => (
          <button key={s.src} onClick={() => setOpen(s.src)} className="text-left rounded-xl border border-white/10 p-3 bg-light text-dark hover:shadow-glow transition">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <VideoThumbnail src={s.src} alt={`${s.name} story`} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition grid place-items-center text-white text-sm">Play</div>
            </div>
            <div className="mt-2 font-medium">{s.name}</div>
            <div className="text-xs text-dark/70">{s.from} to {s.to} — {s.uni}</div>
          </button>
        ))}
      </div>
      <Modal open={!!active} onClose={() => setOpen(null)}>
        {active && (
          <div className="text-slate-900">
            <div className="font-semibold">{active.name} — {active.from} to {active.to}</div>
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

