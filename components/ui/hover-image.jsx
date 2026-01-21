"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ShoppingCart, CreditCard, HeartPulse, Cloud } from "lucide-react";

// const ICON_MAP = {
//   ecommerce: ShoppingCart,
//   fintech: CreditCard,
//   healthcare: HeartPulse,
//   saas: Cloud,
// };
const HoverImageGrid = ({ items = [], bgColor }) => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
    );

    const clientItems = document.querySelectorAll(".client-item");

    clientItems.forEach((item, index) => {
      let activeWrapper = null;
      let activeImg = null;

      item.addEventListener("mouseenter", () => {
        const imgContainer = item.querySelector(".img-container");
        const imageUrl = items[index]?.image;

        if (!imageUrl) return;

        const clientImgWrapper = document.createElement("div");
        clientImgWrapper.className = "absolute inset-0 overflow-hidden";
        clientImgWrapper.style.clipPath =
          "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";

        const clientImg = document.createElement("img");
        clientImg.src = imageUrl;
        clientImg.className = "absolute inset-0 w-full h-full object-cover";

        gsap.set(clientImg, { scale: 1.25, opacity: 0 });

        clientImgWrapper.appendChild(clientImg);
        imgContainer.appendChild(clientImgWrapper);

        activeWrapper = clientImgWrapper;
        activeImg = clientImg;

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
        // 🔹 CHANGE TEXT COLOR TO WHITE ON HOVER
        const textEl = item.querySelector(".industry-text");
        if (textEl) {
          textEl.classList.remove("text-black");
          textEl.classList.add("text-white");
        }
      });

      item.addEventListener("mouseleave", () => {
        const textEl = item.querySelector(".industry-text");
        if (textEl) {
          textEl.classList.remove("text-white");
          textEl.classList.add("text-black");
        }

        if (activeImg && activeWrapper) {
          const imgToRemove = activeImg;
          const wrapperToRemove = activeWrapper;

          activeImg = null;
          activeWrapper = null;

          gsap.killTweensOf([imgToRemove, wrapperToRemove]);

          gsap.to(imgToRemove, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });

          gsap.to(wrapperToRemove, {
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              if (wrapperToRemove.parentNode) {
                wrapperToRemove.parentNode.removeChild(wrapperToRemove);
              }
            },
          });
        }
      });
    });
  }, [items]);

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className={`${`min-h-screen bg-${bgColor} px-18`}`}>
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px ">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="client-item relative aspect-square outline outline-1 outline-line outline-gray-300 cursor-pointer"
            style={{ backgroundColor: item.backgroundColor || "#000" }}
          >
            {/* Image Container */}
            <div className="img-container absolute inset-0"></div>
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-center">
                {/* {item.iconName && ICON_MAP[item.iconName] && (
                  <div className="mb-4 flex justify-center text-black">
                    {React.createElement(ICON_MAP[item.iconName], {
                      className: "w-14 h-14",
                      strokeWidth: 1.5,
                    })}
                  </div>
                )} */}

                <div className="industry-text transition-colors  text-black xl:text-4xl 2xl:text-[40px] font-light px-4">
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImageGrid;
