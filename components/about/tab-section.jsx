"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    image: "/assets/mission.jpg",
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
    image: "/assets/vision.jpg",
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
    image: "/assets/values.jpg",
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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-red-600 font-medium mb-10">
          Expertise & Recognition
          <span className="block w-20 h-[2px] bg-red-600 mx-auto mt-2" />
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-12 border-b border-gray-300 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium relative ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-black" />
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
              className="rounded-md"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 leading-relaxed text-[15px]">
            {current.content}
          </div>
        </div>
      </div>
    </section>
  );
}
