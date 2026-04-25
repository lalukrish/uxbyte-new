// "use client";

// import React, { useMemo, useRef, useState, useEffect } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// function ParticleSphere({ scroll }) {
//   const ref = useRef();
//   const { mouse } = useThree();
//   const smoothScroll = useRef(0);
//   const baseRotY = useRef(0);

//   const particleCount = 9000;

//   const { spherePositions, spreadPositions } = useMemo(() => {
//     const sphere = new Float32Array(particleCount * 3);
//     const spread = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount; i++) {
//       const radius = 2.8;

//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(Math.random() * 2 - 1);

//       sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       sphere[i * 3 + 2] = radius * Math.cos(phi);

//       const range = 12;

//       spread[i * 3] = (Math.random() - 0.5) * range;
//       spread[i * 3 + 1] = (Math.random() - 0.5) * range;
//       spread[i * 3 + 2] = (Math.random() - 0.5) * range;
//     }

//     return { spherePositions: sphere, spreadPositions: spread };
//   }, []);

//   const geometryRef = useRef();

//   useFrame(() => {
//     if (!ref.current || !geometryRef.current) return;

//     smoothScroll.current += (scroll - smoothScroll.current) * 0.08;

//     const s = THREE.MathUtils.clamp(smoothScroll.current, 0, 1);
//     const positions = geometryRef.current.attributes.position.array;

//     for (let i = 0; i < particleCount; i++) {
//       const i3 = i * 3;

//       positions[i3] = THREE.MathUtils.lerp(
//         spherePositions[i3],
//         spreadPositions[i3],
//         s,
//       );

//       positions[i3 + 1] = THREE.MathUtils.lerp(
//         spherePositions[i3 + 1],
//         spreadPositions[i3 + 1],
//         s,
//       );

//       positions[i3 + 2] = THREE.MathUtils.lerp(
//         spherePositions[i3 + 2],
//         spreadPositions[i3 + 2],
//         s,
//       );
//     }

//     geometryRef.current.attributes.position.needsUpdate = true;

//     baseRotY.current += 0.0005;

//     ref.current.rotation.y = baseRotY.current + mouse.x * 0.25;
//     ref.current.rotation.x = mouse.y * 0.15;
//   });

//   return (
//     <points ref={ref}>
//       <bufferGeometry ref={geometryRef}>
//         <bufferAttribute
//           attach="attributes-position"
//           array={spherePositions.slice()}
//           count={particleCount}
//           itemSize={3}
//         />
//       </bufferGeometry>

//       <pointsMaterial
//         size={0.016}
//         color="#ffffff"
//         sizeAttenuation
//         transparent
//         opacity={0.9}
//       />
//     </points>
//   );
// }

// export default function ParticleSphereHero() {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     const hero = document.getElementById("particle-hero");

//     const handleScroll = () => {
//       if (!hero) return;

//       const rect = hero.getBoundingClientRect();
//       const sectionHeight = hero.offsetHeight - window.innerHeight;

//       const progress = THREE.MathUtils.clamp(-rect.top / sectionHeight, 0, 1);

//       const mapped = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

//       setScroll(mapped);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="h-screen">
//       <div
//         id="particle-hero"
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "200vh",
//           background: "#000",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             width: "100%",
//           }}
//         >
//           <Canvas
//             camera={{ position: [0, 0, 7], fov: 60 }}
//             style={{ position: "absolute", inset: 0 }}
//           >
//             <ParticleSphere scroll={scroll} />
//           </Canvas>

//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               pointerEvents: "none",
//               padding: "0 24px",
//             }}
//           >
//             <h1
//               style={{
//                 color: "#fff",
//                 fontSize: "clamp(32px,6vw,72px)",
//                 fontWeight: 600,
//                 lineHeight: 1.2,
//                 maxWidth: "760px",
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Uxbyte <span style={{ opacity: 0.65 }}>Studios</span>
//               <br />
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function ParticleSphere({ scroll }) {
  const ref = useRef();
  const { mouse } = useThree();
  const smoothScroll = useRef(0);
  const baseRotY = useRef(0);

  const particleCount = 9000;

  const { spherePositions, spreadPositions } = useMemo(() => {
    const sphere = new Float32Array(particleCount * 3);
    const spread = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = radius * Math.cos(phi);

      const range = 12;

      spread[i * 3] = (Math.random() - 0.5) * range;
      spread[i * 3 + 1] = (Math.random() - 0.5) * range;
      spread[i * 3 + 2] = (Math.random() - 0.5) * range;
    }

    return { spherePositions: sphere, spreadPositions: spread };
  }, []);

  const geometryRef = useRef();

  useFrame(() => {
    if (!ref.current || !geometryRef.current) return;

    smoothScroll.current += (scroll - smoothScroll.current) * 0.08;

    const s = THREE.MathUtils.clamp(smoothScroll.current, 0, 1);
    const positions = geometryRef.current.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] = THREE.MathUtils.lerp(
        spherePositions[i3],
        spreadPositions[i3],
        s,
      );

      positions[i3 + 1] = THREE.MathUtils.lerp(
        spherePositions[i3 + 1],
        spreadPositions[i3 + 1],
        s,
      );

      positions[i3 + 2] = THREE.MathUtils.lerp(
        spherePositions[i3 + 2],
        spreadPositions[i3 + 2],
        s,
      );
    }

    geometryRef.current.attributes.position.needsUpdate = true;

    baseRotY.current += 0.0005;

    ref.current.rotation.y = baseRotY.current + mouse.x * 0.25;
    ref.current.rotation.x = mouse.y * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          array={spherePositions.slice()}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.016}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}

export default function ParticleSphereHero() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("particle-hero");

    const handleScroll = () => {
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const sectionHeight = hero.offsetHeight - window.innerHeight;

      const progress = THREE.MathUtils.clamp(-rect.top / sectionHeight, 0, 1);
      const mapped = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

      setScroll(mapped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen">
      <div
        id="particle-hero"
        style={{
          position: "relative",
          width: "100%",
          height: "200vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
          }}
        >
          <Canvas
            camera={{ position: [0, 0, 7], fov: 60 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <ParticleSphere scroll={scroll} />
          </Canvas>

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              pointerEvents: "none",
              padding: "0 24px",
              gap: "80px",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px,6vw,72px)",
                fontWeight: 600,
                lineHeight: 1.2,
                maxWidth: "760px",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Uxbyte <span style={{ opacity: 0.65 }}>Studios</span>
            </h1>
            <p
              style={{
                color: "#ffff",
                opacity: 1,
                fontSize: "clamp(14px,1.6vw,18px)",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
