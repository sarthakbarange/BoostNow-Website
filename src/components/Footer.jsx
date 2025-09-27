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
    <footer
      className="text-gray-400 bg-gradient-to-b from-[#111827] via-[#03080f] to-[#000000]" // Set background to transparent
      style={{
        position: "relative",
        zIndex: 10,
      }}
    >
      <hr className="border-t border-white mx-16 py-10" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and About */}
        <div>
          <img
            alt="BoostNow Logo"
            src={logo}
            className="h-12 w-12 mb-4 rounded-full"
          />
          <p>
            Boost your business with innovative digital solutions. Stay ahead
            with our expert services.
          </p>
          <div>
            <h3 className="text-lg font-bold mb-4 mt-4 text-gray-200">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              {/* <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a> */}
              {/* <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                href="mailto:support@boostnow.in"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                <CiMail className="text-xl font-bold mt-[2px]"/>
              </a>
              <a
                href="https://www.linkedin.com/company/boostnowsolutions/posts/?feedView=all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-20">
          <h3 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-200">Policies</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Cookie Policy
              </Link>
            </li> */}
            <li>
              <Link
                to="/faq"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 py-8 border-t border-gray-700 text-center">
        <p>&copy; 2025 BoostNow Solution LLP. All Rights Reserved.</p>
      </div>
    </footer>
    </section>
  );
}
