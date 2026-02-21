"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Recognition() {
  const cards = [
    {
      id: 1,
      type: "video",
      videoUrl: "https://www.youtube.com/embed/H5Q_-gIZIps",
      videoThumb: "/jpg/justin.jpeg",
      name: "Justin Garner",
      designation: "CEO at OnlineMed",
      profilePic: "/jpg/justin.jpeg",
      description: `"Excellent experience working with Unitfactor. The team was very patient and professional throughout."`,
    },
    {
      id: 2,
      type: "video",
      videoUrl: "https://www.youtube.com/embed/H5Q_-gIZIps",
      videoThumb: "/jpg/shmaya.jpeg",
      name: "Shmaya Schwartz",
      designation: "Business Owner",
      profilePic: "/jpg/shmaya.jpeg",
      description: `"Working with Unitfactor was a great experience. They delivered 100% on our requirements with top-quality work in React.js and Next.js. The team ensured the code was optimized for performance, handled every challenge proactively, and kept communication clear and professional throughout."`,
    },
  ];

  return (
    <div className="w-full bg-black text-white px-4 md:py-10 md:px-20 xl:px-28 relative">
      <div className="hidden md:flex absolute right-26 md:right-20  lg:right-26 top-26 md:top-22 xl:top-35 z-20  gap-3 mt-3 lg:mt-0">
        <div className="swiper-prev bg-white  text-black rounded-full px-4 py-6 flex items-center justify-center cursor-pointer shadow-md text-xl">
          <Image src="/svg/arrow.svg" alt="arrow" width={32} height={18} />
        </div>
        <div className="swiper-next bg-white text-black rounded-full px-4 py-6 flex items-center justify-center cursor-pointer shadow-md text-xl">
          <Image
            src="/svg/blue-arrow.svg"
            alt="blue-arrow"
            width={32}
            height={18}
          />
        </div>
      </div>

      <h2 className="max-w-2xl font-bold xl:max-w-4xl">
        Long-term <span className="text-light-primary">partnerships</span> is
        what we are always striving to
        <span className="text-light-primary"> build</span>
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        className="md:mt-14"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mt-8 lg:mt-0">
              <div className="relative w-full h-[350px] sm:h-[420px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src={card.videoUrl}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-2 md:gap-8 shadow-xl h-[420px] md:h-[450px]">
                <div className="flex items-center gap-4">
                  <Image
                    src={card.profilePic}
                    alt={card.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {card.name}
                    </h3>
                    <p className="text-gray-600">{card.designation}</p>
                  </div>
                </div>
                <p className="text-black">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex md:hidden justify-center gap-6 mt-10">
        <div className="swiper-prev bg-white text-black rounded-full px-4 py-6 flex items-center justify-center cursor-pointer shadow-md">
          <Image src="/svg/arrow.svg" alt="arrow" width={32} height={18} />
        </div>

        <div className="swiper-next bg-white text-black rounded-full px-4 py-6 flex items-center justify-center cursor-pointer shadow-md">
          <Image
            src="/svg/blue-arrow.svg"
            alt="blue arrow"
            width={32}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
