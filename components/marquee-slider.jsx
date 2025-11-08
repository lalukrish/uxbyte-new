import Image from "next/image";
import { Marquee } from "./ui/marquee";

const companies = [
  {
    name: "Google",
    logo: "/logo-dummy.png",
  },
  {
    name: "Microsoft",
    logo: "/logo-dummy.png",
  },
  {
    name: "Amazon",
    logo: "/logo-dummy.png",
  },
  {
    name: "Netflix",
    logo: "/logo-dummy.png",
  },
];

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-6"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={180}
              height={80}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>

      {/* Gradient fade for smooth edges */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-gray-900"></div> */}
    </div>
  );
}
