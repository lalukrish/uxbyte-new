import NexusSciHero from "@/components/landingPage/gridComponent";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import { MarqueeDemoVertical } from "@/components/marquee-slider";
import Spline from "@splinetool/react-spline";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <MarqueeDemoVertical />
      {/* <DomainSearchSection /> */}
      <NexusSciHero />
      <div className="w-full h-screen">
        <spline-viewer
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/G9Sztf4sUw2jMPhY/scene.splinecode"
        ></spline-viewer>
      </div>{" "}
    </div>
  );
};

export default page;
