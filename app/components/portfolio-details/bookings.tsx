"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Bookings() {
  return (
    <section className="px-4 pb-14 sm:px-12 lg:px-16 xl:px-28 xl:pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/12 bg-[linear-gradient(135deg,rgba(10,50,83,0.45),rgba(152,50,50,0.35))] px-6 py-12 sm:px-10 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl font-semibold"
          >
            Need results like these for your product?
          </motion.h2>
          <p className="mt-4 max-w-2xl text-white/85">
            Book a discovery call and we will outline the fastest path from
            idea to measurable product impact.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              Book discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:admin@unitfactor.org"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/15"
            >
              Email the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
