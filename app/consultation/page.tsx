import PageTransition from "@/components/layout/PageTransition";
import ConsultationForm from "./ConsultationForm";

export const metadata = { title: "Free Consultation" };

export default function ConsultationPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-semibold">Get Your Free Consultation</h1>
        <p className="text-dark/70 mt-2">Fill in the details below and we’ll connect with you on WhatsApp.</p>
        <ConsultationForm />
      </section>
    </PageTransition>
  );
}
