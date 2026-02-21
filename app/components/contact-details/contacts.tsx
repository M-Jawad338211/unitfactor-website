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
      className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-12 md:pt-36 lg:px-16 lg:pt-40 xl:px-28"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#111111_55%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_20%,rgba(227,81,81,0.2),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_86%_72%,rgba(10,50,83,0.35),transparent_45%)]" />

      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_1.1fr]">
        <article className="rounded-3xl border border-white/12 bg-neutral-900/75 p-6 backdrop-blur-sm sm:p-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
            Contact
          </span>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: -22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 text-left font-semibold"
          >
            Let&apos;s build your next <span className="text-light-primary">digital</span>{" "}
            product
          </motion.h2>

          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Tell us about your business goals and product scope. We will map
            the right approach for strategy, design, and development.
          </p>

          <div className="mt-6 space-y-3">
            {promises.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-white/6 p-4 transition-colors duration-300 hover:border-light-primary/40 hover:bg-primary/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/8">
                      <Icon className="h-4 w-4 text-light-primary" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-white/75 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:admin@unitfactor.org"
              className="group rounded-2xl border border-white/15 bg-black/35 p-4 transition-colors duration-300 hover:border-light-primary/45"
            >
              <div className="flex items-center gap-2 text-white">
                <Mail className="h-4 w-4 text-light-primary" />
                <p className="text-sm font-semibold tracking-[0.06em] uppercase">
                  Email
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">
                admin@unitfactor.org
              </p>
            </a>

            <a
              href="tel:03053333772"
              className="group rounded-2xl border border-white/15 bg-black/35 p-4 transition-colors duration-300 hover:border-light-primary/45"
            >
              <div className="flex items-center gap-2 text-white">
                <PhoneCall className="h-4 w-4 text-light-primary" />
                <p className="text-sm font-semibold tracking-[0.06em] uppercase">
                  Call
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">
                +92 305 3333772
              </p>
            </a>
          </div>
        </article>

        <article className="rounded-3xl border border-black/10 bg-neutral-100 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-black sm:text-3xl">
            Tell us about your project
          </h3>
          <p className="mt-3 text-sm font-normal leading-relaxed text-[#5E5E5E] sm:text-base">
            Share goals, timeline, and budget range. We will reply with a clear
            next-step plan.
          </p>

          <form className="mt-6 space-y-5" aria-label="Project inquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-[#555] uppercase">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Jane Cooper"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-[#555] uppercase">
                  Work email
                </span>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-[#555] uppercase">
                  Company
                </span>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold tracking-[0.08em] text-[#555] uppercase">
                  Budget range
                </span>
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-primary">
                  <option>$5k - $15k</option>
                  <option>$15k - $40k</option>
                  <option>$40k - $100k</option>
                  <option>$100k+</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold tracking-[0.08em] text-[#555] uppercase">
                Project details
              </span>
              <textarea
                rows={5}
                placeholder="What are you building? What stage are you in? What outcome matters most?"
                className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-primary"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary"
              >
                Send inquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:border-primary hover:text-primary"
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
