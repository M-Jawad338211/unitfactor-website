"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "We work on product strategy, UX/UI design, web applications, mobile apps, and platform modernization for growth-stage and enterprise teams.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most engagements start within 3 to 10 business days after discovery and scope alignment.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Yes. We can run as an embedded product squad or collaborate with your internal designers, engineers, and stakeholders.",
  },
  {
    question: "Do you offer fixed scope and monthly retainers?",
    answer:
      "Yes. We support both models, depending on whether your priorities are feature delivery, ongoing iteration, or product support.",
  },
  {
    question: "How do you handle communication and updates?",
    answer:
      "You get a dedicated point of contact, weekly progress updates, sprint reviews, and transparent milestone tracking.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer post-launch optimization, maintenance, performance monitoring, and feature enhancement cycles.",
  },
];

export default function Faqs() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-12 lg:px-16 xl:px-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#0F0F0F_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(227,81,81,0.18),transparent_42%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-semibold"
        >
          Frequently asked before kickoff
        </motion.h2>
        <p className="mt-4 text-white/80">
          Answers to common questions about timelines, collaboration, and
          delivery models.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group rounded-2xl border border-white/12 bg-neutral-900/70 p-5 transition-colors duration-300 open:border-light-primary/40"
          >
            <summary className="cursor-pointer list-none pr-7 text-left text-lg font-semibold text-white sm:text-xl">
              {faq.question}
            </summary>
            <p className="mt-3 text-left text-sm font-normal leading-relaxed text-white/75 sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
