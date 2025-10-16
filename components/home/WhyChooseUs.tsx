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
              <div className="group bg-[#000000]/7  rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col items-start text-left h-full hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-100 border-b border-primary">
                <div className="flex items-center justify-center  w-14 h-auto mb-4 transition">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={800}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal x={-100} duration={2}>
          <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
            Get Started
          </button>
        </Reveal>
      </div>
    </section>
  );
}
