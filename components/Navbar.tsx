"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-amber-100" : "bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl">
              <Image
                src="/logo.jpeg"
                alt="Jahangiri Fort Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight transition-all duration-300 bg-linear-to-r from-amber-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent`}
              >
                Jahangiri Fort
              </span>
              <span
                className={`text-xs tracking-wider transition-all duration-300 text-amber-600/80`}
              >
                Main Jheel Road, Naran
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 font-semibold transition-all duration-500 group overflow-hidden text-gray-700 hover:text-amber-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute inset-0 w-0 transition-all duration-500 group-hover:w-full bg-amber-50`}
                ></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 transition-all duration-500 group-hover:w-3/4 rounded-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-6 relative px-8 py-3 bg-linear-to-r from-amber-600 via-amber-500 to-yellow-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Now
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-yellow-600 via-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:bg-amber-50`}
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2.5" : ""} bg-gray-700`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-500 ${isOpen ? "opacity-0" : ""} bg-gray-700`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""} bg-gray-700`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-4 pb-8 space-y-2 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-amber-100">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 text-gray-700 font-semibold rounded-xl hover:bg-linear-to-r hover:from-amber-50 hover:to-yellow-50 hover:text-amber-700 transition-all duration-500 transform hover:translate-x-2 hover:shadow-md"
              style={{
                animation: isOpen
                  ? `slideIn 0.5s ease-out ${index * 100}ms both`
                  : "none",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-6 px-8 py-4 bg-linear-to-r from-amber-600 via-amber-500 to-yellow-600 text-white text-center rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
          >
            Book Now
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
