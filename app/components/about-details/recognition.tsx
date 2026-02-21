"use client";

import { motion } from "framer-motion";
import { Award, CalendarCheck2, Globe2, Sparkles } from "lucide-react";
import Link from "next/link";

const proofItems = [
  {
    title: "Proven delivery model",
    description: "Clear milestones, predictable communication, and strong execution.",
    icon: CalendarCheck2,
  },
  {
    title: "Global client partnerships",
    description:
      "Trusted by startups and established teams across multiple markets.",
    icon: Globe2,
  },
  {
    title: "Quality-first craft",
    description:
      "Design and engineering standards built for long-term maintainability.",
    icon: Sparkles,
  },
];

const recognitions = [
  "Top Rated profile on Upwork",
  "Official Webflow partner",
  "200k+ LinkedIn followers",
  "50+ Clutch reviews",
];

export default function Recognitions() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-12 lg:px-16 xl:px-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(227,81,81,0.16),transparent_44%)]" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="font-semibold"
        >
          Recognition built on reliable delivery
        </motion.h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/80">
          We focus on long-term client outcomes, not short-term handoffs. That
          consistency is what keeps partnerships strong.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/12 bg-neutral-900/72 p-6 sm:p-8">
          <div className="space-y-3">
            {proofItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-white/5 p-4 transition-colors duration-300 hover:border-light-primary/40 hover:bg-primary/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/8">
                      <Icon className="h-4 w-4 text-light-primary" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article className="rounded-3xl border border-white/12 bg-neutral-900/72 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-3 py-2">
            <Award className="h-4 w-4 text-light-primary" />
            <span className="text-xs font-semibold tracking-[0.1em] text-white/80 uppercase">
              Highlights
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {recognitions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/12 bg-black/35 px-4 py-3 text-left text-sm font-medium text-white/80 sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/portfolio"
            className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            Explore case studies
          </Link>
        </article>
      </div>
    </section>
  );
}
