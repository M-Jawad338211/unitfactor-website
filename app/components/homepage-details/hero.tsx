"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/clients/apilayer.png", alt: "Apilayer" },
  { src: "/clients/ipstack.svg", alt: "Ipstack" },
  { src: "/clients/numverify.png", alt: "Numverify" },
  { src: "/clients/odyssey-plunge.webp", alt: "Odyssey plunge" },
  { src: "/clients/coinlayer.svg", alt: "Coinlayer" },
  { src: "/clients/zenserp.svg", alt: "Zenserp" },
];

export default function Hero() {
  const loop = [...logos, ...logos];

  return (
    <div className="relative w-full h-auto bg-[url('/png/hero.png')] bg-no-repeat bg-center bg-cover overflow-hidden ">
      <div className="absolute inset-0 bg-linear-to-t from-background to-transparent pointer-events-none"></div>
      <div className="relative flex flex-col items-center lg:gap-14 justify-center h-full pb-10 pt-32 xl:pb-10 px-4 sm:px-12 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center gap-7 mt-6 sm:mt-8">
          <h1 className="text-white font-semibold font-display text-center">
            Crafting <span className="text-light-primary italic">Unique</span>,
            Driving set Designs That Capture Attention and Build
            <span className="text-light-primary italic"> Trust</span>
          </h1>
        </div>
        <div
          className="
            relative w-full mt-6
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
            className="flex items-center gap-10 sm:gap-14 w-max"
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
    </div>
  );
}
