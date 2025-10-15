"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      <div className="container mx-auto px-8 py-8 md:py-16">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Amazing Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            AI That Understands, Learns <br className="hidden md:block" /> &
            Engages
          </h2>
        </div>

        {/* ===== Features Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between max-w-sm w-full mx-auto transition duration-300`}
            >
              {/* Top Section */}

              {/* Image */}
              <div className="mt-6 flex justify-center">
                <Image
                  src={feature.image}
                  alt=""
                  width={1000}
                  height={800}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
