import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';

export default function HowItWorks() {
  const pData = [2, 2, 1.5, 1, 1.5, 2, 2];
  const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

  const [rectangleContent, setRectangleContent] = useState({
    title: "Strategic Blueprint",
    description: "We develop tailored digital marketing strategies that align with your business goals, utilizing various channels to maximize your online presence"
  });
  const [isDiamond, setIsDiamond] = useState(false);
  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.3,
      boxShadow: "0px 0px 25px #38b2ff",
      borderColor: "rgba(173, 216, 230, 0.8)",
      transition: { duration: 0.4, yoyo: Infinity },
    },
  };

  const rectangleVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.5)",
      rotate: 3,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const polygonVariants = {
    initial: { rotate: 0, scale: 1, opacity: 0 },
    animate: { rotate: 360, scale: 1.5, opacity: 1, transition: { duration: 1 } },
    whileInView: {
      rotate: 45,
      scale: 1.3,
      opacity: 0.8,
      transition: { repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeOut" },
    },
  };

  const advancedCircleStyles = "transition-all duration-300 ease-in-out";
  const advancedRectangleStyles = "bg-black border border-white shadow-lg transition-transform duration-700 ease-in-out";

  return (
    <div className="bg-[#11111189] relative z-10 text-white py-12 flex flex-col items-center">
      <h1 className="text-transparent bg-clip-text md:mb-8 text-white text-center font-bold text-2xl sm:text-3xl md:text-6xl">
        HOW WE WORK?
      </h1>

      {/* LineChart in the background */}
      <ChartContainer
        className="absolute hidden sm:block z-0 bottom-5 right-0 left-0 mx-auto text-white"
        width={1100}
        height={320}
        series={[{ type: 'line', data: pData }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: '#ffffff',
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: '#ffffff',
            scale: '0.6',
            fill: '#ffffff',
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot className="bg-white text-white" />
      </ChartContainer>

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="relative md:w-[500px] md:h-[500px] h-[60vh] w-[95vw] flex flex-col md:flex-row items-center justify-center z-10"
      >
        <motion.div
          variants={rectangleVariants}
          whileHover="hover"
          transition={{ duration: 0.8 }}
          className={`w-[90vw] md:w-[35vw] h-[35vh] md:h-[48vh] rounded-lg flex items-center justify-center border border-transparent ${advancedRectangleStyles}`}
          style={{
            transform: isDiamond ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.6s ease-in-out",
          }}
        >
          <div className="text-center px-4 md:px-6">
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4"
              whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.9)" }}
              transition={{ duration: 0.3 }}
            >
              {rectangleContent.title}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg leading-relaxed"
              whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              {rectangleContent.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Step 1 Circle */}
        <motion.div
          variants={circleVariants}
          whileHover="hover"
          transition={{ duration: 1 }}
          onClick={() => {
            setRectangleContent({
              title: "Strategic Blueprint",
              description: "We develop tailored digital marketing strategies that align with your business goals, utilizing various channels to maximize your online presence.",
            });
          }}
          className={`bg-gray-700 z-40 border border-white absolute md:top-[12rem] md:-left-[18rem] top-[2rem] left-[5vw] w-[25vw] h-[25vw] md:w-36 md:h-36 rounded-full flex items-center justify-center cursor-pointer ${advancedCircleStyles}`}
        >
          <div className="flex flex-col justify-center items-center">
            <motion.span
              className="text-lg md:text-xl font-bold"
              whileHover={{ scale: 1.2, color: "rgba(255, 105, 180, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              1
            </motion.span>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-center md:font-semibold"
              whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              Strategic Blueprint
            </motion.p>
          </div>
        </motion.div>

        {/* Step 2 Circle */}
        <motion.div
          variants={circleVariants}
          whileHover="hover"
          transition={{ duration: 1.2 }}
          onClick={() => {
            setRectangleContent({
              title: "Implementation",
              description: "Once the digital marketing strategy is approved, we move into the implementation phase. This involves launching your campaigns across selected channels, such as social media, email, and online advertising.",
            });
            setIsDiamond(false);
          }}
          className={`bg-gray-700 border-white border absolute md:top-[28rem] md:left-[10rem] top-[45vh] left-[35vw] w-[25vw] h-[25vw] md:w-36 md:h-36 rounded-full flex items-center justify-center cursor-pointer ${advancedCircleStyles}`}
        >
          <div className="flex flex-col justify-center items-center">
            <motion.span
              className="text-lg md:text-xl font-bold"
              whileHover={{ scale: 1.2, color: "rgba(255, 105, 180, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              2
            </motion.span>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-center md:font-semibold"
              whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              Implementation
            </motion.p>
          </div>
        </motion.div>

        {/* Step 3 Circle */}
        <motion.div
          variants={circleVariants}
          whileHover="hover"
          transition={{ duration: 1.4 }}
          onClick={() => {
            setRectangleContent({
              title: "Performance Enhancement",
              description: "We track your campaigns' performance, make data-driven adjustments, and share regular reports to keep you updated on progress and results.",
            });
          }}
          className={`bg-gray-700 border-white absolute md:top-[12rem] md:-right-[18rem] top-[2rem] right-[5vw] w-[25vw] h-[25vw] md:w-36 md:h-36 rounded-full flex items-center justify-center border cursor-pointer ${advancedCircleStyles}`}
        >
          <div className="flex flex-col justify-center items-center">
            <motion.span
              className="text-lg md:text-xl font-bold"
              whileHover={{ scale: 1.2, color: "rgba(255, 105, 180, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              3
            </motion.span>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-center md:font-semibold"
              whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              Performance Enhancement
            </motion.p>
          </div>
        </motion.div>

        {/* Additional Colorful Star (Polygon) Animations at each corner of the rectangle */}
        {/* Top-left corner */}
        <motion.svg
          variants={polygonVariants}
          whileInView="whileInView"
          initial="initial"
          animate="animate"
          className="absolute md:top-0 top-[-2rem] left-0 transform translate-x-1/2 translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="url(#grad4)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#111", stopOpacity: 1 }} />
              <stop offset="0%" style={{ stopColor: "#38b6ff", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#00255C", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Top-right corner */}
        <motion.svg
          variants={polygonVariants}
          whileInView="whileInView"
          initial="initial"
          animate="animate"
          className="absolute md:top-0 top-[-2rem] right-0 transform translate-x-1/2 translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="url(#grad4)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(255,0,255)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Bottom-left corner */}
        <motion.svg
          variants={polygonVariants}
          whileInView="whileInView"
          initial="initial"
          animate="animate"
          className="absolute md:block hidden bottom-0 left-0 transform translate-x-1/2 translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="url(#grad4)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(255,0,255)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Bottom-right corner */}
        <motion.svg
          variants={polygonVariants}
          whileInView="whileInView"
          initial="initial"
          animate="animate"
          className="absolute md:block hidden bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="url(#grad4)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(255,0,255)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}