"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessagesSquare, Plus } from "lucide-react";
import Link from "next/link";

const faqs: { question: string; answer: string; category: string }[] = [
  {
    category: "Positioning",
    question:
      "How is UnitX actually different from monday.com, Asana, Jira, or ClickUp?",
    answer:
      "Three ways. First, isolation: those platforms treat a workspace as a folder, while UnitX enforces separation in the database itself — which is why agencies and multi-entity organisations can run every client or subsidiary in one account. Second, breadth without bolt-ons: projects, docs, goals, dashboards, and service desk are one product with one permission model, not four SKUs. Third, agents that hold a role, own tasks, and appear in the workload view rather than a chat box that summarises things.",
  },
  {
    category: "Multi-tenancy",
    question: "Can we really run every client in one account without data mixing?",
    answer:
      "Yes, and it is the reason the product exists. Every tenant-scoped table carries a PostgreSQL row-level security policy, so a query that crosses a workspace boundary cannot be expressed — it is not caught by application code, it simply returns nothing. An adversarial test suite attempts cross-tenant reads, writes, and joins on every deployment, and a failure blocks the release.",
  },
  {
    category: "Migration",
    question: "How long does it take to move off our current tool?",
    answer:
      "Most teams import in an afternoon. Our importers preserve hierarchy, custom fields, attachments, comments, and history — including original authors and timestamps — from Jira, Asana, monday.com, ClickUp, Trello, Notion, Linear, and CSV. Run a dry import first, review the diff, then cut over. On Business and above, our team runs the migration with you.",
  },
  {
    category: "AI",
    question: "What can the AI teammates see, and is our data used for training?",
    answer:
      "An agent inherits a role and sees exactly what that role sees — no more. You can run any agent in simulation mode to review every action it would take before it takes one, and every action it does take is logged with its reasoning. Your content is never used to train models, ours or a vendor's, and that is contractual rather than a policy page.",
  },
  {
    category: "Deployment",
    question: "Can we choose where our data lives, or self-host?",
    answer:
      "Workspaces can be pinned to EU, US, UK, or AU regions for storage, processing, and backups. Self-managed and private-cloud deployments are available on Enterprise, including customer-managed encryption keys through your own KMS.",
  },
  {
    category: "Pricing",
    question: "Do we pay for people who only need to look at the plan?",
    answer:
      "No. Viewers are free on every plan, unlimited. Executives, clients, and stakeholders who need visibility rather than a seat cost nothing, which is usually the difference between a rollout that spreads and one that stalls at the boundary of the paying team.",
  },
  {
    category: "Data",
    question: "What happens to our data if we leave?",
    answer:
      "You can export everything — tasks, docs, comments, attachments, and history — in open formats through the UI or the API, at any time, without asking us. On termination we delete your data within 30 days and provide written confirmation.",
  },
  {
    category: "Extensibility",
    question: "Is there an API, and can we build on top of UnitX?",
    answer:
      "Every object visible in the UI is addressable through the REST and GraphQL APIs, with published rate limits, signed webhooks across 40+ event types, and a first-class MCP server so agent tooling can read and write UnitX with scoped, auditable permissions. UnitFactor also builds custom extensions for teams that need them.",
  },
  {
    category: "Onboarding",
    question: "What support do we get during rollout?",
    answer:
      "Free and Starter get documentation, templates, and email support. Business adds white-glove migration, workspace design sessions, and priority response. Enterprise adds a named customer success manager, a structured onboarding programme, and 24/7 support with an SLA.",
  },
];

export default function UnitXFaqs() {
  return (
    <section
      id="faq"
      className="scroll-mt-40 relative border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Questions
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl"
            >
              The ones buyers
              <br />
              <span className="text-light-primary">actually ask</span>.
            </motion.h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Straight answers on isolation, migration, AI governance, and what
              happens to your data. If yours is not here, ask us directly — a
              human replies.
            </p>

            <Link
              href="/contacts"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-colors hover:border-light-primary/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-light-primary/12 text-light-primary">
                <MessagesSquare className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-neutral-200">
                  Ask the team
                </span>
                <span className="block text-xs text-neutral-500">
                  Usually answered within one business day
                </span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-neutral-500" />
            </Link>
          </aside>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-5 transition-colors open:border-white/15 sm:p-6"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-start gap-4">
                  <span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {faq.category}
                    </span>
                    <span className="mt-1.5 block text-base font-semibold leading-snug text-neutral-100 sm:text-lg">
                      {faq.question}
                    </span>
                  </span>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-neutral-400 transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="mt-4 border-t border-white/[0.07] pt-4">
                  <span className="block text-sm leading-relaxed text-neutral-400">
                    {faq.answer}
                  </span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
