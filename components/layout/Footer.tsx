"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container  px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* ===== Brand Section ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Bay <span className="text-white">AI</span>
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            We’re passionate about making conversations smoother and smarter
            with AI technology...
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-primary rounded-full transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-primary rounded-full transition"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-primary rounded-full transition"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>

        {/* ===== Navigation ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["About", "Services", "Features", "Pricing"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition flex items-center gap-2"
                >
                  <span className="text-primary">→</span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Contact Info ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-primary" /> +1 509 592 1745
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-primary" /> bayai@bayshorecommunication.com
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="text-primary mt-1" />
              1301 34th St S, St. Petersburg, FL 33711, United States
            </li>
          </ul>
        </div>

        {/* ===== Newsletter Signup ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
          <form className="flex mb-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-neutral-800 text-sm text-white placeholder-gray-400 px-4 py-3 rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary px-4 rounded-r-md flex items-center justify-center hover:bg-primary/90 transition"
            >
              <FaPaperPlane size={16} />
            </button>
          </form>
          <label className="flex items-center gap-2 text-xs text-gray-400">
            <input
              type="checkbox"
              className="accent-primary rounded"
              required
            />
            I agree to the Privacy Policy
          </label>
        </div>
      </div>

      {/* ===== Copyright ===== */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-[#BEBEBE]">
        Copyright © 2025 <span className="underline"><Link href="https://www.bayshorecommunication.com/">Bayshore Communication</Link></span>. All Rights Reserved.
      </div>
    </footer>
  );
}
