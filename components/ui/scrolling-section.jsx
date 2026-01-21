"use client";
import React, { useEffect, useRef, useState } from "react";

const EnergyScrollSections = () => {
  const scrollRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!scrollRef.current) return;
          const rect = scrollRef.current.getBoundingClientRect();
          const total = rect.height - window.innerHeight;
          const scrolled = -rect.top;
          setP(Math.min(Math.max(scrolled / total, 0), 1.5));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= CONSTANTS ================= */
  /* ================= EASING FUNCTION ================= */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  /* ================= CONSTANTS ================= */
  const FILL_DURATION = 0.2; // Slightly longer for smoother fills

  /* ================= PHASES WITH SMOOTH EASING ================= */
  const greenMove = easeOutCubic(Math.min(p * 1.2, 1));
  const boxRise = easeOutCubic(Math.min(Math.max((p - 0.08) * 4, 0), 1));
  const borderProgress = easeInOutCubic(
    Math.min(Math.max((p - 0.18) * 3.5, 0), 1),
  );
  const greenFill = easeInOutCubic(
    Math.min(Math.max((p - 0.3) / FILL_DURATION, 0), 1),
  );
  const image1Fill = easeInOutCubic(
    Math.min(Math.max((p - 0.5) / FILL_DURATION, 0), 1),
  );
  const image1TextFade = easeInOutCubic(
    Math.min(Math.max((p - 0.65) * 8, 0), 1),
  );
  const image2Fill = easeInOutCubic(
    Math.min(Math.max((p - 0.75) / FILL_DURATION, 0), 1),
  );
  const image2TextFade = easeInOutCubic(
    Math.min(Math.max((p - 0.9) * 8, 0), 1),
  );
  const image3Fill = easeInOutCubic(
    Math.min(Math.max((p - 1.0) / FILL_DURATION, 0), 1),
  );
  /* ================= BORDER METER ================= */

  const leftEdge = Math.min(borderProgress * 4, 1);
  const topEdge = Math.min(Math.max(borderProgress * 4 - 1, 0), 1);
  const rightEdge = Math.min(Math.max(borderProgress * 4 - 2, 0), 1);
  const bottomEdge = Math.min(Math.max(borderProgress * 4 - 3, 0), 1);

  return (
    <div ref={scrollRef} className="h-[1000vh] bg-[#f7f7f3]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* GREEN BACKGROUND */}
        <div
          className="absolute inset-0 bg-[#d4ff00] will-change-transform"
          style={{
            transform: `translateY(${-greenMove * 40}vh)`,
            transition: "transform 0.05s linear",
          }}
        />

        {/* HERO */}
        <div
          className="absolute inset-0 flex items-center justify-center will-change-opacity"
          style={{
            opacity: Math.max(1 - p * 3, 0),
            transition: "opacity 0.05s linear",
          }}
        >
          <h1 className="text-7xl font-medium">Energy is Prosperity</h1>
        </div>

        {/* CENTER BOX */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-[550px] h-[550px] bg-white overflow-hidden will-change-transform"
            style={{
              transform:
                boxRise >= 1
                  ? "translateY(0)"
                  : `translateY(${(1 - boxRise) * 120}%)`,
              opacity: boxRise,
              transition: "all 0.05s linear",
            }}
          >
            {/* BORDER (METER) */}
            <div
              className="absolute left-0 top-0 w-px bg-gray-400 will-change-auto"
              style={{
                height: `${leftEdge * 100}%`,
                transition: "height 0.05s linear",
              }}
            />
            <div
              className="absolute top-0 left-0 h-px bg-gray-400 will-change-auto"
              style={{
                width: `${topEdge * 100}%`,
                transition: "width 0.05s linear",
              }}
            />
            <div
              className="absolute right-0 top-0 w-px bg-gray-400 will-change-auto"
              style={{
                height: `${rightEdge * 100}%`,
                transition: "height 0.05s linear",
              }}
            />
            <div
              className="absolute bottom-0 left-0 h-px bg-black will-change-auto"
              style={{
                width: `${bottomEdge * 100}%`,
                transition: "width 0.05s linear",
              }}
            />

            {/* GREEN FILL */}
            <div
              className="absolute bottom-0 left-0 w-full bg-[#d4ff00] will-change-auto"
              style={{
                height: `${greenFill * 100}%`,
                transition: "height 0.05s linear",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 will-change-opacity p-12"
              style={{
                opacity: greenFill,
                transition: "opacity 0.05s linear",
              }}
            >
              <h2 className="text-4xl font-medium text-black leading-tight">
                The world's demand for energy will more than double by 2050.
              </h2>
            </div>

            {/* IMAGE 1 */}
            <ImageFill
              fill={image1Fill}
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
              text="Affordable Energy"
              textOpacity={1 - image1TextFade}
            />

            {/* IMAGE 2 */}
            <ImageFill
              fill={image2Fill}
              src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=900"
              text="Clean Power"
              textOpacity={1 - image2TextFade}
            />

            {/* IMAGE 3 */}
            <ImageFill
              fill={image3Fill}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900"
              text="Energy for All"
              textOpacity={1}
            />
          </div>
        </div>

        {/* RIGHT METER LABELS */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 space-y-24">
          <div
            className="will-change-opacity"
            style={{
              opacity: topEdge,
              transition: "opacity 0.05s linear",
            }}
          >
            <span className="inline-block w-12 h-px bg-black mr-3" />
            <span className="font-medium">66k TWh</span>
            <div className="text-sm text-gray-600">in 2050</div>
          </div>

          <div
            className="will-change-opacity"
            style={{
              opacity: bottomEdge,
              transition: "opacity 0.05s linear",
            }}
          >
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

const ImageFill = ({ fill, src, text, textOpacity = 1 }) => {
  if (fill <= 0) return null;

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full will-change-auto"
          style={{
            height: `${fill * 100}%`,
            transition: "height 0.05s linear",
          }}
        >
          <img src={src} className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      {text && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-opacity"
          style={{
            opacity: Math.min(fill, 1) * textOpacity,
            transition: "opacity 0.05s linear",
          }}
        >
          <h2 className="text-7xl font-medium text-white text-center drop-shadow-lg">
            {text}
          </h2>
        </div>
      )}
    </>
  );
};

export default EnergyScrollSections;
