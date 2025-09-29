import { useState, useEffect } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contactpop_up({showPopup, onClose}) {
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

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);

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
        <div className="mx-auto h-24 sm:h-28 md:h-32 w-auto">
          <DotLottieReact
            src="https://lottie.host/5b7e213b-70e0-43f1-a6c8-2a5d6f6c7732/CikjjRck3y.lottie"
            loop
            autoplay
          />
        </div>
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
        })
        // Close popup after successful submit
        if (typeof onClose === "function") onClose();
        // console.log("dialCode"+country.dialCode)
        // alert("Data successfully sent to Google Sheets")
    } catch (error) {
        console.error("Error:", error);
    }
};
if(!showPopup){ 
    return null;
}
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose && onClose()}
        aria-hidden="true"
      />
      {/* Modal container */}
      <section
        role="dialog"
        aria-modal="true"
        className="relative w-full mx-4 sm:mx-6 mt-6 sm:mt-8 mb-10 sm:mb-12 max-h-[80vh] overflow-y-auto mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg border-2 border-blue-500"
      >
        <button
          type="button"
          aria-label="Close contact form"
          onClick={() => onClose()}
          className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/70 text-gray-700 hover:bg-white hover:text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ✕
        </button>
        <div className="text-center mx-auto h-24 sm:h-28 md:h-32 w-auto">
          <DotLottieReact
            src="https://lottie.host/eb1810d4-9f06-4c4d-9b01-e4ab15735e7b/YkANIylCA9.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 sm:mb-6">
          Contact Us
        </h2>
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter Your Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full min-w-0 rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter Your LastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full min-w-0 rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
            >
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Enter Your Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 block w-full min-w-0 rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
            />
          </div>

          <div>
            <label
              htmlFor="workEmail"
              className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
            >
              Work Email
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              placeholder="Enter Your Email"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full min-w-0 rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
            >
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={country.dialCode}
                onChange={handleCountryChange}
                className="w-24 sm:w-28 md:w-32 rounded-lg sm:rounded-l-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg p-2 sm:p-3 bg-blue-50 hover:bg-white hover:shadow-lg"
              >
                {countryData.map((c) => (
                  <option key={c.code} value={c.dialCode}>
                    {`${c.flag} ${c.dialCode}`}
                  </option>
                ))}
              </select>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="flex-1 min-w-0 rounded-lg sm:rounded-r-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm sm:text-base md:text-lg font-bold text-blue-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="mt-1 block w-full min-w-0 rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500 p-2 sm:p-3 text-base sm:text-lg bg-blue-50 hover:bg-white hover:shadow-lg"
            />
          </div>

          <div className="relative">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 via-gray-500 to-blue-500 text-white py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-bold hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Send
            </button>
            <div className="hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 transform">
              <DotLottieReact
                src="https://lottie.host/1f4e7a70-5f9d-480c-a44c-cf3a5951c6a3/LXEk7kMPg2.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
