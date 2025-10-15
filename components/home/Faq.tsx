"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Faq() {
  const faqs = [
    {
      question:
        "What Are the Main Use Cases and Benefits of Using This AI Chatbot?",
      answer:
        "Our AI chatbot enhances customer experience through automated support, lead generation, and 24/7 availability, improving business efficiency and engagement.",
    },
    {
      question:
        "Is the AI Chatbot Capable of Providing Reliable 24/7 Automated Support?",
      answer:
        "Yes! The AI chatbot operates around the clock, providing instant and consistent responses to customers anytime, anywhere.",
    },
    {
      question:
        "How Much Can I Customize the Chatbot's Responses, Design, and Behavior?",
      answer:
        "You can easily customize tone, personality, and visuals to match your brand voice, ensuring a seamless user experience.",
    },
    {
      question:
        "Does the Chatbot Support Multiple Languages and Global Audiences?",
      answer:
        "Absolutely. Our chatbot supports multiple languages, helping you connect with customers globally.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-8 py-8 md:py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal x={-100} duration={2}>
            <p className="text-primary font-medium mb-2">Faq’s</p>
          </Reveal>
          <Reveal x={100} duration={2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Answers to Your Most <br className="hidden md:block" />
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
              >
                <span className="text-gray-900 font-medium text-sm md:text-base">
                  {faq.question}
                </span>
                <span
                  className={`text-primary text-xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 px-6 pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Images */}
      <Reveal
        y={200}
        duration={2}
        amount={0.1}
        className="absolute left-4 md:left-16 top-8 md:top-16 w-20 md:w-40 opacity-90"
      >
        <Image
          src="/images/homepage/faq/plane.png"
          alt="Paper Plane"
          width={1000}
          height={800}
          className="w-full h-auto"
        />
      </Reveal>
      <Reveal
        y={0}
        duration={2}
        amount={0.1}
        className="absolute right-4 md:right-16 bottom-8 md:bottom-16 w-20 md:w-36 opacity-90 hidden md:block"
      >
        <Image
          src="/images/homepage/faq/message.png"
          alt="Chat Bubble"
          width={1000}
          height={800}
          className="w-full h-auto"
        />
      </Reveal>
    </section>
  );
}
