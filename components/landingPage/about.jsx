import { MarqueeDemoVertical } from "@/components/marquee-slider";
import Image from "next/image";

export function AboutUs() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-10  pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"
            alt="About Us"
            width={500}
            height={400}
            className="object-cover rounded-2xl shadow-md w-full h-[300px] md:h-[400px]"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            About Us
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="mx-10 mt-10">
        {" "}
        <MarqueeDemoVertical />
      </div>
    </div>
  );
}
