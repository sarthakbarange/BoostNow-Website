// import Companies from "./Companies";
import Lottie from "lottie-react";
// import privateSecureAnimation from '../assets/animation/Animation - 1737719513141.json'; // Update path as needed
import privateSecureAnimation from "../assets/animation/private-secure.json"; // Update path as needed
import cta from "../assets/animation/cta-2.json"; // Update path as needed
import unlimitedScale from "../assets/animation/unlimited-scale-1.json"; // Update path as needed
import dynamicPricing from "../assets/animation/dynamicPricing.json"; // Update path as needed
import dynamicGreeting from "../assets/animation/dynamic-greeting-2.json"; // Update path as needed
import personalization from "../assets/animation/personalization-2-1.json"; // Update path as needed
import exploration from "../assets/animation/exploration-3.json"; // Update path as needed
import countdown from "../assets/animation/countdown-2.json"; // Update path as needed
import aiOptimization from "../assets/animation/ai-optimization.json"; // Update path as needed
import after from "../assets/animation/after.json"; // Update path as needed
import generativeai from "../assets/animation/generativeai.json"; // Update path as needed
import communications from "../assets/animation/forms-for-2-way-communications-1.json"; // Update path as needed

const Features = () => {
  const logos = [
    // "/logo.png"
    "https://www.blings.io/wp-content/uploads/2024/07/logo-2.png",
    "https://www.blings.io/wp-content/uploads/2024/07/logo-3.png",
    "https://www.blings.io/wp-content/uploads/2024/07/logo-4.png",
    "https://www.blings.io/wp-content/uploads/2024/07/logo-5.png",
    "https://www.blings.io/wp-content/uploads/2024/07/logo-6.png",
    "https://www.blings.io/wp-content/uploads/2024/07/logo-1.png",
  ];

  return (
    <div className="bg-transparent z-10 mx-4 relative mb-10 text-gray-300 sm:p-6">
      <div className="flex md:gap-5 gap-2 flex-col sm:mx-20">
        <div className="clip-shape "></div>
        {/* Features 1 Row */}
        <div className="flex flex-wrap max-[639px]:flex-row flex-col sm:flex-row sm:flex-nowrap sm:h-[26vh] gap-2 max-[639px]:gap-1 justify-center">
          <div className="flex flex-wrap flex-col  sm:flex-row sm:flex-nowrap sm:h-[26vh] gap-5">
            <div className="flex md:hidden relative sm:px-4 sm:w-[66%] mx-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 200"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {/* <stop offset="0%" stopColor="#ff9ae3" /> */}
                    <stop offset="0%" stopColor="#38b6ff" />
                    <stop offset="40%" stopColor="#00255C" />
                    <stop offset="90%" stopColor="#000" />
                    <stop offset="100%" stopColor="#000" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="150px"
                  fontWeight="800"
                  fill="url(#gradient)"
                  stroke="white"
                  strokeWidth="1"
                >
                  FEATURES
                </text>
              </svg>
              <div className="flex justify-center items-center">
                <i
                  className=" absolute md:top-24 md:left-8 top-1 right-3 animate-blink shadow-lg  text-gray-100 sm:text-2xl text-xl"
                  data-bling="i-1"
                  data-rocket-lazy-bg="loaded"
                >
                  ★
                </i>
                <i
                  className="absolute md:top-6 md:left-28 bottom-1 left-1 animate-blink shadow-lg  text-gray-100 text-2xl"
                  data-bling="i-1"
                  data-rocket-lazy-bg="loaded"
                >
                  ★
                </i>
                <i
                  className="absolute md:bottom-24 md:right-14 bottom-2 right-28 animate-blink shadow-lg text-gray-100 text-2xl"
                  data-bling="i-1"
                  data-rocket-lazy-bg="loaded"
                >
                  ★
                </i>
                <i
                  className="absolute md:bottom-14 md:right-48 bottom-2 right-28 animate-blink shadow-lg text-gray-100 text-2xl"
                  data-bling="i-1"
                  data-rocket-lazy-bg="loaded"
                >
                  ★
                </i>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[25vw] justify-between border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 transition border-white bg-black p-2 sm:p-4 rounded-2xl max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs h-20 font-medium text-center max-[639px]:break-words">
              Integrations
            </h3>
            <div className="overflow-hidden bg-black py-2 max-[639px]:py-1">
              <div className="flex w-[calc(100%*2)] animate-scroll">
                {/* {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex justify-center items-center w-20 sm:w-28 h-12 sm:h-20 mx-2 sm:mx-4"
                  >
                    <img
                      src={logo}
                      alt={`Company Logo ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))} */}
                {logos.map((logo, index) => (
                  <div
                    key={index + logos.length}
                    className="flex-shrink-0 flex justify-center items-center w-20 sm:w-28 h-12 sm:h-20 mx-2 sm:mx-4"
                  >
                    <img
                      src={logo}
                      alt={`Company Logo ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center sm:w-[24vw] border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[27%]">
            <h3 className="sm:text-xl text-xs font-medium text-center h-20 max-[639px]:break-words">
              Unlimited Scale
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={unlimitedScale}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center sm:w-[24vw] border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs break-words font-medium text-center h-20 max-[639px]:break-words max-[639px]:w-[100%]">
              Private and Secure
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={privateSecureAnimation}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs font-medium text-center max-[639px]:truncate">
              Countdown
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={countdown}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex md:hidden  flex-col  hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center  p-2 sm:p-4 rounded-2xl bg-transparent transition max-[639px]:w-[27%]">
            {/* <h3 className="sm:text-xl text-sm font-medium text-center max-[639px]:truncate">
              Countdown
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={countdown}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div> */}
          </div>
          <div className="flex flex-col items-center justify-center sm:px-2 sm:w-[10vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs break-words font-medium text-center max-[639px]:truncate">
              Dynamic Pricing
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={dynamicPricing}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
        </div>
        {/* Features 2 Row */}
        <div className="flex flex-wrap max-[639px]:flex-row flex-col sm:flex-row sm:flex-nowrap sm:h-[26vh] gap-2 max-[639px]:gap-1 justify-center">
          <div className="flex flex-col sm:w-[32vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white bg-black p-2 sm:p-4 rounded-2xl transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl  h-16 text-xs font-medium text-center max-[639px]:truncate">
              Personalization
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={personalization}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="hidden md:block relative sm:px-4 sm:w-[66%] mx-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 200"
              className="w-full h-auto max-[639px]:h-24"
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
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="150px"
                fontWeight="800"
                fill="url(#gradient)"
                stroke="white"
                strokeWidth="1"
                className="max-[639px]:text-[80px]"
              >
                FEATURES
              </text>
            </svg>
            <div className="flex justify-center items-center">
              <i
                className="absolute md:top-24 md:left-8 top-1 right-3 animate-blink shadow-lg text-gray-100 sm:text-2xl text-sm"
                data-bling="i-1"
                data-rocket-lazy-bg="loaded"
              >
                ★
              </i>
              <i
                className="absolute md:top-6 md:left-28 bottom-1 left-1 animate-blink shadow-lg text-gray-100 sm:text-2xl text-sm"
                data-bling="i-1"
                data-rocket-lazy-bg="loaded"
              >
                ★
              </i>
              <i
                className="absolute md:bottom-24 md:right-14 bottom-2 right-10 animate-blink shadow-lg text-gray-100 sm:text-2xl text-sm"
                data-bling="i-1"
                data-rocket-lazy-bg="loaded"
              >
                ★
              </i>
              <i
                className="absolute md:bottom-14 md:right-48 bottom-2 right-20 animate-blink shadow-lg text-gray-100 sm:text-2xl text-sm"
                data-bling="i-1"
                data-rocket-lazy-bg="loaded"
              >
                ★
              </i>
            </div>
          </div>
          <div className="flex flex-col sm:w-[9.5vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl  h-16 text-xs font-medium text-center max-[639px]:truncate">
              Exploration
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={exploration}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:w-[9.7vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl  text-xs font-medium text-center max-[639px]:break-words h-16">
              Dynamic Greeting
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={dynamicGreeting}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
        </div>
        {/* Features 3 */}
        <div className="flex flex-wrap max-[639px]:flex-row flex-col sm:flex-row sm:flex-nowrap sm:h-[26vh] gap-2 max-[639px]:gap-1 justify-center">
          <div className="flex flex-col sm:w-[10vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs font-medium text-center max-[639px]:truncate">
              AI Optimization
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={aiOptimization}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex md:hidden flex-col sm:w-[10vw]  hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center  p-2 sm:p-4 rounded-2xl bg-transparent transition max-[639px]:w-[25%]">
            {/* <h3 className="sm:text-xl text-sm font-medium text-center max-[639px]:truncate">
              AI Optimization
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={aiOptimization}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div> */}
          </div>
          <div className="flex flex-col border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 sm:w-[10vw] justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl text-xs font-medium text-center max-[639px]:truncate">
              CTA
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={cta}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:w-[25vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl h-20 text-xs font-medium text-center max-[639px]:break-words max-[639px]:w-[100%]">
              Forms For 2-Way Communications
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={communications}
                style={{ width: 60, height: 60 }}
                className="sm:w-[100px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:w-[24vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl  h-20 text-xs font-medium text-center max-[639px]:break-words">
              Adobe After Effects
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={after}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:w-[24vw] border hover:border-[#38b6ff] hover:shadow-[0_0_15px_5px_rgba(173,216,230,0.5)] duration-300 justify-center items-center border-white p-2 sm:p-4 rounded-2xl bg-black transition max-[639px]:w-[25%]">
            <h3 className="sm:text-xl  h-20 text-xs font-medium text-center max-[639px]:break-words">
              Generative AI Creation
            </h3>
            <div className="flex justify-end">
              <Lottie
                animationData={generativeai}
                style={{ width: 80, height: 60 }}
                className="sm:w-[120px] sm:h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
