"use client";

import { Button } from "@/commonComponents/Button";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";
import Image from "next/image";
import { EncryptedText } from "../ui/encrypted-text";
import GlossyText, { CanvasText } from "../ui/canvas-text";

export default function MultiSection() {
  return (
    <section
      className="w-full h-screen
     grid grid-cols-1 md:grid-cols-2 "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-4 md:px-10 md:ml-14 h-full bg-white">
        {/* <div className="md:flex items-center gap-8 mt-12 opacity-60 hidden">
          <span className="text-sm font-medium">SHIMANO</span>
          <span className="text-sm font-medium">UCI</span>
          <span className="text-sm font-medium">IRONMAN</span>
        </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-full bg-black">
        <Image
          src="/handshake.jpg"
          alt="TX-01 Carbon Aero"
          fill
          className="object-cover animate-fadeInSlow"
          priority
        />
      </div>
    </section>
  );
}
