import React, { useState } from "react";

export default function HowItWorks() {
  const [rectangleContent, setRectangleContent] = useState({
    title: "Strategic Blueprint",
    description:
      "We develop tailored digital marketing strategies that align with your business goals, utilizing various channels to maximize your online presence.",
  });

  return (
    <div className="bg-black relative text-white py-8 px-6 md:px-10 lg:px-16 flex flex-col items-center min-h-screen overflow-hidden rounded-[30px] mx-6 md:mx-12 lg:mx-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[30px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-teal-900/20"></div>

        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Circuit pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 md:opacity-30"
          viewBox="0 0 1000 600"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="#00ffff" strokeWidth="0.5" fill="none" opacity="0.6">
                <path d="M10,10 L90,10 M10,90 L90,90 M10,10 L10,90 M90,10 L90,90" />
                <path d="M30,10 L30,30 L70,30 L70,70 L30,70 L30,90" />
                <circle cx="30" cy="30" r="2" fill="#00ffff" />
                <circle cx="70" cy="30" r="2" fill="#00ffff" />
                <circle cx="70" cy="70" r="2" fill="#00ffff" />
                <circle cx="30" cy="70" r="2" fill="#00ffff" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-16 relative z-10 tracking-wider">
        HOW WE WORK?
      </h1>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative w-full max-w-6xl mx-auto px-4 z-10 items-center justify-center min-h-[550px]">
        {/* SVG Path for connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* UPDATED PATH: The coordinates now align with the circle centers */}
          <path
            d="M 150 150 A 450 100 0 1 1 1050 150 A 450 350 0 1 1 150 150 Z"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2.5"
            style={{
              filter: "drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 20px #00ffff)",
            }}
          />
        </svg>

        {/* Central Rectangle */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-lg blur-xl scale-110 animate-pulse"></div>

          <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 border-2 border-cyan-400 rounded-lg p-6 sm:p-10 md:p-12 w-full max-w-md md:max-w-lg lg:max-w-xl min-h-[250px] flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-cyan-500/30">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300 drop-shadow-lg">
                {rectangleContent.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {rectangleContent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Circles Layout */}
        <div className="absolute inset-0 flex flex-col justify-between items-center z-10">
          <div className="flex justify-between w-full px-10">
            {/* Step 1 */}
            <CircleStep
              number="1"
              label="Strategic Blueprint"
              onClick={() =>
                setRectangleContent({
                  title: "Strategic Blueprint",
                  description:
                    "We develop tailored digital marketing strategies that align with your business goals, utilizing various channels to maximize your online presence.",
                })
              }
            />
            {/* Step 3 */}
            <CircleStep
              number="3"
              label="Performance Enhancement"
              onClick={() =>
                setRectangleContent({
                  title: "Performance Enhancement",
                  description:
                    "We track your campaigns' performance, make data-driven adjustments, and share regular reports to keep you updated on progress and results.",
                })
              }
            />
          </div>

          {/* Step 2 Center Bottom (shifted down more) */}
          <div className="flex justify-center w-full mt-24">
            <CircleStep
              number="2"
              label="Implementation"
              onClick={() =>
                setRectangleContent({
                  title: "Implementation",
                  description:
                    "Once the digital marketing strategy is approved, we move into the implementation phase. This involves launching your campaigns across selected channels, such as social media, email, and online advertising.",
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden relative w-full max-w-md mx-auto z-10 space-y-8">
        {/* Central glowing rectangle */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-lg blur-xl scale-105 animate-pulse"></div>

          <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 border-2 border-cyan-400 rounded-lg p-6 min-h-[200px] flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-cyan-500/30">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-3 text-cyan-300 drop-shadow-lg">
                {rectangleContent.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                {rectangleContent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Circles in vertical layout */}
        <div className="flex flex-col items-center gap-6">
          <CircleStep
            number="1"
            label="Strategic Blueprint"
            onClick={() =>
              setRectangleContent({
                title: "Strategic Blueprint",
                description:
                  "We develop tailored digital marketing strategies that align with your business goals, utilizing various channels to maximize your online presence.",
              })
            }
          />
          <CircleStep
            number="2"
            label="Implementation"
            onClick={() =>
              setRectangleContent({
                title: "Implementation",
                description:
                  "Once the digital marketing strategy is approved, we move into the implementation phase. This involves launching your campaigns across selected channels, such as social media, email, and online advertising.",
              })
            }
          />
          <CircleStep
            number="3"
            label="Performance Enhancement"
            onClick={() =>
              setRectangleContent({
                title: "Performance Enhancement",
                description:
                  "We track your campaigns' performance, make data-driven adjustments, and share regular reports to keep you updated on progress and results.",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Circle Step Component */
function CircleStep({ number, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group relative flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-lg scale-125 group-hover:scale-150 transition-transform duration-300"></div>
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-gray-800 to-black border-2 border-cyan-400 rounded-full flex flex-col items-center justify-center group-hover:border-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/50">
        <span className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300">
          {number}
        </span>
        <p className="text-xs md:text-sm text-center text-gray-300 mt-1 px-2 group-hover:text-white">
          {label}
        </p>
      </div>
    </div>
  );
}