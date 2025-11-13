import PageTransition from "@/components/layout/PageTransition";
import ContactForm from "@/components/contact/ContactForm";
import { MessageCircle, PhoneCall, Mail, MapPin, Clock3 } from "lucide-react";

export const metadata = { title: "Contact" };

const quickActions = [
  { label: "WhatsApp us", href: "https://wa.me/60143859084", detail: "Instant replies during MYT daylight hours.", Icon: MessageCircle },
  { label: "Call the team", href: "tel:+60143859084", detail: "Speak to a counselor in English or Malay.", Icon: PhoneCall },
  { label: "Email documents", href: "mailto:uniconnectagency@gmail.com", detail: "Send PDFs for a 24h audit.", Icon: Mail }
];

const responseNotes = [
  { label: "Application review", value: "< 48h turnaround" },
  { label: "Visa guidance", value: "Dedicated officer assigned" },
  { label: "Office visits", value: "By appointment (Kuala Lumpur)" }
];

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#01030a] via-[#05122d] to-[#01030a]" />
        <div className="container-px relative max-w-7xl mx-auto py-10 space-y-8 text-white">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary via-primary/80 to-secondary text-white p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Let’s talk</p>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold">Tell us where you are in the process</h1>
                <p className="text-white/80 mt-2">Drop a quick note, send your documents for vetting, or hop on WhatsApp for a rapid answer.</p>
            </div>
            <div className="grid gap-3">
              {quickActions.map((action) => {
                const Icon = action.Icon;
                return (
                  <a key={action.label} href={action.href} className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/25 transition">
                    <Icon className="h-4 w-4" />
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl theme-section p-6 shadow-sm">
                <h2 className="text-2xl font-semibold">Send us the details</h2>
                <p className="text-[var(--muted-text)] mt-1">Attach transcripts, passport copy, or simply introduce yourself. We respond with action items in under 24 hours.</p>
                <ContactForm />
              </div>
              <div className="rounded-2xl theme-section p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-primary" /> Response standards
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-[var(--muted-text)]">
                  {responseNotes.map((note) => (
                    <li key={note.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-medium text-[var(--text-primary)]">{note.label}</span>
                      <span>{note.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl theme-section p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-white/10 p-3 text-[var(--text-primary)]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-sm text-[var(--muted-text)]">Kuala Lumpur, Malaysia</div>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted-text)] mt-3">By appointment only.</p>
              </div>
              <div className="rounded-2xl theme-section p-5 shadow-sm">
                <div className="font-medium">Hours</div>
                <div className="text-sm text-[var(--muted-text)] mt-1">Mon - Fri, 9am - 6pm MYT</div>
                <p className="text-xs text-[var(--muted-text)] mt-2">Emergency travel or visa escalations? Ping WhatsApp anytime.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
