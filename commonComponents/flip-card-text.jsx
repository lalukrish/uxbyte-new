"use client";
import React, { useState } from "react";
import { Package, Shield, ShieldCheck } from "lucide-react";
import Titles from "./Titles";
import Paragraphs from "./Paragraphs";

export default function FlipCardComponent({
  CardFront = {},
  CardBack = {},
  title = "",
  paragraph = [],
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen md:p-8 p-4 pt-16 md:pt-0 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-0 lg:px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-center">
          {/* Left Side - Flip Card */}
          <div
            className="w-full md:w-[400px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div
              className={`relative cursor-pointer md:w-[400px] h-96 transition-transform duration-700 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 bg-[#141414] md:p-8 p-5 flex flex-col items-center justify-center text-white shadow-xl backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Package className="w-16 h-16 mb-6" strokeWidth={1} />
                <h2 className="text-3xl font-bold mb-3">{CardFront.title}</h2>
                <p className="text-center text-sm leading-relaxed opacity-1000">
                  {CardFront.paragraph2}
                </p>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 bg-black md:p-8 p-5 flex flex-col items-center justify-center text-white shadow-xl backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <ShieldCheck className="w-16 h-16 mb-6" strokeWidth={1.5} />
                <h2 className="text-3xl font-bold mb-3">{CardBack.title}</h2>
                <p className="text-center text-sm leading-relaxed opacity-90">
                  {CardBack.paragraph2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 pl-3 md:pl-0 mt-6 md:mt-0">
            <Titles text={title} />
            <Paragraphs text={paragraph} />
          </div>
        </div>
      </div>
    </div>
  );
}
