"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Bot,
  GitBranch,
  Mail,
  Repeat,
  ShieldCheck,
  Timer,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Avatar } from "./ui-kit";

const recipes = [
  {
    when: "a form is submitted",
    then: "create a task, route it by team, and post to #intake",
    icon: Zap,
  },
  {
    when: "status moves to In review",
    then: "request approval from the design lead and start the SLA clock",
    icon: ShieldCheck,
  },
  {
    when: "a due date slips",
    then: "shift dependents, notify the owner, and flag the milestone",
    icon: Timer,
  },
  {
    when: "a PR is merged",
    then: "close the task, log the release note, and thank the reviewer",
    icon: GitBranch,
  },
  {
    when: "a sprint ends",
    then: "roll over unfinished work and generate the retro doc",
    icon: Repeat,
  },
  {
    when: "a client comments",
    then: "create a request, assign an owner, and reply with an ETA",
    icon: Mail,
  },
];

const stats = [
  { value: "300+", label: "prebuilt recipes" },
  { value: "0", label: "lines of code required" },
  { value: "18", label: "avg. hours saved per person, per month" },
];

function Node({
  kind,
  title,
  detail,
  icon: Icon,
  tone,
}: {
  kind: string;
  title: string;
  detail: string;
  icon: LucideIcon;
  tone: "brand" | "sky" | "violet" | "emerald";
}) {
  const tones = {
    brand: "border-light-primary/30 bg-light-primary/[0.07] text-light-primary",
    sky: "border-sky-400/25 bg-sky-400/[0.06] text-sky-300",
    violet: "border-violet-400/25 bg-violet-400/[0.06] text-violet-300",
    emerald: "border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-300",
  } as const;

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#111113] p-3.5 shadow-lg">
      <div className="flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg border ${tones[tone]}`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[9.5px] font-semibold uppercase tracking-wider text-neutral-600">
          {kind}
        </span>
      </div>
      <span className="mt-2.5 block text-[12.5px] font-medium leading-snug text-neutral-200">
        {title}
      </span>
      <span className="mt-1 block text-[10.5px] leading-relaxed text-neutral-500">
        {detail}
      </span>
    </div>
  );
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-2 lg:h-full lg:py-0">
      <div className="flex flex-col items-center gap-1 lg:flex-row">
        <span className="h-5 w-px bg-linear-to-b from-white/5 via-white/25 to-white/5 lg:h-px lg:w-8 lg:bg-linear-to-r" />
        {label && (
          <span className="rounded border border-white/[0.09] bg-[#141416] px-1.5 py-0.5 text-[8.5px] text-neutral-500">
            {label}
          </span>
        )}
        <span className="h-5 w-px bg-linear-to-b from-white/5 via-white/25 to-white/5 lg:h-px lg:w-8 lg:bg-linear-to-r" />
      </div>
    </div>
  );
}

export default function UnitXAutomations() {
  return (
    <section
      id="automations"
      className="scroll-mt-40 relative border-y border-white/[0.06] bg-black/20 py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Automations &amp; workflows
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              Describe the process once.
              <br />
              Then <span className="text-light-primary">never do it again</span>.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 lg:justify-self-end lg:text-lg">
            Triggers, conditions, branches, delays, approvals, and agent steps —
            assembled on a canvas, versioned like code, and testable before they
            touch a single real task.
          </p>
        </div>

        {/* workflow canvas */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="unitx-surface relative mt-12 overflow-hidden rounded-[32px] border border-white/10 p-5 sm:p-8"
        >
          <div className="unitx-dots pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative flex items-center gap-3 border-b border-white/[0.07] pb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-light-primary to-primary text-white">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-sm font-semibold text-neutral-200">
                Incident intake &amp; escalation
              </span>
              <span className="block text-[10.5px] text-neutral-500">
                v7 · edited 2h ago by Sam Ortiz · 1,284 runs this month
              </span>
            </div>
            <span className="ml-auto flex items-center gap-2">
              <span className="hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-neutral-400 sm:inline">
                Test run
              </span>
              <span className="flex items-center gap-1.5 rounded-md bg-emerald-400/12 px-2 py-1 text-[10px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/25">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </span>
          </div>

          <div className="relative mt-6 grid grid-cols-1 items-center gap-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
            <Node
              kind="Trigger"
              title="A ticket is created"
              detail="From the portal, email, Slack, or the public API"
              icon={Webhook}
              tone="brand"
            />
            <Connector />
            <Node
              kind="Agent step"
              title="Triage Agent classifies it"
              detail="Severity, component, duplicate check, suggested owner"
              icon={Bot}
              tone="violet"
            />
            <Connector label="if P1" />
            <div className="space-y-2.5">
              <Node
                kind="Action"
                title="Page the on-call rotation"
                detail="Slack + SMS, escalates after 10 minutes of silence"
                icon={Bell}
                tone="sky"
              />
              <Node
                kind="Action"
                title="Open an incident doc"
                detail="Timeline, comms draft, and a post-mortem task"
                icon={Mail}
                tone="emerald"
              />
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-3">
            <Avatar name="Sam Ortiz" size="sm" ring={false} />
            <span className="text-[11px] text-neutral-400">
              Last run resolved <span className="text-neutral-200">UX-1188</span>{" "}
              in 4m 12s — no human touched it
            </span>
            <span className="ml-auto flex items-center gap-1 text-[10px] text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              99.4% success rate
            </span>
          </div>
        </motion.div>

        {/* recipes */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {recipes.map((recipe, i) => {
            const Icon = recipe.icon;
            return (
              <motion.div
                key={recipe.when}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-light-primary/25"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-neutral-500 transition-colors group-hover:text-light-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[13px] leading-relaxed text-neutral-400">
                  <span className="font-semibold text-neutral-500">When </span>
                  <span className="text-neutral-300">{recipe.when}</span>
                  <span className="font-semibold text-neutral-500">, then </span>
                  <span className="text-neutral-300">{recipe.then}</span>
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-3xl font-semibold text-neutral-100">
                {stat.value}
              </span>
              <span className="mt-1 block max-w-[180px] text-xs text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
