import { useState, useRef, useEffect } from "react";

const images = [
  {
    id: 0,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    alt: "Team planning session",
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    alt: "Truck maintenance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85",
    alt: "Professional thinking",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85",
    alt: "Truck at depot",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85",
    alt: "Highway logistics",
  },
];

const CARDS = [
  {
    leftPct: -2,
    widthPct: 15,
    heightPx: 280,
    rotate: -15,
    zIndex: 1,
    topPct: 50,
  },
  {
    leftPct: 10,
    widthPct: 17,
    heightPx: 310,
    rotate: -9,
    zIndex: 2,
    topPct: 48,
  },
  {
    leftPct: 24,
    widthPct: 19,
    heightPx: 345,
    rotate: -4,
    zIndex: 3,
    topPct: 46,
  },
  {
    leftPct: 38,
    widthPct: 36,
    heightPx: 395,
    rotate: 1,
    zIndex: 4,
    topPct: 44,
  },
  {
    leftPct: 71,
    widthPct: 33,
    heightPx: 375,
    rotate: 5,
    zIndex: 3,
    topPct: 46,
  },
];

function Card({ img, cfg, containerWidth }) {
  const outerRef = useRef(null);
  const imgRef = useRef(null);
  const stateRef = useRef({
    rx: 0,
    ry: 0,
    txRx: 0,
    txRy: 0,
    lift: 0,
    txLift: 0,
    raf: null,
    inside: false,
  });

  useEffect(() => {
    const s = stateRef.current;
    const el = outerRef.current;
    const im = imgRef.current;
    if (!el) return;

    const cardW = containerWidth * (cfg.widthPct / 100);
    const cardL = containerWidth * (cfg.leftPct / 100);
    const baseRotate = cfg.rotate;

    const loop = () => {
      s.rx += (s.txRx - s.rx) * 0.1;
      s.ry += (s.txRy - s.ry) * 0.1;
      s.lift += (s.txLift - s.lift) * 0.1;

      el.style.transform = [
        `translateX(${cardL}px)`,
        `translateY(calc(-50% - ${s.lift}px))`,
        `rotate(${baseRotate}deg)`,
        `rotateX(${s.rx}deg)`,
        `rotateY(${s.ry}deg)`,
      ].join(" ");

      if (im) {
        const sc = 1 + (s.lift / 10) * 0.04;
        im.style.transform = `scale(${sc})`;
      }

      s.raf = requestAnimationFrame(loop);
    };

    s.raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(s.raf);
  }, [containerWidth]);

  const onMouseMove = (e) => {
    const s = stateRef.current;
    const rect = outerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2); // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1 to 1
    s.txRx = -dy * 12;
    s.txRy = dx * 14;
  };

  const onMouseEnter = () => {
    stateRef.current.txLift = 14;
    stateRef.current.inside = true;
    if (outerRef.current) {
      outerRef.current.style.zIndex = 20;
      outerRef.current.style.boxShadow =
        "0 36px 80px rgba(0,0,0,0.28), 0 10px 28px rgba(0,0,0,0.14)";
    }
  };

  const onMouseLeave = () => {
    const s = stateRef.current;
    s.txRx = 0;
    s.txRy = 0;
    s.txLift = 0;
    s.inside = false;
    if (outerRef.current) {
      outerRef.current.style.zIndex = cfg.zIndex;
      outerRef.current.style.boxShadow =
        cfg.zIndex >= 4
          ? "0 20px 52px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.1)"
          : "0 10px 30px rgba(0,0,0,0.13), 0 3px 10px rgba(0,0,0,0.07)";
    }
  };

  const cardW = containerWidth * (cfg.widthPct / 100);
  const cardL = containerWidth * (cfg.leftPct / 100);

  return (
    <div
      ref={outerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        width: `${cardW}px`,
        height: `${cfg.heightPx}px`,
        left: 0,
        top: `${cfg.topPct}%`,
        transform: `translateX(${cardL}px) translateY(-50%) rotate(${cfg.rotate}deg)`,
        zIndex: cfg.zIndex,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        willChange: "transform",
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        boxShadow:
          cfg.zIndex >= 4
            ? "0 20px 52px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.1)"
            : "0 10px 30px rgba(0,0,0,0.13), 0 3px 10px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.35s ease",
      }}
    >
      <img
        ref={imgRef}
        src={img.src}
        alt={img.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
          transformOrigin: "center center",
          // NO transition — RAF handles scale
        }}
      />
      {/* Glass edge highlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "16px",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function FannedGallery() {
  const wrapRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) setContainerWidth(wrapRef.current.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const maxH = Math.max(...CARDS.map((c) => c.heightPx));

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        background: "#ffffff",
        padding: "60px 0 80px",
        overflow: "hidden",
      }}
    >
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          width: "100%",
          height: `${maxH + 80}px`,
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {containerWidth > 0 &&
          images.map((img, i) => (
            <Card
              key={img.id}
              img={img}
              cfg={CARDS[i]}
              containerWidth={containerWidth}
            />
          ))}
      </div>
    </div>
  );
}
