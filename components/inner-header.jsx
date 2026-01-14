"use client";
import Image from "next/image";
import Link from "next/link";

export default function InnerHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="relative mx-auto flex ml-18 items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[#6915ae] flex items-center justify-center p-1">
            <span className="text-white font-bold text-xl">UXB</span>
          </div>
          <span className={`text-white font-semibold text-lg tracking-wide`}>
            Uxbyte Studio
          </span>
        </Link>

        {/* CENTER — Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-md font-medium text-white hover:text-white transition"
          >
            Services
          </Link>
          <Link
            href="/industries"
            className="text-md font-medium text-white hover:text-white transition"
          >
            Industries
          </Link>
          <Link
            href="/blogs"
            className="text-md font-medium text-white hover:text-white transition"
          >
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
}
