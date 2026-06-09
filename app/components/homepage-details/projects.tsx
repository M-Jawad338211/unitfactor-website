"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "../shared/count-up";

interface FeatureItem {
  title: string;
  detail: string;
  icon: LucideIcon;
}

const featureItems: FeatureItem[] = [
  {
    title: "Flexible collaboration models",
    detail:
      "Engage us for a focused launch, a monthly product pod, or milestone-based design and engineering support.",
    icon: Rocket,
  },
  {
    title: "Transparent communication",
    detail:
      "Get clear priorities, visible progress, and direct access to the people shaping and building your product.",
    icon: MessagesSquare,
  },
  {
    title: "Reliable timelines",
    detail:
      "We plan releases around realistic milestones, ownership, and the decisions needed to keep momentum.",
    icon: Clock3,
  },
  {
    title: "Quality that keeps scaling",
    detail:
      "Our design systems and code patterns are built to stay maintainable after the first launch.",
    icon: ShieldCheck,
  },
];

const agencyStats = [
  { value: "70+", label: "successful projects" },
  { value: "40+", label: "long-term clients" },
  { value: "12", label: "industries served" },
  { value: "90%", label: "repeat collaboration" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Why Unitfactor
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 max-w-3xl font-display font-semibold"
            >
              Why teams <span className="text-light-primary">choose</span>{" "}
              Unitfactor.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-neutral-300 lg:justify-self-end">
            Teams choose us when they need execution without chaos: product
            thinking, polished design, dependable engineering, and a process
            that keeps business goals visible.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[36px] bg-zinc-800/70">
            <Image
              src="/png/av-lab-3.png"
              alt="Agency project delivery preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/78 via-black/18 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-black/45 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                Delivery focus
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-neutral-200">
                One team connecting product decisions, user experience, and
                production engineering.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {featureItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-4 rounded-[32px] bg-zinc-800/70 p-5 sm:grid-cols-[56px_1fr] sm:p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/24">
                    <Icon className="h-6 w-6 text-neutral-200" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-200 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300 sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-[36px] bg-zinc-800/55 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {agencyStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-semibold text-neutral-200 sm:text-5xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
          >
            Explore projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center rounded-full bg-neutral-200/10 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-neutral-200/[0.18]"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
