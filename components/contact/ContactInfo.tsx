"use client";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-8 md:py-16">
        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Contact Info</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Our Contact Information <br className="hidden md:block" /> & Details
          </h2>
        </div>

        {/* ===== Contact Info Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Address */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F9F9] text-primary rounded-lg">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                1301 34th St S, St. Petersburg, FL 33711, United States
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F9F9] text-primary rounded-lg">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Email Address
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                bayai@bayshorecommunication.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F9F9] text-primary rounded-lg">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                +1 509-592-1745
              </p>
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-100 max-w-5xl mx-auto">
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-[#F9F9F9] rounded-lg border border-[#EDEDED] focus:border-primary focus:ring-1 focus:ring-primary transition px-4 py-2.5 text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-[#F9F9F9] rounded-lg border border-[#EDEDED] focus:border-primary focus:ring-1 focus:ring-primary transition px-4 py-2.5 text-sm text-gray-700"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#F9F9F9] rounded-lg border border-[#EDEDED] focus:border-primary focus:ring-1 focus:ring-primary transition px-4 py-2.5 text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full bg-[#F9F9F9] rounded-lg border border-[#EDEDED] focus:border-primary focus:ring-1 focus:ring-primary transition px-4 py-2.5 text-sm text-gray-700"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-[#F9F9F9] rounded-lg border border-[#EDEDED] focus:border-primary focus:ring-1 focus:ring-primary transition px-4 py-2.5 text-sm text-gray-700 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary hover:bg-orange-500 text-white font-medium rounded-full px-10 py-2.5 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
