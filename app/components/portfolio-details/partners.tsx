"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-12 md:pt-36 lg:px-16 lg:pb-16 xl:px-28 xl:pt-40">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#111111_60%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_18%,rgba(227,81,81,0.2),transparent_44%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_80%,rgba(10,50,83,0.35),transparent_46%)]" />

      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-white/12 bg-neutral-900/75 p-6 backdrop-blur-sm sm:p-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
            Portfolio
          </span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 text-left font-semibold"
          >
            Case studies built for <span className="text-light-primary">growth</span>
            , retention, and product clarity
          </motion.h2>

          <p className="mt-4 max-w-2xl text-white/80">
            We partner with ambitious teams to turn complex requirements into
            practical, conversion-focused digital products.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/22 bg-white/8 px-3 py-1 text-xs font-medium text-white/85"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-black/35 px-4 py-4 text-center"
              >
                <p className="text-2xl font-semibold text-light-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.08em] text-white/70 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/12"
            >
              Explore services
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl border border-white/12 bg-neutral-900/70 p-3 sm:p-4">
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[420px] lg:h-full lg:min-h-[520px]">
            <Image
              src="/png/portfolio-main.png"
              alt="Portfolio preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/18 to-transparent" />
          </div>

          <div className="pointer-events-none absolute bottom-7 left-7 max-w-[280px] rounded-2xl border border-white/18 bg-black/45 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.08em] text-white/80 uppercase">
              Delivery stack
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Product strategy + UX design + full-stack engineering
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
