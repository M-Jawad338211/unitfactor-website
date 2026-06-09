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
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Selected Work
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 text-left font-semibold"
            >
              Work that solves <span className="text-light-primary">real</span>{" "}
              product problems.
            </motion.h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Each case combines product thinking, UX craft, and technical
              execution for clearer experiences and more dependable delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {serviceFocus.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-200/10 px-3 py-1 text-xs font-medium text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group overflow-hidden rounded-[34px] bg-zinc-800/70"
            >
              <a href={study.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[245px] w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-light-primary uppercase">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-neutral-200">
                      {study.title}
                    </h3>
                  </div>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200/10 text-neutral-200 transition-colors duration-300 hover:bg-primary"
                    aria-label={`Open ${study.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-4 text-sm font-normal leading-relaxed text-neutral-300 sm:text-base">
                  {study.outcome}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-300"
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
