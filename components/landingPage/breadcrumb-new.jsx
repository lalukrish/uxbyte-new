"use client";

import Link from "next/link";

const Breadcrumb = ({ title, path = [] }) => {
  return (
    <section className="relative w-full md:h-[40vh] bg-black flex items-center">
      <div className="relative z-10 xl:px-24 mx-auto px-6 text-left text-white w-full">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h1>

        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          {path.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span>/</span>
              <span className="hover:text-white cursor-pointer">{item}</span>
            </span>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default Breadcrumb;
