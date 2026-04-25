"use client";
import Title from "@/commonComponents/title";
import React from "react";
import GlossyText from "../canvas-text";
import { EncryptedText } from "../encrypted-text";

const ShieldIcon = () => (
  <svg viewBox="0 0 100 100" fill="none">
    {" "}
    <path
      d="M50 8L14 22V46C14 65 29.5 82.5 50 92C70.5 82.5 86 65 86 46V22L50 8Z"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M35 50L45 60L66 40"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
  </svg>
);

const CertBadgeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none">
    {" "}
    <circle cx="50" cy="42" r="22" stroke="currentColor" strokeWidth="5" />{" "}
    <path
      d="M36 42L46 52L64 34"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M36 66L28 88L50 76L72 88L64 66"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinejoin="round"
    />{" "}
  </svg>
);

const HipaaIcon = () => (
  <svg viewBox="0 0 100 100" fill="none">
    {" "}
    <rect
      x="18"
      y="12"
      width="64"
      height="76"
      rx="6"
      stroke="currentColor"
      strokeWidth="5"
    />{" "}
    <path
      d="M34 38H66"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M34 52H66"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M34 66H52"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />{" "}
    <path
      d="M50 12V28M42 20H58"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
    />{" "}
  </svg>
);

const cards = [
  {
    Icon: ShieldIcon,
    title: "SOC 2 Type II Certified",
    desc: "Our systems and internal controls are independently audited to ensure security, availability, and confidentiality.",
  },
  {
    Icon: CertBadgeIcon,
    title: "ISO/IEC 27001:2022 Certified",
    desc: "We maintain an information security management system to safeguard sensitive healthcare data.",
  },
  {
    Icon: HipaaIcon,
    title: "HIPAA Compliant",
    desc: "Zapare follows strict safeguards to ensure the secure handling and protection of healthcare information.",
  },
];

function Card({ Icon, title, desc }) {
  return (
    <div className="relative text-center p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
      {" "}
      <div className="w-12 h-12 mx-auto mb-4 text-purple-700">
        {" "}
        <Icon />{" "}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="white-section max-w-6xl mx-auto px-6 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
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
          Purpose-Built
          <br />
          <GlossyText
            text="Healthcare Solutions
"
            // backgroundClassName="bg-black dark:bg-blue-600"
            // colors={[
            //   "rgba(168, 85, 247, 1)", // purple
            //   "rgba(239, 68, 68, 0.9)", // red
            //   "rgba(59, 130, 246, 0.8)", // blue
            //   "rgba(34, 197, 94, 0.7)", // green
            //   "rgba(168, 85, 247, 0.6)",
            //   "rgba(239, 68, 68, 0.5)",
            //   "rgba(59, 130, 246, 0.4)",
            //   "rgba(34, 197, 94, 0.3)",
            //   "rgba(168, 85, 247, 0.2)",
            //   "rgba(239, 68, 68, 0.1)",
            // ]}
            // lineGap={4}
            // animationDuration={20}
          />
        </Title>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We follow globally recognized security standards and compliance
          frameworks to ensure the protection, integrity, and privacy of
          healthcare data.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
