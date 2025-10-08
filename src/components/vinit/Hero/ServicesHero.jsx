import React from "react"; // Corrected this line
import { useState } from "react"; // Added this since you use it
import { FaChartLine, FaUsers, FaEnvelopeOpenText } from "react-icons/fa";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-transparent pt-20 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-opacity-10 backdrop-blur-md animate-pulse"></div>

      <div className="container mx-auto flex flex-col justify-center py-10 px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center md:px-16 px-0 pt-6">
          {/* Left Text Section */}
          <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight transform transition-transform hover:scale-105">
              <span className="block">BUILD WITH</span>
              <span className="block">BOOST</span>
            </h1>

            <p className="text-white dark:text-gray-300 text-xl leading-relaxed">
              BoostNow offers innovative software solutions that accelerate business growth through custom web development and digital transformation.
            </p>
            <p className="text-white dark:text-gray-300 text-xl leading-relaxed">
              We empower businesses with scalable, high-performance technology to stay ahead in a competitive digital landscape.
            </p>

            <button
              className="primary-btn px-8 py-4 text-lg text-gray-300 bg-primary border-2 border-primary-dark rounded-lg shadow-lg hover:bg-primary-dark hover:border-primary transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Right GIF Section */}
          <div
            className="md:flex hidden justify-center"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            <img
              src="/animation/Loop Glow GIF.gif"
              alt="BoostNow Animation"
              className="w-full max-w-[650px] h-auto rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Additional Content Section */}
        {showMore && (
          <div
            className="relative mt-12 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8 space-y-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
            
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
            </div>
            
            <h2 className="text-4xl font-semibold text-center text-white relative z-10">
              More About Us
            </h2>
            <p className="text-gray-300 text-lg relative z-10">
              We specialize in web development, mobile app development, and
              Digital Marketing to help businesses scale efficiently.
            </p>
            <p className="text-gray-300 text-lg relative z-10">
              Our expert team ensures top-notch security, seamless integration,
              and optimized performance for your digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
              <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-400/80 overflow-hidden group">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
                
                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full backdrop-blur-sm">
                    <FaChartLine className="text-cyan-400 text-5xl" />
                  </div>
                  <h3 className="text-3xl text-white font-bold">70%</h3>
                  <p className="text-gray-300">
                    of marketers say that SEO is key to their success.
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50"></div>
              </div>

              <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-400/80 overflow-hidden group">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
                
                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full backdrop-blur-sm">
                    <FaUsers className="text-cyan-400 text-5xl" />
                  </div>
                  <h3 className="text-3xl text-white font-bold">3.6 billion</h3>
                  <p className="text-gray-300">
                    people use social media globally.
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50"></div>
              </div>

              <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-400/80 overflow-hidden group">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
                
                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full backdrop-blur-sm">
                    <FaEnvelopeOpenText className="text-cyan-400 text-5xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">4.24%</h3>
                  <p className="text-gray-300">
                    average email marketing ROI.
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;