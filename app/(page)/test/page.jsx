// import { SpotlightPreview } from "@/components/animted-landing";
import ScrollZoomSection from "@/components/3d-image-component";
import SpotlightPreview from "@/components/animted-landing";
import AnimationCard from "@/components/landingPage/animation-card";
import NexusSciHero from "@/components/landingPage/gridComponent";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import { WobbleCardDemo } from "@/components/landingPage/wobble-card";
import { MarqueeDemoVertical } from "@/components/marquee-slider";
import ParticleSphereHero from "@/components/particle-section";
import ScrollingFeatures from "@/components/scrolling-features";
import ScrollMarquee from "@/components/scrollmarquee";
import TestComponent from "@/components/test-component";
import UXBScene from "@/components/three-component";
import ExplosionImage from "@/components/ui/explosion";
import HoverImage from "@/components/ui/hover-image";
import ServicesSection from "@/components/who-we-are/round-scroll";
import Spline from "@splinetool/react-spline";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <TestComponent />
      <ParticleSphereHero /> */}

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
      {/* <ServicesSection /> */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#080808",
          overflow: "hidden",
        }}
      >
        <UXBScene />
      </div>
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
