"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { src: "/clients/apilayer-grayscale.png", alt: "APILayer" },
  { src: "/clients/ipstack.svg", alt: "ipstack" },
  { src: "/clients/numverify.png", alt: "numverify" },
  { src: "/clients/odyssey-plunge.webp", alt: "Odyssey Plunge" },
  { src: "/clients/coinlayer.svg", alt: "coinlayer" },
  { src: "/clients/zenserp.svg", alt: "Zenserp" },
  { src: "/clients/fixer.png", alt: "Fixer" },
];

export default function UnitXTrust() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="relative border-y border-white/[0.06] bg-black/25 py-10 sm:py-12">
      <div className="site-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium uppercase tracking-[0.16em] text-neutral-500"
        >
          Built by UnitFactor — the team behind products for
        </motion.p>

        <div className="unitx-mask-x relative mt-8 overflow-hidden">
          <div className="unitx-marquee flex w-max items-center gap-12 sm:gap-16">
            {loop.map((logo, index) => (
              <Image
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={46}
                className="h-7 w-auto shrink-0 opacity-55 grayscale transition-opacity hover:opacity-80 sm:h-8"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
