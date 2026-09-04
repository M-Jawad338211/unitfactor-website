"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reassurance = [
  "Free for up to 5 members",
  "No credit card required",
  "Import from your current tool in an afternoon",
  "Cancel or export at any time",
];

export default function UnitXCta() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative isolate overflow-hidden rounded-[40px] border border-white/[0.09] bg-linear-to-b from-white/[0.06] to-transparent px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_50%_50%,rgba(227,81,81,0.22),transparent_62%)] blur-3xl" />
          <div className="unitx-grid pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]" />

          <Image
            src="/svg/unitx-mark.svg"
            alt=""
            width={56}
            height={56}
            className="mx-auto h-14 w-14"
          />

          <h2 className="mx-auto mt-8 max-w-3xl font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl">
            Put the whole company on{" "}
            <span className="text-light-primary">one page</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Start with one team and one project. Import your current tool, turn
            on two automations, and see whether anyone still asks for a status
            update by Friday.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {reassurance.map((item) => (
              <span key={item} className="text-xs text-neutral-500">
                {item}
              </span>
            ))}
          </div>

          <p className="mt-10 border-t border-white/[0.07] pt-8 text-sm text-neutral-500">
            UnitX is built and operated by{" "}
            <Link
              href="/"
              className="font-medium text-neutral-300 underline-offset-4 hover:text-light-primary hover:underline"
            >
              UnitFactor
            </Link>{" "}
            — the product and engineering team behind platforms in fintech,
            healthcare, and B2B SaaS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
