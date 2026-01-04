"use client";

import Image from "next/image";

export default function BikeHero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 w-full">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-4 md:px-10 md:ml-20!  bg-white">
        <div className="animate-fadeUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            ENGINEERED <br />
            FOR PURE <br />
            SPEED.
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Engineered for riders who demand speed, control, and a seamless ride
            on every road.
          </p>

          <button className="mt-8 bg-black text-white px-6 py-3 text-sm rounded-md hover:opacity-90 transition">
            Explore the Bike
          </button>
        </div>

        <div className="flex items-center gap-8 mt-16 opacity-60">
          <span className="text-sm font-medium">SHIMANO</span>
          <span className="text-sm font-medium">UCI</span>
          <span className="text-sm font-medium">IRONMAN</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative min-h-screen  bg-black">
        <Image
          src="/run-man.png"
          alt="TX-01 Carbon Aero"
          fill
          className="object-cover animate-fadeInSlow"
          priority
        />
      </div>
    </section>
  );
}
