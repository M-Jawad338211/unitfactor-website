const engagementModels = [
  {
    title: "Launch Sprint",
    description:
      "A focused engagement for validating scope, designing the experience, and building a strong first release.",
    detail: "Best for new SaaS ideas, landing pages, MVPs, and product refreshes.",
  },
  {
    title: "Product Pod",
    description:
      "A dedicated monthly team for ongoing product design, engineering, QA, and roadmap execution.",
    detail: "Best for teams that need consistent product velocity without hiring full-time.",
  },
  {
    title: "Modernization Track",
    description:
      "A practical path for improving UX, performance, architecture, and maintainability in existing products.",
    detail: "Best for mature platforms that feel slow, inconsistent, or hard to extend.",
  },
];

export default function Engagements() {
  return (
    <section className="relative pb-16 sm:pb-20 lg:pb-24">
      <div className="site-container">
        <div className="rounded-[44px] bg-zinc-800/70 p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Engagement Models
            </p>
            <h2 className="mt-4 font-display text-neutral-200">
              Flexible ways to <span className="text-light-primary">work</span>{" "}
              together.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <article
                key={model.title}
                className="rounded-[32px] bg-neutral-950/30 p-6"
              >
                <h3 className="text-2xl font-semibold text-neutral-200">
                  {model.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-300">
                  {model.description}
                </p>
                <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-400">
                  {model.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
