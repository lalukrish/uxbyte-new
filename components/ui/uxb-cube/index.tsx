"use client";

import { useEffect, useRef } from "react";

const DEFAULT_FACES = [
  { label: "UXB", sub: "Studio" },
  { label: "UI/UX", sub: "Design" },
  { label: "Web", sub: "Dev" },
  { label: "Brand", sub: "Identity" },
  { label: "Cloud", sub: "Scale" },
  { label: "Ship", sub: "Fast" },
];

type FaceConfig =
  | { type: "label"; label: string; sub: string }
  | { type: "image"; src: string; alt?: string };

interface UXBCubeProps {
  size?: number;
  faces?: FaceConfig[]; // up to 6 entries, one per face
}

export default function UXBCube({ size = 140, faces }: UXBCubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: -20, y: 30 });
  const velocity = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const rafRef = useRef<number>(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const half = size / 2;

  // Merge passed faces with defaults — fallback to label face if not provided
  const resolvedFaces: FaceConfig[] = Array.from({ length: 6 }, (_, i) => {
    if (faces && faces[i]) return faces[i];
    return {
      type: "label",
      label: DEFAULT_FACES[i].label,
      sub: DEFAULT_FACES[i].sub,
    };
  });

  const applyRotation = () => {
    if (!cubeRef.current) return;
    cubeRef.current.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
  };

  useEffect(() => {
    const animate = () => {
      if (autoRotate.current) {
        rotation.current.y += 0.4;
        rotation.current.x += 0.15;
      } else if (!isDragging.current) {
        rotation.current.x += velocity.current.x;
        rotation.current.y += velocity.current.y;
        velocity.current.x *= 0.92;
        velocity.current.y *= 0.92;
      }
      applyRotation();
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    autoRotate.current = false;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    clearTimeout(resumeTimer.current!);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    velocity.current = { x: dy * 0.3, y: dx * 0.3 };
    rotation.current.y += dx * 0.5;
    rotation.current.x += dy * 0.5;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseUp = () => {
    isDragging.current = false;
    resumeTimer.current = setTimeout(() => {
      autoRotate.current = true;
    }, 2500);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    autoRotate.current = false;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    clearTimeout(resumeTimer.current!);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastMouse.current.x;
    const dy = e.touches[0].clientY - lastMouse.current.y;
    velocity.current = { x: dy * 0.3, y: dx * 0.3 };
    rotation.current.y += dx * 0.5;
    rotation.current.x += dy * 0.5;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    resumeTimer.current = setTimeout(() => {
      autoRotate.current = true;
    }, 2500);
  };

  const faceTransforms = [
    `translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];

  return (
    <div
      style={{
        width: size,
        height: size,
        perspective: size * 4,
        perspectiveOrigin: "50% 50%",
        cursor: "grab",
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className=" ml-28 md:ml-140 -mt-80 md:mt-16 absolute"
    >
      <div style={{ width: size, height: size, transformStyle: "preserve-3d" }}>
        <div
          ref={cubeRef}
          style={{
            width: size,
            height: size,
            transformStyle: "preserve-3d",
            transform: `rotateX(-20deg) rotateY(30deg)`,
          }}
        >
          {resolvedFaces.map((face, i) => {
            const isImage = face.type === "image";
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  transform: faceTransforms[i],
                  background: "rgba(10,10,18,0.7)",
                  backdropFilter: "blur(12px)",
                  border: isImage
                    ? "2px solid rgba(105,21,174,0.8)"
                    : "1px solid rgba(105,21,174,0.6)",
                  boxShadow: isImage
                    ? "inset 0 0 30px rgba(105,21,174,0.1), 0 0 20px rgba(105,21,174,0.4)"
                    : "inset 0 0 20px rgba(105,21,174,0.15), 0 0 12px rgba(105,21,174,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  userSelect: "none",
                  overflow: "hidden",
                }}
              >
                {isImage ? (
                  <img
                    src={
                      (face as { type: "image"; src: string; alt?: string }).src
                    }
                    alt={
                      (face as { type: "image"; src: string; alt?: string })
                        .alt ?? ""
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    draggable={false}
                  />
                ) : (
                  <>
                    <div
                      style={{
                        width: size * 0.32,
                        height: size * 0.32,
                        background: "#6915ae",
                        borderRadius: size * 0.07,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: size * 0.11,
                          fontWeight: 800,
                          color: "#fff",
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        }}
                      >
                        UXB
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: size * 0.12,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.06em",
                        lineHeight: 1,
                      }}
                    >
                      {
                        (face as { type: "label"; label: string; sub: string })
                          .label
                      }
                    </span>
                    <span
                      style={{
                        fontSize: size * 0.09,
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.08em",
                        lineHeight: 1,
                      }}
                    >
                      {
                        (face as { type: "label"; label: string; sub: string })
                          .sub
                      }
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
