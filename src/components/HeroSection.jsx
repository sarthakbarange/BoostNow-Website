"use client"

import { useEffect, useRef } from "react"
import Lottie from "lottie-react"
import futuristicSecure from "../assets/animation/exploration-3.json"
import aiOptimization from "../assets/animation/ai-optimization.json"
import generativeAI from "../assets/animation/generativeai.json"
import systemDesignAnim from "../assets/animation/unlimitedScale.json"
import {Link} from "react-router-dom"
import Contactpop_up from "./Contactpop_up"
import { useState } from "react"

// Dynamic import for TubesCursor to avoid SSR issues
const loadTubesCursor = async () => {
  if (typeof window !== 'undefined') {
    const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
    return module.default
  }
  return null
}

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const Popup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  }
  const canvasRef = useRef(null)

  useEffect(() => {
    let AOS // Declare AOS here
    let app = null

    // Initialize AOS
    import("aos").then((aosModule) => {
      AOS = aosModule
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: false,
        offset: 100,
      })

      window.addEventListener("scroll", () => {
        AOS.refresh()
      })
    })

    // Initialize TubesCursor
    const initTubesCursor = async () => {
      if (canvasRef.current) {
        try {
          const TubesCursor = await loadTubesCursor()
          if (TubesCursor) {
            app = TubesCursor(canvasRef.current, {
              tubes: {
                colors: ["#f967fb", "#53bc28", "#6958d5"],
                lights: {
                  intensity: 200,
                  colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                }
              }
            })
          }
        } catch (error) {
          console.error("Error initializing TubesCursor:", error)
        }
      }
    }

    initTubesCursor()

    return () => {
      // Cleanup
      if (app && typeof app.destroy === 'function') {
        app.destroy()
      }
      window.removeEventListener("scroll", () => {
        if (AOS) AOS.refresh()
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Tubes Cursor Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      <section
        className="z-10 bg-[url('/logo2.png')] bg-center bg-contain bg-no-repeat md:min-h-screen h-[100vh] md:h-[100vh] flex justify-center items-center relative overflow-hidden px-4 sm:px-8"
        data-aos="zoom-in"
        data-aos-duration="1000"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Add a semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <div className="absolute inset-0 "></div> */}

        {/* Top-left system design (web/ERP) */}
        <div className="sm:w-36 sm:h-36 w-20 h-20 absolute md:block md:top-[25%] top-[10%] md:left-[10%] left-[2%] z-10">
          <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-400/40 via-sky-500/30 to-indigo-500/40 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative rounded-2xl p-2 backdrop-blur-sm bg-white/5 ring-1 ring-white/10 shadow-[0_0_25px_rgba(59,130,246,0.25)]">
            <Lottie animationData={systemDesignAnim} loop autoplay style={{ width: '100%', height: '100%' }} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />
          </div>
        </div>

        {/* Top-right futuristic AI optimization */}
        <div className="sm:w-36 sm:h-36 w-20 h-20 ml-10 absolute md:block md:top-[25%] md:right-[13%] top-[12%] right-[2%] z-10">
          <div className="absolute -inset-8 bg-gradient-to-b from-cyan-400/30 to-blue-600/30 blur-2xl rounded-full"></div>
          <div className="relative rounded-2xl p-2 backdrop-blur-sm bg-white/5 ring-1 ring-white/10 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
            <Lottie animationData={aiOptimization} loop autoplay style={{ width: '100%', height: '100%' }} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />
          </div>
        </div>

        {/* Bottom-left secure exploration graphic */}
        <div className="w-20 h-20 sm:h-28 sm:w-28 mb-28 sm:mb-0 absolute bottom-[0%] left-[5%] md:bottom-[10%] md:left-[8%] z-10">
          <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-rose-500/30 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl p-2 backdrop-blur-sm bg-white/5 ring-1 ring-white/10 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <Lottie animationData={futuristicSecure} loop autoplay style={{ width: '100%', height: '100%' }} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />
          </div>
        </div>

        {/* Bottom-right generative AI */}
        <div className="md:w-36 md:h-36 w-24 h-24 mb-24 sm:mb-0 absolute md:block md:bottom-[12%] bottom-[0%] md:right-[5%] right-[8%] z-10">
          <div className="absolute -inset-10 bg-gradient-to-tl from-emerald-400/30 to-teal-500/30 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl p-2 backdrop-blur-sm bg-white/5 ring-1 ring-white/10 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            <Lottie animationData={generativeAI} loop autoplay style={{ width: '100%', height: '100%' }} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />
          </div>
        </div>

        {/* Content Layer */}
        <div className="text-center w-full text-white relative md:mt-32 z-10">
          <h1 className="text-3xl sm:text-5xl font-bold" data-aos="fade-down">
            ELEVATE YOUR BRAND
          </h1>
          <p className="mt-4 sm:mt-8 text-base sm:text-lg text-gray-300" data-aos="fade-down" data-aos-delay="200">
            Transform your digital presence with our tailored strategies to drive results.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={Popup}
              className="rounded-full px-5 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-medium hover:bg-gray-600 transition text-sm sm:text-base"
            >
              Schedule a Call
            </button>
            <Link to="/about" className="text-gray-300 hover:underline text-sm sm:text-base">
              Learn More →
            </Link>
          </div>
        </div>

        <Contactpop_up showPopup={showPopup} onClose={() => setShowPopup(false)} />
      </section>
    </div>
  )
}

export default HeroSection


// import React, { useEffect } from "react";
// import Companies from "../components/Companies";
// import Lottie from 'lottie-react';
// import privateSecureAnimation from '../assets/animation/private-secure.json'; 
// import unlimitedScale from '../assets/animation/unlimited-scale-1.json'; 
// import communications from '../assets/animation/forms-for-2-way-communications-1.json'; 

// const HeroSection = () => {
//   useEffect(() => {
//     import("aos").then((AOS) => {
//       AOS.init({
//         duration: 1200,
//         easing: "ease-in-out",
//         once: false,
//         offset: 100,
//       });

//       window.addEventListener("scroll", () => {
//         AOS.refresh();
//       });
//     });

//     return () => {
//       window.removeEventListener("scroll", () => {
//         AOS.refresh();
//       });
//     };
//   }, []);

//   return (
//     <div>
//       <section  
//       // style={{ backgroundImage: `url(/logo2.png)` }} 
//         className="z-10   bg-[url('/logo2.png')]  bg-center bg-contain   bg-no-repeat  md:min-h-screen h-[100vh] flex justify-center items-center relative overflow-hidden px-4 sm:px-8"
//         data-aos="zoom-in"
//         data-aos-duration="1000"
//       >
//         {/* GIF on hero section play button */}
//         <div className="sm:w-20 sm:h-20 bg-black/50 absolute md:block  md:top-[25%] top-[10%] md:left-[10%] left-[2%]">
//           <img src="/animation/fully_4_1.gif" alt="Cool GIF" className="sm:w-32 sm:h-32 w-16 h-16" />
//         </div>
//         {/* GIF on hero section eat play code repeat */}
//         <div className="sm:w-28 sm:h-28 w-12 h-12 ml-10 absolute md:block md:top-[25%] md:right-[13%] top-[12%] right-[2%]">
//           <Lottie animationData={unlimitedScale} />
//         </div>
//         {/* GIF on hero section privateSecureAnimation */}
//         <div className=" w-12 h-12 sm:h-20 sm:w-20 mb-28 sm:mb-0 absolute bottom-[25%] left-[5%] md:bottom-[10%] md:left-[8%]">
//           <Lottie animationData={privateSecureAnimation} />
//         </div>
//         {/* GIF on communications hero section */}
//         <div className="md:w-28 md:h-28 w-16 h-16 mb-24 sm:mb-0 absolute md:block  md:bottom-[12%] bottom-[25%] md:right-[5%] right-[8%]">
//           <Lottie animationData={communications} />
//         </div>
//         {/* Content Layer */}
//         <div className="text-center  w-full  text-white relative mt-32 md:mt-32">
//           <h1 className="text-3xl sm:text-5xl font-bold" data-aos="fade-down">
//             ELEVATE YOUR BRAND
//           </h1>
//           <p className="mt-4 sm:mt-8 text-base sm:text-lg text-gray-300" data-aos="fade-down" data-aos-delay="200">
//             Transform your digital presence with our tailored strategies to drive results.
//           </p>
//           <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
//             <a
//               href="#"
//               className="rounded-full px-5 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-medium hover:bg-gray-600 transition text-sm sm:text-base"
//             >
//               Schedule a Call
//             </a>
//             <a href="#" className="text-gray-300 hover:underline text-sm sm:text-base">
//               Learn More →
//             </a>
//           </div>
//           {/* <div className="">
//             <Companies />
//           </div> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;