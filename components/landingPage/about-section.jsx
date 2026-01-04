import React from "react";
import Image from "next/image";
import { EncryptedText } from "../ui/encrypted-text";
import Title from "@/commonComponents/title";
import Paragraph from "@/commonComponents/paragraph";
// import Title from "../ui/main-title";
// import Paragraph from "../ui/paragraph";
// import KnowMoreButton from "../ui/knowmore-button";
// import { Button } from "../ui/button";
const AboutSection = () => {
  return (
    <section className="about-section min-h-screen grid grid-cols-1  items-center xl:flex">
      <div className="px-3 sm:px-10 xl:pl-24 2xl:pl-48 w-full xl:w-1/2 pt-12">
        <EncryptedText
          normaltext="Tell about "
          text="your self"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
        {/* <h1 className="text-[48px]  2xl:8ext-4xl">
          {" "}
          Record Proven :<br /> We Build
          <br /> Oceanic Excellence
        </h1> */}
        <Title>
          {" "}
          Record Proven :<br /> We Build
          <br /> Oceanic Excellence
        </Title>

        <Paragraph className="mt-5">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...' Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s...'
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
          <div
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
          >
            <Image
              src="/hero_img1.png"
              alt="About small"
              fill
              className="object-cover "
            />
          </div>
          <div
            className="
      relative
      h-[320px] w-[260px]
      xl:h-[570px] xl:w-[400px]
      2xl:h-[750px] 2xl:w-[600px]
    "
          >
            {" "}
            <Image
              src="/education.jpg"
              alt="About big"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
