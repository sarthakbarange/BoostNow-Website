import React, { useState } from "react";

const PopupForm = ({ serviceTitle, closeForm }) => {
  const [formData, setFormData] = useState({
    service: serviceTitle,
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      console.log("Data successfully sent to Google Sheets");
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        service: "",
      });
      closeForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Main form container with glass morphism effect */}
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header section with gradient background */}
          <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-400/20 p-6 text-center border-b border-white/10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-2">
              Enroll Now
            </h2>
            <p className="text-blue-200/80 text-sm">Sign up for {serviceTitle}</p>
          </div>

          {/* Form section */}
          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-blue-200/90 mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-blue-200/90 mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-blue-200/90 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Phone Field */}
              <div className="group">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-blue-200/90 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 rounded-lg text-sm font-bold hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">Submit</span>
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-3 rounded-lg text-sm font-medium text-blue-200 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
