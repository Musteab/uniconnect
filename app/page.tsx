"use client";
import PageTransition from "@/components/layout/PageTransition";
import UniversityStrip from "@/components/UniversityStrip";
import VideoThumbnail from "@/components/stories/VideoThumbnail";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { stories as storyEntries } from "@/lib/stories";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Globe2,
  GraduationCap,
  MapPin,
  Medal,
  MessageCircle,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  UserCheck
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const bigLogo = "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762952173/uniconnect/z6ojkkeopr3ahmdlbbyl.png";
const heroHighlights = [
  { label: "World to Malaysia specialists", detail: "Dedicated mentors on WhatsApp every day." },
  { label: "Scholarship-first planning", detail: "Average RM18k saved per intake." }
];
const quickWins: { title: string; detail: string; icon: LucideIcon }[] = [
  { title: "Visa-ready docs", detail: "Personal checklist delivered within 24 hours.", icon: ShieldCheck },
  { title: "Scholarship scan", detail: "Stack partial + merit funding in one view.", icon: Sparkles },
  { title: "City match quiz", detail: "Pick lifestyle, we'll suggest the campus.", icon: MapPin }
];
const reasons: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: "Dedicated Advisors", copy: "One-to-one mentoring on academics, budget, and confidence.", icon: UserCheck },
  { title: "Global Network", copy: "120+ partner universities with priority interview slots.", icon: Globe2 },
  { title: "Scholarship Focus", copy: "We negotiate tuition rebates before you pay anything.", icon: Medal },
  { title: "Visa Confidence", copy: "Document audits, mock interviews, and post-arrival care.", icon: ShieldCheck }
];
const journeySteps: { title: string; copy: string; meta: string; icon: LucideIcon }[] = [
  { title: "Document Vetting", copy: "Send transcripts and passport scans for an initial review within 24 hours.", meta: "Day 1", icon: CalendarDays },
  { title: "Offer & Funding Sprint", copy: "We polish SOPs, fast-track applications, and layer scholarships.", meta: "Days 3 - 10", icon: FileCheck2 },
  { title: "Visa & Landing Prep", copy: "Medical, visa, housing, and airport pickup arranged in one checklist.", meta: "Days 11 - 21", icon: PlaneTakeoff }
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video className="absolute inset-0 -z-20 h-[120%] md:h-full w-full object-cover object-[center_30%]" src="https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952807/uniconnect/hero-video.mp4" autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
        <div className="relative container-px max-w-7xl mx-auto py-20 sm:py-28 md:pl-40 lg:pl-56 xl:pl-72">
          <div className="hidden md:block absolute left-3 top-8 lg:left-6 lg:top-1/2 lg:-translate-y-1/2 drop-shadow-xl pointer-events-none">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[26rem] xl:h-[26rem] 2xl:w-[30rem] 2xl:h-[30rem]">
              <Image src={bigLogo} alt="Uni-Connect" fill priority sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem" className="object-contain" />
            </div>
          </div>
          <div className="md:hidden mb-6">
            <div className="relative h-32 w-32 drop-shadow-xl">
              <Image src={bigLogo} alt="Uni-Connect" fill sizes="64px" className="object-contain" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-accent" /> 2026 intakes filling fast
          </motion.div>
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
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/90">
            {heroHighlights.map((highlight) => (
              <span key={highlight.label} className="rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur">
                <span className="font-semibold text-white">{highlight.label}</span> {highlight.detail}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="https://wa.me/60143859084" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button href="/services" variant="secondary" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0">
            {quickWins.map((win) => {
              const Icon = win.icon;
              return (
                <div key={win.title} className="min-w-[220px] rounded-2xl border border-white/15 bg-black/50 p-4 text-white/90 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-white/20 p-2 text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold">{win.title}</p>
                  </div>
                  <p className="mt-3 text-xs text-white/70">{win.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, label: "Students assisted", value: "200+" },
              { icon: Building2, label: "Partner Universities", value: "120+" },
              { icon: CheckCircle2, label: "Success Rate", value: "100%" }
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
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Why Choose Uni-Connect</h2>
          <p className="mt-3 text-dark/70">
            Every intake gets a squad - advisors, visa experts, and alumni buddies - so you never feel alone, even when you're planning the move from your phone.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} whileHover={{ y: -6 }} className="rounded-2xl border border-[#1d2c5c]/60 bg-gradient-to-br from-[#0c1835] via-[#102046] to-[#182b57] p-5 text-white shadow-[0_15px_40px_rgba(10,15,40,0.4)] transition">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-white/20 p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-lg font-semibold">{reason.title}</div>
                </div>
                <p className="text-sm text-white/80 mt-3">{reason.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Journey */}
      <section className="relative overflow-hidden py-14 bg-gradient-to-b from-[#050c1c] via-[#071631] to-[#050c1c] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />
        </div>
        <div className="container-px relative max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Your roadmap</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Three agile steps to get you abroad</h2>
            </div>
            <p className="max-w-md text-sm text-white/80">
              Each milestone is mobile friendly - track progress, upload docs, and receive nudges directly on WhatsApp or email.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase text-white/60">
                    <span>{step.meta}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">Step {idx + 1}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="rounded-xl bg-white/10 p-3">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{step.copy}</p>
                </div>
              );
            })}
          </div>
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

      {/* CTA */}
      <section className="container-px max-w-7xl mx-auto py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary text-white px-6 py-10 sm:px-10">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,white,transparent)]" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Ready?</p>
            <h2 className="text-3xl font-semibold">Send us a message and we will get back to you</h2>
            <p className="text-white/80">
              Drop your questions or documents on WhatsApp and we will reply with a personalised shortlist, scholarship advice, and action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="https://wa.me/60143859084?text=Hi%20Uni-Connect%2C%20I%20would%20like%20to%20send%20my%20documents%20for%20initial%20vetting."
                className="w-full sm:w-auto gap-2"
              >
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="container-px max-w-7xl mx-auto py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Student Success Stories</h2>
        <StoriesGrid />
      </section>
    </PageTransition>
  );
}

function StoriesGrid() {
  const [open, setOpen] = useState<string | null>(null);
  const active = storyEntries.find((s) => s.src === open) || null;
  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {storyEntries.map((s) => (
          <button key={s.src} onClick={() => setOpen(s.src)} className="text-left rounded-xl border border-white/10 p-3 bg-light text-dark hover:shadow-glow transition">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <VideoThumbnail src={s.src} posterSrc={s.thumb} alt={`${s.name} story`} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition grid place-items-center text-white text-sm">Play</div>
            </div>
            <div className="mt-2 font-medium">{s.name}</div>
            <div className="text-xs text-dark/70">{s.from} to {s.to} - {s.uni}</div>
          </button>
        ))}
      </div>
      <Modal open={!!active} onClose={() => setOpen(null)}>
        {active && (
          <div className="text-slate-900">
            <div className="font-semibold">{active.name} - {active.from} to {active.to}</div>
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
