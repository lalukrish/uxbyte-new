import { AboutUs } from "@/app/about";
import Counter from "@/components/about/counter";
import ExpertiseTabs from "@/components/about/tab-section";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";
import CreativeHero from "@/components/landingPage/hero-section";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="About Us"
        path={["Home", "Services"]}
        shape="organicBlob"
      />

      <CreativeHero />
      <Counter />

      <ExpertiseTabs />
      <AboutUs />
    </div>
  );
};

export default page;
