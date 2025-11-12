"use client";
import { useEffect, useRef } from "react";

export default function RichTextEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) ref.current.innerHTML = value;
  }, [value]);
  return (
    <div
      ref={ref}
      className="min-h-[160px] rounded-md border p-3 text-sm focus:outline-none"
      contentEditable
      onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
      suppressContentEditableWarning
    />
  );
}

