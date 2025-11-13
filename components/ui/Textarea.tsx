"use client";
import React from "react";
import clsx from "clsx";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string };

export default function Textarea({ label, error, className, ...props }: Props) {
  return (
    <label className="block">
      {label && <div className="mb-1 text-sm text-[var(--muted-text)]">{label}</div>}
      <textarea
        className={clsx(
          "w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent min-h-[120px] bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--input-text)] placeholder:text-[var(--input-placeholder)]",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </label>
  );
}
