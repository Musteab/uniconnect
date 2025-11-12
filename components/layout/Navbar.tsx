"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const uniLogo = "https://res.cloudinary.com/dqweuq8ic/image/upload/v1762953626/uniconnect/logos/src/logos/uni-connect-logo.png";
import clsx from "clsx";

const links = [
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
        {/* Auth controls removed per request */}
      </div>
    </header>
  );
}
