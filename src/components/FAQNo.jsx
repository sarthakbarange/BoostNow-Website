import React from 'react';
import { FaTrophy, FaChartLine, FaUserFriends, FaDatabase, FaComments, FaCogs } from 'react-icons/fa';

const FAQNo = () => {
  return (
    <section className="sm:p-8 p-2 text-white " id="why-choose">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-10">Why Choose BoostNow?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-12 gap-x-2 gap-y-4">
          {/* Proven Results */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaTrophy className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Proven Results</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              Our track record speaks for itself. We’ve consistently delivered measurable success for our clients, boosting their online presence and growth.
            </p>
          </div>

          {/* Customized Strategies */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaChartLine className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Customized Strategies</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              Every business is unique. We create tailored marketing strategies that fit your specific goals and target audience.
            </p>
          </div>

          {/* Expert Team */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaUserFriends className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Expert Team</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              Our skilled professionals are industry experts, dedicated to staying ahead of trends to ensure your campaigns are effective.
            </p>
          </div>

          {/* Data-Driven Decisions */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaDatabase className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Data-Driven Decisions</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              We utilize analytics to inform our strategies, ensuring continuous optimization and maximum ROI for your campaigns.
            </p>
          </div>

          {/* Transparent Communication */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaComments className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Transparent Communication</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              We prioritize clear, open communication, providing regular updates and detailed reports so you’re always informed.
            </p>
          </div>

          {/* Comprehensive Services */}
          <div className="bg-white rounded-3xl shadow-lg sm:p-6 p-3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaCogs className="sm:w-24 w-12 h-12 sm:h-24 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-600" />
            <h3 className="text-xl sm:text-4xl font-semibold text-gray-800 mb-4">Comprehensive Services</h3>
            <p className="text-gray-600 sm:text-lg text-sm">
              From SEO to social media management, content marketing to PPC, we offer a full suite of services to meet all your digital marketing needs under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQNo;
