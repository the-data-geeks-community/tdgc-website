import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-4 md:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="TDGC Logo" width={44} height={44} />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-navy">The Data Geeks</span>
          <span className="tracking-[0.4em] text-xs font-semibold text-brand-green">
            COMMUNITY
          </span>
        </div>
      </Link>
      <nav className="flex flex-wrap items-center gap-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="font-semibold text-navy hover:bg-brand-green transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#join"
          className="bg-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-green transition-colors duration-200"
        >
          Join Us
        </Link>
      </nav>
    </header>
  );
}
