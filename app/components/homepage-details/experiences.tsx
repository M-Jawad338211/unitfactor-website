"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  HeartPulse,
  Landmark,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface ExperienceCard {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

const experienceCards: ExperienceCard[] = [
  {
    title: "Web3 and AI Products",
    description:
      "From token-enabled platforms to AI assistants, we build practical products with clear user value.",
    tags: ["SaaS", "Generative AI", "Blockchain", "Product Discovery"],
    icon: Bot,
  },
  {
    title: "Healthcare Platforms",
    description:
      "We design secure, compliant experiences for patient portals, scheduling flows, and clinical dashboards.",
    tags: ["Patient Apps", "Admin Panels", "HIPAA-ready UX", "Accessibility"],
    icon: HeartPulse,
  },
  {
    title: "Fintech Systems",
    description:
      "We simplify complex financial workflows into fast, trustworthy interfaces users can navigate confidently.",
    tags: ["Payments", "KYC Flow", "Analytics", "Risk Controls"],
    icon: Landmark,
  },
  {
    title: "Enterprise and B2B Tools",
    description:
      "We help teams ship robust internal systems with predictable delivery and scalable design patterns.",
    tags: ["Workflow Automation", "Design Systems", "Dashboards", "Integrations"],
    icon: Laptop,
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-neutral-100/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-neutral-300 uppercase">
            Industries
          </span>
          <motion.h2
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 font-display font-semibold"
          >
            Built for <span className="text-light-primary">demanding</span>{" "}
            markets.
          </motion.h2>
          <p className="mt-5 text-neutral-300">
            We pair product strategy with technical execution, so each release
            is easier to use, faster to ship, and safer to scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {experienceCards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-[32px] bg-zinc-800/70 p-6 backdrop-blur-sm sm:p-7"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/16 via-primary/5 to-black opacity-45" />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100/10">
                    <card.icon className="h-6 w-6 text-light-primary" />
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-200 sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base text-neutral-300 sm:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-200/10 px-3 py-1 text-xs font-medium text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:text-light-primary"
                >
                  View case studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
