import { useEffect, useState, useRef } from "react";

/* ─── Pixel piece SVGs ─── */
const PIXEL_PIECES = {
  rook: [
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  queen: [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  knight: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  bishop: [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  pawn: [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  king: [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
};

function PixelIcon({ type, size = 5, color = "#ffffff" }) {
  const grid = PIXEL_PIECES[type] || PIXEL_PIECES.rook;
  const cols = grid[0].length;
  const rows = grid.length;
  return (
    <svg
      width={cols * size}
      height={rows * size}
      viewBox={`0 0 ${cols * size} ${rows * size}`}
      style={{ display: "block", imageRendering: "pixelated" }}
    >
      {grid.map((row, ri) =>
        row.map((cell, ci) =>
          cell ? (
            <rect
              key={`${ri}-${ci}`}
              x={ci * size}
              y={ri * size}
              width={size}
              height={size}
              fill={color}
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

/* ─── Data ─── */
const CATEGORIES = [
  {
    id: 0,
    name: "Development",
    icon: "♜",
    pieceType: "rook",
    label: "Services",
    heading: ["Comprehensive", "Solutions for"],
    colored: ["Every", "Sector"],
    colors: ["#e63b3b", "#7c6cfc"],
    description:
      "We support diverse organizations with practical solutions that simplify operations, improve accuracy, and scale reliably across evolving models.",
    services: [
      {
        title: "Frontend Development",
        desc: "Create responsive, high-performance user interfaces with React, Vue, or Angular that deliver exceptional user experiences.",
        piece: "rook",
      },
      {
        title: "Backend Development",
        desc: "Build robust server-side applications with Node.js, Python, or Java that handle complex business logic.",
        piece: "queen",
      },
      {
        title: "Full-Stack Development",
        desc: "Get end-to-end development from database to UI, ensuring seamless integration and optimal performance.",
        piece: "knight",
      },
      {
        title: "DevOps & Cloud",
        desc: "Deploy and scale infrastructure with modern CI/CD pipelines, containers, and cloud-native architecture.",
        piece: "bishop",
      },
      {
        title: "API Development",
        desc: "Design and build robust APIs that connect systems, enable integrations, and power modern applications.",
        piece: "pawn",
      },
      {
        title: "Performance Audits",
        desc: "Identify and eliminate bottlenecks with deep performance analysis, profiling, and targeted optimization.",
        piece: "king",
      },
    ],
  },
  {
    id: 1,
    name: "Design",
    icon: "♛",
    pieceType: "queen",
    label: "Creative",
    heading: ["Beautiful Design", "Built for"],
    colored: ["Every", "Purpose"],
    colors: ["#f97316", "#a855f7"],
    description:
      "Crafting intuitive, visually striking experiences that connect brands with users across every touchpoint and platform.",
    services: [
      {
        title: "UI/UX Design",
        desc: "Design intuitive interfaces backed by user research, wireframes, and prototypes that solve real user problems.",
        piece: "queen",
      },
      {
        title: "Product Design",
        desc: "Transform ideas into polished products with user-centered design thinking, from concept to high-fidelity mockups.",
        piece: "bishop",
      },
      {
        title: "Design Systems",
        desc: "Build scalable design systems with reusable components, guidelines, and documentation.",
        piece: "rook",
      },
      {
        title: "Brand Identity",
        desc: "Create cohesive brand identities with logos, color systems, and guidelines that resonate with your audience.",
        piece: "king",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile Dev",
    icon: "♞",
    pieceType: "knight",
    label: "Mobile",
    heading: ["Powerful Apps", "for"],
    colored: ["Every", "Platform"],
    colors: ["#22d3ee", "#6366f1"],
    description:
      "Building native and cross-platform mobile applications that deliver smooth, intuitive experiences on iOS and Android.",
    services: [
      {
        title: "iOS Development",
        desc: "Build native iOS apps with Swift that leverage the latest Apple technologies and deliver smooth experiences.",
        piece: "knight",
      },
      {
        title: "Android Development",
        desc: "Create performant Android apps with Kotlin that work seamlessly across devices and Android versions.",
        piece: "rook",
      },
      {
        title: "React Native",
        desc: "Develop cross-platform apps with a single codebase that delivers near-native performance on both platforms.",
        piece: "bishop",
      },
      {
        title: "Flutter Development",
        desc: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        piece: "pawn",
      },
    ],
  },
  {
    id: 3,
    name: "Marketing",
    icon: "♝",
    pieceType: "bishop",
    label: "Growth",
    heading: ["Data-Driven Growth", "for"],
    colored: ["Every", "Business"],
    colors: ["#4ade80", "#f59e0b"],
    description:
      "Reaching your ideal customers with targeted campaigns, compelling content, and analytics that turn insights into revenue.",
    services: [
      {
        title: "Digital Marketing",
        desc: "Launch targeted campaigns across search, social, and display channels that reach your ideal customers.",
        piece: "bishop",
      },
      {
        title: "Content Marketing",
        desc: "Create compelling content strategies with SEO-optimized articles, videos, and resources.",
        piece: "queen",
      },
      {
        title: "Marketing Analytics",
        desc: "Track and optimize campaign performance with comprehensive analytics dashboards.",
        piece: "rook",
      },
      {
        title: "SEO Optimization",
        desc: "Improve visibility and organic traffic with technical SEO, content strategy, and link building.",
        piece: "king",
      },
    ],
  },
];

/* ─── Floating BG particles ─── */
const BG_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  type: ["rook", "queen", "knight", "bishop", "pawn", "king"][i % 6],
  x: ((i * 37.7 + 11) % 100).toFixed(1),
  y: ((i * 53.3 + 7) % 100).toFixed(1),
  size: 2 + (i % 3),
  opacity: 0.005 + (i % 3) * 2.02,
  dur: 18 + (i % 6) * 3,
  delay: (i % 8) * 1.4,
}));

function ChessBG() {
  return (
    <>
      <style>{`@keyframes bgFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}`}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {BG_PARTICLES.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              animation: `bgFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          >
            <PixelIcon
              type={p.type}
              size={p.size}
              color="rgba(255,255,255,0.9)"
            />
          </div>
        ))}
        {/* opacity wrapper handles the fade */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
      </div>
    </>
  );
}

/* ─── Service Card ─── */
function ServiceCard({ service, accentColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "28px 24px",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* Pixel icon */}
      <div
        style={{
          marginBottom: "20px",
          opacity: hovered ? 1 : 0.75,
          transition: "opacity 0.3s",
        }}
      >
        <PixelIcon type={service.piece} size={5} color="#ffffff" />
      </div>
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "10px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: "13.5px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {service.desc}
      </p>
    </div>
  );
}

/* ─── Main ─── */
export default function SaaSSection() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(0);
  const cat = CATEGORIES[active];

  useEffect(() => {
    const chk = () => setIsMobile(window.innerWidth < 1024);
    chk();
    window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  /* Desktop intersection observer */
  useEffect(() => {
    if (isMobile) return;
    const secs = document.querySelectorAll(".saas-sec");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Array.from(secs).indexOf(e.target);
            if (idx !== -1) {
              setActive(idx);
              prevRef.current = idx;
            }
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    secs.forEach((s) => obs.observe(s));
    return () => secs.forEach((s) => obs.unobserve(s));
  }, [isMobile]);

  /* ── MOBILE ── */
  if (isMobile) {
    return (
      <div
        style={{
          background: "#0a0a0a",
          minHeight: "100vh",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* <ChessBG /> */}
        {/* Bottom-left glow */}
        <div
          style={{
            position: "fixed",
            bottom: "-120px",
            left: "-80px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(140,30,60,0.55) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{ position: "relative", zIndex: 1, padding: "48px 20px 80px" }}
        >
          {/* Tab nav */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "36px",
            }}
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    active === c.id
                      ? "2px solid #fff"
                      : "2px solid transparent",
                  padding: "10px 4px",
                  marginBottom: "-1px",
                  color: active === c.id ? "#fff" : "rgba(255,255,255,0.35)",
                  fontSize: "10px",
                  fontWeight: active === c.id ? 600 : 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Pills */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "5px 14px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.06em",
              }}
            >
              {cat.label}
            </span>
          </div>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "8px",
              letterSpacing: "-0.03em",
            }}
          >
            {cat.heading[0]}
            <br />
            {cat.heading[1]}{" "}
            <span style={{ color: cat.colors[0] }}>{cat.colored[0]}</span>{" "}
            <span style={{ color: cat.colors[1] }}>{cat.colored[1]}</span>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            {cat.description}
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}
          >
            {cat.services.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP ── */
  return (
    <div
      className="dark-section"
      style={{
        background: "#0a0a0a",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* <ChessBG /> */}

      {/* Bottom-left ambient glow — fixed so it stays as you scroll */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "-100px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(140,30,60,0.5) 0%, rgba(80,10,40,0.25) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <style>{`
        .svc-card:hover { background: rgba(255,255,255,0.06) !important; border-color: rgba(255,255,255,0.13) !important; }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "42% 58%",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── LEFT: fully sticky ── */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 60px 80px 80px",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Tab nav */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  const secs = document.querySelectorAll(".saas-sec");
                  secs[c.id]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border:
                    active === c.id
                      ? "1px solid rgba(255,255,255,0.25)"
                      : "1px solid rgba(255,255,255,0.09)",
                  background:
                    active === c.id ? "rgba(255,255,255,0.1)" : "transparent",
                  color: active === c.id ? "#fff" : "rgba(255,255,255,0.35)",
                  fontSize: "12px",
                  fontWeight: active === c.id ? 500 : 400,
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                <span style={{ marginRight: "6px", opacity: 0.7 }}>
                  {c.icon}
                </span>
                {c.name}
              </button>
            ))}
          </div>

          {/* Pill label */}
          {/* <div style={{ marginBottom: "24px" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "20px",
                padding: "5px 16px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.06em",
                transition: "all 0.4s ease",
              }}
            >
              {cat.label}
            </span>
          </div> */}

          {/* Big heading */}
          <div style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "clamp(36px, 4.5vw, 58px)",
                fontWeight: 500,
                color: "#ffffff",
                lineHeight: 1.3,
                letterSpacing: "-0.035em",
                margin: 0,
                transition: "all 0.4s ease",
              }}
            >
              {cat.heading[0]}
              <br />
              {cat.heading[1]}{" "}
              <span
                style={{ color: cat.colors[0], transition: "color 0.4s ease" }}
              >
                {cat.colored[0]}
              </span>{" "}
              <span
                style={{ color: cat.colors[1], transition: "color 0.4s ease" }}
              >
                {cat.colored[1]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.75,
              maxWidth: "380px",
              transition: "all 0.4s ease",
            }}
          >
            {cat.description}
          </p>

          {/* Bottom pixel piece decoration */}
          <div style={{ marginTop: "48px", opacity: 0.18 }}>
            <PixelIcon type={cat.pieceType} size={6} color="#ffffff" />
          </div>
        </div>

        {/* ── RIGHT: scrolling sections ── */}
        <div style={{ padding: "0 60px 0 60px" }}>
          {CATEGORIES.map((c) => (
            <div
              key={c.id}
              className="saas-sec"
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", padding: "80px 0" }}>
                {/* Section label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "36px",
                  }}
                >
                  <span style={{ fontSize: "16px", opacity: 0.4 }}>
                    {c.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {c.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "rgba(255,255,255,0.07)",
                      marginLeft: "8px",
                    }}
                  />
                </div>

                {/* 2-column card grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {c.services.map((s, si) => (
                    <ServiceCard
                      key={si}
                      service={s}
                      accentColor={c.colors[0]}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
