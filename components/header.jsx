"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./ui/button";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 600;
      setShowHeader(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 transition-all duration-500 ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black">Logo</div>

        {/* Center: Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          {["dummy", "lorepsum", "about"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600"
            >
              <span className="text-md font-medium text-black">{item}</span>
              <ChevronDown size={16} />
            </div>
          ))}

          {["Pricing", "Careers", "features", "Enterprise"].map((item) => (
            <span
              key={item}
              className="text-md font-medium cursor-pointer hover:text-gray-600 text-black"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Right: Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
