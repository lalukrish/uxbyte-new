"use client";

import Image from "next/image";
import { useState } from "react";
import Title from "@/commonComponents/title";
import { Button } from "@/commonComponents/Button";
import Paragraph from "@/commonComponents/paragraph";

export default function CreativeHero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <section id="new-hero" className=" bg-white overflow-hidden py-28">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16  lg:py-1 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center ">
          {/* === LEFT IMAGE SECTION === */}
          <div className="flex justify-center items-center order-1 lg:order-1">
            <div
              className="relative w-full max-w-[350px] h-[400px] sm:max-w-[400px] sm:h-[450px] md:max-w-[600px] md:h-[480px] overflow-hidden  group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCursorPos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
                setHovering(true);
              }}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Main Image */}
              {/* <Image
                src="/hero_image3.png"
                alt="Main"
                fill
                className="object-cover"
              /> */}
              <Image
                src="/about-us-8.png"
                alt="Main"
                fill
                className="object-cover"
              />

              {/* Second Layer (hover reveal) */}
              <div
                className="absolute inset-0 pointer-events-none cursor-no-drop"
                style={{
                  WebkitMaskImage: hovering
                    ? `radial-gradient(220px at ${cursorPos.x}px ${cursorPos.y}px, transparent 30%, black 60%)`
                    : "radial-gradient(0px at -140px -100px, transparent 0%, black 0%)",
                  maskImage: hovering
                    ? `radial-gradient(400px at ${cursorPos.x}px ${cursorPos.y}px, transparent 30%, black 60%)`
                    : "radial-gradient(0px at -10px -100px, transparent 0%, black 0%)",
                  transition:
                    "mask-image 0.2s ease, -webkit-mask-image 0.2s ease",
                }}
              >
                {/* <Image
                  src="/hero_image2.png"
                  alt="Second Layer"
                  fill
                  className="object-cover"
                /> */}
                <Image
                  src="/about-us-9.png"
                  alt="Second Layer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* === RIGHT TEXT SECTION === */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-2 xl:-translate-x-0">
            {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"></h1> */}
            <Title> Bring your ideas to life with Creative Freedom</Title>
            <Paragraph className=" text-base sm:text-lg leading-relaxed">
              We help you design websites exactly the way you imagine. With
              intuitive tools, dynamic animations, and unmatched flexibility —
              your creativity has no limits.
              <br />
              <br />
              Explore a futuristic design experience where your imagination
              meets powerful visual tools. We help you design websites exactly
              the way you imagine. With intuitive tools, dynamic animations, and
              unmatched flexibility — your creativity has no limits.
              <br />
              <br />
              Explore a futuristic design experience where your imagination
              meets powerful visual tools.
            </Paragraph>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
