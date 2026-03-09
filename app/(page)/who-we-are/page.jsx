import HTMLImageComponent from "@/commonComponents/html-component";
import StatsSection from "@/components/counter";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";
import CreativeHero from "@/components/landingPage/hero-section";
import { TextReveal } from "@/components/ui/text-reveal";
import React from "react";

const dummyContent = `
<p class="mb-4">
    UXBYTE Studio is a product design and development agency dedicated to building impactful digital solutions. We partner with startups, growing businesses, and enterprises to transform ideas into scalable, high-performing products.
  </p>

  <p class="mb-4">
    Our expertise spans across:
  </p>

  <ul class="list-disc pl-5 space-y-2 mb-4">
    <li>Custom Web & Mobile Application Development</li>
    <li>UI/UX Research and Experience Design</li>
    <li>Scalable Cloud & Backend Architecture</li>
    <li>Product Strategy & Technical Consulting</li>
  </ul>

  <p>
    At UXBYTE Studio, we combine creativity with engineering precision to deliver digital products that are secure, scalable, and built for long-term growth.
  </p>
  `;

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <CreativeHero />
      <TextReveal
        children="  At UXBYTE Studio, we transform complex ideas into meaningful digital experiences.  
  Our team blends strategy, design, and engineering to craft products that truly perform.  
  Every solution we build is driven by user insight and powered by modern technology.  
  We don’t just create software — we create impact that scales."
      />
      <StatsSection />
      <HTMLImageComponent
        title="About UXBYTE Studio"
        content={dummyContent}
        image="/image/sample.jpg"
        imageAlt="UXBYTE Studio Team"
        imagePosition="right"
        mobileImagePosition="top"
      />
    </div>
  );
};

export default page;
