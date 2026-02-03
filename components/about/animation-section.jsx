import React from "react";

const AccessibilityIllustrations = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <svg
          viewBox="0 0 1400 700"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Patterns for clothing */}
          <defs>
            {/* Dot pattern */}
            <pattern
              id="dots"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#000" />
              <circle cx="6" cy="6" r="1.5" fill="#000" />
            </pattern>

            {/* Stripe pattern */}
            <pattern
              id="stripes"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="8"
                y2="8"
                stroke="#000"
                strokeWidth="1.5"
              />
              <line
                x1="-2"
                y1="6"
                x2="2"
                y2="10"
                stroke="#000"
                strokeWidth="1.5"
              />
              <line
                x1="6"
                y1="-2"
                x2="10"
                y2="2"
                stroke="#000"
                strokeWidth="1.5"
              />
            </pattern>

            {/* Horizontal stripes */}
            <pattern
              id="hstripes"
              x="0"
              y="0"
              width="10"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="10"
                y2="0"
                stroke="#000"
                strokeWidth="2"
              />
            </pattern>

            {/* Checkered pattern */}
            <pattern
              id="checker"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="5" height="5" fill="#000" />
              <rect x="5" y="5" width="5" height="5" fill="#000" />
            </pattern>

            {/* Zigzag pattern */}
            <pattern
              id="zigzag"
              x="0"
              y="0"
              width="20"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,5 L5,0 L10,5 L15,0 L20,5 L15,10 L10,5 L5,10 Z"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
              />
            </pattern>

            {/* Grid pattern */}
            <pattern
              id="grid"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Character 1 - Left Top (Leopard print person) */}
          <g transform="translate(100, 200)">
            {/* Speech bubble */}
            <g transform="translate(-50, -120)">
              <rect
                x="0"
                y="0"
                width="180"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="90"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="90" dy="0">
                  What are the most
                </tspan>
                <tspan x="90" dy="15">
                  common accessibility
                </tspan>
                <tspan x="90" dy="15">
                  failures?
                </tspan>
              </text>
              <circle
                cx="50"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="40"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Character body */}
            <ellipse
              cx="0"
              cy="0"
              rx="25"
              ry="15"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-5" cy="-3" r="2" fill="#000" />
            <circle cx="5" cy="-3" r="2" fill="#000" />
            <path
              d="M -8,5 Q 0,8 8,5"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with dots */}
            <ellipse
              cx="0"
              cy="40"
              rx="30"
              ry="35"
              fill="url(#dots)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -25,30 Q -40,25 -45,35"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 25,30 Q 45,20 55,15"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Legs */}
            <line
              x1="-10"
              y1="75"
              x2="-15"
              y2="110"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="10"
              y1="75"
              x2="5"
              y2="110"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Feet */}
            <ellipse
              cx="-15"
              cy="115"
              rx="8"
              ry="5"
              fill="#666"
              stroke="#000"
              strokeWidth="2"
            />
            <ellipse
              cx="5"
              cy="115"
              rx="8"
              ry="5"
              fill="#666"
              stroke="#000"
              strokeWidth="2"
            />
          </g>

          {/* Character 2 - Center Top Left (Grid pattern) */}
          <g transform="translate(400, 280)">
            {/* Speech bubble */}
            <g transform="translate(-80, -130)">
              <rect
                x="0"
                y="0"
                width="200"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="100" dy="0">
                  What are the global
                </tspan>
                <tspan x="100" dy="15">
                  guidelines for
                </tspan>
                <tspan x="100" dy="15">
                  accessibility?
                </tspan>
              </text>
              <circle
                cx="80"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="70"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Hat */}
            <ellipse
              cx="0"
              cy="-25"
              rx="35"
              ry="8"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="-20"
              y="-45"
              width="40"
              height="20"
              rx="5"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Head */}
            <circle
              cx="0"
              cy="0"
              r="22"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-7" cy="-3" r="2" fill="#000" />
            <circle cx="7" cy="-3" r="2" fill="#000" />
            <path
              d="M -10,8 Q 0,12 10,8"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with grid */}
            <rect
              x="-28"
              y="25"
              width="56"
              height="50"
              rx="8"
              fill="url(#grid)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -28,40 Q -45,45 -50,60"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse
              cx="-50"
              cy="65"
              rx="10"
              ry="8"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M 28,40 Q 40,50 35,65"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Legs with stripes */}
            <rect
              x="-20"
              y="75"
              width="15"
              height="45"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="5"
              y="75"
              width="15"
              height="45"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Feet */}
            <ellipse cx="-12" cy="125" rx="12" ry="6" fill="#000" />
            <ellipse cx="12" cy="125" rx="12" ry="6" fill="#000" />
          </g>

          {/* Character 3 - Center Top (Zigzag pattern) */}
          <g transform="translate(700, 220)">
            {/* Speech bubble */}
            <g transform="translate(-90, -130)">
              <rect
                x="0"
                y="0"
                width="200"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="100" dy="0">
                  How can I convince
                </tspan>
                <tspan x="100" dy="15">
                  clients to invest in
                </tspan>
                <tspan x="100" dy="15">
                  accessibility?
                </tspan>
              </text>
              <circle
                cx="100"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="95"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Head wrap/turban */}
            <ellipse
              cx="0"
              cy="-10"
              rx="25"
              ry="20"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M -25,-10 Q -25,-25 0,-30 Q 25,-25 25,-10"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <line
              x1="-20"
              y1="-15"
              x2="20"
              y2="-15"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="-18"
              y1="-20"
              x2="18"
              y2="-20"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Face */}
            <circle
              cx="0"
              cy="10"
              r="18"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="7" r="2" fill="#000" />
            <circle cx="6" cy="7" r="2" fill="#000" />
            <path
              d="M -8,15 Q 0,18 8,15"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with zigzag */}
            <rect
              x="-25"
              y="30"
              width="50"
              height="55"
              rx="8"
              fill="url(#zigzag)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms - one holding phone/tablet */}
            <path
              d="M -25,45 Q -35,50 -30,65"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 25,45 Q 35,50 30,65"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect
              x="-35"
              y="60"
              width="15"
              height="20"
              rx="2"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Skirt with grid */}
            <path
              d="M -25,85 L -30,120 L 30,120 L 25,85 Z"
              fill="url(#grid)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Feet */}
            <ellipse
              cx="-20"
              cy="125"
              rx="10"
              ry="5"
              fill="#666"
              stroke="#000"
              strokeWidth="2"
            />
            <ellipse
              cx="20"
              cy="125"
              rx="10"
              ry="5"
              fill="#666"
              stroke="#000"
              strokeWidth="2"
            />
          </g>

          {/* Character 4 - Right Top (Striped person) */}
          <g transform="translate(1000, 240)">
            {/* Speech bubble */}
            <g transform="translate(-90, -130)">
              <rect
                x="0"
                y="0"
                width="200"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="100" dy="0">
                  Are some typefaces
                </tspan>
                <tspan x="100" dy="15">
                  more accessible than
                </tspan>
                <tspan x="100" dy="15">
                  others?
                </tspan>
              </text>
              <circle
                cx="80"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="90"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Head */}
            <ellipse
              cx="0"
              cy="0"
              rx="22"
              ry="25"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="-3" r="2" fill="#000" />
            <circle cx="6" cy="-3" r="2" fill="#000" />
            <path
              d="M -8,8 Q 0,11 8,8"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with horizontal stripes */}
            <ellipse
              cx="0"
              cy="50"
              rx="28"
              ry="40"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -25,40 Q -35,35 -40,45"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 25,40 Q 40,35 50,30"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Legs with zigzag */}
            <rect
              x="-18"
              y="90"
              width="14"
              height="40"
              fill="url(#zigzag)"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="90"
              width="14"
              height="40"
              fill="url(#zigzag)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Feet */}
            <ellipse cx="-11" cy="135" rx="10" ry="5" fill="#000" />
            <ellipse cx="11" cy="135" rx="10" ry="5" fill="#000" />
          </g>

          {/* Character 5 - Left Bottom (Photographer) */}
          <g transform="translate(220, 520)">
            {/* Speech bubble */}
            <g transform="translate(-60, -130)">
              <rect
                x="0"
                y="0"
                width="180"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="90"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="90" dy="0">
                  How can I make
                </tspan>
                <tspan x="90" dy="15">
                  images more
                </tspan>
                <tspan x="90" dy="15">
                  accessible?
                </tspan>
              </text>
              <circle
                cx="70"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="75"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Hat */}
            <ellipse
              cx="0"
              cy="-15"
              rx="30"
              ry="6"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M -20,-15 Q -20,-30 0,-35 Q 20,-30 20,-15"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Head */}
            <circle
              cx="0"
              cy="5"
              r="20"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="2" r="2" fill="#000" />
            <circle cx="6" cy="2" r="2" fill="#000" />
            <path
              d="M -8,10 Q 0,13 8,10"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with dots */}
            <ellipse
              cx="0"
              cy="45"
              rx="25"
              ry="30"
              fill="url(#dots)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms - holding camera */}
            <path
              d="M -20,35 Q -30,40 -25,50"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 20,35 Q 30,40 25,50"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Camera */}
            <rect
              x="-15"
              y="45"
              width="30"
              height="20"
              rx="3"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <circle
              cx="0"
              cy="55"
              r="8"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="0" cy="55" r="5" fill="#000" />

            {/* Skirt */}
            <path
              d="M -25,75 Q -25,95 -20,110 L 20,110 Q 25,95 25,75 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Legs */}
            <line
              x1="-10"
              y1="110"
              x2="-10"
              y2="130"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="10"
              y1="110"
              x2="10"
              y2="130"
              stroke="#000"
              strokeWidth="2.5"
            />
          </g>

          {/* Character 6 - Center Bottom (Person with cane) */}
          <g transform="translate(550, 480)">
            {/* Black speech bubble */}
            <g transform="translate(-100, 80)">
              <rect
                x="0"
                y="0"
                width="220"
                height="80"
                rx="8"
                fill="#000"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="110"
                y="28"
                textAnchor="middle"
                fill="#fff"
                className="text-xs font-medium"
              >
                <tspan x="110" dy="0">
                  What should I know
                </tspan>
                <tspan x="110" dy="15">
                  about buttons and
                </tspan>
                <tspan x="110" dy="15">
                  inputs?
                </tspan>
              </text>
              <circle cx="60" cy="-5" r="5" fill="#000" />
              <circle cx="50" cy="-12" r="3" fill="#000" />
            </g>

            {/* Head with wrap */}
            <ellipse
              cx="0"
              cy="-10"
              rx="22"
              ry="18"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M -22,-10 Q -22,-25 0,-28 Q 22,-25 22,-10"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
            />

            {/* Face */}
            <circle
              cx="0"
              cy="10"
              r="16"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-5" cy="8" r="2" fill="#000" />
            <circle cx="5" cy="8" r="2" fill="#000" />
            <path
              d="M -6,15 Q 0,17 6,15"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body - solid black */}
            <path
              d="M -22,30 Q -25,50 -20,70 Q -10,75 0,75 Q 10,75 20,70 Q 25,50 22,30 Z"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -20,40 Q -30,45 -25,60"
              fill="none"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 20,40 Q 30,50 28,70"
              fill="none"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* Character 7 - Center (Person with cane and stripes) */}
          <g transform="translate(830, 480)">
            {/* Speech bubble */}
            <g transform="translate(-100, -130)">
              <rect
                x="0"
                y="0"
                width="200"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="100" dy="0">
                  How do I make
                </tspan>
                <tspan x="100" dy="15">
                  navigating layouts
                </tspan>
                <tspan x="100" dy="15">
                  more accessible?
                </tspan>
              </text>
              <circle
                cx="80"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="75"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Head */}
            <circle
              cx="0"
              cy="0"
              r="22"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <circle
              cx="0"
              cy="0"
              r="18"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="-2" r="2" fill="#000" />
            <circle cx="6" cy="-2" r="2" fill="#000" />

            {/* Body with horizontal stripes */}
            <rect
              x="-26"
              y="25"
              width="52"
              height="55"
              rx="8"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -26,45 Q -35,50 -30,65"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 26,45 Q 35,55 32,75"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Cane */}
            <line
              x1="32"
              y1="75"
              x2="35"
              y2="140"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Legs with dots */}
            <rect
              x="-18"
              y="80"
              width="14"
              height="45"
              fill="url(#dots)"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="80"
              width="14"
              height="45"
              fill="url(#dots)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Feet */}
            <ellipse cx="-11" cy="130" rx="12" ry="6" fill="#000" />
            <ellipse cx="11" cy="130" rx="12" ry="6" fill="#000" />
          </g>

          {/* Character 8 - Right Center (Sitting person) */}
          <g transform="translate(1250, 290)">
            {/* Speech bubble */}
            <g transform="translate(-90, -130)">
              <rect
                x="0"
                y="0"
                width="180"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="90"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="90" dy="0">
                  How can I reduce
                </tspan>
                <tspan x="90" dy="15">
                  stress for users?
                </tspan>
              </text>
              <circle
                cx="70"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="75"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Hat */}
            <ellipse
              cx="0"
              cy="-20"
              rx="28"
              ry="5"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="-18"
              y="-35"
              width="36"
              height="15"
              rx="4"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Head */}
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="-2" r="2" fill="#000" />
            <circle cx="6" cy="-2" r="2" fill="#000" />
            <path
              d="M -8,7 Q 0,10 8,7"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with dots */}
            <ellipse
              cx="0"
              cy="42"
              rx="26"
              ry="32"
              fill="url(#dots)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms */}
            <path
              d="M -24,35 Q -32,40 -35,55"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 24,35 Q 35,30 45,25"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Sitting position - legs folded */}
            <ellipse
              cx="-15"
              cy="80"
              rx="20"
              ry="12"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <ellipse
              cx="15"
              cy="80"
              rx="20"
              ry="12"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
          </g>

          {/* Character 9 - Far Right (Checkered person) */}
          <g transform="translate(1240, 520)">
            {/* Speech bubble */}
            <g transform="translate(-180, -130)">
              <rect
                x="0"
                y="0"
                width="200"
                height="80"
                rx="8"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-medium"
              >
                <tspan x="100" dy="0">
                  Are there any issues
                </tspan>
                <tspan x="100" dy="15">
                  with gestures?
                </tspan>
              </text>
              <circle
                cx="140"
                cy="85"
                r="5"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
              <circle
                cx="145"
                cy="95"
                r="3"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>

            {/* Hat */}
            <ellipse
              cx="0"
              cy="-18"
              rx="32"
              ry="6"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M -22,-18 Q -22,-32 0,-36 Q 22,-32 22,-18"
              fill="#000"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Head */}
            <circle
              cx="0"
              cy="5"
              r="20"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <circle cx="-6" cy="2" r="2" fill="#000" />
            <circle cx="6" cy="2" r="2" fill="#000" />
            <path
              d="M -8,10 Q 0,13 8,10"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Body with checker */}
            <ellipse
              cx="0"
              cy="45"
              rx="27"
              ry="35"
              fill="url(#checker)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Arms - one raised */}
            <path
              d="M -25,40 Q -35,35 -40,25"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle
              cx="-40"
              cy="20"
              r="6"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M 25,40 Q 35,45 40,55"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Legs with stripes */}
            <rect
              x="-18"
              y="80"
              width="15"
              height="40"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />
            <rect
              x="3"
              y="80"
              width="15"
              height="40"
              fill="url(#hstripes)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Feet */}
            <ellipse cx="-10" cy="125" rx="11" ry="6" fill="#000" />
            <ellipse cx="10" cy="125" rx="11" ry="6" fill="#000" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default AccessibilityIllustrations;
