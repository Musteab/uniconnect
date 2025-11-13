import PageTransition from "@/components/layout/PageTransition";
import { Users, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = { title: "About Us" };

const valuePillars = [
  { title: "Transparency-first", copy: "You always see real fees, timelines, and odds. No vague promises.", Icon: ShieldCheck },
  { title: "Student-first squads", copy: "Mentors, visa leads, and alumni stay in your WhatsApp chat until you land.", Icon: Users },
  { title: "Bold experimentation", copy: "We prototype tools that cut waiting time in half.", Icon: Sparkles }
];

const timelineEntries = [
  { year: "Early 2024", title: "Origin", detail: "UniConnect began with one international student’s vision to make choosing a university clearer, easier, and less stressful." },
  { year: "Late 2024", title: "Trusted partners", detail: "Assisted 100+ students free of charge and signed accelerator agreements with top Malaysian campuses for priority reviews." },
  { year: "2025", title: "UniBuddy launch", detail: "Shipped AI-powered triage so every lead gets instant guidance 24/7." }
];

const teamSpotlights = [
  { name: "Ashkar Ahmed", role: "Founder", focus: "Hobbies: Football, Traveling and helping students", photo: "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762990817/ashkar_wzjr2w.jpg" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 about-gradient" />
        <div className="container-px relative max-w-7xl mx-auto py-10 text-white">
          <div className="relative overflow-hidden rounded-2xl mb-8 h-72 sm:h-96 ring-1 ring-white/20">
            <video className="absolute inset-0 -z-10 h-full w-full object-cover" src="/about-bg.mp4" autoPlay muted loop playsInline preload="metadata" />
            <div className="absolute inset-0 -z-10 hero-overlay" />
            <div className="p-8 h-full flex flex-col justify-end backdrop-blur-sm">
              <div className="text-sm text-white/80">Home / About</div>
              <h1 className="text-3xl sm:text-4xl font-semibold mt-2 text-white">About Uni-Connect</h1>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium">Our Story</h2>
            <p className="mt-3 text-white/80">
              We empower Malaysian students to study abroad through personalized guidance, transparent processes, and lifelong support.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
              <li>End-to-end support from shortlisting to post-arrival</li>
              <li>Merit-focused scholarship guidance and application reviews</li>
              <li>Deep partnerships with leading Malaysian universities</li>
            </ul>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="text-white/80 mt-2">
                To simplify international education for every student we serve by delivering honest advice, structured processes, and dependable support at every step.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/70 list-disc list-inside">
                <li>Personalized study plans and university shortlists</li>
                <li>Application proofreading and document preparation</li>
                <li>Visa, accommodation, and pre-departure guidance</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="text-white/80 mt-2">
                To be Malaysia’s most trusted study abroad partner—recognized for outcomes, transparency, and student-first care.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/70 list-disc list-inside">
                <li>Long-term partnerships with leading universities</li>
                <li>Scholarship access and affordability initiatives</li>
                <li>Community-building and alumni mentorship</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ label: "Students assisted", value: "200+" }, { label: "Partner Universities", value: "120+" }, { label: "Countries", value: "10+" }, { label: "Success Rate", value: "100%" }].map((m) => (
              <div key={m.label} className="rounded-xl border border-white/20 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-2xl font-semibold">{m.value}</div>
                <div className="text-xs text-white/70">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {valuePillars.map((pillar) => {
              const Icon = pillar.Icon;
              return (
                <div key={pillar.title} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-white/20 p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-lg font-semibold">{pillar.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{pillar.copy}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#041029] via-[#081a3c] to-[#041029] text-white p-8 border border-white/15">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Milestones</p>
                <h2 className="text-2xl font-semibold">How Uni-Connect keeps evolving</h2>
              </div>
              <p className="text-sm text-white/70 max-w-md">
                We ship improvements every intake - new partner campuses, updated visa playbooks, and digital tools that keep students in control.
              </p>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {timelineEntries.map((entry) => (
                <div key={entry.year} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">{entry.year}</p>
                  <p className="mt-2 text-lg font-semibold">{entry.title}</p>
                  <p className="mt-2 text-sm text-white/75">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Our Founder</h2>
            <p className="text-white/70 mt-2">Born from the vision of a Sri Lankan student who saw the struggle many face when choosing their path after high school. UniConnect was created to make that journey simpler and more empowering..</p>
            <div className="mt-6 flex justify-center">
              {teamSpotlights.map((member) => (
                <div key={member.name} className="w-full max-w-3xl rounded-[36px] border border-white/15 bg-white/10 p-10 text-center shadow-[0_40px_90px_rgba(0,0,0,0.45)] backdrop-blur">
                  <div className="flex flex-col items-center gap-6">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="h-44 w-44 rounded-3xl object-cover ring-4 ring-white/40 shadow-2xl" />
                    ) : (
                      <div className="h-44 w-44 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white grid place-items-center text-4xl font-semibold shadow-2xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="text-3xl font-semibold">{member.name}</p>
                      <p className="text-white/70 text-lg">{member.role}</p>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">{member.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Want to collaborate?</p>
              <h3 className="text-2xl font-semibold">We partner with universities and student communities</h3>
              <p className="text-sm text-white/70 mt-2">Host a webinar, invite us to your fair, or co-build a scholarship brief. Let’s build pipeline together.</p>
            </div>
            <a href="mailto:uniconnectagency@gmail.com" className="inline-flex items-center justify-center rounded-md bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-primary/90">
              Email our partnerships desk
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
