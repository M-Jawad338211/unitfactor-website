"use client";

import { motion } from "framer-motion";
import { ArrowRight, Braces, Blocks, Webhook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Brand marks live in /public/brands and are sourced from thesvg.org, using the
 * light-on-dark variant wherever a brand's default mark is near-black. Each is
 * a separate file rather than an inline sprite so the gradient/<defs> ids inside
 * them stay scoped and cannot collide.
 *
 * `boost` lifts the two marks whose brand colour is too dark to read on our
 * background (Sentry #362D59, Zendesk #03363D) without altering their hue.
 * All logos remain trademarks of their respective owners.
 */
type Tool = { name: string; icon: string; boost?: boolean };

const rowOne: Tool[] = [
  { name: "Slack", icon: "/brands/slack.svg" },
  { name: "GitHub", icon: "/brands/github.svg" },
  { name: "Figma", icon: "/brands/figma.svg" },
  { name: "Google Drive", icon: "/brands/google-drive.svg" },
  { name: "Notion", icon: "/brands/notion.svg" },
  { name: "Zoom", icon: "/brands/zoom.svg" },
  { name: "Salesforce", icon: "/brands/salesforce.svg" },
  { name: "Jira", icon: "/brands/jira.svg" },
  { name: "Linear", icon: "/brands/linear.svg" },
  { name: "Sentry", icon: "/brands/sentry.svg", boost: true },
];

const rowTwo: Tool[] = [
  { name: "Microsoft Teams", icon: "/brands/microsoft-teams.svg" },
  { name: "Outlook", icon: "/brands/outlook.svg" },
  { name: "GitLab", icon: "/brands/gitlab.svg" },
  { name: "Stripe", icon: "/brands/stripe.svg" },
  { name: "HubSpot", icon: "/brands/hubspot.svg" },
  { name: "Zendesk", icon: "/brands/zendesk.svg", boost: true },
  { name: "Intercom", icon: "/brands/intercom.svg" },
  { name: "Miro", icon: "/brands/miro.svg" },
  { name: "Dropbox", icon: "/brands/dropbox.svg" },
  { name: "Okta", icon: "/brands/okta.svg" },
];

const rowThree: Tool[] = [
  { name: "Claude", icon: "/brands/claude.svg" },
  { name: "ChatGPT", icon: "/brands/openai.svg" },
  { name: "Gemini", icon: "/brands/gemini.svg" },
  { name: "Snowflake", icon: "/brands/snowflake.svg" },
  { name: "Looker", icon: "/brands/looker.svg" },
  { name: "QuickBooks", icon: "/brands/quickbooks.svg" },
  { name: "Xero", icon: "/brands/xero.svg" },
  { name: "Zapier", icon: "/brands/zapier.svg" },
  { name: "Make", icon: "/brands/make.svg" },
  { name: "Vercel", icon: "/brands/vercel.svg" },
];

function ToolRow({
  tools,
  animation,
}: {
  tools: Tool[];
  animation: string;
}) {
  const loop = [...tools, ...tools];
  return (
    <div className="unitx-mask-x overflow-hidden">
      <div className={`flex w-max items-center gap-3 ${animation}`}>
        {loop.map((tool, i) => (
          <span
            key={`${tool.name}-${i}`}
            className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] py-2.5 pl-3 pr-5 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center">
              <Image
                src={tool.icon}
                alt=""
                aria-hidden
                width={28}
                height={28}
                className={`h-full w-full object-contain ${
                  tool.boost ? "brightness-[1.9] saturate-150" : ""
                }`}
              />
            </span>
            <span className="whitespace-nowrap text-[13px] text-neutral-300 transition-colors group-hover:text-neutral-100">
              {tool.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

const importers = [
  { from: "Jira", detail: "Issues, sprints, epics, workflows, and history" },
  { from: "Asana", detail: "Projects, sections, custom fields, and comments" },
  { from: "monday.com", detail: "Boards, groups, columns, and automations" },
  { from: "ClickUp", detail: "Spaces, folders, lists, and custom statuses" },
  { from: "Trello", detail: "Boards, cards, labels, checklists, and power-ups" },
  { from: "Notion", detail: "Databases, pages, relations, and rollups" },
  { from: "Linear", detail: "Issues, cycles, projects, and triage queues" },
  { from: "CSV / Sheets", detail: "Anything else, with a mapping wizard" },
];

export default function UnitXIntegrations() {
  return (
    <section id="integrations" className="scroll-mt-40 relative py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
            Integrations &amp; extensibility
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl lg:text-5xl"
          >
            Consolidate your stack.
            <br />
            <span className="text-light-primary">Keep what you love.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            400+ native integrations, a documented REST and GraphQL API, signed
            webhooks, and a first-class MCP server so your AI tools can read and
            write UnitX directly.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          <ToolRow tools={rowOne} animation="unitx-marquee" />
          <ToolRow tools={rowTwo} animation="unitx-marquee-reverse" />
          <ToolRow tools={rowThree} animation="unitx-marquee-slow" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            {
              title: "REST + GraphQL API",
              body: "Every object you can see in the UI, addressable and writable. Rate limits published, not discovered.",
              icon: Braces,
            },
            {
              title: "Signed webhooks",
              body: "40+ event types with replay, dead-letter queues, and per-endpoint secrets.",
              icon: Webhook,
            },
            {
              title: "MCP server",
              body: "Point Claude, Cursor, or your own agent at UnitX and let it work with scoped, auditable permissions.",
              icon: Blocks,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <Icon className="h-5 w-5 text-light-primary" />
                <h3 className="mt-4 text-base font-semibold text-neutral-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* migration */}
        <div className="mt-20 grid grid-cols-1 gap-8 rounded-[36px] border border-white/[0.07] bg-linear-to-b from-white/[0.045] to-transparent p-7 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Migration
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-neutral-100 sm:text-3xl lg:text-4xl">
              Switch in an afternoon, not a quarter.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Importers preserve hierarchy, custom fields, attachments,
              comments, and history — including who said what and when. Run a
              dry import first, review the diff, then cut over. We keep the old
              IDs so your links never break.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
              >
                Plan a migration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400">
                White-glove migration on Business and above
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {importers.map((item) => (
              <div
                key={item.from}
                className="rounded-2xl border border-white/[0.07] bg-black/30 p-4 transition-colors hover:border-light-primary/25"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-neutral-100">
                    {item.from}
                  </span>
                  <ArrowRight className="h-3 w-3 text-neutral-600" />
                  <span className="text-xs font-medium text-light-primary">
                    UnitX
                  </span>
                </span>
                <span className="mt-1.5 block text-[11.5px] leading-relaxed text-neutral-500">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
