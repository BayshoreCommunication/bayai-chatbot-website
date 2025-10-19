"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function AmazingFeatures() {
  const features = [
    {
      image: "/images/homepage/amazingfeatures/img1.png",
    },
    {
      image: "/images/homepage/amazingfeatures/img2.png",
    },
    {
      image: "/images/homepage/amazingfeatures/img3.png",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container max-w-6xl mx-auto px-8 py-8 md:py-16">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-12">
          <Reveal x={-100} duration={2}>
            <p className="text-primary font-medium mb-2">Amazing Features</p>
          </Reveal>
          <Reveal x={100} duration={3}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              AI That Understands, Learns <br className="hidden md:block" /> &
              Engages
            </h2>
          </Reveal>
        </div>

        {/* ===== Features Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between max-w-sm w-full mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group`}
            >
              {/* Top Section */}

              {/* Image */}
              <div className="mt-6 flex justify-center">
                <Reveal x={-100} duration={2}>
                  <Image
                    src={feature.image}
                    alt=""
                    width={1000}
                    height={800}
                    className="object-contain w-full h-auto group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
