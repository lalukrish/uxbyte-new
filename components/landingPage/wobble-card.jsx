"use client";

import React, { useState } from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Complete UI/UX redesign resulting in 45% increase in conversions and seamless user experience.",
      tags: ["React", "Next.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600",
      link: "#project-1",
      gradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description:
        "Real-time data visualization with advanced charting and predictive insights.",
      tags: ["TypeScript", "D3.js", "AI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      link: "#project-2",
      gradient: "bg-gradient-to-br from-zinc-900 via-neutral-800 to-slate-900",
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description:
        "HIPAA-compliant patient management system serving 50,000+ users with cutting-edge security.",
      tags: ["Vue.js", "Node.js", "Security"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      link: "#project-3",
      gradient: "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl xl:max-w-4xl mx-auto w-full">
      {/* Large Card - Spanning 2 columns */}
      <WobbleCard
        containerClassName={`col-span-1 lg:col-span-2 h-full ${projects[0].gradient} min-h-[500px] lg:min-h-[300px] xl:min-h-[280px]`}
        className="relative"
      >
        <div className="max-w-xs relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[0].title}
            </h2>
            <a
              href={projects[0].link}
              onMouseEnter={() => setHoveredCard(projects[0].id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="text-white/70 hover:text-white transition-colors ml-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {projects[0].description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {projects[0].tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute -right-4 lg:-right-[40%] -bottom-10 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <img
            src={projects[0].image}
            width={500}
            height={500}
            alt="project preview"
            className="object-contain rounded-2xl grayscale"
          />
        </div>

        {/* Hover Preview */}
        {hoveredCard === projects[0].id && (
          <div className="absolute top-4 right-4 w-48 h-36 bg-white rounded-lg shadow-2xl border-2 border-white/30 overflow-hidden z-50 animate-fadeIn">
            <img
              src={projects[0].image}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
              <p className="text-white text-xs font-medium">View Project →</p>
            </div>
          </div>
        )}
      </WobbleCard>

      {/* Small Card */}
      <WobbleCard
        containerClassName={`col-span-1 ${projects[1].gradient} min-h-[300px]`}
        className="relative"
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[1].title}
            </h2>
            <a
              href={projects[1].link}
              onMouseEnter={() => setHoveredCard(projects[1].id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            {projects[1].description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {projects[1].tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Preview */}
        {hoveredCard === projects[1].id && (
          <div className="absolute top-4 right-4 w-40 h-32 bg-white rounded-lg shadow-2xl border-2 border-white/30 overflow-hidden z-50 animate-fadeIn">
            <img
              src={projects[1].image}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
              <p className="text-white text-xs font-medium">View Project →</p>
            </div>
          </div>
        )}
      </WobbleCard>

      {/* Wide Bottom Card - Spanning 3 columns */}
      <WobbleCard
        containerClassName={`col-span-1 lg:col-span-3 ${projects[2].gradient} min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]`}
        className="relative"
      >
        <div className="max-w-sm relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {projects[2].title}
            </h2>
            <a
              href={projects[2].link}
              onMouseEnter={() => setHoveredCard(projects[2].id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            {projects[2].description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {projects[2].tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <img
            src={projects[2].image}
            width={500}
            height={500}
            alt="project preview"
            className="object-contain rounded-2xl"
          />
        </div>

        {/* Hover Preview */}
        {hoveredCard === projects[2].id && (
          <div className="absolute top-4 right-4 w-56 h-40 bg-white rounded-lg shadow-2xl border-2 border-white/30 overflow-hidden z-50 animate-fadeIn">
            <img
              src={projects[2].image}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
              <p className="text-white text-xs font-medium">View Project →</p>
            </div>
          </div>
        )}
      </WobbleCard>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
