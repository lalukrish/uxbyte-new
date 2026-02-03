"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MonitorHero = ({
  items = [
    {
      title: "AirPods®",
      rightContent: {
        title: "Your fitness partner",
        subtitle: "sleek and powerful",
        description:
          "technology meets style in this essential fitness companion for modern life.",
      },
      productImage: "/screenshot-1.png",
      features: [
        { icon: "🎯", text: "99% Accuracy" },
        { icon: "⚡", text: "3 Modes Non Battery" },
      ],
    },
    {
      title: "Smart Watch®",
      subtitle: "Pro Series",
      description: "Fitness Tracker",
      productImage: "/screenshot-2.png",
      features: [
        { icon: "❤️", text: "Heart Rate Monitor" },
        { icon: "💧", text: "Water Resistant" },
      ],
      badge: "Watch Collection",
      rightContent: {
        title: "Your fitness partner",
        subtitle: "sleek and powerful",
        description:
          "technology meets style in this essential fitness companion for modern life.",
      },
    },
  ],
  topNav = ["About", "Services", "Industry", "Blog"],
  cartCount = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[currentIndex];
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-1">
      <div className="relative w-full xl:px-28!">
        {/* Monitor Frame */}
        <div className="relative">
          {/* Monitor Bezel */}
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-3 ">
            {/* Screen */}
            <div className="bg-black rounded-2xl overflow-hidden relative aspect-[21/10] border border-zinc-800">
              {/* Top Navigation */}
              <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-12 z-20">
                <div className="w-44! flex  items-center justify-center text-white">
                  {/* <div className="w-6 h-6 rounded-full border-2 border-zinc-600"></div> */}
                  {/* <div className="flex gap-2">
                    {" "}
                    <div className="w-7 h-7 bg-[#6915ae] flex items-center justify-center p-1 -mt-1">
                      <span className="text-white font-bold text-xs">UXB</span>
                    </div>
                    UxByte Studio
                  </div> */}
                </div>

                <div className="flex gap-6">
                  {topNav.map((item, i) => (
                    <button
                      key={i}
                      className="px-4 py-2 rounded-lg bg-zinc-800/50 text-zinc-400 text-sm hover:bg-zinc-700/50 transition-colors backdrop-blur-sm"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button className="px-4 py-2 rounded-lg bg-zinc-800/50 text-zinc-400 text-sm hover:bg-zinc-700/50 transition-colors backdrop-blur-sm flex items-center gap-2">
                  Get In Touch
                  {/* <span className="bg-zinc-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span> */}
                </button>
              </div>

              {/* Main Content Grid */}
              {/* Main Content Grid */}
              <div className="relative h-full grid grid-cols-2 gap-12 px-18 py-20">
                {/* LEFT SIDE – IMAGE */}
                <button
                  onClick={handlePrev}
                  className="
      absolute left-6 top-1/2 -translate-y-1/2 z-30
      w-12 h-12 rounded-full
      bg-zinc-800/50 hover:bg-zinc-700/50
      backdrop-blur-sm
      border border-zinc-700
      flex items-center justify-center
      transition-all hover:scale-110 cursor-pointer
    "
                >
                  <ChevronLeft className="w-6 h-6 text-zinc-400" />
                </button>

                {/* RIGHT CHEVRON */}
                <button
                  onClick={handleNext}
                  className="
      absolute right-6 top-1/2 -translate-y-1/2 z-30
      w-12 h-12 rounded-full
      bg-zinc-800/50 hover:bg-zinc-700/50
      backdrop-blur-sm
      border border-zinc-700
      flex items-center justify-center
      transition-all hover:scale-110 cursor-pointer
    "
                >
                  <ChevronRight className="w-6 h-6 text-zinc-400" />
                </button>
                <div className="relative flex items-center justify-center">
                  {/* Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-transparent blur-3xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src={currentItem.productImage}
                    alt="Product"
                    className="
        relative z-10
        max-w-[calc(100%-20px)]
        max-h-[calc(100%-20px)]
        w-auto
        h-auto
        object-contain
        drop-shadow-2xl
      "
                  />
                </div>

                {/* RIGHT SIDE – TEXT */}
                <div className="flex flex-col justify-center text-left space-y-4 max-w-lg">
                  <h2 className="text-white text-4xl font-light leading-tight">
                    {currentItem.title}
                  </h2>

                  <h3 className="text-zinc-300 text-lg font-medium">
                    {currentItem.rightContent.subtitle}
                  </h3>

                  <p className="text-zinc-500 text-base leading-relaxed">
                    {currentItem.rightContent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desk Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent -z-10"></div>
      </div>
    </div>
  );
};

export default MonitorHero;
