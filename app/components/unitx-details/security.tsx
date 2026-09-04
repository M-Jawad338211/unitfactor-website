"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bug,
  DatabaseBackup,
  FileLock2,
  Fingerprint,
  Globe,
  KeySquare,
  ScanEye,
  ServerCog,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const certifications = [
  { name: "SOC 2 Type II", detail: "Audited annually" },
  { name: "ISO 27001", detail: "Certified ISMS" },
  { name: "GDPR", detail: "DPA + SCCs" },
  { name: "HIPAA", detail: "BAA available" },
];

const controls: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "SSO, SAML & SCIM",
    body: "Okta, Entra ID, Google Workspace, and any SAML 2.0 provider, with automated provisioning and deprovisioning.",
    icon: KeySquare,
  },
  {
    title: "Granular audit logs",
    body: "Every read, write, permission change, export, and agent action — streamable to your SIEM.",
    icon: ScanEye,
  },
  {
    title: "Encryption everywhere",
    body: "TLS 1.3 in transit, AES-256 at rest, per-workspace keys, and customer-managed KMS on Enterprise.",
    icon: FileLock2,
  },
  {
    title: "Device & network controls",
    body: "IP allowlists, session policies, enforced MFA, and managed-device requirements per workspace.",
    icon: Fingerprint,
  },
  {
    title: "Data residency",
    body: "EU, US, UK, and AU regions. Storage, processing, and backups stay where you pin them.",
    icon: Globe,
  },
  {
    title: "Tested continuously",
    body: "Annual third-party penetration tests, a public bug bounty, and adversarial isolation tests on every deploy.",
    icon: Bug,
  },
  {
    title: "Backups & recovery",
    body: "Point-in-time recovery to any second in the last 35 days. 15-minute RPO, 1-hour RTO, tested quarterly.",
    icon: DatabaseBackup,
  },
  {
    title: "99.9% uptime SLA",
    body: "Contractual, with service credits. Status page, incident history, and RCAs published in full.",
    icon: ServerCog,
  },
  {
    title: "Your data trains nothing",
    body: "No customer content is used to train models — ours or a vendor's. Contractually guaranteed, top to bottom.",
    icon: ShieldCheck,
  },
];

export default function UnitXSecurity() {
  return (
    <section
      id="security"
      className="scroll-mt-40 relative border-y border-white/[0.06] bg-black/25 py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Trust &amp; compliance
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              Enterprise-ready without the{" "}
              <span className="text-light-primary">six-month</span> review.
            </motion.h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 lg:justify-self-end lg:text-lg">
            Security questionnaires, penetration test summaries, subprocessor
            lists, and the SOC 2 report are all in the Trust Center — no NDA
            required to start reading.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-[24px] border border-white/[0.07] bg-white/[0.03] p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] text-emerald-300">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-neutral-100">
                  {cert.name}
                </span>
                <span className="mt-0.5 block text-xs text-neutral-500">
                  {cert.detail}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((control) => {
            const Icon = control.icon;
            return (
              <div
                key={control.title}
                className="group bg-[#0b0b0d] p-6 transition-colors hover:bg-white/[0.03]"
              >
                <Icon className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-light-primary" />
                <h3 className="mt-4 text-sm font-semibold text-neutral-100">
                  {control.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                  {control.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-white/[0.07] bg-white/[0.025] px-7 py-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-light-primary/12 text-light-primary">
              <Users className="h-5 w-5" />
            </span>
            <span className="text-sm leading-relaxed text-neutral-300">
              Need a security review, a DPA, or a custom BAA?
              <span className="block text-neutral-500">
                Our team turns around most questionnaires in three business
                days.
              </span>
            </span>
          </div>
          <Link
            href="/contacts"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:bg-white/[0.07]"
          >
            Talk to security
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
