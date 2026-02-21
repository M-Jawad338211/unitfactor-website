import React from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SIZE = 20;

const socialLinks = [
  {
    href: "https://www.instagram.com/unitfactor_org/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/unitfactor",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/unitfactor/posts/?feedView=all",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.x.com",
    label: "X",
    icon: Twitter,
  },
];

export default function FooterSocial() {
  return (
    <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 text-neutral-200">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 hover:border-light-primary hover:text-light-primary"
            >
              <Icon size={SIZE} />
            </Link>
          );
        })}
      </div>
      <p className="text-sm text-neutral-300">
        &copy; 2026 Unitfactor. All rights reserved.
      </p>
    </div>
  );
}
