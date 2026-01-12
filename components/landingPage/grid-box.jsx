"use client";

import { Button } from "@/commonComponents/Button";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";
import Image from "next/image";
import { EncryptedText } from "../ui/encrypted-text";

export default function MultiSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 w-full bg-white">
      <div className="flex flex-col justify-center px-4 md:px-10 md:ml-14! ">
        <div className="animate-fadeUp  mt-2! md:mt-0 ">
          <EncryptedText
            normaltext="WHERE"
            text=" WE INNOVATE"
            className="text-sm"
            normalClassName=""
            encryptedClassName="text-[#adadae]"
            revealedClassName="text-gray-500 dark:text-[#adadae]"
            revealDelayMs={30}
          />
          <Title>
            {" "}
            Eningeered For Pure
            <br />
            The Speed.
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
            className="px-8 py-4 mt-10"
            label="View All"
          />{" "}
        </div>

        <div className="flex items-center gap-8 mt-12 opacity-60">
          <span className="text-sm font-medium">SHIMANO</span>
          <span className="text-sm font-medium">UCI</span>
          <span className="text-sm font-medium">IRONMAN</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative md:min-h-screen min-h-[50vh]  bg-black">
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
