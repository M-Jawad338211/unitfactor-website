"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "../shared/count-up";

const stats = [
  { value: "70+", label: "projects delivered" },
  { value: "12", label: "industries served" },
  { value: "90%", label: "repeat collaboration" },
];

export default function Talents() {
  return (
    <section className="relative pb-16 pt-32 md:pt-40 xl:pt-44">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-neutral-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300">
              About Unitfactor
            </span>

            <motion.h1
              initial={{ opacity: 0, y: -22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-6 max-w-4xl text-neutral-200"
            >
              A product agency for teams that need{" "}
              <span className="text-light-primary">clarity</span> before speed.
            </motion.h1>
          </div>

          <div className="rounded-[36px] bg-zinc-800/70 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-neutral-300">
              We combine product thinking, design craft, and full-stack
              engineering so founders and product teams can move from idea to a
              dependable release without stitching together separate vendors.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-neutral-200/10 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-neutral-200/[0.18]"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[32px] bg-zinc-800/60 px-6 py-7"
            >
              <p className="text-4xl font-semibold text-light-primary sm:text-5xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-neutral-400">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
