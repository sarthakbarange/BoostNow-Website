import { useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Form() {
  const countryData = [
    { code: "IND", dialCode: "+91", flag: "🇮🇳" },
    { code: "USA", dialCode: "+1", flag: "🇺🇸" },
    { code: "ZAF", dialCode: "+27", flag: "🇿🇦" },
    // Add more countries
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    message: "",
    dialCode: "91",
  });
  const [country, setCountry] = useState({ code: "IND", dialCode: "+91" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countryData.find(
      (c) => c.dialCode === e.target.value || c.code === e.target.value
    );
    if (selectedCountry) {
      setCountry(selectedCountry);
      setFormData({ ...formData, dialCode: e.target.value });
    }
  };

  // function submit(e) {
  //   e.preventDefault();

  //   axios
  //     .post(
  //       "https://formcarry.com/s/XXXXXXX", // Replace with your endpoint URL
  //       formData,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       if (res.data.code === 200) {
  //         setSubmitted(true);
  //       } else {
  //         setError(res.data.message);
  //       }
  //     })
  //     .catch(() => {
  //       setError("An error occurred. Please try again.");
  //     });
  // }

  if (error) {
    return (
      <div className="text-center">
        <DotLottieReact
          src="https://lottie.host/c9b30964-e27e-4d16-87f4-e74b2cf6a8cb/W14ON2Ceav.lottie"
          loop
          autoplay
        />
        <p className="text-red-500 text-center animate-pulse">{error}</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="text-center">
        <DotLottieReact
          src="https://lottie.host/5b7e213b-70e0-43f1-a6c8-2a5d6f6c7732/CikjjRck3y.lottie"
          loop
          autoplay
        />
        <p className="text-green-500 text-center animate-bounce">
          We've received your message, thank you for contacting us!
        </p>
      </div>
    );
  }

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

        console.log("Data successfully sent to Google Sheets");
        // setModalOpen(false); // Close modal after submitting
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          workEmail: "",
          phoneNumber: "",
          message: "",
        });
        setSubmitted(true);
        // alert("Data successfully sent to Google Sheets")
    } catch (error) {
        console.error("Error:", error);
    }
  };
  return (
    <section className="relative z-10 w-full py-4 sm:py-6 overflow-x-hidden">
      {/* Background decorative elements */}
      
      <div className="max-w-md w-full px-3 sm:px-4 md:px-5 mx-auto relative">
        {/* Main form container with glass morphism effect */}
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Header section with gradient background */}
          <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-400/20 p-2 text-center border-b border-white/10 flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-7 h-7 sm:w-9 sm:h-9">
                <DotLottieReact
                  src="https://lottie.host/eb1810d4-9f06-4c4d-9b01-e4ab15735e7b/YkANIylCA9.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-1">
              Get In Touch
            </h2>
            <p className="text-blue-200/80 text-xs hidden sm:block">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          {/* Form section */}
          <div className="p-2 sm:p-3 overflow-hidden">
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information Section */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Company Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <div className="group">
                    <label htmlFor="companyName" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                      Company Name 
                    </label>
                    <div className="relative">
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Your Company"
                        value={formData.companyName}
                        onChange={handleChange}
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
                        placeholder="company.com"
                        value={formData.workEmail}
                        onChange={handleChange}
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
                <div className="group w-full">
                  <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                    Phone Number 
                  </label>
                  <div className="flex rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm shadow-inner w-full">
                    <select
                      value={country.dialCode}
                      onChange={handleCountryChange}
                      className="bg-white/20 border-0 text-white text-xs p-2 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/30 transition-all duration-300"
                    >
                      {countryData.map((c) => (
                        <option key={c.code} value={c.dialCode} className="bg-gray-800 text-white">
                          {`${c.flag} ${c.dialCode}`}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="flex-1 border-0 bg-transparent p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-semibold text-blue-200 flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Your Message
                </h3>
                <div className="group">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                    Tell us about your project 
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project requirements, goals, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="1"
                      required
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 resize-none shadow-inner"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-2.5 rounded-lg text-sm font-bold hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}