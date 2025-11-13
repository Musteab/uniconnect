export const metadata = { title: "Services" };
import PageTransition from "@/components/layout/PageTransition";
import { GraduationCap, FileText, Plane, Home, Briefcase, Users, Sparkles, ShieldCheck, MapPin } from "lucide-react";
// removed animated timeline; using static flow below

const services: { title: string; desc: string; Icon: any }[] = [
  { title: "University Selection Guidance", desc: "Personalized shortlists based on your goals and profile.", Icon: GraduationCap },
  { title: "Application Assistance", desc: "Document prep, proofreading, and submission support.", Icon: FileText },
  { title: "Visa & Immigration Support", desc: "Checklist, mock interviews, and filing guidance.", Icon: Plane },
  { title: "Scholarship Consultation", desc: "Find and apply for merit and need-based awards.", Icon: FileText },
  { title: "Accommodation Assistance", desc: "On-campus and off-campus housing recommendations.", Icon: Home },
  { title: "Pre-Departure Briefing", desc: "Packing, culture, insurance, and banking setup.", Icon: Plane },
  { title: "Career Counseling", desc: "CV reviews, interview prep, and networking tips.", Icon: Briefcase },
  { title: "Post-Arrival Support", desc: "Orientation and continued academic guidance.", Icon: Users },
];

const boosters = [
  {
    title: "Scholarship Studio",
    detail: "We layer merit + bursary + partner rebates so you see the real tuition number before you apply.",
    bullets: ["Checklist of every scholarship you qualify for", "Draft reviews for essays & referee letters", "Negotiation notes for tuition rebates"],
    Icon: Sparkles
  },
  {
    title: "City Match Lab",
    detail: "Pick lifestyle sliders (budget, nightlife, climate) and we pair you with campuses that match.",
    bullets: ["Cost of living snapshots", "Neighbourhood videos + housing leads", "Student mentor intros in-destination"],
    Icon: MapPin
  },
  {
    title: "Visa Confidence Kit",
    detail: "Get your visa approved by acing every step of the process with our tailored support.",
    bullets: ["EMGS + embassy requirements translated", "Document vetting within 48 hours", "Progress tracking & reminders"],
    Icon: ShieldCheck
  }
];

const supportStats = [
  { label: "Avg. WhatsApp response", value: "< 25 min" },
  { label: "Docs vetted in 48h", value: "92%" },
  { label: "Scholarship success", value: "RM18k avg." },
  { label: "Students on landing concierge", value: "100%" }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#01030a] via-[#050f25] to-[#01030a] opacity-95" />
        <div className="container-px max-w-7xl mx-auto py-10 text-white">
          <h1 className="text-3xl font-semibold">Our Services</h1>
          <p className="mt-2 text-white/70">End-to-end guidance for a smooth study abroad journey.</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">What to expect</p>
              <h2 className="text-2xl font-semibold mt-2">One squad that follows you from shortlist to touchdown</h2>
              <ul className="mt-4 grid gap-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" aria-hidden />
                 Deadlines, documents, visa tasks, and mentor notes in one live space.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80" aria-hidden />
                  Twice-weekly nudges + explainer when forms look confusing.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" aria-hidden />
                  Airport pickup + housing welcome call the moment you land in Malaysia.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Live metrics</p>
              <h3 className="text-xl font-semibold mt-2">Service SLA</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {supportStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-white/20 pb-2 last:border-b-0 last:pb-0">
                    <dt className="text-white/80">{stat.label}</dt>
                    <dd className="font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ title, desc, Icon }, idx) => (
              <div
                key={title}
                className="group rounded-xl border border-white/15 bg-white/10 p-5 text-white shadow-[0_15px_35px_rgba(0,0,0,0.25)] backdrop-blur hover:border-accent/50 hover:shadow-glow transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg grid place-items-center bg-white/20 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium leading-tight">{title}</div>
                    <p className="text-sm text-white/75 mt-1">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-medium">Process Flow</h2>
            <ProcessFlow />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-medium">How We Work</h2>
            <div className="mt-4 flex justify-center">
              <video
                className="w-full max-w-3xl rounded-xl border border-white/10"
                src="https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952822/uniconnect/how-we-work.mp4"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-medium">Deep-dive boosters</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {boosters.map((boost) => {
                const Icon = boost.Icon;
                return (
                  <div key={boost.title} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-[0_10px_35px_rgba(0,0,0,0.3)] backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-white/20 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold">{boost.title}</p>
                        <p className="text-xs uppercase tracking-wide text-white/60">inclusive</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/80">{boost.detail}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                      {boost.bullets.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="text-accent">•</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  </PageTransition>
  );
}

// Static process flow using cards + downward arrows with ETA labels
// Static process flow using cards + downward arrows with ETA labels
const flowSteps: { title: string; detail: string; eta: string }[] = [
  {
    title: "Free Consultation",
    detail:
      "Discuss your academic goals, interests, and preferred universities. We assess your profile and provide personalized advice on course options and eligibility.",
    eta: "30–60 minutes",
  },
  {
    title: "Documents & Application Submission",
    detail:
      "Collect, prepare, and review all required academic documents. Our team ensures accuracy before submitting your university applications.",
    eta: "1 week",
  },
  {
    title: "Offer Letter & Visa",
    detail:
      "Receive and review your university offer letter. We guide you through acceptance procedures and visa documentation.",
    eta: "1–6 weeks",
  },
  {
    title: "Pre-Departure",
    detail:
      "Get ready for your new academic journey with pre-departure briefings and travel planning. We help you arrange accommodation and provide important cultural and arrival tips.",
    eta: "1–2 weeks before departure",
  },
  {
    title: "Arrival",
    detail:
      "Settle into your new environment smoothly. Our local support team assists with orientation, airport pickup (free of charge), and student registration.",
    eta: "Upon arrival",
  },
];

function ProcessFlow() {
  return (
    <div className="mt-6">
      <div className="flex flex-col">
        {flowSteps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-white/15 p-5 bg-white/5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-white/80 mt-1">{s.detail}</div>
              {i === 0 && (
                <div className="mt-3">
                  <a href="/consultation" className="inline-block text-xs px-3 py-2 rounded-md border border-accent text-accent hover:bg-accent/10">
                    Get your free consultation
                  </a>
                </div>
              )}
            </div>
            {i < flowSteps.length - 1 && (
              <div className="relative flex flex-col items-center my-6">
                <div className="absolute -top-6 text-[11px] leading-none font-medium text-white/80 bg-[#0f172a] rounded-full px-3 py-1 border border-white/15 shadow-sm whitespace-nowrap">
                  {s.eta}
                </div>
                <div className="w-0.5 h-8 bg-white/20" />
                <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1 animate-bounce">
                  <path d="M12 5v14M5 13l7 7 7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
