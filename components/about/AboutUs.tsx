"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function AboutSection() {
  return (
    <section className="container px-8 py-8 md:py-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side: images */}
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-16">
            <div className="relative  rounded-2xl overflow-hidden">
              <Reveal x={100} y={100} duration={2}>
              <Image
                src="/images/aboutpage/aboutus/about/about.png"
                alt="AI Face"
                width={1000}
                height={800}
                className="object-cover w-full h-auto"
              />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Right side: text */}
        <div className="space-y-5">
        <Reveal x={-100} duration={2}>
          <p className="text-sm font-semibold text-orange-600">About Us</p>
          </Reveal>

          <Reveal x={100} duration={2}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Real Conversations <br /> with Human-Like
          </h2>
          </Reveal>
          <Reveal y={100} duration={2}>
          <p className="text-gray-600 leading-relaxed">
            We&apos;re on a mission to revolutionize how businesses communicate.
            Our AI chatbots are designed to be fast, intuitive, and incredibly
            lifelike — empowering teams to provide 24/7 support and scale
            effortlessly.
          </p>
          </Reveal>

          <Reveal y={120} duration={2}>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re a startup or a global brand, we make AI
            accessible, practical, and impactful.
          </p>
          </Reveal>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="text-orange-500 w-5 h-5 mt-1" />
              <Reveal y={140} duration={2}>
              <span>
                Launch your AI chatbot in minutes—no coding or technical
                expertise required.
              </span>

              </Reveal>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-orange-500 w-5 h-5 mt-1" />
              <Reveal y={160} duration={2}>
              <span>
                Fully customizable to match your brand voice, workflows, and
                customer needs.
              </span>
              </Reveal>
            </li>
          </ul>
          <Reveal x={100} y={100} duration={2}>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
