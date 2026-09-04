/**
 * The seven UnitX "views", rendered as live markup.
 *
 * All data below is illustrative product content for the marketing page —
 * a single fictional programme ("Payments 2.0") carried across every view so
 * the tabs feel like one real workspace rather than seven unrelated pictures.
 */

import {
  Avatar,
  AvatarStack,
  Chip,
  Progress,
  statusTone,
  type StatusKey,
} from "./ui-kit";

/* ------------------------------------------------------------------- board */

type Card = {
  title: string;
  label: string;
  tone: "brand" | "sky" | "violet" | "emerald" | "amber" | "neutral";
  owner: string;
  meta?: string;
  subtasks?: string;
  progress?: number;
  agent?: boolean;
};

const columns: { name: string; status: StatusKey; count: number; cards: Card[] }[] =
  [
    {
      name: "Backlog",
      status: "backlog",
      count: 14,
      cards: [
        {
          title: "Audit legacy checkout events",
          label: "Discovery",
          tone: "neutral",
          owner: "Priya Nair",
          meta: "UX-1184",
        },
        {
          title: "Vendor review — tax engine",
          label: "Procurement",
          tone: "neutral",
          owner: "Sam Ortiz",
          meta: "UX-1190",
        },
      ],
    },
    {
      name: "Planned",
      status: "planned",
      count: 9,
      cards: [
        {
          title: "SOC 2 evidence for payment logs",
          label: "Compliance",
          tone: "sky",
          owner: "Sam Ortiz",
          meta: "Sep 22",
          subtasks: "0/6",
        },
        {
          title: "Wallet top-up flow",
          label: "Blocked",
          tone: "brand",
          owner: "Tom Beck",
          meta: "Waiting on legal",
        },
      ],
    },
    {
      name: "In progress",
      status: "active",
      count: 6,
      cards: [
        {
          title: "Split-payment API — contract tests",
          label: "Payments",
          tone: "amber",
          owner: "Ayesha Khan",
          meta: "Sep 12",
          subtasks: "7/9",
          progress: 78,
        },
        {
          title: "Refactor invoice PDF renderer",
          label: "Infra",
          tone: "sky",
          owner: "Marco Silva",
          meta: "Sep 15",
          progress: 40,
        },
      ],
    },
    {
      name: "In review",
      status: "review",
      count: 3,
      cards: [
        {
          title: "Dunning email sequence v2",
          label: "Lifecycle",
          tone: "violet",
          owner: "Nadia Haddad",
          meta: "2 approvals",
          agent: true,
        },
        {
          title: "Checkout error states — specs",
          label: "Design",
          tone: "violet",
          owner: "Dev Rao",
          meta: "PR #4412",
        },
      ],
    },
    {
      name: "Done",
      status: "done",
      count: 28,
      cards: [
        {
          title: "Migrate webhooks to v2 signing",
          label: "Infra",
          tone: "emerald",
          owner: "Farah Aziz",
          meta: "Shipped Sep 4",
        },
      ],
    },
  ];

export function BoardView() {
  return (
    <div className="relative">
      {/* signals that the board scrolls sideways rather than ending abruptly */}
      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#0e0e10] to-transparent" />
      <div className="flex gap-3 overflow-x-auto p-3 no-scrollbar">
      {columns.map((column) => (
        <div key={column.name} className="w-[196px] shrink-0 sm:w-[212px]">
          <div className="mb-2 flex items-center gap-2 px-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusTone[column.status].dot}`}
            />
            <span className="text-[11px] font-semibold text-neutral-300">
              {column.name}
            </span>
            <span className="text-[10px] text-neutral-600">{column.count}</span>
            <span className="ml-auto text-neutral-700">+</span>
          </div>

          <div className="space-y-2">
            {column.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-white/[0.07] bg-white/[0.035] p-2.5 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-1.5">
                  <Chip tone={card.tone}>{card.label}</Chip>
                  {card.agent && (
                    <span className="inline-flex items-center gap-0.5 rounded-md bg-violet-400/12 px-1.5 py-0.5 text-[9px] font-medium text-violet-300 ring-1 ring-inset ring-violet-400/25">
                      ✦ Agent
                    </span>
                  )}
                </div>
                <div className="mt-1.5 text-[11.5px] font-medium leading-snug text-neutral-200">
                  {card.title}
                </div>
                {typeof card.progress === "number" && (
                  <Progress
                    className="mt-2"
                    value={card.progress}
                    tone={column.status === "active" ? "amber" : "brand"}
                  />
                )}
                <div className="mt-2 flex items-center gap-2">
                  <Avatar name={card.owner} size="xs" />
                  <span className="text-[9.5px] text-neutral-500">
                    {card.meta}
                  </span>
                  {card.subtasks && (
                    <span className="ml-auto text-[9.5px] text-neutral-500">
                      ☑ {card.subtasks}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-lg border border-dashed border-white/[0.07] px-2.5 py-2 text-[10px] text-neutral-600">
              + New task
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- list */

const listGroups = [
  {
    name: "Sprint 24 · Payments core",
    status: "active" as StatusKey,
    rows: [
      {
        id: "UX-1201",
        title: "Split-payment API — contract tests",
        owner: "Ayesha Khan",
        due: "Sep 12",
        priority: "Urgent",
        state: "In progress",
        tone: "active" as StatusKey,
      },
      {
        id: "UX-1204",
        title: "Refactor invoice PDF renderer",
        owner: "Marco Silva",
        due: "Sep 15",
        priority: "High",
        state: "In progress",
        tone: "active" as StatusKey,
      },
      {
        id: "UX-1207",
        title: "Dunning email sequence v2",
        owner: "Nadia Haddad",
        due: "Sep 16",
        priority: "Medium",
        state: "In review",
        tone: "review" as StatusKey,
      },
    ],
  },
  {
    name: "Sprint 24 · Compliance",
    status: "planned" as StatusKey,
    rows: [
      {
        id: "UX-1212",
        title: "SOC 2 evidence for payment logs",
        owner: "Sam Ortiz",
        due: "Sep 22",
        priority: "High",
        state: "Planned",
        tone: "planned" as StatusKey,
      },
      {
        id: "UX-1215",
        title: "Wallet top-up flow — legal sign-off",
        owner: "Tom Beck",
        due: "Sep 25",
        priority: "Blocked",
        state: "Blocked",
        tone: "blocked" as StatusKey,
      },
    ],
  },
];

const priorityTone: Record<string, string> = {
  Urgent: "text-light-primary",
  High: "text-amber-300",
  Medium: "text-sky-300",
  Blocked: "text-light-primary",
};

export function ListView() {
  return (
    <div className="p-3">
      <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-white/[0.07] px-2 pb-2 text-[10px] uppercase tracking-wider text-neutral-600 sm:grid-cols-[1fr_88px_88px_72px]">
        <span>Task</span>
        <span className="hidden sm:block">Assignee</span>
        <span className="hidden sm:block">Status</span>
        <span className="text-right">Due</span>
      </div>

      {listGroups.map((group) => (
        <div key={group.name} className="mt-2">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="text-neutral-600">▾</span>
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusTone[group.status].dot}`}
            />
            <span className="text-[11px] font-semibold text-neutral-300">
              {group.name}
            </span>
            <span className="text-[10px] text-neutral-600">
              {group.rows.length}
            </span>
          </div>

          {group.rows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-[1fr_auto] items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/[0.04] sm:grid-cols-[1fr_88px_88px_72px]"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="h-3 w-3 shrink-0 rounded-[4px] border border-white/20" />
                <span className="shrink-0 text-[10px] text-neutral-600">
                  {row.id}
                </span>
                <span className="truncate text-[11.5px] text-neutral-200">
                  {row.title}
                </span>
                <span
                  className={`ml-1 hidden shrink-0 text-[10px] font-medium lg:inline ${priorityTone[row.priority]}`}
                >
                  ▲ {row.priority}
                </span>
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <Avatar name={row.owner} size="xs" ring={false} />
                <span className="truncate text-[10px] text-neutral-500">
                  {row.owner.split(" ")[0]}
                </span>
              </span>
              <span className="hidden sm:block">
                <span
                  className={`rounded px-1.5 py-0.5 text-[9.5px] font-medium ring-1 ring-inset ${statusTone[row.tone].soft}`}
                >
                  {row.state}
                </span>
              </span>
              <span className="text-right text-[10px] text-neutral-500">
                {row.due}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- timeline */

const timelineRows = [
  {
    name: "Discovery & audit",
    team: "Research",
    left: 2,
    width: 18,
    tone: "bg-sky-400/70",
    done: true,
  },
  {
    name: "Split-payment API",
    team: "Platform",
    left: 16,
    width: 30,
    tone: "bg-linear-to-r from-light-primary to-primary",
  },
  {
    name: "Checkout redesign",
    team: "Design",
    left: 28,
    width: 24,
    tone: "bg-violet-400/70",
  },
  {
    name: "Billing migration",
    team: "Platform",
    left: 44,
    width: 26,
    tone: "bg-amber-400/70",
  },
  {
    name: "SOC 2 evidence pack",
    team: "Compliance",
    left: 58,
    width: 18,
    tone: "bg-sky-400/70",
  },
  {
    name: "GA launch + comms",
    team: "Marketing",
    left: 72,
    width: 22,
    tone: "bg-emerald-400/70",
  },
];

export function TimelineView() {
  return (
    <div className="p-3">
      <div className="mb-2 flex items-center gap-2 px-1 text-[10px] text-neutral-600">
        <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-neutral-400">
          Quarter
        </span>
        <span>Month</span>
        <span>Week</span>
        <span className="ml-auto flex items-center gap-1 text-light-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-light-primary" /> 2 at
          risk
        </span>
      </div>

      <div className="relative rounded-lg border border-white/[0.07] bg-black/20">
        {/* month header */}
        <div className="grid grid-cols-4 border-b border-white/[0.07] text-[10px] text-neutral-500">
          {["July", "August", "September", "October"].map((m) => (
            <span
              key={m}
              className="border-r border-white/[0.05] px-2 py-1.5 last:border-r-0"
            >
              {m}
            </span>
          ))}
        </div>

        {/* today marker */}
        <div
          className="pointer-events-none absolute bottom-0 top-7 w-px bg-light-primary/60"
          style={{ left: "58%" }}
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-light-primary" />
        </div>

        <div className="relative divide-y divide-white/[0.05]">
          {/* column grid */}
          <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="border-r border-white/[0.04] last:border-r-0" />
            ))}
          </div>

          {timelineRows.map((row) => (
            <div
              key={row.name}
              className="relative grid grid-cols-[110px_1fr] items-center gap-2 py-2 sm:grid-cols-[150px_1fr]"
            >
              <span className="truncate pl-2 text-[10.5px] text-neutral-400">
                {row.name}
                <span className="ml-1.5 hidden text-[9px] text-neutral-600 sm:inline">
                  {row.team}
                </span>
              </span>
              <span className="relative h-5 pr-2">
                <span
                  className={`absolute top-0.5 flex h-4 items-center rounded px-1.5 text-[9px] font-medium text-black/70 ${row.tone}`}
                  style={{ left: `${row.left}%`, width: `${row.width}%` }}
                >
                  {row.done ? "✓" : ""}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2 px-1 text-[9.5px] text-neutral-600">
        <span>Dependencies auto-shift downstream dates</span>
        <span className="text-neutral-700">·</span>
        <span>Baseline vs. actual tracked per milestone</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- calendar */

const calendarEvents: Record<number, { label: string; tone: string }[]> = {
  3: [{ label: "Sprint 24 kickoff", tone: "bg-sky-400/15 text-sky-300" }],
  5: [{ label: "Design review", tone: "bg-violet-400/15 text-violet-300" }],
  9: [
    { label: "API freeze", tone: "bg-light-primary/15 text-light-primary" },
    { label: "Standup notes", tone: "bg-white/[0.06] text-neutral-400" },
  ],
  12: [{ label: "Contract tests due", tone: "bg-amber-400/15 text-amber-300" }],
  16: [{ label: "Dunning v2 ship", tone: "bg-emerald-400/15 text-emerald-300" }],
  18: [{ label: "Exec readout", tone: "bg-sky-400/15 text-sky-300" }],
  22: [{ label: "SOC 2 evidence", tone: "bg-violet-400/15 text-violet-300" }],
  25: [{ label: "GA go/no-go", tone: "bg-light-primary/15 text-light-primary" }],
};

export function CalendarView() {
  const days = Array.from({ length: 35 }, (_, i) => i - 1);

  return (
    <div className="p-3">
      <div className="mb-2 flex items-center gap-3 px-1">
        <span className="text-[11px] font-semibold text-neutral-300">
          September 2026
        </span>
        <span className="text-neutral-600">‹ ›</span>
        <span className="ml-auto flex gap-1 text-[10px] text-neutral-600">
          <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-neutral-400">
            Month
          </span>
          <span>Week</span>
          <span>Day</span>
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/[0.07]">
        <div className="grid grid-cols-7 border-b border-white/[0.07] bg-white/[0.02]">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span
              key={d}
              className="px-2 py-1.5 text-[9.5px] uppercase tracking-wider text-neutral-600"
            >
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, i) => {
            const inMonth = day >= 1 && day <= 30;
            const events = calendarEvents[day] ?? [];
            return (
              <div
                key={i}
                className={`min-h-[52px] border-b border-r border-white/[0.05] p-1 ${
                  inMonth ? "" : "bg-black/20"
                }`}
              >
                <span
                  className={`text-[9.5px] ${
                    day === 9
                      ? "inline-flex h-4 w-4 items-center justify-center rounded-full bg-light-primary font-semibold text-white"
                      : inMonth
                        ? "text-neutral-500"
                        : "text-neutral-700"
                  }`}
                >
                  {inMonth ? day : ""}
                </span>
                <div className="mt-1 space-y-0.5">
                  {events.map((event) => (
                    <span
                      key={event.label}
                      className={`block truncate rounded px-1 py-0.5 text-[8.5px] font-medium ${event.tone}`}
                    >
                      {event.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- table */

const tableRows = [
  {
    task: "Split-payment API",
    owner: "Ayesha Khan",
    status: "In progress",
    tone: "active" as StatusKey,
    effort: "13",
    spend: "$24,800",
    conf: 82,
  },
  {
    task: "Invoice PDF renderer",
    owner: "Marco Silva",
    status: "In progress",
    tone: "active" as StatusKey,
    effort: "8",
    spend: "$11,200",
    conf: 64,
  },
  {
    task: "Dunning sequence v2",
    owner: "Nadia Haddad",
    status: "In review",
    tone: "review" as StatusKey,
    effort: "5",
    spend: "$6,400",
    conf: 91,
  },
  {
    task: "SOC 2 evidence pack",
    owner: "Sam Ortiz",
    status: "Planned",
    tone: "planned" as StatusKey,
    effort: "21",
    spend: "$18,000",
    conf: 55,
  },
  {
    task: "Webhook v2 signing",
    owner: "Farah Aziz",
    status: "Done",
    tone: "done" as StatusKey,
    effort: "8",
    spend: "$9,750",
    conf: 100,
  },
];

export function TableView() {
  return (
    <div className="overflow-x-auto p-3 no-scrollbar">
      <div className="min-w-[560px]">
        <div className="grid grid-cols-[1.4fr_0.9fr_0.8fr_0.5fr_0.7fr_0.9fr] gap-px rounded-t-lg bg-white/[0.06] text-[9.5px] uppercase tracking-wider text-neutral-500">
          {["Task", "Owner", "Status", "Pts", "Spend", "Confidence"].map((h) => (
            <span key={h} className="bg-[#141416] px-2.5 py-2">
              {h}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[1.4fr_0.9fr_0.8fr_0.5fr_0.7fr_0.9fr] gap-px bg-white/[0.05]">
          {tableRows.map((row) => (
            <FragmentRow key={row.task} row={row} />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-4 px-2.5 text-[9.5px] text-neutral-600">
          <span>Σ 55 pts</span>
          <span>Σ $70,150 of $92,000 budget</span>
          <span className="text-emerald-400">76% forecast confidence</span>
        </div>
      </div>
    </div>
  );
}

function FragmentRow({ row }: { row: (typeof tableRows)[number] }) {
  const cell = "bg-[#0f0f11] px-2.5 py-2 text-[11px] text-neutral-300";
  return (
    <>
      <span className={`${cell} truncate text-neutral-200`}>{row.task}</span>
      <span className={`${cell} flex items-center gap-1.5`}>
        <Avatar name={row.owner} size="xs" ring={false} />
        <span className="truncate text-[10px] text-neutral-400">
          {row.owner.split(" ")[0]}
        </span>
      </span>
      <span className={cell}>
        <span
          className={`rounded px-1.5 py-0.5 text-[9.5px] font-medium ring-1 ring-inset ${statusTone[row.tone].soft}`}
        >
          {row.status}
        </span>
      </span>
      <span className={`${cell} text-neutral-400`}>{row.effort}</span>
      <span className={`${cell} text-neutral-400`}>{row.spend}</span>
      <span className={`${cell} flex items-center gap-2`}>
        <Progress
          value={row.conf}
          tone={row.conf > 80 ? "emerald" : row.conf > 60 ? "amber" : "brand"}
        />
        <span className="w-7 shrink-0 text-right text-[9.5px] text-neutral-500">
          {row.conf}%
        </span>
      </span>
    </>
  );
}

/* ---------------------------------------------------------------- workload */

const workload = [
  { name: "Ayesha Khan", role: "Staff engineer", load: 92, items: 7 },
  { name: "Marco Silva", role: "Backend", load: 118, items: 9 },
  { name: "Nadia Haddad", role: "Lifecycle", load: 64, items: 4 },
  { name: "Dev Rao", role: "Product design", load: 78, items: 6 },
  { name: "Farah Aziz", role: "Platform", load: 41, items: 3 },
  { name: "Sam Ortiz", role: "Compliance", load: 86, items: 5 },
];

export function WorkloadView() {
  return (
    <div className="p-3">
      <div className="mb-3 flex flex-wrap items-center gap-2 px-1 text-[10px]">
        <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-neutral-400">
          This sprint
        </span>
        <span className="text-neutral-600">Capacity per person, in hours</span>
        <span className="ml-auto flex items-center gap-1 rounded-md bg-light-primary/12 px-2 py-0.5 text-light-primary ring-1 ring-inset ring-light-primary/25">
          1 person over capacity
        </span>
      </div>

      <div className="space-y-2.5">
        {workload.map((person) => {
          const over = person.load > 100;
          return (
            <div
              key={person.name}
              className="grid grid-cols-[130px_1fr_auto] items-center gap-3 sm:grid-cols-[170px_1fr_auto]"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Avatar name={person.name} size="sm" ring={false} />
                <span className="min-w-0">
                  <span className="block truncate text-[11px] text-neutral-200">
                    {person.name}
                  </span>
                  <span className="block truncate text-[9px] text-neutral-600">
                    {person.role}
                  </span>
                </span>
              </span>

              <span className="relative block h-4 overflow-hidden rounded bg-white/[0.05]">
                <span
                  className={`absolute inset-y-0 left-0 rounded ${
                    over
                      ? "bg-linear-to-r from-light-primary to-primary"
                      : person.load > 80
                        ? "bg-amber-400/70"
                        : "bg-emerald-400/60"
                  }`}
                  style={{ width: `${Math.min(person.load, 100)}%` }}
                />
                <span className="absolute inset-y-0 left-[85%] w-px bg-white/25" />
              </span>

              <span
                className={`w-20 shrink-0 text-right text-[10px] ${
                  over ? "text-light-primary" : "text-neutral-500"
                }`}
              >
                {person.load}% · {person.items} items
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-violet-400/20 bg-violet-400/[0.06] px-2.5 py-2">
        <span className="text-[11px] text-violet-300">✦</span>
        <span className="text-[10.5px] text-neutral-300">
          <span className="font-medium text-violet-200">Balancer agent:</span>{" "}
          move 2 tasks from Marco to Farah to bring the sprint back under
          capacity.
        </span>
        <span className="ml-auto hidden shrink-0 rounded bg-white/10 px-2 py-0.5 text-[9.5px] text-neutral-300 sm:inline">
          Apply
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- dashboard */

export function DashboardView() {
  return (
    <div className="p-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Cycle time", value: "3.4d", delta: "−22%", good: true },
          { label: "Sprint scope", value: "55 pts", delta: "+4", good: false },
          { label: "On-time rate", value: "94%", delta: "+9%", good: true },
          { label: "Blocked", value: "2", delta: "−3", good: true },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5"
          >
            <span className="block text-[9.5px] uppercase tracking-wider text-neutral-600">
              {stat.label}
            </span>
            <span className="mt-1 flex items-baseline gap-1.5">
              <span className="text-base font-semibold text-neutral-100">
                {stat.value}
              </span>
              <span
                className={`text-[9.5px] ${stat.good ? "text-emerald-400" : "text-amber-400"}`}
              >
                {stat.delta}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 grid gap-2 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] font-medium text-neutral-300">
              Sprint burndown
            </span>
            <span className="flex items-center gap-2 text-[9px] text-neutral-600">
              <span className="flex items-center gap-1">
                <span className="h-px w-3 bg-neutral-600" /> Ideal
              </span>
              <span className="flex items-center gap-1">
                <span className="h-px w-3 bg-light-primary" /> Actual
              </span>
            </span>
          </div>
          <svg
            viewBox="0 0 300 110"
            className="mt-2 h-24 w-full"
            preserveAspectRatio="none"
            role="img"
            aria-label="Sprint burndown chart trending to zero remaining work"
          >
            <defs>
              <linearGradient id="ux-burn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e35151" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#e35151" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[22, 44, 66, 88].map((y) => (
              <line
                key={y}
                x1="0"
                x2="300"
                y1={y}
                y2={y}
                stroke="#ffffff"
                strokeOpacity="0.05"
              />
            ))}
            <line
              x1="4"
              y1="8"
              x2="296"
              y2="100"
              stroke="#6b6b73"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path
              d="M4 8 L34 14 L64 20 L94 36 L124 40 L154 54 L184 58 L214 78 L244 84 L270 96 L296 100 L296 110 L4 110 Z"
              fill="url(#ux-burn)"
            />
            <path
              d="M4 8 L34 14 L64 20 L94 36 L124 40 L154 54 L184 58 L214 78 L244 84 L270 96 L296 100"
              fill="none"
              stroke="#e35151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="296" cy="100" r="3" fill="#e35151" />
          </svg>
        </div>

        <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
          <span className="text-[10.5px] font-medium text-neutral-300">
            Where time went
          </span>
          <div className="mt-3 space-y-2">
            {[
              { label: "Feature work", value: 54, tone: "brand" as const },
              { label: "Bugs & support", value: 21, tone: "amber" as const },
              { label: "Compliance", value: 15, tone: "sky" as const },
              { label: "Tech debt", value: 10, tone: "violet" as const },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1 flex items-center justify-between text-[9.5px]">
                  <span className="text-neutral-400">{row.label}</span>
                  <span className="text-neutral-600">{row.value}%</span>
                </div>
                <Progress value={row.value} tone={row.tone} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10.5px] font-medium text-neutral-300">
            Goal · Reduce checkout failure rate to 0.4%
          </span>
          <span className="text-[9.5px] text-emerald-400">On track</span>
        </div>
        <Progress className="mt-2" value={72} tone="emerald" />
        <div className="mt-2 flex items-center gap-3 text-[9.5px] text-neutral-600">
          <span>0.71% → 0.48%</span>
          <span>·</span>
          <span>4 projects contributing</span>
          <span>·</span>
          <AvatarStack names={["Ayesha Khan", "Marco Silva", "Dev Rao"]} />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- doc */

export function DocView() {
  return (
    <div className="grid gap-3 p-3 lg:grid-cols-[1fr_190px]">
      <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-4">
        <span className="text-[9.5px] uppercase tracking-wider text-neutral-600">
          Spec · Payments 2.0
        </span>
        <span className="mt-1.5 block font-display text-sm font-semibold text-neutral-100">
          Split payments — technical design
        </span>
        <div className="mt-2 flex items-center gap-2">
          <AvatarStack names={["Ayesha Khan", "Dev Rao"]} />
          <span className="text-[9.5px] text-neutral-600">
            2 editing now · v14
          </span>
        </div>

        <div className="mt-4 space-y-1.5">
          <span className="block h-1.5 w-[92%] rounded bg-white/[0.07]" />
          <span className="block h-1.5 w-[86%] rounded bg-white/[0.07]" />
          <span className="block h-1.5 w-[64%] rounded bg-white/[0.07]" />
        </div>

        <div className="mt-4 rounded-md border-l-2 border-light-primary/60 bg-light-primary/[0.06] px-3 py-2">
          <span className="text-[10.5px] text-neutral-300">
            Every split must reconcile to a single ledger entry — no partial
            writes.
          </span>
        </div>

        <div className="mt-4 space-y-1.5">
          {[
            { text: "Define ledger schema", done: true },
            { text: "Idempotency keys on all writes", done: true },
            { text: "Backfill historical splits", done: false },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2">
              <span
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-[4px] text-[8px] ${
                  item.done
                    ? "bg-emerald-400/80 text-black"
                    : "border border-white/20"
                }`}
              >
                {item.done ? "✓" : ""}
              </span>
              <span
                className={`text-[10.5px] ${item.done ? "text-neutral-500 line-through" : "text-neutral-300"}`}
              >
                {item.text}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-md border border-white/[0.07] bg-black/30 px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[10px] text-neutral-400">
            Live task · UX-1201 Split-payment API
          </span>
          <span className="ml-auto text-[9px] text-neutral-600">78%</span>
        </div>
      </div>

      <div className="hidden space-y-2 lg:block">
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar name="Dev Rao" size="xs" ring={false} />
            <span className="text-[9.5px] text-neutral-400">Dev Rao</span>
          </div>
          <span className="mt-1.5 block text-[10px] leading-relaxed text-neutral-400">
            Can we cap splits at 12 recipients for v1?
          </span>
          <span className="mt-1.5 block text-[9px] text-neutral-600">
            Resolved by Ayesha
          </span>
        </div>
        <div className="rounded-lg border border-violet-400/20 bg-violet-400/[0.06] p-2.5">
          <span className="text-[9.5px] font-medium text-violet-300">
            ✦ Doc agent
          </span>
          <span className="mt-1.5 block text-[10px] leading-relaxed text-neutral-400">
            Summarised 3 decisions into the changelog and opened 2 follow-up
            tasks.
          </span>
        </div>
      </div>
    </div>
  );
}
