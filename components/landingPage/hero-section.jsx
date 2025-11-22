"use client";

import Image from "next/image";
import Button from "../ui/button";
import { LayoutTextFlip } from "../ui/layout-text-flip";
// import { Button } from "@/components/ui/button";

export default function CreativeHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
      {/* === Left Content === */}
      <div className="flex-1 text-left space-y-6 ">
        <h1 className="text-2xl lg:text-5xl xl:text-7xl 2xl:text-7xl md:text-6xl font-bold text-gray-900 leading-tight">
          Design the way <br />
          <LayoutTextFlip words={["you think.", "imagine", "you think."]} />
        </h1>

        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 w-fit">
          <p className="text-gray-800 font-medium">
            Build your site with more creative freedom.
          </p>
        </div>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-6 py-3 text-lg font-semibold shadow-md">
          Start Here
        </Button>

        <p className="text-gray-600 text-lg">
          Create a website the way you want. Start your 14-day free trial today.
        </p>
      </div>

      {/* === Right Image === */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="relative w-[350px] h-[400px] md:w-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://img.freepik.com/free-photo/people-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141659.jpg?semt=ais_hybrid&w=740&q=80" // 👉 replace with your image path
            alt="Designer working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
