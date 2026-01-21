import { AboutUs } from "@/components/landingPage/about";
import Counter from "@/components/about/counter";
import ExpertiseTabs from "@/components/about/tab-section";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";
import CreativeHero from "@/components/landingPage/hero-section";
import React from "react";
import MonitorHero from "@/components/ui/deskotp-section";
import AnimationCard from "@/components/landingPage/animation-card";
import EnergyScrollSections from "@/components/ui/scrolling-section";

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="About Us"
        path={["Home", "Services"]}
        shape="organicBlob"
      />
      <AnimationCard />
      <Counter />
      <EnergyScrollSections />

      <CreativeHero />

      {/* <ExpertiseTabs /> */}
      <MonitorHero />

      {/* <AboutUs /> */}
    </div>
  );
};

export default page;
