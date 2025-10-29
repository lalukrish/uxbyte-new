"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { MarqueeTest } from "./marquee-testimonial";

export function ReviewCard({ img, name, body, rating }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border  p-6 mx-auto my-4 text-left">
      <div className="flex items-center gap-4 mb-3">
        <Image
          width={12}
          height={12}
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            name
          )}&length=1`}
          alt="test"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold text-base text-black">{name}</h4>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${
                    idx < rating
                      ? "fill-yellow-400"
                      : "fill-none stroke-yellow-400"
                  }`}
                />
              ))}
            </div>
            {/* <span className="text-xs text-gray-400 ml-2">a week ago</span> */}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default function Testimonials({ reviews, title, subTitle, className }) {
  const col1 = reviews.slice(0, 2);
  const col2 = reviews.slice(2, 4);
  const col3 = reviews.slice(4, 6);

  return (
    <section className={`${className} py-4   mb-1`}>
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-1 ">
          <span className="pl-3">
            {/* <ITitle
              text={subTitle}
              className="!-mt-5 !justify-center   !text-center "
            /> */}
          </span>
        </h2>

        <div className="hidden md:flex justify-center  relative px-2 md:px-1 overflow-hidden ">
          <MarqueeTest pauseOnHover duration={15} className="flex gap-4">
            {[...col1, ...col2, ...col3].map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </MarqueeTest>

          {/* <MarqueeTest
            reverse
            pauseOnHover
            duration={15}
            className="flex gap-4 mb-10"
          >
            {[...col1, ...col2, ...col3].map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </MarqueeTest> */}

          {/* Top/Bottom gradient fade */}
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" /> */}
        </div>

        {/* Horizontal on mobile */}
        <section className="relative py-12">
          {/* ===== MarqueeTest Section ===== */}
          <div className="md:hidden relative overflow-hidden min-h-[500px] px-2">
            {/* first MarqueeTest row */}
            <MarqueeTest pauseOnHover duration={15} className="flex gap-4">
              {[...col1, ...col2, ...col3].map((review, idx) => (
                <ReviewCard key={idx} {...review} />
              ))}
            </MarqueeTest>

            <MarqueeTest
              reverse
              pauseOnHover
              duration={15}
              className="flex gap-4 mb-10"
            >
              {[...col1, ...col2, ...col3].map((review, idx) => (
                <ReviewCard key={idx} {...review} />
              ))}
            </MarqueeTest>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
          </div>

          <div className="flex justify-center items-center mt-2 xl:mt-12">
            {/* <IButton variant="outlined" href="/testimonials">
              View All
            </IButton> */}
          </div>
        </section>
      </div>
    </section>
  );
}
