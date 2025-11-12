"use client";
import { getJSON, setJSON } from "@/lib/storage";
import { useEffect, useMemo, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import Link from "next/link";

type Submission = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  nationality?: string;
  interestedCountry?: string;
  preferredCourse?: string;
  message: string;
  read?: boolean;
};

export default function SubmissionsPage() {
  const { authed } = useAdmin();
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Submission[]>([]);

  useEffect(() => {
    setItems(getJSON<Submission[]>("submissions", []));
  }, []);

  const filtered = useMemo(() => {
    if (!q) return items;
    const s = q.toLowerCase();
    return items.filter((it) => Object.values(it).join(" ").toLowerCase().includes(s));
  }, [q, items]);

  function markRead(id: number, read: boolean) {
    const next = items.map((it) => (it.id === id ? { ...it, read } : it));
    setItems(next);
    setJSON("submissions", next);
  }

  function exportCSV() {
    const header = ["id","name","email","phone","nationality","interestedCountry","preferredCourse","message","read"];
    const rows = [header.join(",")].concat(
      items.map((it) => header.map((h) => JSON.stringify((it as any)[h] ?? "")).join(","))
    );
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "submissions.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!authed) return (
    <div className="container-px max-w-3xl mx-auto py-10">Please <Link href="/admin/login" className="text-primary underline">log in</Link>.</div>
  );

  return (
    <div className="container-px max-w-6xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Form Submissions</h1>
        <button onClick={exportCSV} className="text-sm text-primary underline">Export CSV</button>
      </div>
      <div className="mt-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-6 grid gap-3">
        {filtered.map((it) => (
          <div key={it.id} className="rounded-xl border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">{it.name} — {it.email}</div>
              <label className="text-sm">
                <input type="checkbox" checked={!!it.read} onChange={(e) => markRead(it.id, e.target.checked)} />{' '}
                Mark as read
              </label>
            </div>
            <div className="text-sm text-dark/70">{it.phone} • {it.nationality} • {it.interestedCountry}</div>
            <p className="mt-2 text-sm">{it.message}</p>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-sm text-dark/70">No submissions yet.</div>}
      </div>
    </div>
  );
}

