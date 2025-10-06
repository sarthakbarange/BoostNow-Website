import React, { useEffect } from "react";
import logo from "/logo2.png";
import { Link, useLocation } from "react-router-dom";
import TopFooter from "./TopFooter";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <TopFooter />
    {/* Call to Action Section */}
    <div className="relative bg-[#111827] overflow-hidden">
      {/* Call to Action Content */}
      <div className="relative z-10 text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          GET STARTED NOW
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          You can make a request for any of our services and we aim to reply within an hour during 
          business hours! We'd love to give you an answer about the cost and timing of the project.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-sm sm:text-base"
        >
          {/* <span className="mr-2">▶</span> */}
          SUBMIT REQUEST
        </a>
      </div>
    </div>

    <footer
      className="bg-gradient-to-b from-blue-900 to-black text-gray-300"
      style={{
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info - Logo and About */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-6">
              <img
                alt="BoostNow Logo"
                src={logo}
                className="h-10 w-10 sm:h-12 sm:w-12 mr-3 rounded-lg"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">BoostNow</h3>
                <p className="text-xs sm:text-sm font-bold text-white">Solution LLP</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0">
              Boost your business with innovative digital solutions. Stay ahead
              with our expert services and cutting-edge technology.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect with Us</h4>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a
                  href="mailto:support@boostnow.in"
                  aria-label="Email"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                >
                  <CiMail className="text-xl sm:text-2xl"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/boostnowsolutions/posts/?feedView=all"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                >
                  <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/services/itservices"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/training"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  IT Training
                </Link>
              </li>
              <li>
                <Link
                  to="/itrecruitment"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  IT Recruitment
                </Link>
              </li>
              <li>
                <Link
                  to="https://boostnowai.com/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  ERP Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Support & Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm "
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@boostnow.in"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm "
                >
                  Contact Support
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            {/* <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <h5 className="text-white font-medium text-sm mb-2">Get In Touch</h5>
              <p className="text-gray-400 text-xs mb-3">
                High-quality solutions for the most demanding customers
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <CiMail className="mr-2" />
                <span>support@boostnow.in</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0">
            <div className="text-center sm:text-left">
              <span>&copy; 2025 BoostNow Solution LLP. All Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-1 text-center sm:text-right">
              {/* <span>Made with excellence in India</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
}