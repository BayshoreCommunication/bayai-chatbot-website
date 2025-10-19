"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function ExperienceBoost() {
  return (
    <section className="relative px-8 py-8 md:pb-16">
      <div className="container mx-auto  relative z-10 bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100 rounded-2xl">
        {/* Wrapper Card */}
        <div className="relative flex flex-col md:flex-row items-center justify-center text-center py-12 md:py-16 px-6 md:px-12">
          {/* Left Floating Robot */}
          <Reveal
            y={200}
            duration={3}
            amount={0.1}
            className="absolute -left-6 md:-left-32 top-6 -translate-y-1/2 w-28 md:w-52 object-contain hidden md:block"
          >
            <Image
              src="/images/homepage/experienceboost/left-robot.png"
              alt="Chatbot Robot Left"
              width={1000}
              height={800}
              className="w-full h-auto"
            />
          </Reveal>

          {/* Center Text */}
          <div className="max-w-2xl mx-auto">
            <Reveal x={-100} duration={2}>
              <p className="text-primary text-sm md:text-base font-medium mb-2">
                Experience Boost
              </p>
            </Reveal>
            <Reveal x={100} duration={2}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                Ready to Supercharge <br className="hidden md:block" /> Your
                Customer Experience?
              </h2>
            </Reveal>
            <Reveal x={100} duration={2}>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Start using our AI chatbot today to automate support, boost
                engagement, and save time.
              </p>
            </Reveal>
            {/* Buttons */}
            <Reveal x={100} duration={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary hover:bg-orange-500 text-white font-medium px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform">
                Get Started
              </button>
              <button className="bg-white border border-gray-300 hover:border-primary hover:text-primary text-gray-800 font-medium px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 transform">
                Live Demo
              </button>
            </div>
            </Reveal>
          </div>

          {/* Right Floating Robot */}
          <Reveal
            y={200}
            duration={3}
            amount={0.1}
            className="absolute -right-16 md:-right-32 top-6 -translate-y-1/2 w-28 md:w-52 object-contain hidden md:block"
          >
            <Image
              src="/images/homepage/experienceboost/right-robot.png"
              alt="Chatbot Robot Right"
              width={1000}
              height={800}
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
