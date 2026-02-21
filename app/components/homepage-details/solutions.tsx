"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Solutions() {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "We create responsive, user friendly websites tailored to your brand and goals.",
    },
    {
      title: "UI/UX & Graphic Design",
      description:
        "Our creative team ensures every design is intuitive, attractive, and aligned with your identity.",
    },
    {
      title: "Complete IT Solutions",
      description:
        "We offer a wide range of IT services including software development, mobile apps, and ongoing technical support.",
    },
  ];

  return (
    <section
      id="solutions"
      className="flex h-full w-full flex-col overflow-hidden px-4 sm:px-12 lg:px-16 xl:px-28 lg:pt-16 xl:py-12 xl:pt-20"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" text-left font-bold mb-4"
        >
          Our Solutions
        </motion.h2>
        <p className=" text-center max-w-2xl sm:max-w-4xl lg:max-w-3xl">
          We offer a wide range of digital services designed to elevate your
          business. From custom website development to complete IT solutions,
          our team delivers innovative, scalable, and results-driven products
          tailored to your needs.
        </p>
      </div>

      <div className="w-full mx-auto py-8 sm:py-12 xl:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden
    shadow-md hover:shadow-lg transition-shadow duration-500 rounded-3xl
  `}
            >
              <div
                className="absolute inset-0 bg-linear-to-b from-primary 
      transition-opacity duration-700 ease-in-out text-neutral-200"
              />

              {/* Content */}
              <div className="relative z-20 p-6 flex flex-col h-full text-center">
                {/* Title */}
                <h3 className="mb-3 md:min-h-14 text-white transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white mb-5 transition-colors  duration-500">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  className="
        bg-secondary group-hover:bg-white
        px-4 sm:px-5 py-2 sm:py-3 rounded-full
        flex items-center justify-center gap-2 mx-auto mt-auto

        transition-all duration-500
        group-hover:scale-105
      "
                >
                  <Link
                    href="/portfolio"
                    target="_blank"
                    className="
          text-white group-hover:text-black
          transition-colors duration-500
          active:scale-95 flex gap-2
        "
                  >
                    Explore
                    <ArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
