"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contacts",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);
  useEffect(() => {
    const MAX_OPACITY = 0.6;

    const onScroll = () => {
      const y = window.scrollY;

      // continuous opacity calculation
      const opacity = Math.min(y / 1000, MAX_OPACITY);
      setBgOpacity(opacity);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300`}
      style={{
        backgroundColor: `rgba(11,11,11,${bgOpacity})`,
        backdropFilter: bgOpacity > 0 ? "blur(10px)" : "none",
      }}
    >
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/svg/frame.svg"
              alt="Logo"
              width={287}
              height={73}
              className="h-12 w-auto sm:h-14"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href + "link"}
              href={item.href}
              className={`text-base text-neutral-200 from-transparent to-transparent hover:from-neutral-500/20 hover:to-neutral-200/10 bg-linear-to-b  px-4 py-2 rounded-full transition-colors duration-300
                 `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ContactButton />

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200/10 text-neutral-200 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="site-container flex flex-col space-y-4 bg-secondary/95 px-5 py-6 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href + "link"}
              href={item.href}
            className="font-bold text-neutral-200 hover:text-light-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contacts"
            className="block rounded-full bg-neutral-200 px-4 py-3 text-center font-bold text-secondary hover:bg-primary hover:text-neutral-200"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

import { useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";

type RippleStyle = CSSProperties & {
  "--x"?: string;
  "--y"?: string;
};

export function ContactButton() {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const setPos = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const style: RippleStyle = {
    "--x": "50%",
    "--y": "50%",
  };

  return (
    <Link
      ref={ref}
      href="/contacts"
      onMouseEnter={setPos}
      onMouseMove={setPos}
      style={style}
      className="group relative hidden overflow-hidden rounded-full border-0 bg-neutral-200 px-10 py-3 font-medium text-primary transition-colors lg:inline"
    >
      {/* expanding dot */}
      <span
        className="
          absolute z-10 rounded-full bg-primary
          pointer-events-none
          -translate-x-1/2 -translate-y-1/2
          opacity-0 group-hover:opacity-100
          scale-0 group-hover:scale-100
          transition-all duration-300
        "
        style={{
          left: "var(--x)",
          top: "var(--y)",
          width: "260px",
          height: "260px",
        }}
      />

      <span className="relative z-20 transition-colors group-hover:text-neutral-200">
        Contact Us
        <ArrowUpRight className="ml-2 inline h-4 w-4 align-[-2px]" />
      </span>
    </Link>
  );
}
