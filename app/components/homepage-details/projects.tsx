"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CommitmentItem {
  title: string;
  detail: string;
  icon: LucideIcon;
}

const commitmentItems: CommitmentItem[] = [
  {
    title: "Flexible collaboration models",
    detail: "Fixed monthly scope or iterative sprint delivery, based on your team setup.",
    icon: Rocket,
  },
  {
    title: "Reliable timelines",
    detail: "Clear milestones, transparent progress updates, and accountability on every phase.",
    icon: Clock3,
  },
  {
    title: "Quality that scales",
    detail: "Production-ready code and design patterns that stay maintainable as features grow.",
    icon: ShieldCheck,
  },
];

const projectMetrics = [
  { value: "70+", label: "successful projects" },
  { value: "40+", label: "long-term clients" },
  { value: "12", label: "industries served" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 xl:px-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_52%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(227,81,81,0.2),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_80%,rgba(10,50,83,0.35),transparent_48%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
          Project Delivery
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-5 font-semibold"
        >
          A delivery process built for <span className="text-light-primary">predictable</span>{" "}
          outcomes
        </motion.h2>
        <p className="mt-5 text-white/85">
          We combine design clarity with engineering discipline, so projects move
          fast without compromising reliability.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="rounded-3xl border border-white/12 bg-neutral-900/75 p-6 backdrop-blur-sm sm:p-7 lg:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Why teams choose Unitfactor
          </h3>

          <div className="mt-6 space-y-3">
            {commitmentItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-white/5 p-4 transition-colors duration-300 hover:border-light-primary/40 hover:bg-primary/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/8">
                      <Icon className="h-4 w-4 text-light-primary" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-white/75 sm:text-base">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {projectMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/15 bg-black/35 px-4 py-4 text-center"
              >
                <p className="text-2xl font-semibold text-light-primary sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium tracking-[0.06em] text-white/70 uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              Explore projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/12"
            >
              Start a project
            </Link>
          </div>
        </article>

        <aside className="relative overflow-hidden rounded-3xl border border-white/12 bg-neutral-900/70 p-3 sm:p-4">
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[390px] lg:h-full lg:min-h-[540px]">
            <Image
              src="/png/av-lab-3.png"
              alt="Project showcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
          </div>

          <div className="pointer-events-none absolute left-6 top-6 rounded-2xl border border-white/18 bg-black/45 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.08em] text-white/75 uppercase">
              Delivery track
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Strategy, design, and development in one team
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-6 right-6 rounded-2xl border border-light-primary/45 bg-primary/25 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.08em] text-white/80 uppercase">
              Current focus
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Product modernization and growth loops
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
