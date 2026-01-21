"use client";
import React, { useEffect, useRef, useState } from "react";

const EnergyScrollSections = () => {
  const scrollRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setP(Math.min(Math.max(scrolled / total, 0), 1.5));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= CONSTANTS ================= */

  const FILL_DURATION = 0.25;

  /* ================= PHASES ================= */

  const greenMove = Math.min(p * 2, 1);
  const boxRise = Math.min(Math.max((p - 0.15) * 3, 0), 1);

  const borderProgress = Math.min(Math.max((p - 0.25) * 2, 0), 1);

  const greenFill = Math.min(Math.max((p - 0.45) / FILL_DURATION, 0), 1);

  const image1Fill = Math.min(Math.max((p - 0.7) / FILL_DURATION, 0), 1);
  const image2Fill = Math.min(Math.max((p - 0.95) / FILL_DURATION, 0), 1);
  const image3Fill = Math.min(Math.max((p - 1.2) / FILL_DURATION, 0), 1);

  /* ================= BORDER METER ================= */

  const leftEdge = Math.min(borderProgress * 4, 1);
  const topEdge = Math.min(Math.max(borderProgress * 4 - 1, 0), 1);
  const rightEdge = Math.min(Math.max(borderProgress * 4 - 2, 0), 1);
  const bottomEdge = Math.min(Math.max(borderProgress * 4 - 3, 0), 1);

  return (
    <div ref={scrollRef} className="h-[900vh] bg-[#f7f7f3]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* GREEN BACKGROUND */}
        <div
          className="absolute inset-0 bg-[#d4ff00]"
          style={{ transform: `translateY(${-greenMove * 40}vh)` }}
        />

        {/* HERO */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: Math.max(1 - p * 3, 0) }}
        >
          <h1 className="text-7xl font-medium">Energy is Prosperity</h1>
        </div>

        {/* CENTER BOX */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-[620px] h-[620px] bg-white overflow-hidden"
            style={{
              transform: `translateY(${(1 - boxRise) * 120}%)`,
              opacity: boxRise,
            }}
          >
            {/* BORDER (METER) */}
            <div
              className="absolute left-0 top-0 w-px bg-black"
              style={{ height: `${leftEdge * 100}%` }}
            />
            <div
              className="absolute top-0 left-0 h-px bg-black"
              style={{ width: `${topEdge * 100}%` }}
            />
            <div
              className="absolute right-0 top-0 w-px bg-black"
              style={{ height: `${rightEdge * 100}%` }}
            />
            <div
              className="absolute bottom-0 left-0 h-px bg-black"
              style={{ width: `${bottomEdge * 100}%` }}
            />

            {/* GREEN FILL */}
            <div
              className="absolute bottom-0 left-0 w-full bg-[#d4ff00]"
              style={{ height: `${greenFill * 100}%` }}
            />

            <div
              className="absolute bottom-12 left-12 right-12"
              style={{ opacity: greenFill }}
            >
              <h2 className="text-4xl font-medium text-black">
                The world’s demand for energy will more than double by 2050.
              </h2>
            </div>

            {/* IMAGE 1 */}
            <ImageFill
              fill={image1Fill}
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
              text="Affordable Energy"
            />

            {/* IMAGE 2 */}
            <ImageFill
              fill={image2Fill}
              src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=900"
              text="Clean Power"
            />

            {/* IMAGE 3 */}
            <ImageFill
              fill={image3Fill}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900"
              text="Energy for All"
            />
          </div>
        </div>

        {/* RIGHT METER LABELS */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 space-y-24">
          <div style={{ opacity: topEdge }}>
            <span className="inline-block w-12 h-px bg-black mr-3" />
            <span className="font-medium">66k TWh</span>
            <div className="text-sm text-gray-600">in 2050</div>
          </div>

          <div style={{ opacity: bottomEdge }}>
            <span className="inline-block w-12 h-px bg-black mr-3" />
            <span className="font-medium">26k TWh</span>
            <div className="text-sm text-gray-600">in 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= IMAGE FILL COMPONENT ================= */

const ImageFill = ({ fill, src, text }) => {
  if (fill <= 0) return null;

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ height: `${fill * 100}%` }}
        >
          <img src={src} className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: fill }}
      >
        <h2 className="text-7xl font-medium text-white text-center">{text}</h2>
      </div>
    </>
  );
};

export default EnergyScrollSections;
