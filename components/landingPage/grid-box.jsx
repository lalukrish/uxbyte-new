"use client";

import { Button } from "@/commonComponents/Button";
import Paragraph from "@/commonComponents/paragraph";
import Title from "@/commonComponents/title";
import Image from "next/image";

export default function MultiSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 w-full">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-4 md:px-10 md:ml-14!  bg-white">
        <div className="animate-fadeUp">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            ENGINEERED <br />
            FOR PURE <br />
            SPEED.
          </h1> */}
          <Title>
            {" "}
            Eningeered For Pure
            <br />
            The Speed.
          </Title>
          {/* <p className="mt-6 text-gray-600 max-w-md">
            Engineered for riders who demand speed, control, and a seamless ride
            on every road.
          </p> */}
          <Paragraph className="xl:w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </Paragraph>
          {/* <button className="mt-8 bg-black text-white px-6 py-3 text-sm rounded-md hover:opacity-90 transition">
            Explore the Bike
          </button> */}
          <Button
            variant="filled"
            href="/blog"
            className="px-8 py-4 mt-10"
            label="View All"
          />{" "}
        </div>

        <div className="flex items-center gap-8 mt-16 opacity-60">
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
