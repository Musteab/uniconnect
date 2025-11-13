export const metadata = { title: "Success Stories" };
import PageTransition from "@/components/layout/PageTransition";
import StoriesList from "@/components/stories/StoriesList";
import { stories } from "@/lib/stories";
import { MapPin, MessageCircle } from "lucide-react";

const countryCount = new Set(stories.map((s) => s.from)).size;
const uniCount = new Set(stories.map((s) => s.uni)).size;
const summaryStats = [
  { label: "Countries represented", value: `${countryCount}+` },
  { label: "Partner universities", value: `${uniCount}+` },
  { label: "Scholarships unlocked", value: "RM100k+" }
];

const featureSlices = [
  { title: "STEM & Future Tech", detail: "APU, Sunway, and Taylor's lead placements for AI, CS, and fintech aspirants.", accent: "Tech pathways" },
  { title: "Creative & Design", detail: "Students like Lavendar picked campuses with studio access and industry mentors.", accent: "Design journeys" },
  { title: "Healthcare & Life Sciences", detail: "We map visa timelines with clinical placements for medicine and nursing students.", accent: "Care careers" }
];

export default function SuccessStoriesPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#01030a] via-[#050f25] to-[#01030a]" />
        <div className="container-px relative max-w-7xl mx-auto py-10 space-y-10 text-white">
          <div>
            <h1 className="text-3xl font-semibold">Student Stories</h1>
            <p className="text-white/70 mt-2">Real journeys from around the world to Malaysia with UNI-Connect.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {summaryStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur flex flex-col gap-1">
                  <p className="text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#050c1c] via-[#0a1633] to-[#050c1c] text-white p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Journey slices</p>
                <h2 className="text-2xl font-semibold">A glimpse at pathways we handle daily</h2>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4" /> Nairobi · Harare · Lagos · KL
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featureSlices.map((slice) => (
                <div key={slice.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">{slice.accent}</p>
                  <p className="text-lg font-semibold mt-2">{slice.title}</p>
                  <p className="text-sm text-white/75 mt-3">{slice.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <StoriesList />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Share yours</p>
              <h3 className="text-2xl font-semibold">Ready to become the next success story?</h3>
              <p className="text-sm text-white/70 mt-1">Send us a quick voice note or PDF pack and we will map your express plan.</p>
            </div>
            <a href="https://wa.me/60143859084?text=Hi%20Uni-Connect,%20I%20want%20help%20with%20my%20study%20plan" className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-primary/90">
              <MessageCircle className="h-4 w-4" /> Message Uni-Connect
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
