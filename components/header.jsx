"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./ui/button";

const MENU_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <>
      {/* --- Header Bar --- */}
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 transition-all duration-500 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            Logo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-md font-medium text-black hover:text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={26} className="text-black" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Sidebar --- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-[60] transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-lg font-semibold text-black">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}

          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
            Get Started
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55]"
        />
      )}
    </>
  );
};

export default Header;
