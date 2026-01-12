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
    <section
      className={cn("min-h-screen overflow-hidden flex items-center", bgClass)}
    >
      <div
        className={cn(
          "grid grid-cols-1 xl:grid-cols-2 w-full items-center",
          reverse && "xl:flex-row-reverse"
        )}
      >
        {/* TEXT */}
        <div
          className={cn(
            "px-3 sm:px-10 xl:px-24 2xl:px-48 pt-12",
            reverse && "xl:order-2"
          )}
        >
          <EncryptedText
            normaltext={badgeText}
            text={badgeEncryptedText}
            className="text-sm"
            encryptedClassName="text-[#535658]"
            revealedClassName="text-[#535658]"
            revealDelayMs={30}
          />

          <Title className={textColor}>{title}</Title>

          <Paragraph className={cn(textColor, "mt-5")}>{description}</Paragraph>
        </div>

        {/* IMAGES */}
        <div
          className={cn(
            "relative flex justify-center items-end",
            reverse ? "xl:order-1" : "xl:order-2"
          )}
        >
          {/* Small Image */}
          <motion.div
            className={cn(
              "relative z-10",
              "h-[260px] w-[200px]",
              "xl:h-[450px] xl:w-[350px]",
              "2xl:h-[590px] 2xl:w-[420px]",
              reverse
                ? "xl:absolute xl:left-[350px] 2xl:left-[440px]"
                : "xl:absolute xl:right-[350px] 2xl:right-[440px]"
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src={primaryImage}
              alt="Primary"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Large Image */}
          <motion.div
            className="
              relative
              h-[320px] w-[260px]
              xl:h-[570px] xl:w-[400px]
              2xl:h-[750px] 2xl:w-[600px]
            "
          >
            <Image
              src={secondaryImage}
              alt="Secondary"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;
