"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InnerHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.4;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed px-18 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`w-12 h-12 flex items-center justify-center p-1 ${
              scrolled ? "bg-black" : "bg-[#6915ae]"
            }`}
          >
            <span className="text-white font-bold text-xl">UXB</span>
          </div>

          <span
            className={`font-semibold text-lg tracking-wide transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Uxbyte Studio
          </span>
        </Link>

        {/* CENTER — NAV */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          {["About Us", "Services", "Industries", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-md font-medium transition-colors ${
                scrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT — GET IN TOUCH */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`inline-flex h-12 items-center gap-2 px-6 py-2 bg-black text-white font-medium transition-colors text-sm`}
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
