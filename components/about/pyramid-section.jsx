"use client";
import React from "react";
import { motion } from "framer-motion";

const PyramidFunnel = ({ title = "sfddsf", paragraph = "sdfsdf" }) => {
  const stages = [
    {
      label: "Profile Evaluation",
      color: "bg-[#4B0008]",
    },
    {
      label: "Documentation",
      color: "bg-[#7A0012]",
    },
    {
      label: "Application Filing",
      color: "bg-[#A1001A]",
    },
    {
      label: "Interview Preparation",
      color: "bg-[#C62828]",
    },
    {
      label: "Visa Approval",
      color: "bg-[#E57373]",
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const stageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-6 md:py-10 2xl:py-32! px-4">
      <div className="max-w-[75rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 justify-center items-center">
        <div
          className="
            flex flex-col
            items-center text-center
            px-4
            md:items-start md:text-left
            md:px-0
            lg:pl-20
            md:-translate-5
          "
        >
          <title className="mb-5 md:mb-10">{title}</title>
          <p className="mb-6 mx-auto text-center! max-w-[36rem] md:mx-0 md:text-left!">
            {paragraph}
          </p>
        </div>

        {/* Funnel */}
        <div className="flex justify-center">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{
              width: "clamp(18rem, 92vw, 32.25rem)",
              height: "clamp(18rem, 92vw, 32.25rem)",
            }}
          >
            {stages.map((stage, index) => {
              const topWidth = 92 - index * 12;
              const bottomWidth = 93 - (index + 1) * 12;
              const height = 14;
              const top = index * 15.5;

              return (
                <motion.div
                  key={index}
                  variants={stageVariants}
                  className="absolute left-1/2 -translate-x-1/2 w-full"
                  style={{
                    top: `${top}%`,
                    height: `${height}%`,
                  }}
                >
                  <div
                    className={`${stage.color} h-full flex items-center justify-center text-white text-sm md:text-base font-semibold rounded-md shadow-md`}
                    style={{
                      clipPath: `polygon(
                        ${(100 - topWidth) / 2}% 0%,
                        ${(100 + topWidth) / 2}% 0%,
                        ${(100 + bottomWidth) / 2}% 100%,
                        ${(100 - bottomWidth) / 2}% 100%
                      )`,
                    }}
                  >
                    {stage.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PyramidFunnel;
