"use client";
import { AboutUs } from "./about";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import StrategiGrid from "@/components/landingPage/startegiMarket";
import FaqSection from "@/components/landingPage/faqSection";
import InspirationSection from "@/components/landingPage/blogSection";
import CreativeHero from "@/components/landingPage/hero-section";
import HeroNew from "@/components/landingPage/hero-new";
import CardMovingSection from "@/components/landingPage/card-moving-section";
import ExplosionImage from "@/components/ui/explosion";
import AnimationCard from "@/components/landingPage/animation-card";
import ScrollingBox from "@/components/landingPage/scrolling-box";
import AboutSection from "@/components/landingPage/about-section";
import HoverCardDemo from "@/components/landingPage/hovering-section";
import ScrollFaqGsap from "@/components/landingPage/hovering-section";
import ArticleCardsGrid from "@/components/landingPage/hovering-section";
import ServiceHoverCard from "@/components/landingPage/mason-grid";
import SaaSSection from "@/components/landingPage/scrolling-features";

export default function Home() {
  return (
    <>
      <HeroNew />
      <AboutSection />
      {/* <CreativeHero /> */}
      <ScrollingBox />
      <SaaSSection />

      {/* <AboutUs /> */}
      {/* <StrategiGrid /> */}
      {/* <HoverCardDemo /> */}
      <ServiceHoverCard />
      {/* <AnimationCard /> */}
      {/* <SaaSSection /> */}

      <FaqSection />
      <ExplosionImage />
      <InspirationSection />
      {/* <ArticleCardsGrid /> */}
    </>
  );
}
