"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  GanttChartSquare,
  Kanban,
  LayoutList,
  PieChart,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { AppFrame, ToolbarButton } from "./ui-kit";
import {
  BoardView,
  CalendarView,
  DashboardView,
  DocView,
  ListView,
  TableView,
  TimelineView,
  WorkloadView,
} from "./mockups";

type ViewDef = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  bullets: string[];
  toolbar: string[];
  render: () => React.ReactElement;
};

const views: ViewDef[] = [
  {
    id: "board",
    label: "Board",
    icon: Kanban,
    headline: "Move work, not spreadsheets",
    body: "Drag a card and the status, the sprint, the owner's workload, and the executive dashboard all update in the same breath.",
    bullets: [
      "Group by status, owner, sprint, epic, or any custom field",
      "Swimlanes, WIP limits, and per-column automation rules",
      "Cards carry subtasks, dependencies, files, and time tracking",
    ],
    toolbar: ["Group: Status", "Filter"],
    render: () => <BoardView />,
  },
  {
    id: "list",
    label: "List",
    icon: LayoutList,
    headline: "The density power users ask for",
    body: "Everything on one screen, sorted the way you think. Multi-select, bulk-edit, and keyboard-first from the first row to the last.",
    bullets: [
      "Nested subtasks with inline editing on every field",
      "Saved filters per person, shared filters per team",
      "Bulk actions across hundreds of tasks in one keystroke",
    ],
    toolbar: ["Sort: Due", "Group: Sprint"],
    render: () => <ListView />,
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: GanttChartSquare,
    headline: "Dependencies that hold the line",
    body: "Drag a milestone and every downstream date moves with it. Baselines stay pinned, so slippage is visible the day it happens — not at the retro.",
    bullets: [
      "Critical path, lag, and lead times across teams",
      "Baseline vs. actual on every milestone",
      "Portfolio roll-up across programmes and clients",
    ],
    toolbar: ["Zoom: Quarter", "Baseline on"],
    render: () => <TimelineView />,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    headline: "The week your team actually has",
    body: "Deadlines, launches, content slots, and time off in one grid — synced two ways with Google Calendar and Outlook.",
    bullets: [
      "Two-way sync with Google Calendar and Microsoft 365",
      "Drag to reschedule; dependencies follow automatically",
      "Editorial, release, and capacity calendars from one dataset",
    ],
    toolbar: ["Month", "Sync: on"],
    render: () => <CalendarView />,
  },
  {
    id: "table",
    label: "Table",
    icon: Table2,
    headline: "A database, without leaving the plan",
    body: "Formulas, rollups, budget columns, and forecast confidence — the flexibility of a spreadsheet with none of the version chaos.",
    bullets: [
      "25 field types including formula, rollup, and relation",
      "Column-level permissions and locked calculations",
      "Live totals, budget burn, and forecast confidence",
    ],
    toolbar: ["Fields: 6", "Σ Totals"],
    render: () => <TableView />,
  },
  {
    id: "workload",
    label: "Workload",
    icon: Users,
    headline: "See who is drowning before they say so",
    body: "Capacity per person, per week, based on real estimates — with an agent that proposes the rebalance instead of just reporting the problem.",
    bullets: [
      "Capacity modelling from estimates, not guesswork",
      "Time-off, part-time, and contractor schedules respected",
      "One-click rebalance suggested by the Balancer agent",
    ],
    toolbar: ["Sprint 24", "Hours"],
    render: () => <WorkloadView />,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: PieChart,
    headline: "The status report writes itself",
    body: "Cycle time, burndown, on-time rate, and goal progress computed from the work itself. No exports, no slide decks, no Friday scramble.",
    bullets: [
      "40+ prebuilt widgets, or build your own with formulas",
      "Scheduled digests to Slack, email, or an executive portal",
      "Drill from a company goal down to the task that moved it",
    ],
    toolbar: ["Last 30 days", "Share"],
    render: () => <DashboardView />,
  },
  {
    id: "docs",
    label: "Docs",
    icon: FileText,
    headline: "Where the thinking lives next to the doing",
    body: "Specs, briefs, and decisions in the same workspace as the tasks they create — with live task embeds that never go stale.",
    bullets: [
      "Real-time collaborative editing with version history",
      "Embed live tasks, dashboards, and goals inside any doc",
      "Turn a paragraph into a task without leaving the page",
    ],
    toolbar: ["v14", "2 editing"],
    render: () => <DocView />,
  },
];

const extraViews = [
  "Gantt",
  "Sprints",
  "Whiteboard",
  "Mind map",
  "Forms",
  "Portfolio",
  "Chat",
  "Activity",
];

export default function UnitXViews() {
  const [active, setActive] = useState(views[0].id);
  const current = views.find((v) => v.id === active) ?? views[0];

  return (
    <section id="views" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-[-15%] top-1/4 -z-10 h-[40rem] bg-[radial-gradient(circle_at_70%_40%,rgba(10,50,83,0.34),transparent_60%)] blur-3xl" />

      <div className="site-container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              One dataset, twelve views
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              Everyone sees the work
              <br />
              the way <span className="text-light-primary">they</span> think.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 lg:justify-self-end lg:text-lg">
            A designer wants a board. A PM wants a timeline. Finance wants a
            table. Your VP wants one number. In UnitX these are not exports or
            integrations — they are the same records, rendered differently, and
            they never disagree.
          </p>
        </div>

        {/* tab rail */}
        <div className="mt-12 overflow-x-auto no-scrollbar">
          <div className="flex min-w-max gap-2 pb-1">
            {views.map((view) => {
              const Icon = view.icon;
              const isActive = view.id === active;
              return (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActive(view.id)}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-light-primary/40 bg-light-primary/12 text-neutral-100"
                      : "border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:text-neutral-200"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-light-primary" : "text-neutral-500"}`}
                  />
                  {view.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
          {/* the app */}
          <div className="order-2 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-1.5 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <AppFrame
                  breadcrumb={["Northwind", "Payments 2.0", current.label]}
                  tabs={views.map((v) => v.label)}
                  activeTab={current.label}
                  toolbar={current.toolbar.map((t) => (
                    <ToolbarButton key={t}>{t}</ToolbarButton>
                  ))}
                >
                  {current.render()}
                </AppFrame>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* the explainer */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6 lg:sticky lg:top-28"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-light-primary/12 text-light-primary ring-1 ring-inset ring-light-primary/20">
                  <current.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-neutral-100">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {current.body}
                </p>
                <ul className="mt-5 space-y-3 border-t border-white/[0.07] pt-5">
                  {current.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-primary/70" />
                      <span className="text-sm leading-relaxed text-neutral-400">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-neutral-500">Also included:</span>
          {extraViews.map((view) => (
            <span
              key={view}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-neutral-400"
            >
              {view}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
