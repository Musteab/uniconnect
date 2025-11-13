import PageTransition from "@/components/layout/PageTransition";
import AccessibleFaq from "@/components/faq/AccessibleFaq";
import { MessageCircle, FileText, PhoneCall } from "lucide-react";

export const metadata = { title: "FAQs" };

const quickHelps = [
  { label: "Chat on WhatsApp", href: "https://wa.me/60143859084?text=Hi%20Uni-Connect,%20I%20have%20a%20question%20about...", Icon: MessageCircle, note: "Avg. reply in < 10 min" },
  { label: "Submit documents for review", href: "mailto:uniconnectagency@gmail.com", Icon: FileText, note: "We send edits within 24h" },
  { label: "Schedule phone callback", href: "tel:+60143859084", Icon: PhoneCall, note: "Pick a MYT slot that fits you" }
];

const guideCards = [
  {
    title: "Budget calculator template",
    detail: "Download the Google Sheet we use with every student to map tuition + housing + visa fees.",
    href: "https://res.cloudinary.com/dqweuq8ic/raw/upload/v1762992992/UniConnect_Student_Budget_rn2zqj.xlsx"
  },
  {
    title: "Visa readiness checklist",
    detail: "Step-by-step timeline for EMGS, medical, and embassy submission.",
    href: "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762993454/emgs_bya5ba.webp"
  },
  {
    title: "Parents briefing deck",
    detail: "Slides you can share at home to explain why Malaysia makes sense.",
    href: "https://res.cloudinary.com/dqweuq8ic/raw/upload/v1762993789/Presentation_-_Why_Malaysia_Makes_Sense_uy6bcb.pptx"
  }
];

export default function FaqPage() {
  const items = [
    {
      id: "accommodation",
      question: "How much does accommodation cost?",
      answerHtml: `<p>Accommodation costs vary by city, room type, and utilities. 
      Expect <strong>MYR 600–1,500/month</strong> for shared apartments near major campuses, plus utilities (MYR 100–250).</p>
       <ul>
         <li>On-campus: typically bundled, limited availability</li>
         <li>Off-campus: wider choices; watch for deposits (1–2 months)</li>
         <li>Tip: budget for internet, laundry, and transport</li>
       </ul>`,
      videoUrl: "/faq-accomadation.mp4",
    },
    {
      id: "medical",
      question: "Is there any option for medical students?",
      answerHtml: `<p>Yes. We shortlist accredited MD/MBBS programs, pre-med pathways, and clinical placement partners. 
      We’ll advise on <em>entry requirements</em> (A-Levels/IB/Foundations), <em>clinical exposure</em>, and <em>licensing pathways</em>.</p>
       <p><strong>What we do:</strong> curriculum mapping, prerequisite checks, interview prep, and scholarship guidance for medical tracks.</p>`,
      videoUrl: "/faq-medical.mp4",
    },
    {
      id: "why-malaysia",
      question: "Why should I choose studying in Malaysia?",
      answerHtml: `<p>Malaysia offers globally recognized degrees (including UK/Australia branch campuses), 
      affordable tuition and living costs, cultural diversity, and strong graduate outcomes.</p>
       <ul>
         <li>Tuition: generally lower than US/UK/AUS with quality assurance</li>
         <li>Lifestyle: safe, multicultural, English widely spoken</li>
         <li>Mobility: credit transfers & twinning programs with partner universities</li>
       </ul>`,
      videoUrl: "/faq-whymsia.mp4",
    },
    {
      id: "timeline",
      question: "How long does the application process take?",
      answerHtml: `<p>Most applications complete in <strong>3–8 weeks</strong> depending on document readiness and university review windows. 
      We help you prepare documents quickly to stay on the short end of this range.</p>`,
      videoUrl: null,
    },
    {
      id: "scholarships",
      question: "Are there scholarships or financial aid options?",
      answerHtml: `<p>Yes—merit, need-based, and early-bird bursaries may be available. 
      We match you to relevant awards and help you prepare statements and references to strengthen your case.</p>`,
      videoUrl: null,
    },
    {
      id: "english-tests",
      question: "What English tests do I need?",
      answerHtml: `<p>Most programs accept <strong>IELTS/TOEFL/PTE</strong>. Required scores vary by course level. 
      If you’re close to the threshold, we can suggest conditional offers or English pathway programs.</p>`,
      videoUrl: null,
    },
    {
      id: "visa-time",
      question: "How long does the student visa take?",
      answerHtml: `<p>Typical timelines are <strong>1–6 weeks</strong> after your offer acceptance and complete submission. 
      We guide you on EMGS/immigration steps and required financial evidence.</p>`,
      videoUrl: null,
    },
    {
      id: "part-time",
      question: "Can I work part-time while studying?",
      answerHtml: `<p>International students may be permitted limited part-time work during semester breaks and subject to conditions. 
      We’ll explain campus policies, allowable hours, and how to stay compliant.</p>`,
      videoUrl: null,
    },
    {
      id: "intakes",
      question: "When are the main intakes?",
      answerHtml: `<p>Most institutions offer <strong>February/March</strong> and <strong>August/September</strong> intakes. 
      Some courses have additional mid-year starts. We’ll map deadlines backward from your target intake.</p>`,
      videoUrl: null,
    },
  ];

  return (
    <PageTransition>
      <section className="container-px max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <p className="text-dark/70 mt-2">Common questions about studying in Malaysia.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quickHelps.map((item) => {
            const Icon = item.Icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-white/15 bg-[#050f25] p-5 text-white shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:shadow-glow transition"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-white/15 p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold leading-tight">{item.label}</p>
                    <p className="text-xs text-white/70">{item.note}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-primary via-primary/80 to-secondary text-white p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Starter kit</p>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            {guideCards.map((guide) => (
              <a
                key={guide.title}
                href={guide.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/10 p-4 backdrop-blur hover:bg-white/20 transition"
              >
                <p className="text-sm font-semibold">{guide.title}</p>
                <p className="mt-2 text-xs text-white/80">{guide.detail}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <AccessibleFaq items={items} />
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#050f25] text-white p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Still stuck?</p>
            <h3 className="text-xl font-semibold">Tell us your situation in 3 sentences</h3>
            <p className="text-sm text-white/70 mt-1">We will reply with a personalised voice note or Loom explainer.</p>
          </div>
          <a href="https://wa.me/60143859084?text=Hi%20Uni-Connect,%20here%20is%20my%20question..." className="inline-flex items-center justify-center rounded-md bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-primary/90">
            Send quick note
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
