"use client";
import Image from "next/image";
import ITitle from "./Titles";
import IParagraph from "./Paragraphs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../animate-ui/components/radix/accordion";

export default function TextAndImageSection({
  className,
  image = "/hero-2.jpg",
  imageAlt,
  title = "dumy",
  description = "test",
  paragraph = "ttest",
  paragraph2 = "test",
  reverse = 0,
}) {
  return (
    <section
      className={`w-full px-4 md:px-32 lg:px-32 xl:px-32 2xl:px-52 pb-10 md:pb-16 ${className}`}
    >
      <div
        className={`flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-start gap-6 md:gap-8 lg:gap-10`}
      >
        {/* Desktop Title */}
        <div className="block md:hidden">
          <ITitle text={title} className="!mb-5 !mt-6 !text-start" />
        </div>
        {/* Left Image */}
        <div className="w-full lg:w-[45%] md:top-20 self-center">
          <div className="relative md:w-[70%] lg:w-[100%] xl:w-[100%] 2xl:w-[60%] md:mx-auto h-[450px] 2xl:h-[450px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover md:mt-6"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%]">
          <div className="px-0 md:px-8 xl:px-0 2xl:px-8">
            <div className="hidden md:block">
              {title && (
                <ITitle text={title} className="!mb-6 !mt-6 !text-start" />
              )}
            </div>

            {paragraph && (
              <IParagraph text={paragraph} className="mb-4 mt-5 md:mt-4" />
            )}

            <Accordion type="single" collapsible>
              {description.map((item, index) => {
                const showArrow = Boolean(item.text);

                return item.bold ? (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`!font-secondary ${item.text ? "border-b-[#898989]" : "border-none"}`}
                  >
                    <AccordionTrigger
                      showArrow={showArrow}
                      className={`!font-light !font-secondary !text-[26px] !leading-[26px]
    ${showArrow ? "cursor-pointer" : "cursor-default pointer-events-none"}
    no-underline hover:no-underline focus:no-underline text-[#42321A]
  `}
                    >
                      {item.bold}
                    </AccordionTrigger>

                    {item.text && (
                      <AccordionContent>
                        <IParagraph
                          text={item.text}
                          className="mt-2 2xl:text-[17px]"
                        />
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ) : (
                  <IParagraph key={index} text={item.text} className="mt-2" />
                );
              })}
            </Accordion>

            {paragraph2 && <IParagraph text={paragraph2} className="mt-5" />}
          </div>
        </div>
      </div>
    </section>
  );
}
