import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
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
];

export default function FooterSocial() {
  return (
    <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/10 transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
            >
              <Icon size={SIZE} />
            </Link>
          );
        })}
      </div>
      <p className="text-sm text-neutral-400">
        &copy; 2026 Unitfactor. All rights reserved.
      </p>
    </div>
  );
}
