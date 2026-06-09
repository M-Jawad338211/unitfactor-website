"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const proofItems = [
  {
    title: "Product decisions before production",
    description:
      "We keep strategy visible throughout the engagement, so design and engineering decisions stay tied to customer value.",
  },
  {
    title: "Senior execution without handoff drag",
    description:
      "Our workflow keeps product, UX, and development in one loop instead of splitting responsibility across disconnected teams.",
  },
  {
    title: "Build quality that survives launch",
    description:
      "Reusable components, clean implementation, and practical QA help products keep improving after the first release.",
  },
];

const recognitions = [
  {
    title: "Official Webflow partner",
    description: "Recognized partner for Webflow delivery and implementation.",
    logo: "/svg/webflow.svg",
  },
  {
    title: "Top Rated on Upwork",
    description: "A dependable freelance marketplace profile with strong client trust.",
    logo: "/avif/upwork-rating.avif",
  },
  {
    title: "LinkedIn community",
    description: "A visible product and technology presence across professional networks.",
    logo: "/svg/linkedin.svg",
  },
  {
    title: "50+ Clutch reviews",
    description: "Third-party proof from teams that hired us for product delivery.",
    logo: "/svg/clutch-rating.svg",
  },
];

export default function Recognitions() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              How We Work
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 max-w-3xl font-display font-semibold"
            >
              Calm process. <span className="text-light-primary">Sharp</span>{" "}
              execution.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-neutral-300 lg:justify-self-end">
            We work best with teams that want momentum, but not chaos. Every
            engagement is shaped around clear decisions, visible progress, and
            practical release goals.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {proofItems.map((item) => (
            <article key={item.title} className="rounded-[36px] bg-zinc-800/70 p-7">
              <h3 className="text-2xl font-semibold leading-tight text-neutral-200">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[40px] bg-zinc-800/70 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
                Highlights
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-neutral-200">
                Signals of <span className="text-light-primary">trust</span>.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex w-fit items-center rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
            >
              Explore case studies
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recognitions.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-neutral-950/30 p-5"
              >
                <div className="flex h-14 items-center">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={120}
                    height={46}
                    className="max-h-11 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
