"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EncryptedText } from "../ui/encrypted-text";
import Title from "@/commonComponents/title";
import Paragraph from "@/commonComponents/paragraph";

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.95,
    rotate: -6,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AlternatingSection = ({
  badgeText,
  badgeEncryptedText,
  title,
  description,
  primaryImage,
  secondaryImage,
  reverse = false,
  bgClass = "bg-black",
  textColor = "bg-black",
}) => {
  return (
    <div className={`w-full py-20 px-6 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT */}
          <div className={`space-y-2 ${reverse ? "lg:order-2" : ""}`}>
            <div className="inline-block px-1 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              <span className={`text-sm font-medium ${textColor}`}>
                {badgeText}{" "}
                <EncryptedText text={badgeEncryptedText} className="" />
              </span>
            </div>

            <Title
              className={`text-4xl leading-16 lg:text-5xl  font-bold ${textColor}`}
            >
              {title}
            </Title>

            <Paragraph className={`text-lg ${textColor} opacity-80`}>
              {description}
            </Paragraph>
          </div>

          {/* IMAGE */}
          <motion.div
            className={`relative ${reverse ? "lg:order-1" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden ">
              <img
                src={primaryImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AlternatingSection;
