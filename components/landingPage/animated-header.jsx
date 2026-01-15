"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AnimatedHeader() {
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simple animation without GSAP for compatibility
    const timer1 = setTimeout(() => {
      // After 2 seconds, start moving logo
      if (logoRef.current) {
        logoRef.current.style.transition =
          "all 3.5s cubic-bezier(0.76, 0, 0.24, 1)";
        logoRef.current.style.transform = "translate(-50%, -50%) scale(0.75)";
        logoRef.current.style.left = "80px";
        logoRef.current.style.top = "48px";
      }
    }, 2000);

    const timer2 = setTimeout(() => {
      // Fade white background
      if (overlayRef.current) {
        overlayRef.current.style.transition = "opacity 1s ease-out";
        overlayRef.current.style.opacity = "0";
      }
    }, 4500);

    const timer3 = setTimeout(() => {
      // Show header and mark animation complete
      setShowHeader(true);
      setAnimationComplete(true);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      {/* ================= INTRO OVERLAY ================= */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-white pointer-events-none"
        style={{ opacity: 1 }}
      >
        <div
          ref={logoRef}
          className="fixed flex items-center gap-3"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">UX</span>
          </div>
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            Uxbyte Studio
          </span>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 z-50 w-full transition-opacity duration-700 ${
          showHeader ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-4">
          {/* LEFT — Logo (placeholder for spacing, hidden) */}
          <div className="flex items-center gap-2 invisible">
            <div className="w-10 h-10"></div>
            <span className="text-lg font-semibold">YourBrand</span>
          </div>

          {/* CENTER — Navigation */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Industries
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Blogs
            </Link>
          </nav>

          {/* RIGHT — CTA Button */}
          <div className="ml-auto">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-gray-600">
            The logo will animate from center to top-left and stay there
            permanently.
          </p>
        </div>
      </main>
    </>
  );
}
