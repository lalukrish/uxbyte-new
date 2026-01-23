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

const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);

export default function Home() {
  return (
    <>
      {/* <AnimatedHeader /> */}
      <TopHeader />
      <DamnGoodHero />
      <HeroNew />
      <AboutSection />
      <ScrollingBox />
      <SaaSSection />
      <ServiceHoverCard />
      <FaqSection />
      <ExplosionImage />
      <InspirationSection blogs={POPULAR_BLOGS} />
    </>
  );
}
