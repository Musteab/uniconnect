import PageTransition from "@/components/layout/PageTransition";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10">
        <div className="relative overflow-hidden rounded-2xl mb-8 h-72 sm:h-96">
          <video className="absolute inset-0 -z-10 h-full w-full object-cover" src="/about-bg.mp4" autoPlay muted loop playsInline preload="metadata" />
          <div className="absolute inset-0 -z-10 bg-black/40" />
          <div className="p-8 h-full flex flex-col justify-end">
            <div className="text-sm text-white/80">Home / About</div>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-2 text-white">About Uni-Connect</h1>
          </div>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium">Our Story</h2>
          <p className="mt-3 text-dark/80">
            We empower Malaysian students to study abroad through personalized guidance, transparent processes, and lifelong support.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-dark/70 list-disc list-inside">
            <li>End-to-end support from shortlisting to post-arrival</li>
            <li>Merit-focused scholarship guidance and application reviews</li>
            <li>Deep partnerships with leading Malaysian universities</li>
          </ul>
        </div>

        {/* Expanded Mission & Vision */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="text-dark/80 mt-2">
              To simplify international education for every student we serve by delivering honest advice, structured processes, and
              dependable support at every step.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-dark/70 list-disc list-inside">
              <li>Personalized study plans and university shortlists</li>
              <li>Application proofreading and document preparation</li>
              <li>Visa, accommodation, and pre-departure guidance</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="text-dark/80 mt-2">
              To be Malaysia’s most trusted study abroad partner—recognized for outcomes, transparency, and student-first care.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-dark/70 list-disc list-inside">
              <li>Long-term partnerships with leading universities</li>
              <li>Scholarship access and affordability initiatives</li>
              <li>Community-building and alumni mentorship</li>
            </ul>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{label:'Students Placed',value:'200+'},{label:'Partner Universities',value:'120+'},{label:'Countries',value:'5+'},{label:'Success Rate',value:'96%'}].map((m)=>(
            <div key={m.label} className="rounded-xl border p-5 text-center">
              <div className="text-2xl font-semibold">{m.value}</div>
              <div className="text-xs text-dark/70">{m.label}</div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
