"use client";

import { Button } from "@/commonComponents/Button";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";
import Image from "next/image";
import { EncryptedText } from "../ui/encrypted-text";

export default function MultiSection() {
  return (
    <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-4 md:px-10 md:ml-14 h-full">
        <div className="animate-fadeUp mt-2 md:mt-0">
          <EncryptedText
            normaltext="WHERE"
            text=" WE INNOVATE"
            className="text-sm md:block hidden"
            normalClassName=""
            encryptedClassName="text-[#adadae]"
            revealedClassName="text-gray-500 dark:text-[#adadae]"
            revealDelayMs={30}
          />
          <Title className="mt-2">
            Eningeered For Pure
            <br />
            <span className="text-[#7800c4]">The Speed.</span>
          </Title>
          <Paragraph className="xl:w-[500px]">
            UXByte delivers fast, reliable, and scalable digital solutions
            across multiple areas. From rapid development to seamless cloud
            integration and instant access, we create solutions that accelerate
            growth, streamline operations, and drive real impact. Our focus is
            on speed, efficiency, and innovation, ensuring your business stays
            ahead in a fast-paced digital world.
          </Paragraph>
          <Button
            variant="filled"
            href="/blog"
            className="px-8 md:py-4 py-3 mt-4 mb-2 md:mb-0 md:mt-10 hidden md:block w-fit"
            label="View All"
          />
        </div>

        <div className="md:flex items-center gap-8 mt-12 opacity-60 hidden">
          <span className="text-sm font-medium">SHIMANO</span>
          <span className="text-sm font-medium">UCI</span>
          <span className="text-sm font-medium">IRONMAN</span>
        </div>
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
