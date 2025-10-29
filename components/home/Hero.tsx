"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Reveal from "../motion/Reveal";

export default function Hero() {
  return (
    // <main className="bg-[url('/images/homepage/hero/bg.png')] bg-cover bg-center bg-no-repeat w-full">
    <main className="w-full bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100">
      <section className="container relative  px-8 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 ">
        {/* ===== Left Content ===== */}
        {/* bg-[url('/images/homepage/hero/circle.png')] bg-cover bg-center bg-no-repeat */}
        <div className="flex-1  order-2  md:order-1 z-10">
          {/* Feature badges */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary text-xs" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary text-xs" />
              <span>No credit card required</span>
            </div>
          </div>

          {/* Title */}
          <Reveal x={-100} duration={2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black mb-4">
              <div className="mb-2">Boost</div>
              <div className="mb-2">Conversations with</div>
              <div className="mb-2">Our Intelligent</div>
              <div>
                <span className="text-primary">Chatbot</span> Platform
              </div>
            </h1>
          </Reveal>
          <Reveal y={30} duration={2}>
            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg">
              Build human-like AI chatbots for websites, apps, and customer
              service in minutes.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal x={100} duration={2}>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform">
                Get Started
              </button>
              <button className="bg-white border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-50 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary transition-all duration-300 transform">
                Live Demo
              </button>
            </div>
          </Reveal>
        </div>

        {/* ===== Right Side (Robot + Floating Elements) ===== */}
        <div className="relative flex-1 flex justify-center items-center order-1 md:order-2">
          <Reveal y={250} duration={3}>
            <Image
              src="/images/homepage/hero/robot.png"
              alt="Chatbot Robot"
              width={1000}
              height={800}
              className="object-contain  z-10 max-w-[450px] w-full h-auto"
              priority
            />
          </Reveal>
          {/* Floating Chat Bubbles */}

          <div className="absolute top-[15%] left-[5%] bg-white shadow-lg rounded-full px-4 py-2 text-xs md:text-sm text-gray-600 flex items-center gap-2 animate-float-slow z-10 w-[260px] hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 transform cursor-pointer group">
            <Image
              src="/images/homepage/hero/float-1.png"
              alt="Chatbot Robot"
              width={1000}
              height={800}
              className="object-contain z-10 w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <span className="group-hover:font-medium transition-all duration-300">
              Hey, how can we help you?
            </span>
          </div>

          <div className="absolute bottom-[20%] right-[8%] bg-white shadow-lg rounded-full px-4 py-2 text-xs md:text-sm text-gray-600 flex items-center gap-2 animate-float-medium z-10 w-[280px] hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 transform cursor-pointer group">
            <Image
              src="/images/homepage/hero/float-2.png"
              alt="Chatbot Robot"
              width={1000}
              height={800}
              className="object-contain z-10 w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <span className="group-hover:font-medium transition-all duration-300">
              Can you help me create a task?
            </span>
          </div>

          {/* Floating message icons */}
          <div className="absolute top-[60%] -left-6 md:top-[60%] md:left-8 z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Reveal x={100} duration={2}>
              <Image
                src="/images/homepage/hero/message-left.png"
                alt="Chat Bubble 1"
                width={1000}
                height={800}
                className="object-contain w-[50px] md:w-[80px] h-auto hover:drop-shadow-lg transition-all duration-300"
              />
            </Reveal>
          </div>
          <div className="absolute bottom-[60%] left-[85%] md:bottom-[60%] md:left-[80%] z-20 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Reveal x={100} duration={2}>
              <Image
                src="/images/homepage/hero/message-right.png"
                alt="Chat Bubble 2"
                width={1000}
                height={800}
                className="object-contain w-[70px] md:w-[100px] h-auto hover:drop-shadow-lg transition-all duration-300"
              />
            </Reveal>
          </div>
        </div>

        {/* Optional Gradient Overlay */}
      </section>
    </main>
  );
}
