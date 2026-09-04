"use client";

/**
 * ────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER SOCIAL PROOF
 *
 * The quotes, names, companies, ratings and impact figures below are
 * illustrative design content for a pre-launch product page. Replace every
 * item in `impact`, `testimonials` and `awards` with verified customer
 * evidence before this page goes live.
 * ────────────────────────────────────────────────────────────────────────────
 */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import CountUp from "../shared/count-up";

const impact = [
  { value: "31%", label: "faster delivery cycles", sub: "median, first quarter" },
  { value: "18", label: "hours saved per person", sub: "every month, on average" },
  { value: "6", label: "tools consolidated", sub: "typical rollout" },
  { value: "94%", label: "on-time completion", sub: "after 90 days on UnitX" },
];

const testimonials = [
  {
    quote:
      "We used to run eleven client accounts across three tools and a shared drive nobody trusted. Now every client has their own walled workspace and I still get one portfolio view on Monday morning.",
    name: "Operations Director",
    role: "Digital agency, 60 people",
    company: "Northwind Studio",
    metric: "11 client workspaces",
  },
  {
    quote:
      "The thing that sold engineering was that the timeline actually moves when a dependency slips. We stopped maintaining a roadmap deck entirely — the roadmap is just the data now.",
    name: "VP Engineering",
    role: "Fintech platform, Series C",
    company: "Meridian Pay",
    metric: "3.4 day cycle time",
  },
  {
    quote:
      "Our compliance team approved it in a week instead of a quarter. Row-level isolation and per-workspace keys answered about forty questions on the questionnaire by themselves.",
    name: "Head of IT",
    role: "Healthcare group, 1,200 staff",
    company: "Alder Health",
    metric: "7 day security review",
  },
];

const awards = [
  { label: "4.8 / 5", sub: "average product rating" },
  { label: "Top 50", sub: "work management, 2026" },
  { label: "Leader", sub: "collaboration, mid-market" },
  { label: "Users love us", sub: "third-party review badge" },
];

export default function UnitXProof() {
  return (
    <section id="proof" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-[-15%] top-1/4 -z-10 h-[36rem] bg-[radial-gradient(circle_at_25%_40%,rgba(227,81,81,0.14),transparent_58%)] blur-3xl" />

      <div className="site-container">
        {/* impact band */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((stat) => (
            <div key={stat.label} className="bg-[#0b0b0d] px-7 py-9 text-center">
              <span className="block font-display text-4xl font-semibold text-neutral-100 sm:text-5xl">
                <CountUp value={stat.value} />
              </span>
              <span className="mt-3 block text-sm font-medium text-neutral-300">
                {stat.label}
              </span>
              <span className="mt-1 block text-xs text-neutral-500">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              What changes
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              Teams stop{" "}
              <span className="text-light-primary">managing the tool</span> and
              start managing the work.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 lg:justify-self-end lg:text-lg">
            The pattern is consistent: the first week is imports and templates,
            the second is automations, and by week four nobody is asking for a
            status update because the status is already on the screen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 transition-colors hover:border-white/15"
            >
              <Quote className="h-6 w-6 shrink-0 text-light-primary/70" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-neutral-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.07] pt-5">
                <span className="block text-sm font-semibold text-neutral-100">
                  {item.name}
                </span>
                <span className="mt-0.5 block text-xs text-neutral-500">
                  {item.role} · {item.company}
                </span>
                <span className="mt-3 inline-flex rounded-full bg-light-primary/12 px-3 py-1 text-[11px] font-medium text-light-primary">
                  {item.metric}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 rounded-[28px] border border-white/[0.07] bg-white/[0.02] p-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <div
              key={award.label}
              className="flex items-center gap-3 rounded-2xl bg-black/25 px-4 py-3.5"
            >
              <Star className="h-4 w-4 shrink-0 fill-light-primary text-light-primary" />
              <span>
                <span className="block text-sm font-semibold text-neutral-100">
                  {award.label}
                </span>
                <span className="block text-[11px] text-neutral-500">
                  {award.sub}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
