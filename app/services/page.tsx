export const metadata = { title: "Services" };
import PageTransition from "@/components/layout/PageTransition";
import { GraduationCap, FileText, Plane, Home, Briefcase, Users } from "lucide-react";
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

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 to-transparent" />
        <div className="container-px max-w-7xl mx-auto py-10">
          <h1 className="text-3xl font-semibold">Our Services</h1>
          <p className="mt-2 text-dark/70">End-to-end guidance for a smooth study abroad journey.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ title, desc, Icon }, idx) => (
              <div
                key={title}
                className="group rounded-xl border border-white/10 p-5 bg-light/80 text-dark shadow-sm hover:border-accent/50 hover:shadow-glow transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg grid place-items-center bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium leading-tight">{title}</div>
                    <p className="text-sm text-dark/70 mt-1">{desc}</p>
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
              <div className="w-48 h-48 rounded-xl border border-white/10 bg-white/70 text-slate-900 grid place-items-center text-center text-sm p-3">
                here is a video that explains
              </div>
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
      "Discuss your academic goals, interests, and preferred study destinations. We assess your profile and provide personalized advice on course options and eligibility.",
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
      "Settle into your new environment smoothly. Our local support team assists with orientation, airport pickup (if applicable), and student registration.",
    eta: "Upon arrival",
  },
];

function ProcessFlow() {
  return (
    <div className="mt-6">
      <div className="flex flex-col">
        {flowSteps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-white/10 p-5 bg-light/80 text-dark shadow-sm">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-dark/70 mt-1">{s.detail}</div>
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
                <div className="absolute -top-6 text-[11px] leading-none font-medium text-slate-900 bg-white/95 rounded-full px-3 py-1 border border-gray-200 shadow-sm whitespace-nowrap">
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

