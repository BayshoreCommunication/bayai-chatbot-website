"use client";

import Image from "next/image";

export default function ExperienceBoost() {
  return (
    <section className="relative px-8 py-8 md:py-16">
      <div className="container mx-auto  relative z-10 bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100 rounded-2xl">
        {/* Wrapper Card */}
        <div className="relative flex flex-col md:flex-row items-center justify-center text-center py-12 md:py-16 px-6 md:px-12">
          {/* Left Floating Robot */}
          <Image
            src="/images/homepage/experienceboost/left-robot.png"
            alt="Chatbot Robot Left"
            width={1000}
            height={800}
            className="absolute -left-6 md:-left-32 top-1/2 -translate-y-1/2 w-28 md:w-52 object-contain hidden md:block"
          />

          {/* Center Text */}
          <div className="max-w-2xl mx-auto">
            <p className="text-primary text-sm md:text-base font-medium mb-2">
              Experience Boost
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
              Ready to Supercharge <br className="hidden md:block" /> Your
              Customer Experience?
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Start using our AI chatbot today to automate support, boost
              engagement, and save time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary hover:bg-orange-500 text-white font-medium px-8 py-3 rounded-lg transition">
                Get Started
              </button>
              <button className="bg-white border border-gray-300 hover:border-primary hover:text-primary text-gray-800 font-medium px-8 py-3 rounded-lg transition">
                Live Demo
              </button>
            </div>
          </div>

          {/* Right Floating Robot */}
          <Image
            src="/images/homepage/experienceboost/right-robot.png"
            alt="Chatbot Robot Right"
            width={1000}
            height={800}
            className="absolute -right-16 md:-right-32 top-1/2 -translate-y-1/2 w-28 md:w-52 object-contain hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
