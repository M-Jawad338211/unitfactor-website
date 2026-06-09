"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "../shared/count-up";

const logos = [
  { src: "/clients/apilayer-grayscale.png", alt: "Apilayer" },
  { src: "/clients/ipstack.svg", alt: "Ipstack" },
  { src: "/clients/numverify.png", alt: "Numverify" },
  { src: "/clients/odyssey-plunge.webp", alt: "Odyssey plunge" },
  { src: "/clients/coinlayer.svg", alt: "Coinlayer" },
  { src: "/clients/zenserp.svg", alt: "Zenserp" },
];

export default function Hero() {
  const loop = [...logos, ...logos];

  return (
    <section className="relative min-h-[820px] overflow-hidden bg-[url('/png/hero.png')] bg-cover bg-center md:min-h-[880px]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,0.9)_42%,rgba(10,10,10,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-background to-transparent" />

      <div className="site-container relative flex min-h-[820px] flex-col justify-center pt-28 md:min-h-[880px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary"
            >
              Product design and software development agency
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
              className="mt-5 max-w-[680px] text-neutral-200"
            >
              Launch <span className="text-light-primary">sharper</span>
              <span className="block">digital products.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl"
            >
              Unitfactor helps SaaS, healthcare, fintech, and B2B teams turn
              unclear requirements into reliable launches, cleaner UX, and
              scalable web products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-6 py-4 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-neutral-200/10 px-6 py-4 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:bg-neutral-200/[0.18]"
              >
                View case studies
              </Link>
            </motion.div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-5">
              {[
                { value: "70+", label: "projects shipped" },
                { value: "90%", label: "repeat clients" },
                { value: "12", label: "industries served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-neutral-200 sm:text-3xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: "easeOut" }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <div className="absolute inset-0 rounded-[44px] bg-zinc-800/70 p-4 shadow-[0_36px_110px_-60px_rgba(227,81,81,0.9)] backdrop-blur-sm">
              <div className="relative h-full overflow-hidden rounded-[34px]">
                <Image
                  src="/png/portfolio-main.png"
                  alt="Digital product interface preview"
                  fill
                  priority
                  className="object-cover"
                  sizes="48vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/76 via-black/12 to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-8 left-8 max-w-[320px] rounded-[28px] bg-zinc-900/82 p-5 shadow-2xl backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                Product pod
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-neutral-200">
                Strategy, UX, and engineering moving as one team.
              </p>
            </div>

            <div className="absolute -right-6 top-10 rounded-[28px] bg-primary/80 px-5 py-4 shadow-2xl backdrop-blur-md">
              <p className="text-3xl font-semibold text-neutral-200">
                <CountUp value="90%" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-200">
                Repeat clients
              </p>
            </div>
          </motion.div>
        </div>

        <div
          className="
            relative mt-20 w-full
            overflow-hidden
          "
          style={{
            // edge fade (best)
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {/* fallback edge fade (if mask isn't supported) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-linear-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-linear-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex w-max items-center gap-10 sm:gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50, // slower = larger number
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loop.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={152}
                  height={51}
                  className="opacity-80 grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
