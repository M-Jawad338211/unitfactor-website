"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Partners() {
  return (
    <div className="relative px-6 sm:px-12 md:px-12 lg:px-16 xl:px-28 pb-10 lg:pb-20  xl:pb-24 w-full h-full items-center justify-center text-center">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/png/partners-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="w-full  mx-auto rounded-[20px] md:rounded-[30px] flex flex-col lg:flex-row gap-8 md:gap-12 2xl:gap-0 items-center ">
        <div className="w-full h-auto space-y-6 lg:space-y-20 flex flex-col items-center lg:items-start justify-center lg:justify-between text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="xl:max-w-2xl font-bold"
          >
            Get a <span className="text-light-primary">reliable partner </span>
            that provides solutions for your success
          </motion.h2>

          <Link
            href="/contacts"
            className="group flex items-center gap-6 bg-white hover:bg-primary hover:text-white text-secondary font-bold text-xl md:text-2xl pl-10 pr-2 py-2 rounded-full shadow-sm  transition"
          >
            Hire Us
            <span className="flex items-center justify-center bg-primary group-hover:bg-secondary w-10 h-10 rounded-full">
              <svg
                width="25"
                height="33"
                viewBox="0 0 25 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300"
              >
                <path
                  d="M12.3346 25.6667L21.668 16.3333M21.668 16.3333L12.3346 7M21.668 16.3333H3.0013"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className="relative flex items-center justify-center w-full h-[250px] md:h-[430px] lg:h-[330px] xl:w-[586px] xl:h-[402px] 2xl:w-full 2xl:h-[500px]  lg:mt-8">
          <Image
            src="/png/av-lab-3.png"
            alt="Project Showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
