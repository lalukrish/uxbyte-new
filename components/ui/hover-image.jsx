"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

const HoverImage = () => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    const clientsPreview = document.querySelector(".clients-preview");
    const clientNames = document.querySelectorAll(".client-name");
    let activeCleintIndex = -1;

    clientNames.forEach((client, index) => {
      let activeClientImgWrapper = null;
      let activeClientImg = null;

      client.addEventListener("mouseover", () => {
        if (activeCleintIndex === index) return;
        if (activeCleintIndex !== -1) {
          const previousClient = clientNames[activeCleintIndex];
          const mouseoutEvent = new Event("mouseout");
          previousClient.dispatchEvent(mouseoutEvent);
        }
        activeCleintIndex = index;
        const clientImgWrapper = document.createElement("div");
        clientImgWrapper.className = "client-img-wrapper";

        const clientImg = document.createElement("img");
        clientImg.src = `img${index + 1}.jpg`;
        gsap.set(clientImg, { scale: 1.25, opacity: 0 });

        clientImgWrapper.appendChild(clientImg);
        clientsPreview.appendChild(clientImgWrapper);

        activeClientImgWrapper = clientImgWrapper;
        activeClientImg = clientImg;

        gsap.to(clientImgWrapper, {
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
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

      client.addEventListener("mouseout", (event) => {
        if (event.relatedTarget && client.contains(event.relatedTarget)) {
          return;
        }
        if (activeCleintIndex === index) {
          activeCleintIndex = -1;
        }
        if (activeClientImg && activeClientImgWrapper) {
          const clientImgToRemove = activeClientImg;
          const clientImgWrapperToRemove = activeClientImgWrapper;

          activeClientImg = null;
          activeClientImgWrapper = null;

          gsap.to(clientImgToRemove, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => {
              if (clientImgWrapperToRemove.parentNode) {
                clientImgWrapperToRemove.parentNode.removeChild(
                  clientImgWrapperToRemove
                );
              }
            },
          });
        }
      });
    });
  }, []);

  return (
    <div className="clients">
      <div className="clients-preview"></div>
      <div className="clients-list">
        <div className="client-name">
          <h1>native instrument</h1>
        </div>
        <div className="client-name">
          <h1>aura</h1>
        </div>
        <div className="client-name">
          <h1>test</h1>
        </div>
        <div className="client-name">
          <h1>cricket</h1>
        </div>
        <div className="client-name">
          <h1>ronaldo</h1>
        </div>
        <div className="client-name">
          <h1>hacking</h1>
        </div>
        <div className="client-name">
          <h1>android</h1>
        </div>
        <div className="client-name">
          <h1>rainbow</h1>
        </div>
      </div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #000;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        h1 {
          font-size: 3rem;
          font-weight: 500;
          line-height: 1;
          color: #fff;
          margin: 0;
        }

        p, a {
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 550;
          line-height: 1;
          display: inline-block;
        }

        .clients {
          position: relative;
          width: 100%;
          height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 2rem;
          overflow: hidden;
        }

        .clients-preview {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 65%;
          height: 75%;
          z-index: 0;
          pointer-events: none;
        }

        .client-img-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
          will-change: clip-path;
          overflow: hidden;
        }

        .client-img-wrapper img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform, opacity;
        }

        .clients-header p {
          position: relative;
          color: inherit;
          z-index: 1;
        }

        .clients-list {
          position: relative;
          width: 80%;
          margin-bottom: 8rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 0.75rem;
          mix-blend-mode: difference;
          z-index: 2;
        }

        .client-name {
          cursor: pointer;
          position: relative;
        }

        .client-name:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        @media (max-width: 1000px) {
          h1 {
            font-size: 2rem;
          }
          .clients-preview {
            width: 100%;
            height: 100%;
          }
          .clients-list {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HoverImage;
