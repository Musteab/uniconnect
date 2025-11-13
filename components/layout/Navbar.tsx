"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
const uniLogo = "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762953626/uniconnect/logos/src/logos/uni-connect-logo.png";
import clsx from "clsx";
import type { Route } from "next";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/universities", label: "Universities" },
  { href: "/success-stories", label: "Stories" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#D8EAFE] backdrop-blur border-b border-white/20">
      <div className="container-px max-w-7xl mx-auto h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900">
          <Image src={uniLogo} alt="Uni-Connect logo" width={36} height={36} priority />
          <span>Uni-Connect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "px-2 py-1 rounded-md text-sm text-slate-800 hover:text-slate-900 transition",
                pathname === l.href && "bg-secondary/25 text-slate-900"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center h-9 w-10 rounded-md border border-white/30 text-slate-900"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 7h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
        </button>
      </div>
      {open && (
        <>
        {/* Backdrop to close on outside tap */}
        <div className="fixed inset-0 z-40 md:hidden bg-black/30" onClick={() => setOpen(false)} />
        <div className="relative z-50 md:hidden border-t border-white/20 bg-[#D8EAFE]">
          <div className="container-px max-w-7xl mx-auto py-2 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-2 py-2 rounded-md text-sm text-slate-800 hover:bg-white/40",
                  pathname === l.href && "bg-secondary/25 text-slate-900"
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        </>
      )}
    </header>
  );
}
