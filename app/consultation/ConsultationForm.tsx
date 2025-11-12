"use client";
import { useState } from "react";

export default function ConsultationForm() {
  const [origin, setOrigin] = useState("");
  const [program, setProgram] = useState("");
  const [university, setUniversity] = useState("");
  const [name, setName] = useState("");
  const [intake, setIntake] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sentence = `Hello, I am "${name}", from "${origin}", looking to study "${program}" from "${university}". The intake I am going for is "${intake}".`;
    const url = `https://wa.me/60143859084?text=${encodeURIComponent(sentence)}`;
    window.location.href = url;
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div>
        <label className="text-sm">Name</label>
        <input className="mt-1 w-full rounded-md border px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label className="text-sm">Country of Origin</label>
        <input className="mt-1 w-full rounded-md border px-3 py-2" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
      </div>
      <div>
        <label className="text-sm">Program of Interest</label>
        <input className="mt-1 w-full rounded-md border px-3 py-2" value={program} onChange={(e) => setProgram(e.target.value)} required />
      </div>
      <div>
        <label className="text-sm">University</label>
        <input className="mt-1 w-full rounded-md border px-3 py-2" value={university} onChange={(e) => setUniversity(e.target.value)} required />
      </div>
      <div>
        <label className="text-sm">Intake</label>
        <input className="mt-1 w-full rounded-md border px-3 py-2" value={intake} onChange={(e) => setIntake(e.target.value)} required />
      </div>
      <button type="submit" className="rounded-md bg-accent text-white px-4 py-2 text-sm hover:opacity-90">Submit & Go to WhatsApp</button>
    </form>
  );
}

