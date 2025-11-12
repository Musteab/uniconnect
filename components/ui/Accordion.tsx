"use client";
import { useState } from "react";

export default function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-xl border">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-4 py-3 font-medium hover:bg-light"
          >
            {it.title}
          </button>
          {open === i && <div className="px-4 pb-4 text-sm text-dark/80">{it.content}</div>}
        </div>
      ))}
    </div>
  );
}

