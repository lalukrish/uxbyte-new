// import { SpotlightPreview } from "@/components/animted-landing";
import ScrollZoomSection from "@/components/3d-image-component";
import SpotlightPreview from "@/components/animted-landing";
import AnimationCard from "@/components/landingPage/animation-card";
import NexusSciHero from "@/components/landingPage/gridComponent";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import { WobbleCardDemo } from "@/components/landingPage/wobble-card";
import { MarqueeDemoVertical } from "@/components/marquee-slider";
import ScrollingFeatures from "@/components/scrolling-features";
import ScrollMarquee from "@/components/scrollmarquee";
import ExplosionImage from "@/components/ui/explosion";
import HoverImage from "@/components/ui/hover-image";
import ServicesSection from "@/components/who-we-are/round-scroll";
import Spline from "@splinetool/react-spline";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      {/* <WobbleCardDemo /> */}
      {/* <SpotlightPreview />
      <ScrollMarquee />
      <MarqueeDemoVertical />
      <DomainSearchSection />
      <NexusSciHero />
      <ScrollZoomSection />
      <ExplosionImage />
      {/* <AnimationCard /> */}
      {/* <SaaSSection /> */}
      {/* <CardMovingSection /> */}
      {/* <DomainSearchSection /> */}
      <ServicesSection />
      {/* <ScrollingFeatures /> */}
      {/* <ProjectFilterSection />
      <ServiceCard /> */}
      {/* <AboutUs /> */}
      {/* <StrategiGrid /> */}
      {/* <HoverCardDemo /> */}
      {/* <ArticleCardsGrid /> */}
      {/* <CreativeHero /> */}
      {/* <BikeHero/> */}
    </div>
  );
};

export default page;
