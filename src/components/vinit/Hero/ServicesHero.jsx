import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaChartLine, FaUsers, FaEnvelopeOpenText } from "react-icons/fa";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-transparent md:pt-0 pt-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-10 backdrop-blur-md animate-pulse"></div>
      <div className="container mx-auto  flex flex-col justify-center py-10 px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:px-32 px-0 pt-6">
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight transform transition-transform hover:scale-105">
              <span className="block transform translate-z-2">BUILD WITH</span>
              <span className="block transform translate-z-2">BOOST</span>
            </h1>
            <p className="text-white dark:text-gray-300 text-lg">
              BoostNow offers innovative software solutions that accelerate business growth through custom web development and digital transformation.
            </p>
            <p className="text-white dark:text-gray-300 text-lg">
              We empower businesses with scalable, high-performance technology to stay ahead in a competitive digital landscape.
            </p>
            <button
              className="primary-btn px-6 py-3 text-gray-300 bg-primary border-2 border-primary-dark rounded-lg shadow-lg hover:bg-primary-dark hover:border-primary transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          <DotLottieReact
            className="w-[70vw] md:block hidden relative z-10 h-90 transition-transform duration-500 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="0"
            src="https://lottie.host/95a0cbb1-d642-4fc3-99cc-a6eab90f125a/nGM1W8hZBE.lottie"
            loop
            autoplay
          />
        </div>

        {/* Additional Content Section */}
        {showMore && (
          <div className="mt-12 bg-transparent border-2 border-white shadow-md rounded-lg p-8 space-y-6" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-4xl font-semibold text-center text-white">More About Us</h2>
            <p className="text-gray-200 dark:text-white-300 text-lg">
              We specialize in web development, mobile app development, and Digital Marketing to help businesses scale efficiently.
            </p>
            <p className="text-gray-200 dark:text-white-300 text-lg">
              Our expert team ensures top-notch security, seamless integration, and optimized performance for your digital solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105">
                <FaChartLine className="text-white text-5xl" />
                <h3 className="text-3xl text-white font-bold">70%</h3>
                <p className="text-gray-200 dark:text-white-300">of marketers say that SEO is key to their success.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105">
                <FaUsers className="text-white text-5xl" />
                <h3 className="text-3xl text-white font-bold">3.6 billion</h3>
                <p className="text-gray-200 dark:text-white-300">people use social media globally.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105">
                <FaEnvelopeOpenText className="text-white text-5xl" />
                <h3 className="text-3xl font-bold text-white">4.24%</h3>
                <p className="text-gray-200 dark:text-white-300">average email marketing ROI.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
