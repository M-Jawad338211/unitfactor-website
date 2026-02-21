"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  outcome: string;
  stack: string[];
  image: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Hair Rules",
    industry: "E-commerce",
    outcome:
      "Redesigned product discovery and consultations, improving user flow clarity and conversion intent.",
    stack: ["Next.js", "React", "UX Optimization"],
    image: "/jpg/hairrules.jpg",
    link: "https://hairrules.com",
  },
  {
    id: 2,
    title: "Youdera",
    industry: "Energy / Finance",
    outcome:
      "Built core financing workflows for solar projects with smoother onboarding and clearer decision paths.",
    stack: ["React", "Next.js", "Workflow Design"],
    image: "/jpg/youdera1.jpg",
    link: "https://www.youdera.com/",
  },
  {
    id: 3,
    title: "IECL",
    industry: "Education",
    outcome:
      "Modernized course navigation and content structure to improve discoverability and learner engagement.",
    stack: ["Next.js", "Tailwind CSS", "Content Architecture"],
    image: "/jpg/iecl.jpg",
    link: "https://www.iecl.com/",
  },
  {
    id: 4,
    title: "TravelStride",
    industry: "Travel",
    outcome:
      "Reworked browsing and package discovery experience for better engagement across mobile and desktop.",
    stack: ["React", "Next.js", "Performance UX"],
    image: "/jpg/travel-stride.jpg",
    link: "https://www.travelstride.com/",
  },
  {
    id: 5,
    title: "Arielle Music Shop",
    industry: "Retail",
    outcome:
      "Delivered a cleaner storefront and faster shopping journey with stronger trust signals at checkout.",
    stack: ["Shopify", "Vue", "Conversion Design"],
    image: "/jpg/ariellie-site.jpg",
    link: "https://arielle.store/",
  },
];

const serviceFocus = [
  "UX/UI Design",
  "Product Strategy",
  "Web Development",
  "Performance Optimization",
  "Growth Iteration",
];

export default function ServicesAccordion() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-12 lg:px-16 xl:px-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_22%,rgba(227,81,81,0.15),transparent_40%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-left font-semibold"
            >
              Selected work that solved real business problems
            </motion.h2>
            <p className="mt-4 text-white/80">
              Each case combines product thinking, UX craft, and technical
              execution to move measurable metrics.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {serviceFocus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/22 bg-white/8 px-3 py-1 text-xs font-medium text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group overflow-hidden rounded-3xl border border-white/12 bg-neutral-900/72 transition-all duration-300 hover:-translate-y-1 hover:border-light-primary/50 hover:shadow-[0_20px_48px_-30px_rgba(227,81,81,0.9)]"
            >
              <a href={study.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
                </div>
              </a>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-light-primary uppercase">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {study.title}
                    </h3>
                  </div>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition-colors duration-300 hover:border-light-primary hover:text-light-primary"
                    aria-label={`Open ${study.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-3 text-sm font-normal leading-relaxed text-white/75 sm:text-base">
                  {study.outcome}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
