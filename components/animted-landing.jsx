"use client";
import React, { useState, useEffect } from "react";

// Mock LayoutTextFlip component
const LayoutTextFlip = ({ words }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block transition-all duration-500">
      {words[index]}
    </span>
  );
};

export default function SpotlightPreview() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 20 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMouseActive(true);

      // Reset to default animation after 2 seconds of no movement
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMouseActive(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // Calculate rotation angle to point spotlight toward mouse
  const getCenterSpotlightRotation = () => {
    if (!isMouseActive) return 0;

    // Spotlight origin is at center top of screen
    const spotlightX = window.innerWidth / 2;
    const spotlightY = 0;

    // Calculate angle from spotlight to mouse
    const deltaX = mousePos.x - spotlightX;
    const deltaY = mousePos.y - spotlightY;

    // Convert to degrees (atan2 returns radians)
    // Negative to flip the direction
    const angleRad = Math.atan2(-deltaX, deltaY);
    const angleDeg = (angleRad * 180) / Math.PI;

    return angleDeg;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-black to-gray-950">
      {/* Rotating spotlights - each moves independently */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-[1]">
        {/* Center spotlight - tracks mouse or rotates */}
        <div
          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] opacity-40 transition-transform duration-300 ease-out ${
            !isMouseActive ? "animate-spotlight-swing" : ""
          }`}
          style={
            isMouseActive
              ? {
                  transform: `rotate(${getCenterSpotlightRotation()}deg)`,
                  transformOrigin: "top center",
                }
              : {}
          }
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pink-500/40 via-fuchsia-500/20 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        {/* Left spotlight - rotates right to left */}
        <div className="absolute -top-20 left-[20%] -translate-x-1/2 w-[500px] h-[400px] opacity-40 animate-spotlight-swing-left">
          <div
            className="absolute top-0 left-1/2 -translate-x-2/3 w-full h-full bg-gradient-to-b from-pink-500/40 via-fuchsia-500/20 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        {/* Right spotlight - rotates left to right */}
        <div className="absolute -top-20 right-[20%] translate-x-1/2 w-[500px] h-[400px] opacity-40 animate-spotlight-swing-right">
          <div
            className="absolute top-0 left-1/2 -translate-x-2/3 w-full h-full bg-gradient-to-b from-pink-500/40 via-fuchsia-500/20 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        {/* Additional rotating spotlight - left side */}
        <div className="absolute -top-20 left-1/3 -translate-x-1/3 w-[400px] h-[300px] opacity-40 animate-spotlight-swing-delayed">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pink-500/40 via-fuchsia-500/20 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        {/* Static background layer */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-fuchsia-400/35 via-purple-500/15 to-transparent"
            style={{ clipPath: "polygon(50% 0%, 5% 100%, 95% 100%)" }}
          ></div>
        </div>

        {/* Glowing source at the top - static */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Radial glow effects - subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-fuchsia-500/8 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-purple-950/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Design the way <br />
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                <LayoutTextFlip
                  words={["you think.", "imagine", "you think."]}
                />
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-fuchsia-600 transition shadow-lg shadow-pink-500/50">
                  Start for Free
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20">
                  View Playground
                </button>
              </div>
            </div>

            {/* Demo Card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl text-white font-semibold mb-2">
                  How can I help you onchain today?
                </h3>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg text-left transition border border-white/10">
                  Design Things
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg text-left transition border border-white/10">
                  Development Things
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg text-left transition border border-white/10">
                  Saas Infrastructure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spotlight-swing {
          0%,
          100% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        @keyframes spotlight-swing-left {
          0%,
          100% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(-20deg);
          }
        }

        @keyframes spotlight-swing-right {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(20deg);
          }
        }

        @keyframes spotlight-swing-delayed {
          0%,
          100% {
            transform: rotate(20deg);
          }
          50% {
            transform: rotate(-15deg);
          }
        }

        .animate-spotlight-swing {
          animation: spotlight-swing 4s ease-in-out infinite;
          transform-origin: top center;
        }

        .animate-spotlight-swing-left {
          animation: spotlight-swing-left 5s ease-in-out infinite;
          transform-origin: top center;
          animation-delay: 0.5s;
        }

        .animate-spotlight-swing-right {
          animation: spotlight-swing-right 4.5s ease-in-out infinite;
          transform-origin: top center;
          animation-delay: 1s;
        }

        .animate-spotlight-swing-delayed {
          animation: spotlight-swing-delayed 5.5s ease-in-out infinite;
          transform-origin: top center;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}
