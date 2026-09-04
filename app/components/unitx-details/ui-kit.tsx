/**
 * UnitX product-UI kit.
 *
 * These primitives compose the in-page product mockups. Everything is rendered
 * with markup + CSS instead of screenshots so the "app" stays crisp at any
 * resolution, themes with the site tokens, and never ships a 2MB PNG.
 */

import type { ReactNode } from "react";

/* ------------------------------------------------------------------ tokens */

export const statusTone = {
  backlog: {
    dot: "bg-neutral-500",
    text: "text-neutral-400",
    soft: "bg-neutral-500/12 text-neutral-300 ring-neutral-500/25",
  },
  planned: {
    dot: "bg-sky-400",
    text: "text-sky-300",
    soft: "bg-sky-400/12 text-sky-300 ring-sky-400/25",
  },
  active: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    soft: "bg-amber-400/12 text-amber-300 ring-amber-400/25",
  },
  review: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    soft: "bg-violet-400/12 text-violet-300 ring-violet-400/25",
  },
  done: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    soft: "bg-emerald-400/12 text-emerald-300 ring-emerald-400/25",
  },
  blocked: {
    dot: "bg-light-primary",
    text: "text-light-primary",
    soft: "bg-light-primary/12 text-light-primary ring-light-primary/25",
  },
} as const;

export type StatusKey = keyof typeof statusTone;

const avatarTones = [
  "from-[#e35151] to-[#983232]",
  "from-[#38bdf8] to-[#0a3253]",
  "from-[#a78bfa] to-[#5b3fbe]",
  "from-[#34d399] to-[#0f766e]",
  "from-[#fbbf24] to-[#b45309]",
  "from-[#f472b6] to-[#9d174d]",
];

export function toneFor(seed: string) {
  let sum = 0;
  for (let i = 0; i < seed.length; i += 1) sum += seed.charCodeAt(i);
  return avatarTones[sum % avatarTones.length];
}

/* ------------------------------------------------------------------- atoms */

export function Avatar({
  name,
  size = "md",
  ring = true,
}: {
  name: string;
  size?: "xs" | "sm" | "md";
  ring?: boolean;
}) {
  const dims =
    size === "xs"
      ? "h-5 w-5 text-[8px]"
      : size === "sm"
        ? "h-6 w-6 text-[9px]"
        : "h-7 w-7 text-[10px]";

  return (
    <span
      title={name}
      className={`inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-linear-to-br ${toneFor(
        name
      )} font-semibold tracking-tight text-white/95 ${
        ring ? "ring-2 ring-[#141416]" : ""
      }`}
    >
      {name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </span>
  );
}

export function AvatarStack({ names }: { names: string[] }) {
  return (
    <span className="flex -space-x-2">
      {names.map((name) => (
        <Avatar key={name} name={name} size="sm" />
      ))}
    </span>
  );
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "sky" | "violet" | "emerald" | "amber";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-white/[0.06] text-neutral-300 ring-white/10",
    brand: "bg-light-primary/12 text-light-primary ring-light-primary/25",
    sky: "bg-sky-400/12 text-sky-300 ring-sky-400/25",
    violet: "bg-violet-400/12 text-violet-300 ring-violet-400/25",
    emerald: "bg-emerald-400/12 text-emerald-300 ring-emerald-400/25",
    amber: "bg-amber-400/12 text-amber-300 ring-amber-400/25",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Progress({
  value,
  tone = "brand",
  className = "",
}: {
  value: number;
  tone?: "brand" | "emerald" | "sky" | "amber" | "violet";
  className?: string;
}) {
  const fills: Record<string, string> = {
    brand: "bg-linear-to-r from-light-primary to-primary",
    emerald: "bg-emerald-400/80",
    sky: "bg-sky-400/80",
    amber: "bg-amber-400/80",
    violet: "bg-violet-400/80",
  };

  return (
    <span
      className={`block h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07] ${className}`}
    >
      <span
        className={`block h-full rounded-full ${fills[tone]}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </span>
  );
}

/* ---------------------------------------------------------- window chrome  */

const railItems = [
  { label: "Home", d: "M3 10.5 12 3l9 7.5V21H3z" },
  { label: "Work", d: "M4 6h16v13H4zM4 10h16" },
  { label: "Plans", d: "M4 5h16M4 12h10M4 19h13" },
  { label: "Docs", d: "M6 3h8l4 4v14H6z" },
  { label: "Insights", d: "M4 20V10M10 20V4M16 20v-7M22 20H2" },
];

export function AppFrame({
  breadcrumb,
  tabs,
  activeTab,
  children,
  toolbar,
  className = "",
}: {
  breadcrumb: string[];
  tabs: string[];
  activeTab: string;
  children: ReactNode;
  toolbar?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`unitx-surface overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-light-primary/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        </div>
        <div className="ml-2 hidden items-center gap-1.5 text-[11px] text-neutral-500 sm:flex">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-neutral-700">/</span>}
              <span
                className={
                  i === breadcrumb.length - 1
                    ? "font-medium text-neutral-300"
                    : ""
                }
              >
                {crumb}
              </span>
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-md bg-white/[0.05] px-2 py-1 text-[10px] text-neutral-500 md:flex">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            Search or ask UnitX
            <span className="rounded border border-white/10 px-1 text-[9px]">
              ⌘K
            </span>
          </span>
          <AvatarStack names={["Ayesha Khan", "Marco Silva", "Dev Rao"]} />
        </div>
      </div>

      <div className="flex">
        {/* icon rail */}
        <div className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-white/[0.07] bg-black/20 py-3 sm:flex">
          <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-light-primary to-primary text-[11px] font-bold text-white">
            UX
          </span>
          {railItems.map((item, i) => (
            <span
              key={item.label}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                i === 1 ? "bg-white/[0.08] text-neutral-200" : "text-neutral-600"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={item.d} />
              </svg>
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          {/* view tabs */}
          <div className="flex items-center gap-1 overflow-x-auto border-b border-white/[0.07] px-3 py-2 no-scrollbar">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-medium ${
                  tab === activeTab
                    ? "bg-white/[0.09] text-neutral-100"
                    : "text-neutral-500"
                }`}
              >
                {tab}
              </span>
            ))}
            <span className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
              {toolbar}
            </span>
          </div>

          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function ToolbarButton({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-[10px] text-neutral-400">
      {children}
    </span>
  );
}
