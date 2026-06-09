"use client";

import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Clock3,
  HelpCircle,
  MessagesSquare,
  Plus,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  icon: LucideIcon;
}

const faqs: FaqItem[] = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "We work on product strategy, UX/UI design, web applications, mobile apps, and platform modernization for growth-stage and enterprise teams.",
    category: "Scope",
    icon: Wrench,
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most engagements start within 3 to 10 business days after discovery and scope alignment.",
    category: "Timeline",
    icon: Clock3,
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Yes. We can run as an embedded product squad or collaborate with your internal designers, engineers, and stakeholders.",
    category: "Collaboration",
    icon: MessagesSquare,
  },
  {
    question: "Do you offer fixed scope and monthly retainers?",
    answer:
      "Yes. We support both models, depending on whether your priorities are feature delivery, ongoing iteration, or product support.",
    category: "Engagement",
    icon: CircleDollarSign,
  },
  {
    question: "How do you handle communication and updates?",
    answer:
      "You get a dedicated point of contact, weekly progress updates, sprint reviews, and transparent milestone tracking.",
    category: "Communication",
    icon: MessagesSquare,
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer post-launch optimization, maintenance, performance monitoring, and feature enhancement cycles.",
    category: "Support",
    icon: ShieldCheck,
  },
];

const supportNotes = [
  "Discovery call before scope",
  "NDA-ready process",
  "Clear timeline and budget discussion",
];

export default function Faqs() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <aside className="rounded-[40px] bg-zinc-800/70 p-6 sm:p-8 lg:sticky lg:top-28 lg:h-fit">
            <span className="inline-flex rounded-full bg-neutral-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300">
              FAQs
            </span>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-5 font-semibold"
            >
              Questions before{" "}
              <span className="text-light-primary">kickoff</span>.
            </motion.h2>

            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              A quick guide to how we scope, communicate, and support product
              work before the first sprint begins.
            </p>

            <div className="mt-7 space-y-3">
              {supportNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-center gap-3 rounded-2xl bg-neutral-950/30 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/22">
                    <HelpCircle className="h-4 w-4 text-light-primary" />
                  </span>
                  <p className="text-sm font-medium text-neutral-300">{note}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;

              return (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group rounded-[34px] bg-zinc-800/70 p-5 sm:p-6"
                >
                  <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20">
                      <Icon className="h-5 w-5 text-light-primary" />
                    </span>

                    <span>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                        {faq.category}
                      </span>
                      <span className="mt-1 block text-left text-lg font-semibold leading-snug text-neutral-200 sm:text-xl">
                        {faq.question}
                      </span>
                    </span>

                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200/10 text-neutral-300 transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>

                  <p className="ml-16 mt-4 max-w-3xl text-left text-sm font-normal leading-relaxed text-neutral-300 sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
