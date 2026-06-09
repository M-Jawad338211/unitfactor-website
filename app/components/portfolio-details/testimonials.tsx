"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Shmaya Schwartz",
    role: "Business Owner",
    quote:
      "Unitfactor delivered exactly what we needed with strong React and Next.js execution. Communication was clear, proactive, and reliable throughout.",
    image: "/jpg/shmaya.jpeg",
  },
  {
    name: "Justin Garner",
    role: "CEO, OnlineMed",
    quote:
      "The team stayed patient, structured, and solution-focused from kickoff to delivery. The final product quality was excellent.",
    image: "/jpg/justin.jpeg",
  },
  {
    name: "Daniel Mesecke",
    role: "CEO, Natural Bathroom",
    quote:
      "Unitfactor brought strategic direction and technical depth in one team. They were responsive, dependable, and easy to collaborate with.",
    image: "/png/team-member.png",
  },
];

const trustSignals = [
  "Product Design",
  "Full-stack Development",
  "Technical Discovery",
  "Long-term Support",
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary">
              Client Notes
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-4 max-w-3xl text-left font-semibold"
            >
              What clients value in the{" "}
              <span className="text-light-primary">process</span>.
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-200/10 px-3 py-1 text-xs font-medium text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[34px] bg-zinc-800/70 p-6">
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                &quot;{item.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
