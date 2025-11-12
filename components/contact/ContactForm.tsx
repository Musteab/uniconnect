"use client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { sendContact } from "@/lib/email";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [prefill, setPrefill] = useState<string>("");

  // read ?msg= from URL to prefill message
  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const msg = sp.get("msg");
      if (msg) setPrefill(msg);
    } catch {}
  }, []);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setOk(null);
    const payload = Object.fromEntries(formData.entries());
    const res = await sendContact({
      name: String(payload.name || ""),
      email: String(payload.email || ""),
      phone: String(payload.phone || ""),
      nationality: String(payload.nationality || ""),
      interestedCountry: String(payload.interestedCountry || ""),
      preferredCourse: String(payload.preferredCourse || ""),
      message: String(payload.message || ""),
    });
    setOk(res.ok);
    setLoading(false);
  }

  return (
    <form action={onSubmit} className="mt-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input name="name" label="Full Name" required />
        <Input name="email" type="email" label="Email" required />
        <Input name="phone" label="Phone" />
        <Input name="nationality" label="Nationality" />
        <Input name="interestedCountry" label="Interested Country" />
        <Input name="preferredCourse" label="Preferred Course" />
      </div>
      <Textarea name="message" label="Message" required defaultValue={prefill} />
      <Button disabled={loading}>{loading ? "Sending..." : "Submit"}</Button>
      {ok === true && <div className="text-green-700 text-sm">Thanks! We will reach out soon.</div>}
      {ok === false && <div className="text-red-700 text-sm">Something went wrong. Try again.</div>}
    </form>
  );
}
