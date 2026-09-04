"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { AppFrame, Avatar, Progress, ToolbarButton } from "./ui-kit";
import { BoardView } from "./mockups";

const heroStats = [
  { value: "12", label: "views of the same data" },
  { value: "400+", label: "native integrations" },
  { value: "99.9%", label: "uptime, contractual" },
  { value: "< 5 min", label: "to import your first project" },
];

export default function UnitXHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-x-[-20%] top-[-14rem] -z-10 h-[46rem] bg-[radial-gradient(circle_at_50%_30%,rgba(227,81,81,0.20),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[-20%] top-[18rem] -z-10 h-[50rem] bg-[radial-gradient(circle_at_20%_40%,rgba(10,50,83,0.42),transparent_58%)] blur-3xl" />
      <div className="unitx-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />

      <div className="site-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="#agents"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-light-primary to-primary px-2.5 py-1 text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" />
                New
              </span>
              <span>UnitX 3.0 — AI teammates that actually do the work</span>
              <ArrowRight className="h-3.5 w-3.5 text-neutral-500 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="mt-7 max-w-[19ch] text-balance font-display text-4xl font-semibold leading-[1.07] tracking-tight text-neutral-100 sm:max-w-[22ch] sm:text-5xl lg:max-w-[24ch] lg:text-[3.9rem]"
          >
            The workspace where plans, people, and progress stay{" "}
            <span className="bg-linear-to-r from-light-primary via-[#f0736f] to-primary bg-clip-text text-transparent">
              in sync
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            UnitX brings projects, workflows, docs, goals, and dashboards into
            one system of record — then puts AI teammates on the busywork.
            Every workspace is isolated at the database layer, so teams and
            their clients can share a platform without ever sharing data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Link
              href="/contacts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-light-primary px-8 py-4 text-sm font-semibold text-white shadow-[0_0_36px_-6px_rgba(227,81,81,0.65)] transition-colors duration-300 hover:bg-primary sm:w-auto"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-white/[0.09] sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Book a live demo
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-500"
          >
            <span>Free forever for up to 5 members</span>
            <span className="text-neutral-700">•</span>
            <span>No credit card</span>
            <span className="text-neutral-700">•</span>
            <span>SOC 2 Type II &amp; ISO 27001</span>
          </motion.p>
        </div>

        {/* ------------------------------------------------ product window */}
        <motion.div
          initial={{ opacity: 0, y: 46 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 max-w-6xl sm:mt-16"
        >
          <div className="pointer-events-none absolute -inset-x-10 -top-6 bottom-0 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(227,81,81,0.20),transparent_65%)] blur-2xl" />

          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-1.5 sm:p-2">
            <AppFrame
              breadcrumb={["Northwind", "Payments 2.0", "Sprint 24"]}
              tabs={[
                "Board",
                "List",
                "Timeline",
                "Calendar",
                "Table",
                "Workload",
                "Dashboard",
              ]}
              activeTab="Board"
              toolbar={
                <>
                  <ToolbarButton>Group: Status</ToolbarButton>
                  <ToolbarButton>Filter</ToolbarButton>
                  <span className="inline-flex items-center gap-1 rounded-md bg-linear-to-r from-light-primary to-primary px-2 py-1 text-[10px] font-semibold text-white">
                    <Sparkles className="h-2.5 w-2.5" />
                    Ask UnitX
                  </span>
                </>
              }
            >
              <BoardView />
            </AppFrame>
          </div>

          {/* floating: agent activity */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
            className="unitx-glass absolute -bottom-10 -left-4 hidden w-[248px] rounded-2xl border border-white/10 p-3.5 shadow-2xl lg:block xl:-left-10"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/15 text-violet-300 ring-1 ring-inset ring-violet-400/25">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-[11px] font-semibold text-neutral-200">
                Sprint Planner
              </span>
              <span className="ml-auto flex items-center gap-1 text-[9px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 unitx-pulse" />
                Active
              </span>
            </div>
            <p className="mt-2.5 text-[11px] leading-relaxed text-neutral-400">
              Rebalanced Sprint 24, flagged 2 at-risk dependencies, and drafted
              the standup note.
            </p>
            <div className="mt-2.5 flex items-center gap-2 text-[9.5px] text-neutral-600">
              <span>Worked 41s</span>
              <span>·</span>
              <span>9 tasks touched</span>
            </div>
          </motion.div>

          {/* floating: goal progress */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="unitx-glass absolute -bottom-10 -right-4 hidden w-[228px] rounded-2xl border border-white/10 p-3.5 shadow-2xl lg:block xl:-right-10"
          >
            <span className="text-[9.5px] uppercase tracking-wider text-neutral-500">
              Company goal
            </span>
            <p className="mt-1.5 text-[11.5px] font-medium leading-snug text-neutral-200">
              Cut checkout failure rate to 0.4%
            </p>
            <Progress className="mt-2.5" value={72} tone="emerald" />
            <div className="mt-2 flex items-center justify-between text-[9.5px]">
              <span className="text-neutral-500">0.71% → 0.48%</span>
              <span className="text-emerald-400">On track</span>
            </div>
            <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/[0.07] pt-2.5">
              <Avatar name="Ayesha Khan" size="xs" ring={false} />
              <span className="text-[9.5px] text-neutral-500">
                4 projects contributing
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* -------------------------------------------------------- stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-10 sm:mt-16 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-2xl font-semibold text-neutral-100 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1.5 block text-xs text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
