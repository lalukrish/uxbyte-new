"use client";
import FaqSection from "@/components/landingPage/faqSection";
import InspirationSection from "@/components/landingPage/blogSection";
import HeroNew from "@/components/landingPage/hero-new";
import ExplosionImage from "@/components/ui/explosion";
import ScrollingBox from "@/components/landingPage/scrolling-box";
import AboutSection from "@/components/landingPage/about-section";
import ServiceHoverCard from "@/components/landingPage/mason-grid";
import SaaSSection from "@/components/landingPage/scrolling-features";
import { BLOGS } from "@/data/blog-data";
import TopHeader from "@/components/topHeader";
import DamnGoodHero from "@/components/landingPage/hero-second";
import AnimatedHeader from "@/components/landingPage/animated-header";
import HeroVideo from "@/components/video-hero";
import MovingCards from "@/components/scroll-image-smaller";
import ParticleSphereHero from "@/components/particle-section";

const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);

export default function Home() {
  return (
    <>
      {/* <AnimatedHeader /> */}
      {/* <div className="relative z-10">
            <MobileCenterCarousel />
          </div> */}
      <HeroVideo />
      {/* <HeroNew /> */}
      <TopHeader />
      {/* <DamnGoodHero /> */}
      <AboutSection />
      <ScrollingBox />
      <SaaSSection />
      <ServiceHoverCard />
      <FaqSection />
      <ExplosionImage />
      <InspirationSection blogs={POPULAR_BLOGS} />
      {/* <MovingCards /> */}
    </>
  );
}
