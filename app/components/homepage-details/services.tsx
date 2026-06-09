"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Cloud,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceFeature {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  image: string;
  icon: LucideIcon;
}

const serviceFeatures: ServiceFeature[] = [
  {
    title: "Product engineering for modern platforms",
    eyebrow: "Product Engineering",
    description:
      "We help teams design, build, and improve digital products where user experience, frontend architecture, and backend reliability all matter.",
    points: [
      "Product discovery, architecture, and release planning",
      "Design systems, dashboards, and workflow-heavy interfaces",
      "Frontend, backend, integrations, QA, and launch support",
    ],
    image: "/png/portfolio-main.png",
    icon: Code2,
  },
  {
    title: "SaaS development for scalable products",
    eyebrow: "SaaS Development",
    description:
      "From MVP to mature platform, we build SaaS experiences with clean onboarding, role-based workflows, billing logic, and admin operations.",
    points: [
      "Multi-tenant apps, portals, and customer dashboards",
      "Subscription flows, permissions, and operational tooling",
      "Analytics, integrations, and product iteration cycles",
    ],
    image: "/png/cards.png",
    icon: Bot,
  },
  {
    title: "Cloud and AI systems for smarter workflows",
    eyebrow: "Cloud & AI",
    description:
      "We connect products to cloud infrastructure, automation, and practical AI features that reduce manual work and improve decision-making.",
    points: [
      "Cloud architecture, deployment pipelines, and observability",
      "AI-assisted workflows, internal tools, and data enrichment",
      "API integrations, automation, and performance optimization",
    ],
    image: "/png/av-lab-3.png",
    icon: Cloud,
  },
  {
    title: "Digital commerce experiences built to convert",
    eyebrow: "Digital Commerce",
    description:
      "We create commerce journeys that make product discovery, checkout, content, and customer retention easier to manage and measure.",
    points: [
      "Storefront design, product discovery, and checkout improvements",
      "Headless commerce, CMS, CRM, and payment integrations",
      "Conversion pages, merchandising flows, and post-launch optimization",
    ],
    image: "/jpg/hairrules.jpg",
    icon: ShoppingCart,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Our Services
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 max-w-3xl font-display font-semibold"
            >
              Services for <span className="text-light-primary">shipping</span>{" "}
              better products.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-neutral-300 lg:justify-self-end">
            Work with a team that can engineer the product, scale the platform,
            automate the workflow, and improve the customer journey without
            handing your roadmap between separate vendors.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {serviceFeatures.map((service, index) => {
            const Icon = service.icon;
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={service.eyebrow}
                className="grid overflow-hidden rounded-[36px] bg-zinc-800/70 shadow-[0_28px_90px_-70px_rgba(227,81,81,0.75)] lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[320px] bg-neutral-800 ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.eyebrow} service visual`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/68 via-black/10 to-transparent" />
                </div>

                <div
                  className={`p-6 sm:p-8 lg:p-10 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/22 text-neutral-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-light-primary">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-neutral-200 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-primary text-background">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contacts"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
