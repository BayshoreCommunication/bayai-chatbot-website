"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kevin Andrew",
      role: "Happy Client",
      review:
        "Our website engagement shot up after installing the chatbot. Visitors now stay longer and actually get the answers they need instantly.",
    },
    {
      name: "Nazish Ehtaan",
      role: "Happy Client",
      review:
        "We serve customers in three time zones, and this chatbot handles it all. No more missed messages or delayed replies.",
    },
    {
      name: "John Clark",
      role: "Happy Client",
      review:
        "What impressed me most was how natural the chatbot sounds — and we were able to fully match it to our brand voice.",
    },
    {
      name: "Zampa Devo",
      role: "Happy Client",
      review:
        "It's not just for support. Our AI chatbot has become a key sales tool, helping qualify leads and guide users through purchases.",
    },
    {
      name: "Kevin Andrew",
      role: "Happy Client",
      review:
        "Our website engagement shot up after installing the chatbot. Visitors now stay longer and actually get the answers they need instantly.",
    },
    {
      name: "Nazish Ehtaan",
      role: "Happy Client",
      review:
        "We serve customers in three time zones, and this chatbot handles it all. No more missed messages or delayed replies.",
    },
    {
      name: "John Clark",
      role: "Happy Client",
      review:
        "What impressed me most was how natural the chatbot sounds — and we were able to fully match it to our brand voice.",
    },
    {
      name: "Zampa Devo",
      role: "Happy Client",
      review:
        "It's not just for support. Our AI chatbot has become a key sales tool, helping qualify leads and guide users through purchases.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Build Trust With Reviews <br className="hidden md:block" />
            Loved by Businesses Worldwide
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // 👈 attach to custom div
              bulletClass:
                "swiper-pagination-bullet !bg-gray-300 w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-primary !w-3 !h-3",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl border-b border-primary p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {t.review}
                  </p>

                  <div>
                    <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-sm">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination (just below cards) */}
          <div className="custom-pagination flex justify-center mt-8" />
        </div>
      </div>
    </section>
  );
}
