import { Compass, Layers3, LifeBuoy } from "lucide-react";

const storyCards = [
  {
    title: "We start by making the problem smaller",
    description:
      "Before pixels or code, we define what needs to change, who it matters to, and what a useful first release should prove.",
    icon: Compass,
  },
  {
    title: "We design systems, not one-off screens",
    description:
      "Reusable interface patterns help teams move faster after launch, especially when products grow into dashboards and workflows.",
    icon: Layers3,
  },
  {
    title: "We stay close after shipping",
    description:
      "Launch is a checkpoint, not a finish line. We support iteration, optimization, and maintenance when products start meeting real users.",
    icon: LifeBuoy,
  },
];

export default function Story() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Our Point of View
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-neutral-200">
              Better products come from{" "}
              <span className="text-light-primary">better</span> decisions.
            </h2>
          </div>

          <div className="grid gap-5">
            {storyCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="grid gap-5 rounded-[36px] bg-zinc-800/70 p-7 sm:grid-cols-[64px_1fr]"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/22 text-light-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-neutral-200">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-300">
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
