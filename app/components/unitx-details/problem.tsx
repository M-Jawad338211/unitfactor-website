"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const symptoms = [
  {
    stat: "9",
    unit: "tools",
    title: "The average project touches nine of them",
    body: "A brief in one app, tasks in another, decisions buried in chat, and the only real status report living in someone's head.",
  },
  {
    stat: "1",
    unit: "day / week",
    title: "Lost to hunting, not doing",
    body: "Status pings, duplicated updates, and the weekly ritual of rebuilding a roadmap deck that is stale before the meeting ends.",
  },
  {
    stat: "60%",
    unit: "of context",
    title: "Never reaches the people who need it",
    body: "And it never reaches your AI either. An assistant without context is just an expensive autocomplete.",
  },
];

export default function UnitXProblem() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
            The work sprawl problem
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Your plan lives in one tool.
            <br />
            Your work lives in{" "}
            <span className="text-light-primary">nine others</span>.
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Nobody set out to build it this way. It accumulated — one tool per
            problem, until the coordination cost outgrew the work itself.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {symptoms.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 transition-colors hover:border-white/15"
            >
              <div className="unitx-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_70%)]" />
              <div className="relative">
                <span className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold text-neutral-100">
                    {item.stat}
                  </span>
                  <span className="text-sm font-medium text-light-primary">
                    {item.unit}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-neutral-200">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-base text-neutral-300 sm:text-lg">
            UnitX is the correction: one platform where the plan, the work, and
            the proof of progress are the same object.
          </p>
          <Link
            href="#views"
            className="inline-flex items-center gap-2 text-sm font-semibold text-light-primary transition-colors hover:text-neutral-200"
          >
            See how it fits together
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
