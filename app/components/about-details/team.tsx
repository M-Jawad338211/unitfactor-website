import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const approach = [
  {
    title: "Discover",
    description:
      "We align on goals, users, and constraints before design and development start.",
  },
  {
    title: "Design",
    description:
      "Our team maps user journeys and interface systems that support product growth.",
  },
  {
    title: "Deliver",
    description:
      "We ship reliable software in milestones with clear communication and ownership.",
  },
];

const portraits = [
  {
    name: "Jawad Ahmad",
    role: "Product Strategy and Delivery",
    src: "/jpg/jawad2.jpeg",
  },
  {
    name: "Hammad Ahmad",
    role: "Operations and Client Success",
    src: "/jpg/hammad.jpeg",
  },
  {
    name: "Ali",
    role: "Engineering and Implementation",
    src: "/jpg/ali.jpg",
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-12 lg:px-16 xl:px-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_58%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_26%,rgba(227,81,81,0.14),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/12 bg-neutral-900/72 p-6 sm:p-8">
          <h2 className="text-left font-semibold">
            How our team works with yours
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            We integrate into your workflow, reduce decision friction, and keep
            momentum from strategy to production.
          </p>

          <div className="mt-6 space-y-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/5 p-4 transition-colors duration-300 hover:border-light-primary/40 hover:bg-primary/10"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-light-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/contacts"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="rounded-3xl border border-white/12 bg-neutral-900/72 p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.12em] text-white/75 uppercase">
            Leadership roles
          </p>
          <div className="mt-4 space-y-3">
            {portraits.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-3 rounded-2xl border border-white/12 bg-black/35 p-3"
              >
                <Image
                  src={person.src}
                  alt={person.name}
                  width={76}
                  height={76}
                  className="h-[76px] w-[76px] rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/72">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
