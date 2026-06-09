"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="site-container">
      <div className="rounded-[44px] bg-[linear-gradient(135deg,rgba(152,50,50,0.4),rgba(10,50,83,0.45))] px-6 py-12 sm:px-10 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl font-semibold"
          >
            Need a team that can own strategy, design, and delivery?
          </motion.h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            We help agencies and product companies launch faster with focused
            execution and measurable outcomes.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
            >
              Talk to the team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-neutral-200/10 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-neutral-200/[0.18]"
            >
              Browse case studies
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
