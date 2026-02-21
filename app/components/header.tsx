"use client";
import { Menu, X } from "lucide-react";
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
      className={`w-full fixed top-0 z-50 transition-transform duration-300`}
      style={{
        backgroundColor: `rgba(11,11,11,${bgOpacity})`,
        backdropFilter: bgOpacity > 0 ? "blur(4px)" : "none",
      }}
    >
      <div className="w-full max-w-9xl mx-auto px-4 md:px-12 xl:px-28 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/svg/frame.svg"
              alt="Logo"
              width={287}
              height={73}
              className="w-56 h-16"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href + "link"}
              href={item.href}
              className={`text-base text-white from-transparent to-transparent hover:from-neutral-500/20 hover:to-neutral-200/10 bg-linear-to-b  px-4 py-2 rounded-full transition-colors duration-300
                 `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ContactButton />

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-secondary px-6 py-6 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.href + "link"}
              href={item.href}
              className="text-white font-bold hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contacts"
            className="bg-white hover:bg-primary text-secondary hover:text-secondary font-bold px-4 py-2 rounded-[40px] block text-center"
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
      className="group overflow-hidden relative hidden border-0 lg:inline px-10 py-3 bg-white text-primary font-medium rounded-full transition-colors"
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

      <span className="z-20 relative group-hover:text-white transition-colors">
        Contact Us
      </span>
    </Link>
  );
}
