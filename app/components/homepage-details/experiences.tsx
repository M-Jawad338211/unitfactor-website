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
      className="relative overflow-hidden px-4 sm:px-12 lg:px-16 xl:px-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#111111_55%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(227,81,81,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_82%,rgba(10,50,83,0.35),transparent_48%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
          Industry Experience
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-5 font-semibold"
        >
          Product expertise in <span className="text-light-primary">complex</span>{" "}
          sectors
        </motion.h2>
        <p className="mt-5 text-white/85">
          We pair product strategy with technical execution, so each release is
          easier to use, faster to ship, and safer to scale.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        {experienceCards.map((card) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-white/12 bg-neutral-900/75 p-6 sm:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-light-primary/60 hover:shadow-[0_24px_64px_-38px_rgba(227,81,81,0.95)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/25 via-primary/5 to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/8">
                  <card.icon className="h-6 w-6 text-light-primary transition-colors duration-300 group-hover:text-white" />
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base text-white/80 sm:text-lg">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/22 bg-white/6 px-3 py-1 text-xs font-medium text-white/80 transition-colors duration-300 group-hover:border-white/35 group-hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-light-primary"
              >
                View case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
