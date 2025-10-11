import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contactpop_up({ showPopup, onClose }) {
  const countryData = [
    { code: "IND", dialCode: "+91", flag: "🇮🇳" },
    { code: "USA", dialCode: "+1", flag: "🇺🇸" },
    { code: "ZAF", dialCode: "+27", flag: "🇿🇦" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    message: "",
    dialCode: "+91",
  });
  const [country, setCountry] = useState({ code: "IND", dialCode: "+91" });

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);

  if (!showPopup) return null;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
        message: "",
      });

      if (typeof onClose === "function") onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // Mobile-first approach: use full viewport with minimal padding
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose && onClose()}
        aria-hidden="true"
      />

      {/* Glassmorphism Popup */}
      {/* Mobile: fit content with max height, Desktop: auto height */}
      <section
        role="dialog"
        aria-modal="true"
        className="
          relative w-full max-w-lg mx-auto my-4 sm:my-auto
          bg-gradient-to-br from-white/10 via-white/5 to-transparent
          backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden flex flex-col
          max-h-[95vh] sm:max-h-[90vh]
        "
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close contact form"
          onClick={() => onClose()}
          className="absolute top-2 right-2 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 text-white hover:bg-white hover:text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ✕
        </button>

        {/* Header (compact for mobile) */}
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
            Contact Us
          </h2>
          <p className="text-blue-200/80 text-xs hidden sm:block">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form - Optimized for mobile with scrolling */}
        <div className="p-3 sm:p-4 overflow-y-auto flex-1 min-h-0">
          <form className="space-y-3 w-full" onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20"
                />
              </div>
            </div>

            {/* Company + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Company"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                  Work Email
                </label>
                <input
                  name="workEmail"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                Phone Number
              </label>
              <div className="flex rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm w-full">
                <select
                  value={country.dialCode}
                  onChange={handleCountryChange}
                  className="bg-white/20 border-0 text-white text-xs p-2 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/30"
                >
                  {countryData.map((c) => (
                    <option key={c.code} value={c.dialCode} className="bg-gray-800 text-white">
                      {`${c.flag} ${c.dialCode}`}
                    </option>
                  ))}
                </select>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/10"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-blue-200/90 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 resize-none"
              />
            </div>

            {/* Submit */}
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
      </section>
    </div>
  );
}