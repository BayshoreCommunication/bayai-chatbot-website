"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menu = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Pricing", href: "/pricing" },
  { id: 5, label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // ✅ Always call hooks at the top

  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeHref = mounted
    ? pathname === "/"
      ? "/"
      : pathname
    : "/";

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch
    return (
      <header className="fixed top-0 left-0 right-0 w-full h-[72px] bg-transparent border-t-2 border-primary z-[100]" />
    );
  }

  return (
    <header
      className={`${
        isAtTop ? "bg-transparent" : "bg-white shadow-sm"
      } fixed top-0 left-0 right-0 w-full z-[100] transition-colors duration-300 border-t-2 border-primary`}
    >
      <nav className="container px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-black">
          Bay AI
        </Link>

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

        <Link
          href="tel:+15095921745"
          className="hidden md:inline-block bg-primary text-white font-semibold text-lg py-2 px-6 rounded-md hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform"
        >
          Contact Us
        </Link>

        <button
          className="md:hidden text-2xl text-gray-700 mr-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-lg`}
      >
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
    </header>
  );
}
