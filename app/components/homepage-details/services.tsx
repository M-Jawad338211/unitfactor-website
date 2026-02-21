"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Compass,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type ServiceCategory = "Strategy" | "Design" | "Development";

interface ServiceLine {
  title: string;
  description: string;
}

interface ServiceCategoryConfig {
  label: ServiceCategory;
  tagline: string;
  promise: string;
  icon: LucideIcon;
  items: ServiceLine[];
}

const serviceCategories: ServiceCategoryConfig[] = [
  {
    label: "Strategy",
    tagline: "Direction before delivery",
    promise: "Align product goals, market realities, and execution plans.",
    icon: Compass,
    items: [
      {
        title: "Product Discovery",
        description:
          "Customer interviews, opportunity mapping, and clear problem framing.",
      },
      {
        title: "Roadmap Planning",
        description:
          "Practical release plans with milestones, ownership, and measurable outcomes.",
      },
      {
        title: "Business Validation",
        description:
          "Prioritized hypotheses, success metrics, and experiment frameworks.",
      },
    ],
  },
  {
    label: "Design",
    tagline: "Interfaces that convert and retain",
    promise: "Design systems and journeys users understand from first touch.",
    icon: PenTool,
    items: [
      {
        title: "UX Architecture",
        description:
          "Information architecture, user flows, and decision-focused wireframes.",
      },
      {
        title: "UI Design Systems",
        description:
          "Reusable components, typography scales, and interaction standards.",
      },
      {
        title: "Brand and Visual Language",
        description:
          "Distinct visual identity adapted for product, web, and marketing touchpoints.",
      },
    ],
  },
  {
    label: "Development",
    tagline: "Reliable software delivery",
    promise: "Build, ship, and scale with modern engineering standards.",
    icon: Code2,
    items: [
      {
        title: "Web Platforms",
        description:
          "High-performance web apps with Next.js, React, and robust API integrations.",
      },
      {
        title: "Mobile Applications",
        description:
          "Cross-platform mobile experiences focused on speed, stability, and usability.",
      },
      {
        title: "Cloud and DevOps",
        description:
          "Deployment pipelines, observability, and infrastructure automation for growth.",
      },
      {
        title: "Conversion Landing Pages",
        description:
          "Campaign-focused pages tuned for clarity, trust, and measurable conversion lift.",
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("Strategy");

  const activeConfig = useMemo(
    () =>
      serviceCategories.find((category) => category.label === activeCategory) ??
      serviceCategories[0],
    [activeCategory]
  );

  const panelId = `services-panel-${activeConfig.label.toLowerCase()}`;
  const tabId = `services-tab-${activeConfig.label.toLowerCase()}`;

  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 sm:px-12 lg:px-16 xl:px-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0A0A0A_0%,#121212_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_20%,rgba(227,81,81,0.22),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_90%,rgba(10,50,83,0.32),transparent_45%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
          Our Services
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-5 font-semibold"
        >
          A full-stack team for <span className="text-light-primary">product</span>{" "}
          growth
        </motion.h2>
        <p className="mt-5 text-white/85">
          We combine strategy, design, and development in one workflow, helping
          teams move faster without losing product quality.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-[240px_1fr]">
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-row gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
        >
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.label;
            const categoryKey = category.label.toLowerCase();

            return (
              <button
                key={category.label}
                id={`services-tab-${categoryKey}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`services-panel-${categoryKey}`}
                onClick={() => setActiveCategory(category.label)}
                className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? "border-light-primary/70 bg-primary/15 text-white shadow-[0_16px_42px_-30px_rgba(227,81,81,0.95)]"
                    : "border-white/15 bg-neutral-900/70 text-white/75 hover:border-white/30 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-300 ${
                    isActive
                      ? "border-light-primary/70 bg-primary/20 text-white"
                      : "border-white/20 bg-white/6 text-white/70 group-hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold">{category.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabId}
          className="rounded-3xl border border-white/10 bg-neutral-100 p-5 sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">
                {activeConfig.tagline}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-black sm:text-3xl">
                {activeConfig.promise}
              </h3>
            </div>

            <Link
              href="/contacts"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-black"
            >
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {activeConfig.items.map((service, index) => (
              <article
                key={service.title}
                className="group grid gap-3 rounded-2xl border border-black/10 bg-white p-4 transition-colors duration-300 hover:border-primary/35 hover:bg-primary/5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4 className="text-lg font-semibold text-black sm:text-xl">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-sm font-normal leading-relaxed text-[#595959] sm:text-base">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-300 hover:text-black"
                >
                  Explore
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
