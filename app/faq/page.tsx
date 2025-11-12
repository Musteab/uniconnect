import PageTransition from "@/components/layout/PageTransition";
import AccessibleFaq from "@/components/faq/AccessibleFaq";

export const metadata = { title: "FAQs" };

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
        <div className="mt-6">
          <AccessibleFaq items={items} />
        </div>
      </section>
    </PageTransition>
  );
}

