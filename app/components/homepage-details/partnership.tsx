"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/svg/frame1.svg",
  "/svg/frame2.svg",
  "/svg/frame3.svg",
  "/svg/frame4.svg",
  "/svg/frame5.svg",
  "/svg/frame1.svg",
  "/svg/frame2.svg",
  "/svg/frame3.svg",
  "/svg/frame4.svg",
  "/svg/frame5.svg",
  "/svg/frame1.svg",
  "/svg/frame2.svg",
  "/svg/frame3.svg",
  "/svg/frame4.svg",
  "/svg/frame5.svg",
];

export default function Partnership() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center  overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 xl:py-16">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" max-w-60 md:max-w-lg font-bold xl:max-w-3xl"
      >
        Turning projects into trusting
        <span className="text-light-primary"> partnerships</span>
      </motion.h2>

      <div className="scroll-container  lg:mt-12 w-full overflow-hidden">
        <div className="scroll-track track-1">
          {logos.map((logo, i) => (
            <div key={`track1-${i}`} className="scroll-item">
              <Image
                src={logo}
                width={96}
                height={20}
                className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                alt={`logo-${i}`}
              />
            </div>
          ))}
        </div>
        <div className="scroll-track track-2">
          {logos.map((logo, i) => (
            <div key={`track2-${i}`} className="scroll-item">
              <Image
                src={logo}
                width={96}
                height={20}
                className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                alt={`logo-${i}`}
              />
            </div>
          ))}
        </div>
        <div className="scroll-track track-3">
          {logos.map((logo, i) => (
            <div key={`track3-${i}`} className="scroll-item">
              <Image
                src={logo}
                width={96}
                height={20}
                className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                alt={`logo-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
