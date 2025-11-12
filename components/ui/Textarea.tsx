"use client";
import React from "react";
import clsx from "clsx";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string };

export default function Textarea({ label, error, className, ...props }: Props) {
  return (
    <label className="block">
      {label && <div className="mb-1 text-sm text-dark/80">{label}</div>}
      <textarea
        className={clsx(
          "w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent min-h-[120px]",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </label>
  );
}

