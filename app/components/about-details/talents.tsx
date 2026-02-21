"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "70+", label: "projects delivered" },
  { value: "15+", label: "specialists across design and engineering" },
  { value: "90%", label: "repeat collaboration rate" },
];

export default function Talents() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-12 md:pt-36 lg:px-16 xl:px-28 xl:pt-40">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#111111_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_18%,rgba(227,81,81,0.22),transparent_44%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_75%,rgba(10,50,83,0.35),transparent_44%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
          About Unitfactor
        </span>

        <motion.h1
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-5 font-semibold"
        >
          A remote-first agency building{" "}
          <span className="text-light-primary">high-impact</span> digital
          products
        </motion.h1>

        <p className="mx-auto mt-5 max-w-3xl text-white/82">
          We combine product strategy, UX design, and full-stack engineering to
          help teams launch faster, reduce delivery risk, and improve outcomes.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/12"
          >
            View our work
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-9 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/12 bg-neutral-900/72 px-5 py-5 text-center"
          >
            <p className="text-2xl font-semibold text-light-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
