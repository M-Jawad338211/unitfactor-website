"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Tier = {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  priceNote: string;
  cta: string;
  highlight?: boolean;
  featureHeading: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Free",
    tagline: "For small teams proving it out",
    monthly: 0,
    annual: 0,
    priceNote: "Up to 5 members, forever",
    cta: "Start free",
    featureHeading: "Includes",
    features: [
      "Unlimited tasks and 3 projects",
      "Board, list, and calendar views",
      "100 automation runs per month",
      "1 GB storage · 7-day activity history",
      "Community support",
    ],
  },
  {
    name: "Starter",
    tagline: "For teams that outgrew a spreadsheet",
    monthly: 11,
    annual: 9,
    priceNote: "per member / month",
    cta: "Start free trial",
    featureHeading: "Everything in Free, plus",
    features: [
      "Unlimited projects and guests",
      "All 12 views including timeline and workload",
      "2,000 automation runs per month",
      "Docs, goals, and time tracking",
      "Unlimited storage · 90-day history",
      "Email support, next business day",
    ],
  },
  {
    name: "Business",
    tagline: "For teams running the whole company on it",
    monthly: 24,
    annual: 19,
    priceNote: "per member / month",
    cta: "Start free trial",
    highlight: true,
    featureHeading: "Everything in Starter, plus",
    features: [
      "AI teammates with 5,000 monthly credits",
      "Isolated client workspaces and portals",
      "25,000 automation runs per month",
      "Advanced dashboards, forecasting, and portfolios",
      "Approvals, proofing, and SLA timers",
      "Google and Microsoft SSO · unlimited history",
      "White-glove migration and priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For regulated and multi-entity organisations",
    monthly: null,
    annual: null,
    priceNote: "Custom pricing",
    cta: "Contact sales",
    featureHeading: "Everything in Business, plus",
    features: [
      "SAML SSO, SCIM provisioning, and enforced MFA",
      "Customer-managed encryption keys and data residency",
      "Advanced audit logs with SIEM streaming",
      "Agent spend controls and simulation-mode policies",
      "99.9% uptime SLA with service credits",
      "Named CSM, onboarding programme, and 24/7 support",
      "HIPAA BAA and custom DPAs",
    ],
  },
];

const universal = [
  "Unlimited free viewers",
  "iOS, Android, macOS, and Windows apps",
  "REST, GraphQL, and webhooks",
  "MCP server access",
  "SOC 2 Type II and ISO 27001",
  "No data used for model training",
];

const comparison = [
  { label: "Isolated client workspaces", free: false, starter: false, business: true, enterprise: true },
  { label: "AI teammates", free: false, starter: false, business: true, enterprise: true },
  { label: "Timeline & workload views", free: false, starter: true, business: true, enterprise: true },
  { label: "Custom fields & formulas", free: false, starter: true, business: true, enterprise: true },
  { label: "SAML SSO & SCIM", free: false, starter: false, business: false, enterprise: true },
  { label: "Data residency", free: false, starter: false, business: false, enterprise: true },
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-4 w-4 text-emerald-400" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-neutral-700" />
  );
}

export default function UnitXPricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
            Pricing
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Priced per person.
            <br />
            Not per <span className="text-light-primary">surprise</span>.
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            One seat price covers every view, every module, and every app.
            Viewers are always free — the people who only need to see the plan
            never cost you anything.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-white/[0.09] text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                annual
                  ? "bg-white/[0.09] text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Yearly
              <span className="rounded-full bg-light-primary/15 px-2 py-0.5 text-[10px] font-semibold text-light-primary">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, i) => {
            const price = annual ? tier.annual : tier.monthly;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative flex flex-col rounded-[30px] border p-7 ${
                  tier.highlight
                    ? "border-light-primary/35 bg-linear-to-b from-light-primary/[0.10] to-transparent shadow-[0_0_60px_-30px_rgba(227,81,81,0.8)]"
                    : "border-white/[0.07] bg-white/[0.025]"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-light-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <span className="text-lg font-semibold text-neutral-100">
                  {tier.name}
                </span>
                <span className="mt-1.5 block min-h-[36px] text-[13px] leading-snug text-neutral-500">
                  {tier.tagline}
                </span>

                <div className="mt-6 flex items-baseline gap-1.5">
                  {price === null ? (
                    <span className="font-display text-3xl font-semibold text-neutral-100">
                      Let&apos;s talk
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-semibold text-neutral-100">
                        ${price}
                      </span>
                      {price > 0 && (
                        <span className="text-sm text-neutral-500">/mo</span>
                      )}
                    </>
                  )}
                </div>
                <span className="mt-1.5 block text-xs text-neutral-500">
                  {tier.priceNote}
                  {annual && price !== null && price > 0
                    ? ", billed yearly"
                    : ""}
                </span>

                <Link
                  href="/contacts"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    tier.highlight
                      ? "bg-light-primary text-white hover:bg-primary"
                      : "border border-white/12 text-neutral-200 hover:bg-white/[0.07]"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <span className="mt-7 block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  {tier.featureHeading}
                </span>
                <ul className="mt-4 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-light-primary" />
                      <span className="text-[13px] leading-relaxed text-neutral-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* universal strip */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-[24px] border border-white/[0.07] bg-white/[0.02] px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Every plan
          </span>
          {universal.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-[13px] text-neutral-400"
            >
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              {item}
            </span>
          ))}
        </div>

        {/* mini comparison */}
        <div className="mt-4 overflow-x-auto rounded-[24px] border border-white/[0.07] no-scrollbar">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-white/[0.03]">
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  Compare the essentials
                </th>
                {["Free", "Starter", "Business", "Enterprise"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-white/[0.06] transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3 text-[13px] text-neutral-300">
                    {row.label}
                  </td>
                  <td className="px-4 py-3">
                    <Cell on={row.free} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell on={row.starter} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell on={row.business} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell on={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-xs text-neutral-500">
          Prices in USD. Non-profits and registered educational institutions get
          50% off — just ask.
        </p>
      </div>
    </section>
  );
}
