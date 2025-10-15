"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Trustedby() {
  const brands = [
    { name: "Shopify", image: "/images/homepage/trustedby/shofify.png" },
    { name: "Slack", image: "/images/homepage/trustedby/slack.png" },
    { name: "Zendesk", image: "/images/homepage/trustedby/zendesk.png" },
    { name: "Discord", image: "/images/homepage/trustedby/discord.png" },
    { name: "Telegram", image: "/images/homepage/trustedby/telegram.png" },
  ];

  return (
    <section className="bg-white">
      <div className="container px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 text-center lg:text-left">
          {/* Left Text */}
          
          <div className="lg:w-1/4">
          <Reveal x={-100} duration={2}>
            <p className="text-gray-700 font-medium leading-relaxed">
              Trusted by <br />
              <span className="font-bold text-black">10,000+ Businesses Globally</span>
            </p>
            </Reveal>
          </div>
          

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 md:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-xl p-3 sm:p-4 transition-all duration-300 w-28 sm:w-32 h-16 sm:h-20 shadow-sm"
              >
                <Reveal x={100} duration={2}>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={1000}
                  height={800}
                  className="object-contain"
                />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
