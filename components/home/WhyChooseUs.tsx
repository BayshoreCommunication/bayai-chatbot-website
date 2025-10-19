"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function WhyChooseUs() {
  const features = [
    {
      image: "/images/homepage/whychooseus/img1.png",
      title: "Tailored Solutions",
      desc: "We offer customized services designed to meet the specific needs of your business.",
    },
    {
      image: "/images/homepage/whychooseus/img2.png",
      title: "Customer Support",
      desc: "Our dedicated support team is available 24/7, providing assistance whenever you need it.",
    },
    {
      image: "/images/homepage/whychooseus/img3.png",
      title: "Affordable Pricing",
      desc: "Competitive rates with transparent pricing — no hidden fees.",
    },
    {
      image: "/images/homepage/whychooseus/img4.png",
      title: "Scalable Solutions",
      desc: "Our services grow with your business, allowing you to scale up easily.",
    },
    {
      image: "/images/homepage/whychooseus/img5.png",
      title: "Expert Team",
      desc: "Our experienced professionals bring deep industry knowledge and expertise.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-8 md:py-16 text-center">
        {/* Header */}
        <div className="mb-12">
          <Reveal x={-100} duration={2}>
            <p className="text-primary font-medium mb-2">Why Choose Us</p>
          </Reveal>
          <Reveal x={100} duration={2}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              Unique Selling Points & <br className="hidden md:block" />
              Advantages of Our Service
            </h2>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {features.map((feature) => (
            <Reveal key={feature.title} y={100} duration={2}>
              <div className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start text-left h-full cursor-pointer border-b border-primary hover:border-primary/50">
                <div className="flex items-center justify-center w-14 h-14 mb-4 text-blue-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal x={-100} duration={2}>
          <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform">
            Get Started
          </button>
        </Reveal>
      </div>
    </section>
  );
}
