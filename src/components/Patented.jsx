 //patented 
"use client";

import { useState, useEffect } from "react";

// Utility function unchanged
function getEllipsePoint(cx, cy, rx, ry, angleDeg, rotateDeg = 0) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const rotateRad = (rotateDeg * Math.PI) / 180;
  let x = cx + rx * Math.cos(angleRad);
  let y = cy + ry * Math.sin(angleRad);
  x -= cx;
  y -= cy;
  const xr = x * Math.cos(rotateRad) - y * Math.sin(rotateRad);
  const yr = x * Math.sin(rotateRad) + y * Math.cos(rotateRad);
  x = xr + cx;
  y = yr + cy;
  return [x, y];
}

export default function Patented() {
  const [activePoint, setActivePoint] = useState("Scalable IT Team");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ellipse = {
    cx: 50,
    cy: 50,
    rx: 49,
    ry: 30,
    rotate: -45,
    viewBox: "0 0 100 100",
  };

  const ellipsePoints = [
    { name: "Scalable IT Team", angle: 340 },
    { name: "Cost Savings", angle: 165 },
    { name: "Expert Talent On-Demand", angle: 110 },
    { name: "24×7 Reliability & Support", angle: 235 },
  ];

  // Headings for mobile: split into two lines for specific items
  const mobileHeadings = {
    "Scalable IT Team": (
      <>
        Scalable <br /> IT Team
      </>
    ),
    "Cost Savings": (
      <>
        Cost <br /> Savings
      </>
    ),
    "Expert Talent On-Demand": (
      <>
        Expert Talent <br /> On-Demand
      </>
    ),
    "24×7 Reliability & Support": (
      <>
        24×7 Reliability <br /> & Support
      </>
    ),
  };

  const content = {
    "Scalable IT Team": `Add or remove experts instantly — get the right team size for your 
business without hiring delays.`,

    "Cost Savings": `Reduce overhead and payroll costs while accessing a full IT department 
on demand.`,

    "Expert Talent On-Demand": `Top-tier developers, DevOps, security specialists, and support staff 
whenever you need them.`,

    "24×7 Reliability & Support": `SLA-backed monitoring, maintenance, and incident response — your IT is 
always running smoothly.`,
  };

  return (
    <div className="relative z-[1] min-h-[100vh] bg-gradient-to-b from-transparent via-black to-transparent overflow-x-hidden">
      <div className="absolute inset-0 bg-transparent" />

      {/* Only show heading and content outside the image on desktop, not on mobile */}
      {!isMobile && (
        <div className="relative z-20 text-center max-w-7xl mx-auto pt-[18rem] md:pt-[9rem] px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 200"
            className="w-full md:ml-[5rem] md:block hidden h-[35vh]"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38b6ff" />
                <stop offset="40%" stopColor="#00255C" />
                <stop offset="90%" stopColor="#000" />
                <stop offset="100%" stopColor="#000" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="35%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="50px"
              fontWeight="500"
              fill="url(#gradient)"
              stroke="white"
              strokeWidth="0.5"
            >
              How You Gain
            </text>
            <text
              x="47%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="50px"
              fontWeight="500"
              fill="url(#gradient)"
              stroke="white"
              strokeWidth="0.5"
            >
              Peace of mind with BoostNow
            </text>
          </svg>
          {/* Desktop Title */}
          <h2 className="block text-white text-xl font-bold md:hidden py-2">
            {activePoint}
          </h2>
          {/* Content */}
          <p className="whitespace-pre-line text-gray-300 w-[30vw] md:w-[18vw] sm:max-w-3xl mx-auto text-left sm:text-2xl text-sm mb-8">
            {content[activePoint]}
          </p>
        </div>
      )}

      {/* Phone Image - overlay text on mobile */}
      <div className="absolute z-10 md:left-[40%] left-20 md:top-[10%] top-40 -translate-x-1/2 -translate-y-1/3 md:w-[50vw] md:h-[85vh] lg:w-[20vw] lg:h-[80vh]  w-[55vw] h-[55vh] border-2 border-gray-700 rounded-[60px] bg-black/30 backdrop-blur-sm overflow-hidden animate-rotate10">
        <div className="bg-black p-4 w-full h-full object-cover relative">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.O7_Q-WDw6LO0bfbzaGCMxwHaNK&pid=Api&P=0&h=220"
            alt="Interactive content"
            className="w-full h-full object-cover"
          />
          {/* Overlay heading + description in mobile */}
          {isMobile && (
            <div className="absolute top-1/4 left-1/2 w-[80%] -translate-x-1/2 text-center px-2">
              <h2 className="text-white font-bold text-lg leading-tight mb-2">
                {mobileHeadings[activePoint]}
              </h2>
              <p className="text-gray-200 text-xs whitespace-pre-line">
                {content[activePoint]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ellipse and Dots (remains unchanged) */}
      <svg
        className="absolute z-30 inset-0 w-full h-full"
        viewBox={ellipse.viewBox}
        preserveAspectRatio="none"
      >
        <ellipse
          cx={ellipse.cx}
          cy={ellipse.cy}
          rx={ellipse.rx}
          ry={ellipse.ry}
          fill="none"
          stroke="rgba(111,111,111, 0.9)"
          strokeWidth="0.8"
          transform={`rotate(${ellipse.rotate} ${ellipse.cx} ${ellipse.cy})`}
        />
        {ellipsePoints.map((point) => {
          let [x, y] = getEllipsePoint(
            ellipse.cx,
            ellipse.cy,
            ellipse.rx,
            ellipse.ry,
            point.angle,
            ellipse.rotate
          );

          let textX = x + 0.5;
          let textY = y + 2;
          let textAnchor = "start";
          let alignmentBaseline = "middle";
          let labelContent = point.name;

          if (point.name === "Scalable IT Team") {
            textX = x;
            textY = y - 2.2;
            textAnchor = "middle";
            alignmentBaseline = "baseline";
          }

          if (point.name === "Cost Savings") {
            textX = x + 2;
            textY = y + 4;
            textAnchor = "middle";
            alignmentBaseline = "hanging";
            labelContent = undefined;
          }

          return (
            <g
              key={point.name}
              onClick={() => setActivePoint(point.name)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={x}
                cy={y}
                r="1"
                fill={activePoint === point.name ? "white" : "gray"}
              />
              {point.name !== "Cost Savings" ? (
                <text
                  x={textX}
                  y={textY}
                  textAnchor={textAnchor}
                  alignmentBaseline={alignmentBaseline}
                  fontWeight="500"
                  fontSize="1.7"
                  style={{
                    pointerEvents: "none",
                    fill: activePoint === point.name ? "white" : "#bfc7d5",
                    fontFamily: "arial",
                  }}
                >
                  {labelContent}
                </text>
              ) : (
                <text
                  x={textX}
                  y={textY}
                  textAnchor={textAnchor}
                  alignmentBaseline={alignmentBaseline}
                  fontWeight="500"
                  fontSize="1.7"
                  style={{
                    pointerEvents: "none",
                    fill: activePoint === point.name ? "white" : "#bfc7d5",
                    fontFamily: "arial",
                  }}
                >
                  <tspan x={textX} dy="0">Cost</tspan>
                  <tspan x={textX} dy="2">Savings</tspan>
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}