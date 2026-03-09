"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, MoveRight } from "lucide-react";
import Hls from "hls.js";
import Image from "next/image";
import { gsap } from "gsap";
import Title from "@/commonComponents/title";
import Paragraph from "@/commonComponents/paragraph";
import { Button } from "@/commonComponents/Button";
// import Title from "../ui/main-title";
// import Paragraph from "../ui/paragraph";
// import { Button } from "../ui/button";

const scrollCascadeKeyframes = `
  @keyframes scrollCascade {
    0%   { opacity: 0; transform: translateY(-6px); }
    40%  { opacity: 1; transform: translateY(0px);  }
    80%  { opacity: 0; transform: translateY(8px);  }
    100% { opacity: 0; transform: translateY(8px);  }
  }
`;

const Hero = ({
  videoUrl = "https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8?ref=developerinsider.co",
  posterImage,
  title = "this for test purpose section",
  description = "i am coming to do tis all ",
}) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const titleRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src =
        "https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8?ref=developerinsider.co";
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hlsRef.current = hls;

      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoUrl]);

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      const words = titleRef.current.querySelectorAll(".word");

      gsap.set(words, { opacity: 0, y: 60 });

      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen isolate overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: scrollCascadeKeyframes }} />

      {posterImage && (
        <div
          className={`absolute inset-0 z-20 transition-opacity duration-700 ${
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src={"/about-2.webp"}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={() => {
          if (!videoReady) setVideoReady(true);
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:justify-end text-white px-4 xl:px-28 md:pl-8 lg:pl-20 2xl:pl-44 pb-8 md:pb-16 lg:pb-20 2xl:pb-36 z-30">
        <div ref={titleRef}>
          <Title className="text-white font-light text-center md:text-left w-full md:w-2/5 xl:w-[55%] 2xl:w-[55%] text-4xl sm:text-5xl lg:text-6xl xl:text-[55px] 2xl:text-[80px] 2xl:leading-[5.8rem] leading-tight md:leading-[1.1]">
            {title.split(" ").map((word, index) => (
              <span key={index} className="word inline-block mr-3">
                {word}
              </span>
            ))}
          </Title>
        </div>

        <Paragraph className="text-white text-center md:text-left xl:w-[600px] 2xl:w-[700px]">
          {description}
        </Paragraph>

        <Button
          label="Contact Us"
          variant="outlined"
          className="border-white text-white mt-12 hover:bg-transparent"
          iconRight={<MoveRight />}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <ChevronDown
          strokeWidth={1.2}
          className="w-7 h-7 text-white"
          style={{
            animation: "scrollCascade 2.2s ease-in-out infinite",
            animationDelay: "0s",
            opacity: 0,
          }}
        />
        <ChevronDown
          strokeWidth={1.2}
          className="w-7 h-7 text-white -mt-2"
          style={{
            animation: "scrollCascade 2.2s ease-in-out infinite",
            animationDelay: "0.25s",
            opacity: 0,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
