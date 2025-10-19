"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Move static menu outside component to avoid changing reference across renders
const menu = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Pricing", href: "/pricing" },
  { id: 5, label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  // Determine active menu item based on current pathname
  const getActiveHref = () => {
    if (pathname === "/") return "/";
    return pathname;
  };

  const activeHref = getActiveHref();

  useEffect(() => {
    // Track scroll position to toggle transparent vs solid background
    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isAtTop ? "bg-transparent" : "bg-white shadow-sm"
      } fixed top-0 left-0 right-0 w-full z-[100] transition-colors duration-300 border-t-2 border-primary`}
    >
      <nav className="container px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-black">
          Bay AI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-lg font-medium ${
                activeHref === item.href
                  ? "text-primary"
                  : "text-black hover:text-primary"
              } transition`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="tel:+15095921745"
          className="hidden md:inline-block bg-primary text-white font-semibold text-lg py-2 px-6 rounded-md hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium ${
                  activeHref === item.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                } transition`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:+15095921745"
              className="bg-primary text-white font-semibold text-sm py-2 px-6 rounded-md hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
