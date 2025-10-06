
"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import privateSecureAnimation from "../assets/animation/private-secure.json";
import unlimitedScale from "../assets/animation/unlimited-scale-1.json";
import communications from "../assets/animation/forms-for-2-way-communications-1.json";
import { Link } from "react-router-dom";
import Contactpop_up from "./Contactpop_up";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  useEffect(() => {
    let AOS;
    import("aos").then((aosModule) => {
      AOS = aosModule;
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: false,
        offset: 100,
      });
    });

    const handleScroll = () => {
      if (AOS) AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative z-10 bg-[url('/blogo.png')] bg-center bg-contain bg-no-repeat md:min-h-screen h-[80vh] md:h-[100vh] flex justify-center items-center overflow-hidden px-4 sm:px-8"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animations / GIFs */}
      <div className="absolute top-[10%] left-[2%] md:top-[25%] md:left-[10%] z-10">
        <img
          src="/animation/fully_4_1.gif"
          alt="Cool GIF"
          className="w-16 h-16 sm:w-32 sm:h-32 filter invert-60 sepia-35 saturate-[1900%] hue-rotate-145 brightness-100 contrast-[105%]"
        />
      </div>

      <div className="absolute top-[12%] right-[2%] md:top-[25%] md:right-[13%] z-10 w-12 h-12 sm:w-28 sm:h-28">
        <Lottie animationData={unlimitedScale} />
      </div>

      <div className="absolute bottom-[0%] left-[5%] md:bottom-[10%] md:left-[8%] z-10 w-12 h-12 sm:w-20 sm:h-20">
        <Lottie animationData={privateSecureAnimation} />
      </div>

      <div className="absolute bottom-[0%] right-[8%] md:bottom-[12%] md:right-[5%] z-10 w-16 h-16 md:w-28 md:h-28 sm:mb-0">
        <Lottie animationData={communications} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white md:mt-32 w-full max-w-4xl">
        <h1 className="text-3xl sm:text-5xl font-bold flex flex-wrap justify-center gap-2 md:flex-nowrap" data-aos="fade-down">
          <span className="md:inline">Department as a</span>
          <span className="text-cyan-600 block sm:inline">
            <Typewriter
              options={{
                strings: ["Service", "Strategy", "Solution", "Support"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        {/* Subheading - text color changed to white */}
        <p className="mt-4 sm:mt-8 text-base sm:text-lg text-white" data-aos="fade-down" data-aos-delay="200">
          Your complete IT department on demand — faster, smarter, better than in-house.
        </p>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={handlePopup}
            className="rounded-full px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(0,200,255,0.8)] hover:scale-105 transition"
          >
            Get Free IT Audit
          </button>
          <Link to="/about" className="text-gray-300 hover:underline text-sm sm:text-base">
            Learn More →
          </Link>
        </div>

        {/* Last Line */}
        <p className="mt-6 text-white-400 text-sm sm:text-base">
          Trusted by SMEs, startups, and exporters across industries
        </p>
      </div>

      {/* Popup */}
      <Contactpop_up showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default HeroSection;
