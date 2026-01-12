"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "@/commonComponents/title";
import Paragraph from "@/commonComponents/paragraph";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    image: "/bg-seed.webp",
    content: (
      <>
        <p className="mb-4">
          Our mission goes beyond processing visas—we help you immigrate
          overseas with trustworthy, transparent, and legally backed solutions.
        </p>
        <p>
          With the integration of legal expertise, advanced technology, and
          individual care, we ensure accurate documentation and timely updates
          for a confident journey abroad.
        </p>
      </>
    ),
  },
  {
    id: "vision",
    label: "Our Vision",
    image: "/blog-1.webp",
    content: (
      <p>
        Our vision is to become a globally trusted immigration partner, helping
        individuals build successful international careers and lives.
      </p>
    ),
  },
  {
    id: "values",
    label: "Our Core Values",
    image: "/blog-2.webp",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Integrity & Transparency</li>
        <li>Client-first approach</li>
        <li>Legal compliance</li>
        <li>Global expertise</li>
      </ul>
    ),
  },
];

export default function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState("mission");
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-white py-2 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <Title className="text-center mb-10">
          Expertise & Recognition
          <span className="block w-20 h-[2px] mx-auto mt-2" />
        </Title>

        {/* Tabs */}
        <div className="flex justify-center gap-12 border-b border-gray-300 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-xl font-medium relative cursor-pointer ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px]  bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <Image
              src={current.image}
              alt={current.label}
              width={450}
              height={300}
              className="rounded-md h-[300px]"
            />
          </div>

          {/* Text */}
          <Paragraph className="">{current.content}</Paragraph>
        </div>
      </div>
    </section>
  );
}
