import React from "react";
import { Scale } from "lucide-react";
// import SubTitle from "@/components/ui/Subtitles";
// import Titles from "@/components/ui/Titles";

const features = [
  {
    title: "NetSuite Solution Provider",
    description:
      "We deliver expert NetSuite solutions to help your business run smarter, faster, and more efficiently.",
  },
  {
    title: "NetSuite Solution Provider",
    description:
      "We deliver expert NetSuite solutions to help your business run smarter, faster, and more efficiently.",
  },
  {
    title: "NetSuite Solution Provider",
    description:
      "We deliver expert NetSuite solutions to help your business run smarter, faster, and more efficiently.",
  },
  {
    title: "NetSuite Solution Provider",
    description:
      "We deliver expert NetSuite solutions to help your business run smarter, faster, and more efficiently.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className=" pt-28">
      <div className="">
        <div className="mx-auto px-4  md:px-28 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="2xl:ml-40 ">
              <div className="flex items-center gap-3 mb-6">
                <h3>Why Choose Us</h3>
              </div>

              <h1 className="  leading-16 text-gray-900 max-w-2xl md:max-w-lg line-clamp-7">
                <label className="md:hidden !font-primary">
                  Experience&nbsp;unparalleled business excellence
                </label>

                <label className="hidden md:block  !font-primary">
                  Experience unparalleled
                  <br />
                  business excellence
                </label>
              </h1>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-8 md:space-y-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 pb-8 border-b border-gray-300 last:border-b-0"
                >
                  <div className="shrink-0">
                    <Scale className="w-8 h-8 text-[#c9a56a]" />
                  </div>

                  <div>
                    <h3 className="text-[22px] font-secondary font-meidum text-[#42321A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
