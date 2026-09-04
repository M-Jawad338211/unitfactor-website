"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Views", href: "#views" },
  { label: "AI teammates", href: "#agents" },
  { label: "Automations", href: "#automations" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export default function UnitXSubnav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-[92px] z-40 hidden transition-all duration-300 lg:block ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="site-container">
        <nav className="unitx-glass flex items-center gap-1 rounded-2xl border border-white/10 px-3 py-2 shadow-[0_18px_50px_-30px_rgba(0,0,0,1)]">
          <Link href="/unitx" className="mr-2 flex items-center gap-2">
            <Image
              src="/svg/unitx-mark.svg"
              alt="UnitX"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="font-display text-sm font-semibold text-neutral-200">
              UnitX
            </span>
          </Link>

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/contacts"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-light-primary px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-primary"
          >
            Start free
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
