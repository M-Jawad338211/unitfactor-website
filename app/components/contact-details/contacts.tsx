"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  PhoneCall,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface PromiseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const promises: PromiseItem[] = [
  {
    title: "Fast initial response",
    description: "You will hear from our team within one business day.",
    icon: Clock3,
  },
  {
    title: "NDA-ready process",
    description:
      "We can start under NDA to protect your product, data, and roadmap.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated project pod",
    description:
      "Work directly with a focused group of designers and engineers.",
    icon: Users,
  },
];

export default function Contacts() {
  return (
    <section
      className="relative pb-16 pt-32 md:pt-40 xl:pt-44"
      aria-labelledby="contact-heading"
    >
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="rounded-[40px] bg-zinc-800/70 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-neutral-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300">
            Contact
          </span>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: -22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-left font-semibold"
          >
            Let&apos;s build your next{" "}
            <span className="text-light-primary">digital</span> product.
          </motion.h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Tell us about your business goals and product scope. We will map
            the right approach for strategy, design, and development.
          </p>

          <div className="mt-8 grid gap-4">
            {promises.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] bg-neutral-950/30 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/22">
                      <Icon className="h-5 w-5 text-light-primary" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-200">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-neutral-400 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:admin@unitfactor.org"
              className="group rounded-[28px] bg-neutral-950/30 p-5"
            >
              <div className="flex items-center gap-2 text-neutral-200">
                <Mail className="h-4 w-4 text-light-primary" />
                <p className="text-sm font-semibold tracking-[0.06em] uppercase">
                  Email
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-300 sm:text-base">
                admin@unitfactor.org
              </p>
            </a>

            <a
              href="tel:03053333772"
              className="group rounded-[28px] bg-neutral-950/30 p-5"
            >
              <div className="flex items-center gap-2 text-neutral-200">
                <PhoneCall className="h-4 w-4 text-light-primary" />
                <p className="text-sm font-semibold tracking-[0.06em] uppercase">
                  Call
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-300 sm:text-base">
                +92 305 3333772
              </p>
            </a>
          </div>
        </article>

        <article className="rounded-[40px] bg-neutral-200 p-6 sm:p-8 lg:p-10">
          <h3 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
            Tell us about your project
          </h3>
          <p className="mt-3 text-sm font-normal leading-relaxed text-neutral-600 sm:text-base">
            Share goals, timeline, and budget range. We will reply with a clear
            next-step plan.
          </p>

          <form className="mt-6 space-y-5" aria-label="Project inquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Jane Cooper"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
                  Work email
                </span>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
                  Company
                </span>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="mt-2 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
                  Budget range
                </span>
                <select className="mt-2 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 outline-none transition-colors focus:border-primary">
                  <option>$5k - $15k</option>
                  <option>$15k - $40k</option>
                  <option>$40k - $100k</option>
                  <option>$100k+</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
                Project details
              </span>
              <textarea
                rows={5}
                placeholder="What are you building? What stage are you in? What outcome matters most?"
                className="mt-2 w-full resize-y rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-950 outline-none transition-colors focus:border-primary"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-secondary"
              >
                Send inquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950/8 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors duration-300 hover:text-primary"
              >
                View portfolio first
              </Link>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
