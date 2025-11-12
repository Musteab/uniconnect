"use client";
import emailjs from "@emailjs/browser";
import { DEMO_MODE } from "./utils";
import { getJSON, setJSON } from "./storage";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  nationality?: string;
  interestedCountry?: string;
  preferredCourse?: string;
  message: string;
};

export async function sendContact(payload: ContactPayload) {
  if (DEMO_MODE) {
    const list = getJSON<any[]>("submissions", []);
    list.unshift({ ...payload, id: Date.now(), read: false });
    setJSON("submissions", list);
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true };
  }
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
  const res = await emailjs.send(serviceId, templateId, payload, { publicKey });
  return { ok: res.status >= 200 && res.status < 300 };
}

