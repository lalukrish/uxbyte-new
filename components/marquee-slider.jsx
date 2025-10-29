import Image from "next/image";
import { Marquee } from "./ui/marquee";

const companies = [
  {
    name: "Google",
    logo: "https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=40%2C161%2C4500%2C2250&q=45&auto=format&w=1356&h=668&fit=crop",
  },
  {
    name: "Microsoft",
    logo: "https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=40%2C161%2C4500%2C2250&q=45&auto=format&w=1356&h=668&fit=crop",
  },
  {
    name: "Amazon",
    logo: "https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=40%2C161%2C4500%2C2250&q=45&auto=format&w=1356&h=668&fit=crop",
  },
  {
    name: "Netflix",
    logo: "https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=40%2C161%2C4500%2C2250&q=45&auto=format&w=1356&h=668&fit=crop",
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
