"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

const HoverImageGrid = () => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    const clientItems = document.querySelectorAll(".client-item");

    clientItems.forEach((item, index) => {
      let activeWrapper = null;
      let activeImg = null;

      item.addEventListener("mouseenter", () => {
        // Find the image container inside this item
        const imgContainer = item.querySelector(".img-container");

        // Create image elements
        const clientImgWrapper = document.createElement("div");
        clientImgWrapper.className = "absolute inset-0 overflow-hidden";
        clientImgWrapper.style.clipPath =
          "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";

        const clientImg = document.createElement("img");
        clientImg.src = `https://picsum.photos/800/600?random=${index + 1}`;
        clientImg.className = "absolute inset-0 w-full h-full object-cover";
        gsap.set(clientImg, { scale: 1.25, opacity: 0 });

        clientImgWrapper.appendChild(clientImg);
        imgContainer.appendChild(clientImgWrapper);

        activeWrapper = clientImgWrapper;
        activeImg = clientImg;

        // Animate in
        gsap.to(clientImgWrapper, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.5,
          ease: "hop",
        });

        gsap.to(clientImg, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(clientImg, {
          scale: 1,
          duration: 0.5,
          ease: "hop",
        });
      });

      item.addEventListener("mouseleave", () => {
        if (activeImg && activeWrapper) {
          const imgToRemove = activeImg;
          const wrapperToRemove = activeWrapper;

          activeImg = null;
          activeWrapper = null;

          gsap.to(imgToRemove, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => {
              if (wrapperToRemove.parentNode) {
                wrapperToRemove.parentNode.removeChild(wrapperToRemove);
              }
            },
          });
        }
      });
    });
  }, []);

  const items = [
    "Native Instrument",
    "Aura",
    "Test",
    "Cricket",
    "Ronaldo",
    "Hacking",
    "Android",
    "Rainbow",
    "Native Instrument",
    "Aura",
    "Test",
    "Cricket",
    "Ronaldo",
    "Hacking",
    "Android",
    "Rainbow",
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {items.map((name, index) => (
          <div
            key={index}
            className="client-item relative aspect-video border border-dotted border-gray-600 cursor-pointer bg-black overflow-hidden"
          >
            {/* Image Container */}
            <div className="img-container absolute inset-0" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <h2 className="text-white text-2xl md:text-3xl font-medium text-center px-4 mix-blend-difference">
                {name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImageGrid;
