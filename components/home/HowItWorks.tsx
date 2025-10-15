"use client";

import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Build with Ease",
      desc: "Build your chatbot using our intuitive drag-and-drop interface — no coding needed.",
    },
    {
      id: "02",
      title: "Train with Your Content",
      desc: "Train your AI using documents, FAQs, or URLs to create accurate, personalized responses.",
    },
    {
      id: "03",
      title: "Deploy Anywhere",
      desc: "Launch on your website, mobile app, or messaging platforms in just a few clicks.",
    },
  ];

  return (
    <section className="relative  bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100 overflow-hidden">
      <div className="container mx-auto px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* ===== Left Side: Image Section ===== */}
        <div className="relative flex justify-center">
          {/* Main image (tablet UI) */}
          <div className="relative w-full max-w-[520px]">
            <Image
              src="/images/homepage/howitworks/bg.png"
              alt="AI Chatbot Interface"
              width={1000}
              height={800}
              className="rounded-2xl shadow-md object-contain"
            />

            {/* Floating Robot */}
            <Image
              src="/images/homepage/howitworks/robot.png"
              alt="AI Robot"
              width={1000}
              height={800}
              className="absolute -left-8 -bottom-16 md:-left-16 md:-bottom-32 w-32 sm:w-40 md:w-52 animate-float"
            />
          </div>
        </div>

        {/* ===== Right Side: Text Content ===== */}
        <div className="relative z-10">
          <p className="text-primary font-medium mb-3">How it Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-snug">
            How Our Advanced <br className="hidden md:block" /> AI Chatbot Works
          </h2>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className=" rounded-lg text-primary  bg-white  p-4 flex items-center justify-center text-base font-bold shrink-0">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-primary text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* ===== Floating Paper Plane (right corner) ===== */}
      <Image
        src="/images/homepage/howitworks/plane.png"
        alt="Paper Plane"
        width={1000}
        height={800}
        className="absolute right-8 bottom-8 w-20 sm:w-24 md:w-32 animate-float-slow"
      />
    </section>
  );
}
