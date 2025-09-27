"use client"

import { useEffect } from "react"
import Lottie from "lottie-react"
import privateSecureAnimation from "../assets/animation/private-secure.json"
import unlimitedScale from "../assets/animation/unlimited-scale-1.json"
import communications from "../assets/animation/forms-for-2-way-communications-1.json"
import {Link} from "react-router-dom"
const HeroSection = () => {
  useEffect(() => {
    let AOS // Declare AOS here
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

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh()
      })
    }
  }, [])

  return (
    <div>
      <section
        className="z-10 bg-[url('/logo2.png')]  bg-center bg-contain   bg-no-repeat md:min-h-screen h-[80vh] md:h-[100vh] flex justify-center items-center relative overflow-hidden px-4 sm:px-8"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* Add a semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <div className="absolute inset-0 "></div> */}

        {/* GIF on hero section play button */}
        <div className="sm:w-20 sm:h-20 absolute md:block md:top-[25%] top-[10%] md:left-[10%] left-[2%] z-10">
          <img src="/animation/fully_4_1.gif" alt="Cool GIF" className="sm:w-32 sm:h-32 w-16 h-16" />
        </div>
        {/* GIF on hero section eat play code repeat */}
        <div className="sm:w-28 sm:h-28 w-12 h-12 ml-10 absolute md:block md:top-[25%] md:right-[13%] top-[12%] right-[2%] z-10">
          <Lottie animationData={unlimitedScale} />
        </div>
        {/* GIF on hero section privateSecureAnimation */}
        <div className="w-12 h-12 sm:h-20 sm:w-20 mb-28 sm:mb-0 absolute bottom-[0%] left-[5%] md:bottom-[10%] md:left-[8%] z-10">
          <Lottie animationData={privateSecureAnimation} />
        </div>
        {/* GIF on communications hero section */}
        <div className="md:w-28 md:h-28 w-16 h-16 mb-24 sm:mb-0 absolute md:block md:bottom-[12%] bottom-[0%] md:right-[5%] right-[8%] z-10">
          <Lottie animationData={communications} />
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
            <Link
              to="/contact"
              className="rounded-full px-5 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-medium hover:bg-gray-600 transition text-sm sm:text-base"
            >
              Schedule a Call
            </Link>
            <Link to="/about" className="text-gray-300 hover:underline text-sm sm:text-base">
              Learn More →
            </Link>
          </div>
          {/* <div className="">
            <Companies />
          </div> */}
        </div>
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