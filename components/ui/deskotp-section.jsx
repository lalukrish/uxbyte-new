"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MonitorHero = ({
  items = [
    {
      title: "T—Meter®",
      subtitle: "Slim Ultra",
      description: "Thermometer",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=600&fit=crop",
      features: [
        { icon: "🎯", text: "99% Accuracy" },
        { icon: "⚡", text: "3 Modes Non Battery" },
      ],
      badge: "T—Meter® Bag",
      rightContent: {
        title: "The companion",
        subtitle: "a premium and durable",
        description:
          "aesthetic comes into digital Thermometer go essential tool to control your health.",
      },
    },
    {
      title: "Smart Watch®",
      subtitle: "Pro Series",
      description: "Fitness Tracker",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop",
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
    {
      title: "AirPods®",
      subtitle: "Max Ultra",
      description: "Wireless Audio",
      productImage:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=600&fit=crop",
      features: [
        { icon: "🎵", text: "Hi-Fi Sound" },
        { icon: "🔋", text: "30hrs Battery" },
      ],
      badge: "Audio Series",
      rightContent: {
        title: "Immersive sound",
        subtitle: "crystal clear audio",
        description:
          "experience music like never before with premium wireless technology.",
      },
    },
  ],
  topNav = ["Thermometer", "About", "Download"],
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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
      <div className="relative w-full xl:px-18!">
        {/* Monitor Frame */}
        <div className="relative">
          {/* Monitor Bezel */}
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-3 shadow-2xl">
            {/* Screen */}
            <div className="bg-black rounded-2xl overflow-hidden relative aspect-[21/9] border border-zinc-800">
              {/* Top Navigation */}
              <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-12 z-20">
                <div className="w-28!  items-center justify-center text-white">
                  {/* <div className="w-6 h-6 rounded-full border-2 border-zinc-600"></div> */}
                  UxByte Studio
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
                  Cart
                  <span className="bg-zinc-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                </button>
              </div>

              {/* Main Content Grid */}
              <div className="relative h-full grid grid-cols-2 gap-8 px-12 py-20">
                {/* Left Chevron */}
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-sm border border-zinc-700 flex items-center justify-center transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-zinc-400" />
                </button>

                {/* Right Chevron */}
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-sm border border-zinc-700 flex items-center justify-center transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-zinc-400" />
                </button>

                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-8 ">
                  <div className="pl-20">
                    <h1 className="text-6xl font-light text-white mb-2 tracking-tight">
                      {currentItem.title}
                    </h1>
                    <h2 className="text-5xl font-light text-white mb-1 tracking-tight">
                      {currentItem.subtitle}
                    </h2>
                    <h2 className="text-5xl font-light text-white tracking-tight">
                      {currentItem.description}
                    </h2>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {currentItem.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-zinc-400 text-sm">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-600 transition-colors w-fit">
                    <span className="text-lg">📦</span>
                    {currentItem.badge}
                  </button>
                </div>

                {/* Right Content - Product Display */}
                <div className="relative flex items-center justify-center">
                  {/* Circular Glow Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-96 h-96 rounded-full bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-transparent blur-3xl"></div>
                  </div>

                  {/* Product Image */}
                  <div className="relative z-10">
                    <img
                      src={currentItem.productImage}
                      alt="Product"
                      className="h-96 w-auto object-contain drop-shadow-2xl"
                    />

                    {/* Temperature Display Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-5xl font-light text-white mb-1">
                        36.6
                      </div>
                      <div className="text-xs text-zinc-500">Celsius</div>
                    </div>
                  </div>

                  {/* Right Side Description */}
                  <div className="absolute right-0 top-1/3 max-w-xs space-y-2">
                    <h3 className="text-white text-lg font-light">
                      {currentItem.rightContent.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      <span className="text-zinc-400">
                        {currentItem.rightContent.subtitle}
                      </span>{" "}
                      {currentItem.rightContent.description}
                    </p>
                  </div>

                  {/* Bottom Right Icon */}
                  <button className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:border-zinc-600 transition-colors">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="flex flex-col items-center mt-4">
            {/* Stand Neck */}
            <div className="w-20 h-16 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-lg relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-zinc-700"></div>
            </div>

            {/* Stand Base */}
            <div className="w-64 h-8 bg-gradient-to-b from-zinc-900 to-black rounded-full shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/50 to-transparent rounded-full"></div>
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
