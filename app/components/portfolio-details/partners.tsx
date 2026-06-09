"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "../shared/count-up";

const focusAreas = [
  "SaaS Platforms",
  "B2B Products",
  "Healthcare",
  "Fintech",
  "AI Workflows",
];

const stats = [
  { value: "70+", label: "projects delivered" },
  { value: "90%", label: "repeat clients" },
  { value: "12+", label: "years combined team experience" },
];

export default function Partners() {
  return (
    <section className="relative pb-16 pt-32 md:pt-40 xl:pt-44">
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <article className="rounded-[40px] bg-zinc-800/70 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-neutral-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300">
            Portfolio
          </span>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 max-w-4xl text-neutral-200"
          >
            Product work shaped for{" "}
            <span className="text-light-primary">clarity</span> and growth.
          </motion.h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">
            We partner with ambitious teams to turn complex requirements into
            practical digital products with stronger UX, cleaner implementation,
            and a clearer path to launch.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-200/10 px-3 py-1 text-xs font-medium text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[26px] bg-neutral-950/30 px-4 py-5"
              >
                <p className="text-2xl font-semibold text-light-primary sm:text-3xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full bg-neutral-200/10 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-neutral-200/[0.18]"
            >
              Explore services
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[40px] bg-zinc-800/70 p-3 sm:p-4">
          <div className="relative h-[360px] w-full overflow-hidden rounded-[30px] sm:h-[460px] lg:h-full lg:min-h-[560px]">
            <Image
              src="/png/portfolio-main.png"
              alt="Portfolio preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/18 to-transparent" />
          </div>

          <div className="pointer-events-none absolute bottom-7 left-7 right-7 max-w-[360px] rounded-[28px] bg-black/45 px-5 py-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400">
              Delivery stack
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-neutral-200">
              Product strategy + UX design + full-stack engineering
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
