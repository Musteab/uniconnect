"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
const uniLogo = "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762953626/uniconnect/logos/src/logos/uni-connect-logo.png";
import clsx from "clsx";
import type { Route } from "next";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme, toggleTheme, mounted } = useTheme();

  const renderThemeToggle = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={theme === "light"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--nav-border)] bg-transparent text-[var(--nav-text)] hover:bg-white/10 transition"
    >
      {mounted && theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] text-[var(--nav-text)] backdrop-blur">
      <div className="container-px max-w-7xl mx-auto h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <Image src={uniLogo} alt="Uni-Connect logo" width={36} height={36} priority />
          <span>Uni-Connect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "px-2 py-1 rounded-md text-sm transition",
                pathname === l.href
                  ? "bg-white/15 text-white"
                  : "text-[var(--nav-text)] hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
          {renderThemeToggle()}
        </nav>
        <div className="md:hidden flex items-center gap-2">
          {renderThemeToggle()}
          {/* Mobile menu */}
          <button
            aria-label="Menu"
            className="inline-flex items-center justify-center h-9 w-10 rounded-md border border-[var(--nav-border)] text-[var(--nav-text)]"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 7h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <>
        {/* Backdrop to close on outside tap */}
        <div className="fixed inset-0 z-40 md:hidden bg-black/30" onClick={() => setOpen(false)} />
        <div className="relative z-50 md:hidden border-t border-[var(--nav-border)] bg-[var(--nav-bg)] text-[var(--nav-text)]">
          <div className="container-px max-w-7xl mx-auto py-2 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-2 py-2 rounded-md text-sm hover:bg-white/10",
                  pathname === l.href && "bg-white/15"
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">{renderThemeToggle()}</div>
          </div>
        </div>
        </>
      )}
    </header>
  );
}
