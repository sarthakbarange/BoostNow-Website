import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import call from '../assets/gif/contact.gif';
import faq from '../assets/gif/faq.gif';
// import support from '../assets/gif/support.gif';

export default function Support({ id }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    workEmail: '',
    message: '',
    service: '',
    time: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Delay animation for better effect
    return () => clearTimeout(timer);
  }, []);

  // Prevent page scrolling when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(formData),
      });

      console.log("Appointment Data successfully sent to Google Sheets");
      setShowPopup(false); // Close modal after submitting
      setFormData({
        firstName: '',
    lastName: '',
    phoneNumber: '',
    workEmail: '',
    message: '',
    service: '',
    time: ''
      })
      // console.log("dialCode"+country.dialCode)
      // alert("Data successfully sent to Google Sheets")
    } catch (error) {
      console.error("Error:", error);
    }
};
  return (
    <section id={id} className="max-w-7xl mx-auto p-8 text-white rounded-2xl mt-6">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Help Center</h2>
      {/* MODIFIED: Changed gap-6 to gap-5 for closer cards, around 0.78 inches apart */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"> 
        {/* Get Support */}
        {/* <div
          className="flex flex-col items-center bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-100 cursor-pointer"
        >
          <img src={support} alt="Get Support" className="w-40 h-40 mb-4 transition-transform duration-300 transform hover:scale-110" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 transform hover:text-blue-600">Get Support &rarr;</h3>
          <p className="text-gray-600 text-center transition-all duration-300 transform hover:text-gray-800">Reach out to our team for assistance.</p>
        </div> */}

        {/* Appointment Popup Trigger (MODIFIED CARD STYLES) */}
        {/* MODIFIED: Removed max-w-xl mx-auto to allow the card to fill the horizontal grid space */}
        <div onClick={() => setShowPopup(true)} 
          className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
          {/* The image/illustration container for Appointment */}
          <div className="flex justify-center items-center w-full max-h-48 overflow-hidden rounded-xl">
              {/* The current image setup doesn't match the image well, so I'll use a placeholder structure similar to the image's illustration style (minimalistic and centered) */}
              {/* Placeholder for the 'Book an Appointment' Illustration from the image */}
              <div className="relative w-full h-48 sm:h-56 bg-blue-50/50 rounded-t-2xl flex items-center justify-center overflow-hidden">
                {/* Simplified Illustration elements based on the image */}
                <div className="w-64 h-40 bg-white rounded-lg shadow-xl p-4 flex flex-col items-center">
                    <div className="text-xs font-semibold text-gray-700 mb-2">Book an Appointment</div>
                    <div className="w-12 h-12 rounded-full bg-blue-200/50 border-4 border-white shadow-md mb-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div className="w-4/5 h-1 bg-gray-200 rounded my-1"></div>
                    <div className="w-3/5 h-1 bg-gray-200 rounded mb-2"></div>
                    <div className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md cursor-pointer mt-1">Schedule Appointment</div>
                </div>
                {/* Blue/Pink overlay details (as seen in the image) */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-100/50 rounded-full blur-2xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl opacity-50"></div>
              </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-1">Appointment &rarr;</h3>
          <p className="text-gray-600 text-center px-4 mb-2">Schedule an appointment with our experts.</p>
        </div>

        {/* FAQ (MODIFIED CARD STYLES) */}
        {/* MODIFIED: Removed max-w-xl mx-auto to allow the card to fill the horizontal grid space */}
        <Link to="/faq" 
          className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
          {/* Image/Icon Section - Match the size and container to the Appointment card */}
          <div className="flex justify-center items-center w-full h-48 sm:h-56 bg-white rounded-t-2xl">
              <img src={faq} alt="FAQ" className="w-40 h-40" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-1">FAQ &rarr;</h3>
          <p className="text-gray-600 text-center px-4 mb-2">Find answers to frequently asked questions.</p>
        </Link>
      </div>

      {/* Popup Form (UNCHANGED) */}
      {showPopup && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-[150px] md:items-start md:pt-[100px] overflow-y-auto md:overflow-hidden">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto relative my-4 md:my-0">
            {/* Main form container with glass morphism effect */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[90vh]">
              {/* Header section with gradient background */}
              <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-400/20 p-2 sm:p-3 text-center border-b border-white/10 flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10">
                    <DotLottieReact
                      src="https://lottie.host/eb1810d4-9f06-4c4d-9b01-e4ab15735e7b/YkANIylCA9.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-1">
                  Book an Appointment
                </h2>
                <p className="text-blue-200/80 text-xs hidden sm:block">Schedule a meeting with our experts to discuss your requirements.</p>
              </div>

              {/* Form section */}
              <div className="p-5 sm:p-7 overflow-y-auto md:overflow-hidden flex-1">
                <form className="space-y-3 w-full" onSubmit={handleSubmit}>
                  {/* Personal Information Section */}
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div className="group">
                        <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          First Name 
                        </label>
                        <div className="relative">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          Last Name 
                        </label>
                        <div className="relative">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div className="group">
                        <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          Phone Number 
                        </label>
                        <div className="relative">
                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            placeholder="Your phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="workEmail" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          Work Email 
                        </label>
                        <div className="relative">
                          <input
                            id="workEmail"
                            name="workEmail"
                            type="email"
                            placeholder="your@company.com"
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details Section */}
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Appointment Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div className="group">
                        <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          Service Type 
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          >
                            <option value="" className="bg-gray-800 text-white">Select a Service</option>
                            <option value="IT Services" className="bg-gray-800 text-white">IT Services</option>
                            <option value="IT Training" className="bg-gray-800 text-white">IT Training</option>
                            <option value="ERP" className="bg-gray-800 text-white">ERP</option>
                            <option value="Other" className="bg-gray-800 text-white">Other</option>
                          </select>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="time" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                          Preferred Time 
                        </label>
                        <div className="relative">
                          <input
                            id="time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-2">
                    {/* <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Your Message
                    </h3> */}
                    <div className="group">
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                        Tell us about your requirements 
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Describe your requirements, goals, or any questions you have..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="1"
                          required
                          className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 resize-none shadow-inner"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    {/* Submit Buttons */}
                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setShowPopup(false)}
                        className="flex-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white py-2.5 rounded-lg text-sm font-bold hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="group relative flex-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-2.5 rounded-lg text-sm font-bold hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          Book Appointment
                          <div className="w-4 h-4">
                            <DotLottieReact
                              src="https://lottie.host/1f4e7a70-5f9d-480c-a44c-cf3a5951c6a3/LXEk7kMPg2.lottie"
                              loop
                              autoplay
                            />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}