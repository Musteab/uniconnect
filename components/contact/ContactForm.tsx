"use client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [prefill, setPrefill] = useState<string>("");

  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const msg = sp.get("msg");
      if (msg) setPrefill(msg);
    } catch {}
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);

    const name = String(fd.get("name") || "");
    const origin = String(fd.get("nationality") || "");
    const program = String(fd.get("preferredCourse") || "");
    const university = String(fd.get("university") || "");
    const intake = String(fd.get("intake") || "");
    const extra = String(fd.get("message") || prefill || "");

    const sentence = `Hello, I am "${name}", from "${origin}", looking to study "${program}" from "${university}". The intake I am going for is "${intake}".${extra ? ` Additional info: ${extra}` : ""}`;
    const url = `https://wa.me/60143859084?text=${encodeURIComponent(sentence)}`;
    window.location.href = url;
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input name="name" label="Full Name" required />
        <Input name="email" type="email" label="Email" />
        <Input name="phone" label="Phone" />
        <Input name="nationality" label="Country of Origin" />
        <Input name="interestedCountry" label="Interested Study Country" />
        <Input name="preferredCourse" label="Program of Interest" />
        <Input name="university" label="University" />
        <Input name="intake" label="Intake" />
      </div>
      <Textarea name="message" label="Additional Information" defaultValue={prefill} />
      <Button disabled={submitting}>{submitting ? "Redirecting..." : "Submit & WhatsApp"}</Button>
    </form>
  );
}
