// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import CustomEase from "gsap/CustomEase";

// const HoverImageGrid = () => {
//   useEffect(() => {
//     gsap.registerPlugin(CustomEase);

//     CustomEase.create(
//       "hop",
//       "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
//     );

//     const clientItems = document.querySelectorAll(".client-item");

//     clientItems.forEach((item, index) => {
//       let activeWrapper = null;
//       let activeImg = null;

//       item.addEventListener("mouseenter", () => {
//         // Find the image container inside this item
//         const imgContainer = item.querySelector(".img-container");

//         // Create image elements
//         const clientImgWrapper = document.createElement("div");
//         clientImgWrapper.className = "absolute inset-0 overflow-hidden";
//         clientImgWrapper.style.clipPath =
//           "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";

//         const clientImg = document.createElement("img");
//         clientImg.src = `https://picsum.photos/800/600?random=${index + 1}`;
//         clientImg.className = "absolute inset-0 w-full h-full object-cover";
//         gsap.set(clientImg, { scale: 1.25, opacity: 0 });

//         clientImgWrapper.appendChild(clientImg);
//         imgContainer.appendChild(clientImgWrapper);

//         activeWrapper = clientImgWrapper;
//         activeImg = clientImg;

//         // Animate in
//         gsap.to(clientImgWrapper, {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//           duration: 0.5,
//           ease: "hop",
//         });

//         gsap.to(clientImg, {
//           opacity: 1,
//           duration: 0.25,
//           ease: "power2.out",
//         });

//         gsap.to(clientImg, {
//           scale: 1,
//           duration: 0.5,
//           ease: "hop",
//         });
//       });

//       item.addEventListener("mouseleave", () => {
//         if (activeImg && activeWrapper) {
//           const imgToRemove = activeImg;
//           const wrapperToRemove = activeWrapper;

//           activeImg = null;
//           activeWrapper = null;

//           gsap.to(imgToRemove, {
//             opacity: 0,
//             duration: 0.5,
//             ease: "power1.out",
//             onComplete: () => {
//               if (wrapperToRemove.parentNode) {
//                 wrapperToRemove.parentNode.removeChild(wrapperToRemove);
//               }
//             },
//           });
//         }
//       });
//     });
//   }, []);

//   const items = ["Native Instrument", "Aura", "Test", "Cricket", "Ronaldo"];

//   return (
//     <div className="relative min-h-screen bg-black">
//       {/* Grid Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
//         {items.map((name, index) => (
//           <div
//             key={index}
//             className="client-item relative aspect-video border border-dotted border-gray-600 cursor-pointer bg-black overflow-hidden"
//           >
//             {/* Image Container */}
//             <div className="img-container absolute inset-0" />

//             {/* Text Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
//               <h2 className="text-white text-2xl md:text-3xl font-medium text-center px-4 mix-blend-difference">
//                 {name}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HoverImageGrid;
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

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
      });

      item.addEventListener("mouseleave", () => {
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

  const defaultItems = [
    {
      text: "Native Instrument",
      image: "https://picsum.photos/800/600?random=1",
      backgroundColor: "#000",
    },
    {
      text: "Aura",
      image: "https://picsum.photos/800/600?random=2",
      backgroundColor: "#000",
    },
    {
      text: "Test",
      image: "https://picsum.photos/800/600?random=3",
      backgroundColor: "#000",
    },
    {
      text: "Cricket",
      image: "https://picsum.photos/800/600?random=4",
      backgroundColor: "#000",
    },
    {
      text: "Ronaldo",
      image: "https://picsum.photos/800/600?random=5",
      backgroundColor: "#000",
    },
    {
      text: "Hacking",
      image: "https://picsum.photos/800/600?random=6",
      backgroundColor: "#000",
    },
    {
      text: "Android",
      image: "https://picsum.photos/800/600?random=7",
      backgroundColor: "#000",
    },
    {
      text: "Rainbow",
      image: "https://picsum.photos/800/600?random=8",
      backgroundColor: "#000",
    },
    {
      text: "Native Instrument",
      image: "https://picsum.photos/800/600?random=9",
      backgroundColor: "#000",
    },
    {
      text: "Aura",
      image: "https://picsum.photos/800/600?random=10",
      backgroundColor: "#000",
    },
    {
      text: "Test",
      image: "https://picsum.photos/800/600?random=11",
      backgroundColor: "#000",
    },
    {
      text: "Cricket",
      image: "https://picsum.photos/800/600?random=12",
      backgroundColor: "#000",
    },
    {
      text: "Ronaldo",
      image: "https://picsum.photos/800/600?random=13",
      backgroundColor: "#000",
    },
    {
      text: "Hacking",
      image: "https://picsum.photos/800/600?random=14",
      backgroundColor: "#000",
    },
    {
      text: "Android",
      image: "https://picsum.photos/800/600?random=15",
      backgroundColor: "#000",
    },
    {
      text: "Rainbow",
      image: "https://picsum.photos/800/600?random=16",
      backgroundColor: "#000",
    },
    {
      text: "Aura",
      image: "https://picsum.photos/800/600?random=10",
      backgroundColor: "#000",
    },
    {
      text: "Test",
      image: "https://picsum.photos/800/600?random=11",
      backgroundColor: "#000",
    },
    {
      text: "Cricket",
      image: "https://picsum.photos/800/600?random=12",
      backgroundColor: "#000",
    },
    {
      text: "Ronaldo",
      image: "https://picsum.photos/800/600?random=13",
      backgroundColor: "#000",
    },
  ];

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
                {item.icon && (
                  <div className="mb-4 flex justify-center">
                    {typeof item.icon === "string" ? (
                      <img src={item.icon} alt="" className="w-14 h-14" />
                    ) : (
                      item.icon
                    )}
                  </div>
                )}
                <div className="text-white text-lg font-medium px-4">
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
