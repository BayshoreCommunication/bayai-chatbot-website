"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Stats() {
  return (
    <main className="bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100">
      <section className="container px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <Reveal x={-100} duration={2}>
              <p className="text-sm font-semibold text-orange-600">
                Statistics
              </p>
            </Reveal>
            <Reveal x={100} duration={2}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Trusted by Teams, <br /> Built for Scale
              </h2>
            </Reveal>
            <Reveal y={100} duration={2}>
              <p className="text-gray-600 leading-relaxed">
                From growing startups to enterprise-level organizations, our AI
                chatbots are trusted to handle thousands of conversations every
                day. Designed for speed, reliability, and flexibility, our
                platform empowers teams to deliver seamless customer experiences
                — no matter the size or scale of their operations.
              </p>
            </Reveal>
            <Reveal x={100} y={100} duration={2}>
              <button className="bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                Get Started
              </button>
            </Reveal>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: "/images/aboutpage/stats/icon1.png",
                value: "95%",
                label: "Faster Response Time",
              },
              {
                icon: "/images/aboutpage/stats/icon2.png",
                value: "24/7",
                label: "Global Availability",
              },
              {
                icon: "/images/aboutpage/stats/icon3.png",
                value: "40%",
                label: "Increases Engagement",
              },
              {
                icon: "/images/aboutpage/stats/icon4.png",
                value: "10,000+",
                label: "Conversations Daily",
              },
            ].map(({ icon, value, label }, index) => (
              <Reveal key={index} x={100} y={100} duration={2}>
                <div
                  className="
                group bg-white border-b border-primary rounded-2xl p-6 text-center shadow-sm
                hover:shadow-lg hover:border-orange-400
                transition-all duration-300 ease-out
                transform hover:-translate-y-1
              "
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Image
                      src={icon}
                      alt=""
                      width={1000}
                      height={800}
                      className="w-8 h-8"
                    ></Image>
                    <h3
                      className="
                    text-2xl font-bold text-gray-900 transition-transform duration-300
                    group-hover:scale-110
                  "
                    >
                      {value}
                    </h3>
                    <p
                      className="
                    text-gray-600 text-sm transition-colors duration-300
                    group-hover:text-gray-800
                  "
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
