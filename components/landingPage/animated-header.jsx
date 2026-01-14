"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function AnimatedHeader() {
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1️⃣ Hold logo in center on white screen
    tl.to({}, { duration: 2 });

    // 2️⃣ Move logo to top-left (VISIBLE PATH)
    tl.to(logoRef.current, {
      x: () => -window.innerWidth / 2 + 80,
      y: () => -window.innerHeight / 2 + 48,
      scale: 0.75,
      duration: 3.5,
      ease: "power3.inOut",
    });

    // 3️⃣ Fade white background
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );

    // 4️⃣ Show header
    tl.call(() => setShowHeader(true));
  }, []);

  return (
    <>
      {/* ================= INTRO OVERLAY ================= */}
      {!showHeader && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div ref={logoRef} className="flex items-center gap-3">
            <Image
              src="/logo-1.png"
              alt="Uxbyte Studio"
              width={50}
              height={50}
              priority
            />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Uxbyte Studio
            </span>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 z-50 w-full transition-opacity duration-700 ${
          showHeader ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-4">
          {/* LEFT — Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <span className="text-white text-lg font-semibold">YourBrand</span>
          </div>

          {/* CENTER — Navigation */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Industries
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Blogs
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
