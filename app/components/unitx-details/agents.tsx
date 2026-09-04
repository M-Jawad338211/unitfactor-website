"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  Bot,
  Boxes,
  Building2,
  CircleDollarSign,
  Eye,
  FileSearch,
  GitPullRequestArrow,
  Radar,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Split,
  UserRoundCog,
  type LucideIcon,
} from "lucide-react";
import { Avatar, Progress } from "./ui-kit";

const agents: {
  name: string;
  role: string;
  body: string;
  icon: LucideIcon;
  skills: string[];
  metric: string;
}[] = [
  {
    name: "Sprint Planner",
    role: "Planning",
    icon: Split,
    body: "Reads the backlog, your velocity, and everyone's real capacity, then proposes a sprint you can actually finish.",
    skills: ["Capacity modelling", "Scope negotiation", "Dependency mapping"],
    metric: "Cuts planning meetings from 90 to 20 minutes",
  },
  {
    name: "Triage Agent",
    role: "Intake",
    icon: FileSearch,
    body: "Every bug report, support escalation, and request form arrives labelled, prioritised, deduped, and routed to an owner.",
    skills: ["Duplicate detection", "Severity scoring", "Auto-routing"],
    metric: "Handles 90% of intake without a human touch",
  },
  {
    name: "Status Reporter",
    role: "Comms",
    icon: ScrollText,
    body: "Writes the weekly update from what actually happened — shipped, slipped, blocked — in your team's voice, not a template's.",
    skills: ["Executive summaries", "Slack digests", "Client updates"],
    metric: "Replaces the Friday status scramble",
  },
  {
    name: "Risk Radar",
    role: "Delivery",
    icon: Radar,
    body: "Watches dependencies, velocity, and open blockers and raises the flag while there is still time to do something about it.",
    skills: ["Slippage forecasting", "Blocker escalation", "Baseline drift"],
    metric: "Flags at-risk milestones 11 days earlier",
  },
  {
    name: "Doc Drafter",
    role: "Knowledge",
    icon: GitPullRequestArrow,
    body: "Turns a call transcript or a thread into a spec, extracts the decisions, and opens the follow-up tasks with owners attached.",
    skills: ["Spec drafting", "Decision logs", "Task extraction"],
    metric: "Every decision ends up written down",
  },
  {
    name: "Build your own",
    role: "Custom",
    icon: UserRoundCog,
    body: "Describe the job in plain language, pick the tools and data it may touch, run it in simulation, then let it work.",
    skills: ["No-code builder", "Scoped tool access", "Simulation mode"],
    metric: "From idea to working agent in an afternoon",
  },
];

const contextSources = [
  { label: "Tasks & sprints", icon: Boxes },
  { label: "Docs & decisions", icon: ScrollText },
  { label: "Goals & dashboards", icon: Activity },
  { label: "Comments & threads", icon: Sparkles },
  { label: "Connected apps", icon: Building2 },
  { label: "Workspace history", icon: Eye },
];

const governance: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Scoped permissions",
    body: "An agent inherits a role, not your admin rights. It sees exactly what that role sees — nothing else.",
    icon: ShieldCheck,
  },
  {
    title: "Simulation mode",
    body: "Run any agent in dry-run against real data and review every action it would have taken before it takes one.",
    icon: Eye,
  },
  {
    title: "Full audit trail",
    body: "Every agent action is logged with its reasoning, inputs, and outputs — exportable for your auditors.",
    icon: BadgeCheck,
  },
  {
    title: "Spend controls",
    body: "Budgets and alerts per team, per agent. No surprise invoice at the end of the quarter.",
    icon: CircleDollarSign,
  },
];

export default function UnitXAgents() {
  return (
    <section id="agents" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-[-15%] top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.16),transparent_58%)] blur-3xl" />

      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300">
            <Bot className="h-3.5 w-3.5" />
            AI teammates
          </span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Not a chatbot in the corner.
            <br />
            A teammate with a{" "}
            <span className="text-light-primary">job description</span>.
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            UnitX agents hold a role, own tasks, appear in the workload view,
            and are held to the same permissions as everyone else. They work
            inside your workspace — which is the only reason they are useful.
          </p>
        </div>

        {/* agent roster */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            const isCustom = agent.role === "Custom";
            return (
              <motion.article
                key={agent.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-6 transition-colors ${
                  isCustom
                    ? "border-light-primary/25 bg-linear-to-b from-light-primary/[0.09] to-transparent hover:border-light-primary/45"
                    : "border-white/[0.07] bg-white/[0.025] hover:border-violet-400/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset ${
                      isCustom
                        ? "bg-light-primary/15 text-light-primary ring-light-primary/25"
                        : "bg-violet-400/12 text-violet-300 ring-violet-400/25"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-neutral-100">
                      {agent.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                      {agent.role}
                    </span>
                  </div>
                  <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-white/[0.05] px-2 py-1 text-[9.5px] text-neutral-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ready
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {agent.body}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {agent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10.5px] text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <span className="block border-t border-white/[0.07] pt-4 text-xs text-neutral-500">
                    {agent.metric}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* context + live run */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
            <h3 className="font-display text-xl font-semibold text-neutral-100 sm:text-2xl">
              An agent is only as good as its context
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Bolt an assistant onto a tool that holds a fraction of your work
              and you get confident nonsense. UnitX agents read the whole
              workspace — because the whole workspace is already in one place.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {contextSources.map((source) => {
                const Icon = source.icon;
                return (
                  <span
                    key={source.label}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/25 px-3 py-2.5"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-violet-300" />
                    <span className="truncate text-[11.5px] text-neutral-400">
                      {source.label}
                    </span>
                  </span>
                );
              })}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-neutral-500">
              Your data is never used to train a model. Bring your own key for
              Claude, GPT, or Gemini, or run on ours.
            </p>
          </div>

          {/* live agent run mockup */}
          <div className="unitx-surface overflow-hidden rounded-[28px] border border-white/10">
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-400/15 text-violet-300">
                <Sparkles className="h-3 w-3" />
              </span>
              <span className="text-xs font-medium text-neutral-300">
                Agent run · Sprint Planner
              </span>
              <span className="ml-auto text-[10px] text-neutral-600">
                Simulation
              </span>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex gap-3">
                <Avatar name="Ayesha Khan" size="sm" ring={false} />
                <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] px-3.5 py-2.5">
                  <span className="text-[12px] leading-relaxed text-neutral-300">
                    Plan sprint 25. Protect the SOC 2 work, and don&apos;t put
                    Marco over 100%.
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.05] p-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-violet-300">
                    ✦ Sprint Planner
                  </span>
                  <span className="ml-auto text-[9.5px] text-neutral-600">
                    worked 38s
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { text: "Read 128 backlog items and last 6 sprints", done: true },
                    { text: "Locked 3 compliance tasks into scope", done: true },
                    { text: "Moved 2 tasks from Marco → Farah", done: true },
                    { text: "Drafted sprint goal + standup note", done: true },
                  ].map((step) => (
                    <span key={step.text} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/80 text-[8px] text-black">
                        ✓
                      </span>
                      <span className="text-[11.5px] text-neutral-400">
                        {step.text}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-white/[0.07] bg-black/30 p-3">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-neutral-400">
                      Proposed sprint 25 · 48 pts
                    </span>
                    <span className="text-emerald-400">94% confidence</span>
                  </div>
                  <Progress className="mt-2" value={94} tone="emerald" />
                </div>

                <div className="mt-3 flex gap-2">
                  <span className="rounded-lg bg-light-primary px-3 py-1.5 text-[10.5px] font-semibold text-white">
                    Apply plan
                  </span>
                  <span className="rounded-lg border border-white/12 px-3 py-1.5 text-[10.5px] text-neutral-400">
                    Review 9 changes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* governance */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {governance.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <Icon className="h-5 w-5 text-light-primary" />
                <h4 className="mt-4 text-sm font-semibold text-neutral-200">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
