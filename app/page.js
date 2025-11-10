"use client";

import { Globe, ChevronDown, CircleArrowOutUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Mail, Linkedin, Instagram, Facebook, Phone } from "lucide-react";
import { AboutUs } from "./about";
import DomainSearchSection from "@/components/landingPage/testimonial-section";
import { ReviewCard } from "@/components/ui/testimonialcard";
import StrategiGrid from "@/components/landingPage/startegiMarket";
import FaqSection from "@/components/landingPage/faqSection";
import InspirationSection from "@/components/landingPage/blogSection";
import Footer from "@/components/footer";
import CreativeHero from "@/components/landingPage/hero-section";
import BusinessFeatureSection from "@/components/landingPage/featureSection";

gsap.registerPlugin(ScrollTrigger);

const Button = ({ children, className }) => (
  <button className={className}>{children}</button>
);

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Try to get hero section height, fallback to viewport height
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight ||
        window.innerHeight;
      setShowContact(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once in case page already scrolled
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const leftCardRef = useRef(null);
  const leftCard2Ref = useRef(null);
  const bubblesRef = useRef(null);
  const containerRef = useRef(null);
  const rightCard1Ref = useRef(null);
  const rightCard2Ref = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const bubble3Ref = useRef(null);
  const bubble4Ref = useRef(null);

  useEffect(() => {
    const leftCard = leftCardRef.current;
    const leftCard2 = leftCard2Ref.current;
    const container = containerRef.current;
    const rightCard1 = rightCard1Ref.current;
    const rightCard2 = rightCard2Ref.current;
    const bubble1 = bubble1Ref.current;
    const bubble2 = bubble2Ref.current;
    const bubble3 = bubble3Ref.current;
    const bubble4 = bubble4Ref.current;

    if (
      !leftCard ||
      !leftCard2 ||
      !container ||
      !rightCard1 ||
      !rightCard2 ||
      !bubble1 ||
      !bubble2 ||
      !bubble3 ||
      !bubble4
    )
      return;

    // Animate the first left card (blue bordered card)
    gsap.to(leftCard, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      x: () => window.innerWidth / 7.4,
      y: () => window.innerHeight * 1.67,
      ease: "power2.inOut",
    });

    // Animate the second left card (product card)
    gsap.to(leftCard2, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      x: () => window.innerWidth / 6.3,
      y: () => window.innerHeight * 0.88,
      ease: "power2.inOut",
    });

    // Animate each bubble individually
    gsap.to(bubble1, {
      scrollTrigger: {
        trigger: container,
        start: "30% top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.1,
      x: 2050,
      ease: "power2.inOut",
    });

    gsap.to(bubble2, {
      scrollTrigger: {
        trigger: container,
        start: "30% top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.9,
      x: 2050,
      ease: "power2.inOut",
    });

    gsap.to(bubble3, {
      scrollTrigger: {
        trigger: container,
        start: "30% top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.8,
      x: 2050,
      ease: "power2.inOut",
    });

    gsap.to(bubble4, {
      scrollTrigger: {
        trigger: container,
        start: "30% top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.35,
      x: 2050,
      ease: "power2.inOut",
    });

    // Animate first right card (AI Text Founder)
    gsap.to(rightCard1, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.336,
      x: -200,
      ease: "power2.inOut",
    });

    // Animate second right card (Portrait Card)
    gsap.to(rightCard2, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      y: () => window.innerHeight * 1.03,
      x: -140,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const words = [{ text: "Kerala" }];

  return (
    <>
      <CreativeHero />
      <div
        ref={containerRef}
        className="relative w-full min-h-[200vh] bg-gradient-to-br from-cyan-100 via-white to-cyan-100 overflow-hidden"
      >
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="relative h-screen flex items-center justify-center px-8">
            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10">
              <h2 className="text-3xl font-mono mt-[0%] text-black mb-2 leading-tight">
                dummy dummy dummy dummy
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-[8%] text-black mb-6 leading-tight">
                Lorem Ipsum is simply dummy text{" "}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. text ever
                since the 1500s, when an unknown printer took a galley
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-5 px-6 py-3 text-lg mb-6">
                Get Started
              </Button>

              {/* Bubbles - each with individual ref */}
              <div className="flex gap-3 items-center relative">
                <div
                  ref={bubble1Ref}
                  className="w-5 h-5 rounded-full bg-orange-400"
                ></div>
                <div
                  ref={bubble2Ref}
                  className="w-5 h-5 rounded-full bg-blue-500"
                ></div>
                <div
                  ref={bubble3Ref}
                  className="w-5 h-5 rounded-full bg-purple-200"
                ></div>
                <div
                  ref={bubble4Ref}
                  className="w-5 h-5 rounded-full bg-green-700"
                ></div>
              </div>
            </div>

            {/* Left Card - vertically centered */}
            <div className="absolute left-14 top-[45%] -translate-y-1/2 z-50">
              <div
                ref={leftCardRef}
                className="bg-white rounded-lg p-4 border-2 border-blue-400 w-44 mx-auto mt-10 ml-15"
              >
                <div className="text-center text-black text-xs sm:text-sm md:text-base font-semibold leading-tight">
                  {/* First Line */}
                  <div className="flex justify-center items-center">
                    <span className="text-xs sm:text-sm md:text-base font-semibold">
                      Top Ranked SEO
                    </span>
                  </div>

                  {/* Second Line */}
                  <div className="flex justify-center items-center">
                    <span className="text-xs sm:text-sm md:text-base font-semibold ">
                      expert{" "}
                    </span>

                    {/* Animated Text */}
                    <TypewriterEffectSmooth
                      words={[
                        { text: "in Kerala", className: "text-blue-500" },
                      ]}
                      className="text-xs sm:text-sm md:text-base font-semibold ml-1"
                    />
                  </div>
                </div>
              </div>

              <div ref={leftCard2Ref}>
                <div className="bg-white rounded-2xl p-2 w-52 hover:shadow-xl transition-shadow mb-6  mt-[70%]">
                  <div className="rounded-sm h-40 flex items-center justify-center mb-3 relative overflow-hidden bg-gray-200">
                    <Image
                      src="/hero_image1.png"
                      alt="Nordier Lamp"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-full px-3 py-1 inline-block text-xs font-semibold text-gray-800">
                    Nordier Lamp $84.00
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cards - vertically centered */}
            <div className="right-1 z-50">
              {/* Image Editor Card */}
              <div
                ref={rightCard1Ref}
                className="absolute top-[10%] right-[6%] bg-white rounded-2xl p-4 w-56 border-2 border-blue-300"
              >
                <div className="bg-blue-100 rounded-lg h-32 flex items-center justify-center mb-3 relative">
                  <Image
                    src="https://thumbs.dreamstime.com/b/green-seo-optimization-icon-isolated-blue-background-minimalism-concept-d-render-illustration-green-seo-optimization-icon-388192630.jpg"
                    alt="Nordier Lamp"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    AI
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                    ✨
                  </div>
                  AI Text Founder
                </div>
              </div>

              {/* Portrait Card */}
              <div
                ref={rightCard2Ref}
                className="absolute top-[66%] right-[9%] bg-white rounded-2xl p-3  w-56 overflow-hidden"
              >
                <div className="rounded-sm h-36 flex items-center justify-center mb-3 relative overflow-hidden bg-gray-200">
                  <Image
                    src="https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=40%2C161%2C4500%2C2250&q=45&auto=format&w=1356&h=668&fit=crop"
                    alt="Nordier Lamp"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gray Section with Headings */}
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-8">
          <div
            className="flex flex-col rounded-xl 
      bg-gradient-to-r from-blue-50 via-blue-100 to-green-100 
      w-full max-w-6xl h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]
      mt-22 px-6 sm:px-[10%] py-[1%] mx-auto"
          >
            {/* 🔹 Top Row: Heading + Social Icons */}
            <div className="w-full flex justify-between items-center">
              {/* Left Side - Heading */}
              <div className="text-blue-900 font-semibold text-sm sm:text-base pl-0 sm:pl-48">
                <h2 className="md:text-3xl font-bold">dummy lorepsum dummy</h2>
              </div>

              {/* Right Side - Social Icons */}
              <div className="flex space-x-4 text-blue-900">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 🔹 Image + Paragraph Section */}
            <div className="flex mt-6 flex-col items-center sm:items-start text-center sm:text-left relative mx-auto">
              {/* Image Box */}
              <div className="relative rounded-sm h-80 w-[250px] md:w-[500px] mb-6 overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/1444490810/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=9eRJr0051v497YAvCffJLxFUcBeHC5s5Pe3klt2bUQQ="
                  alt="Nordier Lamp"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Paragraph Below Image */}
              <p className="text-gray-700 text-sm sm:text-[17px] leading-relaxed md:w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at sapien vel nulla bibendum consequat. Vivamus
                blandit, nisl sit amet suscipit cursus, turpis nisi facilisis
                nisl, non malesuada velit magna ut velit.
              </p>
            </div>
          </div>

          {/* 🔹 Floating Social Bar (Fixed Right Side) */}
          <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-end space-y-3 z-50">
            <div
              className={`flex flex-col items-end space-y-3 transition-all duration-700 ${
                visible && showContact
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <a className="group relative flex items-center bg-blue-600 text-white rounded-full overflow-hidden w-10 h-10 transition-all duration-300 hover:w-[130px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="absolute right-0 pr-3 text-sm font-semibold opacity-0 translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  LinkedIn
                </span>
              </a>

              <a className="group relative flex items-center bg-blue-800 text-white rounded-full overflow-hidden w-10 h-10 transition-all duration-300 hover:w-[130px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="absolute right-0 pr-3 text-sm font-semibold opacity-0 translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Facebook
                </span>
              </a>

              <a className="group relative flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full overflow-hidden w-10 h-10 transition-all duration-300 hover:w-[130px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="absolute right-0 pr-3 text-sm font-semibold opacity-0 translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Instagram
                </span>
              </a>

              <a className="group relative flex items-center bg-green-600 text-white rounded-full overflow-hidden w-10 h-10 transition-all duration-300 hover:w-[130px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="absolute right-0 pr-3 text-sm font-semibold opacity-0 translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Call Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <DomainSearchSection />
      <StrategiGrid />
      <FaqSection />
      <InspirationSection />
    </>
  );
}
