import PageTransition from "@/components/layout/PageTransition";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <ContactForm />
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border p-5">
            <div className="font-medium">Office</div>
            <div className="text-sm text-dark/70">Kuala Lumpur, Malaysia</div>
          </div>
          <div className="rounded-xl border p-5">
            <div className="font-medium">Email</div>
            <div className="text-sm text-dark/70">hello@uniconnect.example.com</div>
          </div>
          <div className="rounded-xl border p-5">
            <div className="font-medium">Hours</div>
            <div className="text-sm text-dark/70">Mon–Fri, 9am–6pm MYT</div>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}

