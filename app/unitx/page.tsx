"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Lock,
  Layers,
  Server,
  Code2,
  Check,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface UnitXFeature {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

const unitxFeatures: UnitXFeature[] = [
  {
    title: "Bulletproof Tenant Isolation",
    eyebrow: "Enterprise Security",
    description:
      "Security isn't an afterthought—it's woven into the very fabric of UnitX. We prioritize uncompromising security over convenience by enforcing PostgreSQL Row-Level Security (RLS) on every tenant-scoped table. This guarantees that cross-tenant data leaks are strictly impossible, giving your enterprise customers total peace of mind.",
    points: [
      "Strict data separation enforced at the database kernel level",
      "Automated cross-tenant isolation testing in CI/CD pipelines",
      "Secure-by-default architecture that passes compliance audits faster",
    ],
    icon: Lock,
  },
  {
    title: "Uncompromising Performance at Scale",
    eyebrow: "Modern Architecture",
    description:
      "Say goodbye to legacy monolithic bottlenecks. UnitX is engineered for raw speed and infinite scale, utilizing a Next.js App Router frontend that delivers lightning-fast user experiences, seamlessly connected to a highly robust and heavily structured NestJS backend.",
    points: [
      "Next.js App Router for optimal SEO and instantaneous page loads",
      "NestJS backend featuring structured logging and automated health checks",
      "Prisma ORM for typesafe, predictable, and rapid database interactions",
    ],
    icon: Server,
  },
  {
    title: "Limitless Customization & Workflows",
    eyebrow: "Flexible Permissions",
    description:
      "Every SaaS has unique operational needs. UnitX handles complex role-based logic out of the box, empowering you to define incredibly fine-grained permissions, custom user roles, and advanced subscription workflows without writing boilerplate authorization code.",
    points: [
      "Dynamic permission registry accommodating complex business logic",
      "Flexible multi-tenant context management across all API boundaries",
      "Architected to seamlessly integrate with advanced custom billing flows",
    ],
    icon: Layers,
  },
];

export default function UnitXPage() {
  return (
    <main className="overflow-x-clip bg-background min-h-screen">
      <title>UnitX | Multi-Tenant Work-Management Platform</title>
      
      {/* Background Gradients */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-[-18%] top-[-10rem] -z-10 h-[42rem] bg-[radial-gradient(circle_at_78%_20%,rgba(227,81,81,0.20),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] top-[26rem] -z-10 h-[54rem] bg-[radial-gradient(circle_at_18%_50%,rgba(10,50,83,0.38),transparent_58%)] blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="site-container">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm text-neutral-300"
            >
              <Code2 className="h-4 w-4 text-light-primary" />
              <span>UnitFactor Internal Product</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-8 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-neutral-200 tracking-tight"
            >
              The Foundation for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-light-primary to-primary">
                Multi-Tenant SaaS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-lg sm:text-xl text-neutral-400 leading-relaxed"
            >
              UnitX is the ultimate launchpad for modern SaaS businesses. Designed by UnitFactor to remove the complexity of building multi-tenant architecture, UnitX provides a battle-tested, secure, and infinitely scalable foundation. Focus on building your core product features, while we handle the intricate details of enterprise-grade security, row-level isolation, and robust deployment pipelines. It's not just a boilerplate—it's a complete shift in how fast you can go to market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contacts"
                className="inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full bg-light-primary px-8 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:bg-primary shadow-[0_0_20px_rgba(227,81,81,0.4)]"
              >
                Request Access
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full border border-neutral-700 bg-transparent px-8 text-sm md:text-base font-semibold text-neutral-300 transition-colors duration-300 hover:bg-neutral-800"
              >
                Explore Architecture
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
                Core Architecture
              </p>
              <motion.h2
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-4 max-w-3xl font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-neutral-200"
              >
                Built for <span className="text-light-primary">scale</span> and security.
              </motion.h2>
            </div>
            <p className="max-w-2xl text-neutral-300 lg:justify-self-end text-lg">
              We prioritize robust foundations. Every decision in UnitX, from the database ORM to the event queue, is optimized for reliable, multi-tenant software development.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {unitxFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.eyebrow}
                  className="grid overflow-hidden rounded-[36px] bg-zinc-800/40 border border-neutral-800/50 shadow-xl transition-all hover:bg-zinc-800/60 lg:grid-cols-[1fr_2fr]"
                >
                  <div className="bg-neutral-900/50 p-8 sm:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-800/50">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-light-primary shadow-[0_0_15px_rgba(227,81,81,0.2)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-light-primary">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-200">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                      {feature.description}
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                      {feature.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 bg-neutral-900/30 p-4 rounded-xl border border-neutral-800/30">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-primary/20 text-light-primary">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-sm leading-relaxed text-neutral-300">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dev Experience Section */}
      <section className="relative py-16 sm:py-24 bg-neutral-900/20 border-y border-neutral-800/50 mt-12">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary mb-4"
            >
              Developer Experience
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-neutral-200"
            >
              Stop rebuilding the basics.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-neutral-400"
            >
              UnitX provides out-of-the-box infrastructure so your team can focus on the business logic that actually differentiates your product in the market.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Pre-configured CI/CD", desc: "Automated GitHub Actions pipelines for continuous testing, linting, and seamless deployments.", icon: Code2 },
              { title: "Managed Migrations", desc: "Prisma handles schema evolution gracefully with declarative modeling and built-in rollbacks.", icon: Database },
              { title: "Deep Observability", desc: "Structured logging and automated health checks ensure you always know what's happening in production.", icon: Server },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-zinc-800/30 p-8 rounded-3xl border border-neutral-800/50 hover:border-light-primary/30 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-light-primary mb-6" />
                <h3 className="text-xl font-semibold text-neutral-200 mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="site-container relative isolate">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-b from-neutral-800/40 to-neutral-900/20 border border-neutral-800" />
          <div className="px-6 py-16 sm:py-24 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-neutral-200 mb-6">
              Ready to build on UnitX?
            </h2>
            <p className="max-w-xl text-neutral-400 mb-10 text-lg">
              Partner with UnitFactor to launch your SaaS faster, without compromising on security or scalability.
            </p>
            <Link
              href="/contacts"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-neutral-200 px-10 text-base font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
            >
              Start the Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
