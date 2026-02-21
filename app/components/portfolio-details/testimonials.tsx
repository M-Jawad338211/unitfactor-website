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
    <section className="relative overflow-hidden px-4 py-14 sm:px-12 lg:px-16 xl:px-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_55%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(227,81,81,0.16),transparent_42%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl text-left font-semibold"
          >
            What clients value most in our process
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/22 bg-white/8 px-3 py-1 text-xs font-medium text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/12 bg-neutral-900/72 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/78 sm:text-base">
                &quot;{item.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
