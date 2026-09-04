"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DatabaseZap,
  FlaskConical,
  Globe2,
  KeyRound,
  Lock,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

const tenants = [
  { name: "Northwind Group", type: "Client workspace", members: 42, tone: "sky" },
  { name: "Meridian Health", type: "Client workspace", members: 118, tone: "violet" },
  { name: "Your studio", type: "Internal workspace", members: 26, tone: "brand" },
];

const toneMap: Record<string, string> = {
  sky: "border-sky-400/25 bg-sky-400/[0.05] text-sky-300",
  violet: "border-violet-400/25 bg-violet-400/[0.05] text-violet-300",
  brand: "border-light-primary/30 bg-light-primary/[0.06] text-light-primary",
};

const guarantees: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Isolation at the database kernel",
    body: "PostgreSQL row-level security on every tenant-scoped table. A cross-tenant read is not blocked by application code — it is impossible to express.",
    icon: DatabaseZap,
  },
  {
    title: "Per-workspace encryption keys",
    body: "Each workspace holds its own data encryption key, wrapped by a customer-managed KMS key on Enterprise. Revoke the key, revoke the data.",
    icon: KeyRound,
  },
  {
    title: "Client portals that show exactly one thing",
    body: "Invite a client, a contractor, or an auditor into a scoped view. They see the work you shared and nothing adjacent to it.",
    icon: UserRoundCheck,
  },
  {
    title: "Isolation tests run on every commit",
    body: "An adversarial suite attempts cross-tenant reads, writes, and joins on every pipeline run. A leak fails the build, not an audit.",
    icon: FlaskConical,
  },
  {
    title: "Residency you choose",
    body: "Pin a workspace to EU, US, UK, or AU infrastructure. Data stays in region for storage, processing, and backups.",
    icon: Globe2,
  },
  {
    title: "Permissions that go seven levels deep",
    body: "Workspace, space, folder, project, view, field, and record. Set once at the top, override precisely where you need to.",
    icon: Lock,
  },
];

export default function UnitXIsolation() {
  return (
    <section
      id="isolation"
      className="scroll-mt-40 relative border-y border-white/[0.06] bg-black/25 py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-[-15%] top-1/3 -z-10 h-[38rem] bg-[radial-gradient(circle_at_80%_50%,rgba(10,50,83,0.4),transparent_58%)] blur-3xl" />

      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              What actually makes us different
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
            >
              One platform.
              <br />
              <span className="text-light-primary">Airtight</span> walls between
              every workspace.
            </motion.h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Most work platforms call a folder a &ldquo;workspace&rdquo; and
              rely on application logic to keep tenants apart. UnitX was built
              multi-tenant from the first migration: isolation is enforced in
              the database itself, verified by an adversarial test suite on
              every commit.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              That is why agencies can run every client here, why holding
              companies can run every subsidiary here, and why a regulated
              enterprise can put legal, HR, and engineering on one platform
              without writing a risk memo about it.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Agencies & studios",
                "Holding companies",
                "Regulated enterprises",
                "MSPs & consultancies",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* architecture diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="unitx-surface relative overflow-hidden rounded-[32px] border border-white/10 p-6 sm:p-8"
          >
            <div className="unitx-grid pointer-events-none absolute inset-0 opacity-50" />

            <div className="relative">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                One account · three isolated tenants
              </span>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {tenants.map((tenant) => (
                  <div
                    key={tenant.name}
                    className={`rounded-2xl border p-3.5 ${toneMap[tenant.tone]}`}
                  >
                    <Building2 className="h-4 w-4" />
                    <span className="mt-2.5 block text-[12px] font-semibold text-neutral-100">
                      {tenant.name}
                    </span>
                    <span className="mt-0.5 block text-[10px] text-neutral-500">
                      {tenant.type}
                    </span>
                    <div className="mt-3 flex items-center gap-1.5 border-t border-white/[0.08] pt-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="text-[9.5px] text-neutral-500">
                        {tenant.members} members
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* barrier */}
              <div className="relative mt-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-linear-to-r from-transparent via-light-primary/40 to-transparent" />
                <span className="flex items-center gap-1.5 rounded-full border border-light-primary/30 bg-light-primary/[0.08] px-3 py-1 text-[10px] font-medium text-light-primary">
                  <Lock className="h-3 w-3" />
                  Row-level security policy
                </span>
                <span className="h-px flex-1 bg-linear-to-r from-transparent via-light-primary/40 to-transparent" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.09] bg-black/40 p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Shared platform
                </span>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Compute", "Search index", "Agents", "Billing"].map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-2 text-center text-[10px] text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-3.5 py-2.5">
                <span className="flex items-center gap-2 text-[10.5px] text-emerald-300">
                  <FlaskConical className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    <span className="font-semibold">
                      1,412 isolation assertions
                    </span>{" "}
                    <span className="text-neutral-400">
                      passed on the last deploy
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guarantees.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6 transition-colors hover:border-white/15"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-light-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-5 text-base font-semibold leading-snug text-neutral-100">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-400">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
