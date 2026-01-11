// import { SpotlightPreview } from "@/components/animted-landing";
import ScrollZoomSection from "@/components/3d-image-component";
import SpotlightPreview from "@/components/animted-landing";
import AnimationCard from "@/components/landingPage/animation-card";
import NexusSciHero from "@/components/landingPage/gridComponent";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import { MarqueeDemoVertical } from "@/components/marquee-slider";
import ScrollingFeatures from "@/components/scrolling-features";
import ScrollMarquee from "@/components/scrollmarquee";
import ExplosionImage from "@/components/ui/explosion";
import HoverImage from "@/components/ui/hover-image";
import Spline from "@splinetool/react-spline";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      {/* <SpotlightPreview />
      <ScrollMarquee />
      <MarqueeDemoVertical />
      <DomainSearchSection />
      <NexusSciHero />
      <ScrollZoomSection />
      <HoverImage />
      <ExplosionImage />
     
      {/* <CardMovingSection /> */}
      {/* <DomainSearchSection /> */}
      <ScrollingFeatures />
      <AnimationCard />
      {/* <ProjectFilterSection />
      <ServiceCard /> */}
    </div>
  );
};

export default page;
