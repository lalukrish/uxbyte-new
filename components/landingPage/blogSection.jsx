"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    img: "/assets/blog1.jpg",
    title: "How to design a website (step-by-step guide)",
    bg: "bg-[#004f4f]", // deep teal
  },
  {
    img: "/assets/blog2.jpg",
    title: "How to monetize your website in 15 actionable steps",
    bg: "bg-[#65281e]", // brown-red
  },
  {
    img: "/assets/blog3.jpg",
    title: "18 outstanding website examples that will inspire you",
    bg: "bg-[#5658f3]", // violet-blue
  },
];

export default function InspirationSection() {
  return (
    <section className="w-full py-20 bg-white text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Get inspired, gain new skills
          <br /> and see what’s trending
        </h2>
        <button className="mt-6 md:mt-0 bg-black text-white px-6 py-3 rounded-full font-medium  transition">
          Explore the Blog
        </button>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl overflow-hidden  ${card.bg} flex flex-col`}
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 p-6 flex-grow">
              <h3 className="text-lg font-semibold leading-snug">
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
