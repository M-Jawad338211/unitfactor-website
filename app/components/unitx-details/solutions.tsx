"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Crown,
  Megaphone,
  ServerCog,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Solution = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  outcomes: string[];
  agents: { name: string; job: string }[];
  template: string;
  metric: { value: string; label: string };
};

const solutions: Solution[] = [
  {
    id: "engineering",
    label: "Product & Engineering",
    icon: Code2,
    headline: "Ship the roadmap you committed to",
    body: "Sprints, backlogs, bug triage, and release notes in the same place as the specs and the goals they serve — with Git, CI, and your AI coding tools wired straight into the task.",
    outcomes: [
      "Plan and run sprints with real capacity, not optimism",
      "Triage bugs automatically by severity, component, and owner",
      "Link branches, PRs, and deploys to the task that asked for them",
    ],
    agents: [
      { name: "Sprint Planner", job: "builds a sprint you can finish" },
      { name: "Triage Agent", job: "sorts every incoming bug" },
      { name: "Release Scribe", job: "writes the changelog" },
    ],
    template: "Agile delivery + incident response",
    metric: { value: "31%", label: "shorter cycle time in the first quarter" },
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    headline: "Campaigns that stop dying in review",
    body: "Briefs, calendars, creative proofing, and approvals in one flow, so the asset that shipped is the one the brief asked for and the launch date stops moving.",
    outcomes: [
      "One editorial calendar across web, lifecycle, social, and paid",
      "Proofing and versioned approvals on every creative asset",
      "Campaign performance rolled up against the goal it serves",
    ],
    agents: [
      { name: "Brief Agent", job: "turns a request into a full brief" },
      { name: "Brand Checker", job: "flags off-guideline copy and assets" },
      { name: "Status Reporter", job: "sends the weekly campaign digest" },
    ],
    template: "Campaign management + content calendar",
    metric: { value: "2.4×", label: "more campaigns shipped per quarter" },
  },
  {
    id: "agencies",
    label: "Agencies & Client Services",
    icon: Briefcase,
    headline: "Every client in one platform. Never in each other's data.",
    body: "This is where UnitX is genuinely different. Each client gets a hard-isolated workspace with its own branding, permissions, and portal — while your team works across all of them from a single view.",
    outcomes: [
      "Client portals with scoped access to exactly what they should see",
      "Billables, budgets, and retainer burn tracked per engagement",
      "Portfolio view across every client without breaking isolation",
    ],
    agents: [
      { name: "Scope Guard", job: "flags out-of-scope requests early" },
      { name: "Status Reporter", job: "writes each client's weekly update" },
      { name: "Intake Router", job: "files client requests to the right pod" },
    ],
    template: "Client delivery + retainer operations",
    metric: { value: "12h", label: "of reporting time returned per week" },
  },
  {
    id: "it",
    label: "IT & Operations",
    icon: ServerCog,
    headline: "Requests that route themselves",
    body: "Service desk, asset tracking, vendor reviews, and change management with SLAs that are enforced by the workflow rather than remembered by a person.",
    outcomes: [
      "Multi-channel intake from portal, email, Slack, and API",
      "SLA timers, escalation paths, and on-call paging built in",
      "Asset, licence, and vendor records linked to the work they touch",
    ],
    agents: [
      { name: "Triage Agent", job: "classifies and routes every ticket" },
      { name: "Knowledge Agent", job: "turns resolved tickets into guides" },
      { name: "Risk Radar", job: "catches SLA breaches before they land" },
    ],
    template: "Service management + change control",
    metric: { value: "90%", label: "of tickets triaged without a human" },
  },
  {
    id: "people",
    label: "People & HR",
    icon: UsersRound,
    headline: "Onboarding that doesn't depend on one person remembering",
    body: "Hiring pipelines, onboarding journeys, performance cycles, and policy docs on a platform with the permission model to hold sensitive records safely.",
    outcomes: [
      "Role-scoped access so private records stay private",
      "Onboarding checklists that trigger IT, payroll, and manager tasks",
      "Review cycles, surveys, and headcount planning in one place",
    ],
    agents: [
      { name: "Onboarding Agent", job: "runs day-1 to day-90 automatically" },
      { name: "Pulse Agent", job: "collects and summarises sentiment" },
      { name: "Doc Drafter", job: "keeps policy docs current" },
    ],
    template: "Hiring pipeline + employee lifecycle",
    metric: { value: "4 days", label: "faster time-to-productive for new hires" },
  },
  {
    id: "leadership",
    label: "Leadership & PMO",
    icon: Crown,
    headline: "Close the gap between the strategy and the work",
    body: "Company goals that connect down to the tasks moving them, portfolio health you can trust, and a status report that is generated rather than assembled.",
    outcomes: [
      "Goal trees from company OKR to the individual task",
      "Portfolio health, spend, and risk across every programme",
      "Board-ready reporting that refreshes itself",
    ],
    agents: [
      { name: "Risk Radar", job: "surfaces at-risk programmes early" },
      { name: "Executive Digest", job: "compiles the Monday briefing" },
      { name: "Forecast Agent", job: "models delivery dates from velocity" },
    ],
    template: "Portfolio management + OKR tracking",
    metric: { value: "1 source", label: "of truth for every steering committee" },
  },
];

export default function UnitXSolutions() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];
  const Icon = current.icon;

  return (
    <section id="solutions" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
            Built for every team
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Same platform.{" "}
            <span className="text-light-primary">Different job.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            A generic tool makes every team bend to it. UnitX ships opinionated
            starting points per function — then gets out of the way when yours
            works differently.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {solutions.map((solution) => {
            const TabIcon = solution.icon;
            const isActive = solution.id === active;
            return (
              <button
                key={solution.id}
                type="button"
                onClick={() => setActive(solution.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-light-primary/40 bg-light-primary/12 text-neutral-100"
                    : "border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:text-neutral-200"
                }`}
              >
                <TabIcon
                  className={`h-4 w-4 ${isActive ? "text-light-primary" : "text-neutral-500"}`}
                />
                {solution.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-8 grid grid-cols-1 gap-4 overflow-hidden rounded-[36px] border border-white/[0.07] bg-white/[0.025] p-6 sm:p-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10"
          >
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-light-primary/12 text-light-primary ring-1 ring-inset ring-light-primary/20">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-neutral-100 sm:text-3xl">
                {current.headline}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
                {current.body}
              </p>

              <ul className="mt-7 space-y-3">
                {current.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-primary/15 text-[10px] text-light-primary">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-neutral-300">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contacts"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
              >
                See the {current.label.toLowerCase()} setup
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-[24px] border border-white/[0.07] bg-black/25 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Agents on this team
                </span>
                <div className="mt-4 space-y-3">
                  {current.agents.map((agent) => (
                    <div key={agent.name} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-400/12 text-[11px] text-violet-300 ring-1 ring-inset ring-violet-400/25">
                        ✦
                      </span>
                      <span className="text-sm leading-snug text-neutral-300">
                        <span className="font-medium text-neutral-100">
                          {agent.name}
                        </span>{" "}
                        <span className="text-neutral-500">— {agent.job}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/[0.07] bg-black/25 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Starter blueprint
                </span>
                <p className="mt-3 text-sm text-neutral-300">
                  {current.template}
                </p>
                <p className="mt-1.5 text-xs text-neutral-500">
                  Deployed in one click, editable down to every status.
                </p>
              </div>

              <div className="rounded-[24px] border border-light-primary/20 bg-linear-to-b from-light-primary/[0.09] to-transparent p-5">
                <span className="block font-display text-3xl font-semibold text-neutral-100">
                  {current.metric.value}
                </span>
                <span className="mt-1.5 block text-xs leading-relaxed text-neutral-400">
                  {current.metric.label}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
