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
    rx: 40,
    ry: 25,
    rotate: -45,
    viewBox: "0 0 100 100",
  };

  const ellipsePoints = [
    { name: "Scalable IT Team", angle: 340 },
    { name: "Cost Savings", angle: 250 },
    { name: "Expert Talent On-Demand", angle: 80 },
    { name: "24×7 Reliability & Support", angle: 170 },
  ];

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
    // FIX: Changed h-screen w-screen overflow-hidden to min-h-screen w-full overflow-x-hidden
    <div className="mb-20 relative z-[1] min-h-screen w-full overflow-hidden overflow-x-hidden">
      <h2 className="text-transparent bg-clip-text text-white to-blue-500 text-center font-bold text-2xl md:text-6xl m-4 mx-4 mb-10">
        How You Gain Peace of Mind <br /> with BoostNow
      </h2>

      {/* Centered content for desktop */}
      {!isMobile && (
        <div className="mb-20 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full">
          <div className="rounded-xl shadow-lg px-7 py-10 max-w-lg w-full text-center ">
            <h2 className="text-white text-xl font-bold mb-4">
              {activePoint}
            </h2>
            <p className="whitespace-pre-line text-gray-300 text-center text-lg">
              {content[activePoint]}
            </p>
          </div>
        </div>
      )}

      {/* Phone Image - overlay text on mobile */}
      <div className="mt-20 mb-10 absolute z-10 md:left-[40%] left-20 md:top-[10%] top-40 -translate-x-1/2 -translate-y-1/3 md:w-[50vw] md:h-[85vh] lg:w-[20vw] lg:h-[80vh] w-[55vw] h-[55vh] border-2 border-gray-700 rounded-[60px] bg-black/30 backdrop-blur-sm overflow-hidden animate-rotate10">
        <div className="bg-black p-4 w-full h-full object-cover relative">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.O7_Q-WDw6LO0bfbzaGCMxwHaNK&pid=Api&P=0&h=220"
            alt="Interactive content"
            className="w-full h-full object-cover"
          />
          {/* Overlay heading + description in mobile */}
          {isMobile && (
            <div className=" absolute top-1/4 left-1/2 w-[80%] -translate-x-1/2 text-center px-2">
              <h2 className="text-white font-bold text-xl leading-tight mb-2">
                {mobileHeadings[activePoint]}
              </h2>
              <p className="text-gray-300 text-lg whitespace-pre-line text-center">
                {content[activePoint]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ellipse and Dots */}
      <svg
        className="mt-20 absolute z-30 inset-0 w-full h-full mb-10"
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

          // Scalable IT Team positioning
          if (point.name === "Scalable IT Team") {
            textX = x;
            textY = y - 2.2;
            textAnchor = "middle";
            alignmentBaseline = "baseline";
          }

          // Cost Savings positioning
          if (point.name === "Cost Savings") {
            textX = x + 2;
            textY = y + 4;
            textAnchor = "middle";
            alignmentBaseline = "hanging";
            labelContent = undefined;
          }

          // 24×7 Reliability & Support positioning
          if (point.name === "24×7 Reliability & Support") {
            textX = x - 2;
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

              {/* Text rendering: single line or multi-line (using <tspan>) */}
              {point.name !== "Cost Savings" && point.name !== "24×7 Reliability & Support" ? (
                <text
                  x={textX}
                  y={textY}
                  textAnchor={textAnchor}
                  alignmentBaseline={alignmentBaseline}
                  fontWeight="bold"
                  fontSize="1.7"
                  style={{
                    pointerEvents: "none",
                    fill: activePoint === point.name ? "white" : "#bfc7d5",
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
                  fontWeight="bold"
                  fontSize="1.7"
                  style={{
                    pointerEvents: "none",
                    fill: activePoint === point.name ? "white" : "#bfc7d5",
                  }}
                >
                  {point.name === "Cost Savings" && (
                    <>
                      <tspan x={textX} dy="0">Cost</tspan>
                      <tspan x={textX} dy="2">Savings</tspan>
                    </>
                  )}
                  {point.name === "24×7 Reliability & Support" && (
                    <>
                      <tspan x={textX} dy="0">24×7 Reliability</tspan>
                      <tspan x={textX} dy="2">& Support</tspan>
                    </>
                  )}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}