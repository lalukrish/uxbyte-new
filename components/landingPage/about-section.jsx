"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EncryptedText } from "../ui/encrypted-text";
import Title from "@/commonComponents/title";
import Paragraph from "@/commonComponents/paragraph";

const AboutSection = () => {
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
        opacity: {
          duration: 0.9,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <section className="about-section min-h-screen grid grid-cols-1  items-center xl:flex overflow-x-hidden">
      <div className="px-3 sm:px-10 xl:pl-24 2xl:pl-48 w-full xl:w-1/2 pt-12">
        <EncryptedText
          normaltext="PRODUCT DESIGN"
          text=" AND DEVELOPMENT AGENCY"
          className="text-[11px]! md:text-[14px]!"
          normalClassName=""
          encryptedClassName="text-[#535658] "
          revealedClassName="text-[#535658] dark:text-[#535658]"
          revealDelayMs={30}
        />
        {/* <h1 className="text-[48px]  2xl:8ext-4xl">
          {" "}
          Record Proven :<br /> We Build
          <br /> Oceanic Excellence
        </h1> */}
        <Title>
          {" "}
          Record Proven :<br /> We Build
          <br /> Digital Excellence
        </Title>

        <Paragraph className="mt-5">
          {" "}
          We are a full-service IT company delivering innovative digital
          solutions across development, cloud, design, marketing, and branding.
          UXByte combines technology, creativity, and strategy to help
          businesses grow, scale, and thrive in a rapidly evolving digital
          landscape. Our focus is on building reliable, scalable, and impactful
          solutions that deliver real results.
        </Paragraph>
        {/* <KnowMoreButton className={"mt-10!"} /> */}
        {/* <Button
          label="Explore all insights"
          href="/blog"
          variant="outlined"
          iconRight={<span aria-hidden>→</span>}
          className="mt-10"
        /> */}
      </div>

      <div className="xl:w-2/3 flex  items-end gap-0 justify-end">
        <div className="relative flex justify-center items-center ">
          <motion.div
            className="relative
    xl:absolute
    z-5
    xl:right-[350px]
    2xl:right-[440px]
    h-[260px]
    w-[200px]
    xl:h-[450px]
    xl:w-[350px]
    2xl:h-[590px]
    2xl:w-[420px]
  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src="/hero_img1.png"
              alt="About small"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="
      relative
      h-[320px] w-[260px]
      xl:h-[570px] xl:w-[400px]
      2xl:h-[750px] 2xl:w-[600px]
    "
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: false, amount: 0.3 }}
            // variants={imageVariants}
          >
            {" "}
            <Image
              src="/about-11.jpg"
              alt="About big"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
