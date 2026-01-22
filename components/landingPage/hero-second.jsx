import React from "react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { EncryptedText } from "../ui/encrypted-text";

export default function DamnGoodHero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background image on left */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-01.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center px-8 py-3">
        <div className="flex items-center gap-4 md:pl-16">
          <div className="h-12 w-12 p-1 bg-[#6915ae] backdrop-blur-sm flex items-center justify-center">
            <span className="font-bold text-xl">UXB</span>
          </div>
          <span className="text-xl font-bold">Uxbyte Studio</span>
        </div>

        <div className="flex items-center gap-8 mx-auto">
          <span className="text-sm font-medium tracking-wider cursor-pointer">
            WHAT WE DO
          </span>
          <span className="text-sm font-medium tracking-wider cursor-pointer">
            WHO ARE WE
          </span>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative h-screen flex items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-8xl mx-auto flex items-center">
          {/* LEFT TEXT — width locked */}
          <div className="z-10 w-full max-w-[640px] md:-mt-40">
            <h1 className="text-4xl md:text-7xl font-medium leading-[1.15] mb-6">
              <span className="block">Where thinking</span>

              <span className="inline-flex items-baseline gap-0">
                <span>flows,</span>
                <LayoutTextFlip
                  words={[
                    "creativity moves.",
                    "innovation grows.",
                    "insight blooms.",
                  ]}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-400">
              Your digital world, managed and organized with ease by UXByte.
            </p>
          </div>

          {/* RIGHT IMAGE — fixed position, never moves */}
          <div className="hidden md:block ml-auto w-[460px] shrink-0 relative -mt-52">
            <img src="/2026.png" alt="2026" className="w-full object-cover" />

            <div className="-mt-15 pl-10">
              <EncryptedText
                text="VERSION 2.0"
                className="text-sm"
                revealedClassName="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
