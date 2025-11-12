"use client";
import Link from "next/link";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ href, className, children, variant = "primary", ...props }: Props) {
  const base = clsx(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
    variant === "primary" && "bg-primary text-white hover:bg-primary/90 shadow-glow",
    variant === "secondary" && "bg-secondary text-white hover:bg-secondary/90",
    variant === "ghost" && "bg-transparent hover:bg-light"
  );

  if (href) {
    return (
      <Link href={href} className={clsx(base, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={clsx(base, className)} {...props}>
      {children}
    </button>
  );
}

