"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isAtTop, setIsAtTop] = useState(true);

  // ✅ Menu JSON data (inside component)
  const menu = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "about" },
    { id: 3, label: "Services", href: "services" },
    { id: 4, label: "Pricing", href: "pricing" },
    { id: 5, label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    // Track scroll position to toggle transparent vs solid background
    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight based on URL hash on initial load
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveHref(window.location.hash);
    }

    const sectionIds = menu.map((m) => m.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      return; // no sections found; skip observer
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.getAttribute("id");
          if (id) setActiveHref(`#${id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // triggers a bit earlier (top of viewport)
        threshold: [0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    const handleHashChange = () => {
      setActiveHref(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
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
              onClick={() => setActiveHref(item.href)}
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
          href="#contact"
          className="hidden md:inline-block bg-primary text-white font-semibold text-lg py-2 px-6 rounded-md hover:bg-primary/90 transition"
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
                onClick={() => {
                  setActiveHref(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="bg-primary text-white font-semibold text-sm py-2 px-6 rounded-md hover:bg-primary/90 transition"
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
