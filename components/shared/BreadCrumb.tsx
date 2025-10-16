"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface BreadcrumbProps {
  title: string;
  description?: string;
  links: { name: string; href?: string }[];
}

export default function Breadcrumb({
  title,
  description,
  links,
}: BreadcrumbProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100">
      <div className="container mx-auto px-8 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* ===== Left Content ===== */}
        <div className="flex-1 text-left relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-[url('/images/aboutpage/aboutus/circle.png')] bg-no-repeat bg-contain bg-center opacity-20 -z-10"
            style={{ backgroundPosition: "left center" }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-gray-900 max-w-xl mb-6 text-sm md:text-base">
                {description}
              </p>
            )}

            {/* Breadcrumb Navigation */}
            <div className="inline-flex w-fit items-center gap-2 text-sm bg-white px-3 py-2 rounded-xl shadow-sm">
              {links.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-primary font-medium">
                      {link.name}
                    </span>
                  )}
                  {index < links.length - 1 && (
                    <FaAngleRight className="text-gray-400 text-xs" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Right Image ===== */}
        <div className="flex-1 flex justify-center relative">
          <Image
            src="/images/aboutpage/about/robot.png"
            alt="About Robot"
            width={1000}
            height={800}
            className="w-60 sm:w-72 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
