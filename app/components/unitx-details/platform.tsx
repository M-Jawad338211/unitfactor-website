"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  ArrowRight,
  AtSign,
  Bell,
  Blocks,
  BookOpen,
  Bot,
  Braces,
  CalendarClock,
  ChartNoAxesCombined,
  CheckSquare,
  ClipboardList,
  Clock,
  Cloud,
  Columns3,
  Compass,
  Component,
  CreditCard,
  Filter,
  FolderTree,
  Gauge,
  GitBranch,
  Goal,
  Hash,
  Inbox,
  KeyRound,
  Layers,
  LineChart,
  Link2,
  ListChecks,
  Lock,
  Mail,
  MessageSquare,
  Milestone,
  Network,
  Paperclip,
  PenLine,
  Repeat,
  Search,
  Shapes,
  Shield,
  SlidersHorizontal,
  Split,
  Tag,
  Timer,
  Users,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const pillars: {
  title: string;
  eyebrow: string;
  body: string;
  icon: LucideIcon;
  points: string[];
}[] = [
  {
    eyebrow: "Projects",
    title: "Plan work at any altitude",
    body: "Portfolios, programmes, projects, epics, sprints, tasks, subtasks — one hierarchy that survives a reorg.",
    icon: FolderTree,
    points: ["Custom hierarchies", "Templates & blueprints", "Cross-project dependencies"],
  },
  {
    eyebrow: "Workflows",
    title: "Encode how your team works",
    body: "Statuses, approvals, intake forms, and handoffs modelled once, then reused everywhere without a single line of code.",
    icon: Workflow,
    points: ["Visual workflow builder", "Approval gates & SLAs", "Conditional intake forms"],
  },
  {
    eyebrow: "Docs & Knowledge",
    title: "Keep the why with the what",
    body: "Specs, briefs, wikis, and meeting notes that live beside the tasks they produce — and stay linked as things change.",
    icon: BookOpen,
    points: ["Live task embeds", "Version history", "Workspace-wide search"],
  },
  {
    eyebrow: "Insights",
    title: "Answer the question before it's asked",
    body: "Goals, dashboards, forecasts, and time tracking computed from the work itself, refreshed the moment anything moves.",
    icon: ChartNoAxesCombined,
    points: ["Goal trees & OKRs", "Forecasting", "Scheduled digests"],
  },
];

const capabilities: { label: string; icon: LucideIcon }[] = [
  { label: "Boards", icon: Columns3 },
  { label: "Sprints", icon: Repeat },
  { label: "Backlogs", icon: ListChecks },
  { label: "Milestones", icon: Milestone },
  { label: "Dependencies", icon: Network },
  { label: "Subtasks", icon: Split },
  { label: "Checklists", icon: CheckSquare },
  { label: "Custom fields", icon: SlidersHorizontal },
  { label: "Custom statuses", icon: Tag },
  { label: "Automations", icon: Workflow },
  { label: "Approvals", icon: Shield },
  { label: "Forms & intake", icon: ClipboardList },
  { label: "Time tracking", icon: Timer },
  { label: "Timesheets", icon: Clock },
  { label: "Estimates", icon: Gauge },
  { label: "Capacity planning", icon: Users },
  { label: "Goals & OKRs", icon: Goal },
  { label: "Dashboards", icon: LineChart },
  { label: "Reports", icon: ChartNoAxesCombined },
  { label: "Portfolios", icon: Layers },
  { label: "Docs & wikis", icon: BookOpen },
  { label: "Whiteboards", icon: Shapes },
  { label: "Mind maps", icon: Compass },
  { label: "Proofing", icon: PenLine },
  { label: "File versioning", icon: Paperclip },
  { label: "Comments & @mentions", icon: AtSign },
  { label: "Team chat", icon: MessageSquare },
  { label: "Clips & screen record", icon: Video },
  { label: "Inbox & notifications", icon: Inbox },
  { label: "Reminders", icon: Bell },
  { label: "Recurring tasks", icon: AlarmClock },
  { label: "Calendar sync", icon: CalendarClock },
  { label: "Email in / email out", icon: Mail },
  { label: "Saved views & filters", icon: Filter },
  { label: "Connected search", icon: Search },
  { label: "Tags & labels", icon: Hash },
  { label: "Templates", icon: Component },
  { label: "Guest & client portals", icon: Users },
  { label: "Roles & permissions", icon: KeyRound },
  { label: "Audit log", icon: Lock },
  { label: "SSO / SAML / SCIM", icon: Shield },
  { label: "Budgets & billables", icon: CreditCard },
  { label: "Git & PR linking", icon: GitBranch },
  { label: "Public API & webhooks", icon: Braces },
  { label: "MCP server", icon: Blocks },
  { label: "Data residency", icon: Cloud },
  { label: "Link sharing", icon: Link2 },
  { label: "AI teammates", icon: Bot },
];

export default function UnitXPlatform() {
  return (
    <section
      id="platform"
      className="scroll-mt-40 relative border-y border-white/[0.06] bg-black/20 py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
            The platform
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Four pillars.{" "}
            <span className="text-light-primary">One workspace.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Most teams pay for four products to get this. UnitX ships them as
            one — sharing the same records, the same permissions, and the same
            search index.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.eyebrow}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-linear-to-b from-white/[0.05] to-white/[0.015] p-6 transition-colors hover:border-light-primary/25"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-light-primary/12 text-light-primary ring-1 ring-inset ring-light-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  {pillar.eyebrow}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-100 xl:min-h-[3.5rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {pillar.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/[0.07] pt-4">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-neutral-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-light-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* dense capability wall */}
        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-neutral-200 sm:text-2xl">
              And the 48 things nobody puts on a homepage
            </h3>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 text-sm font-semibold text-light-primary transition-colors hover:text-neutral-200"
            >
              Ask about a specific capability
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group flex items-center gap-2.5 bg-[#0c0c0e] px-3.5 py-3.5 transition-colors hover:bg-white/[0.045]"
                >
                  <Icon className="h-4 w-4 shrink-0 text-neutral-600 transition-colors group-hover:text-light-primary" />
                  <span className="truncate text-[12.5px] text-neutral-400 transition-colors group-hover:text-neutral-200">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
