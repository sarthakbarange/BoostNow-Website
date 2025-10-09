import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "“Blings has revolutionized our CRM communications with engaging, gamified video content that elevates the user journey and delivers tangible results—more app downloads, increased user registrations and higher sales compared to benchmarks. Their seamless integration into our marketing strategy has made them an indispensable partner.”",
      stats: [
        { value: "4.2X", text: "Increase Sales" },
        { value: "8.6X", text: "Instagram Followers" },
        { value: "83%", text: "Engagement Increase" },
      ],
      author: "EYAL PADAN",
      position: "CMO, McDonalds IL",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.9Sa3255SamwVeJNkpJXFdwHaHa&pid=Api&P=0&h=220",
      logo: "/logo.png",
    },
    {
      quote:
        "“Blings' innovation is reshaping the way we engage with users, turning passive communication into an interactive experience that boosts engagement, sales, and brand loyalty.”",
      stats: [
        { value: "5.1X", text: "Increase Sales" },
        { value: "9.0X", text: "Instagram Followers" },
        { value: "89%", text: "Engagement Increase" },
      ],
      author: "JANE DOE",
      position: "Marketing Director, ABC Corp.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UYagQDMo7CCbBLXOPB5etAHaHa&pid=Api&P=0&h=220",
      logo: "https://tse4.mm.bing.net/th?id=OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7&pid=Api&P=0&h=220",
    },
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-transparent relative z-10 h-[100vh] text-white text-center py-10">
      {/* Section-scoped cursor-follow glow */}
      <div className="blob-local" />
      <h1 className="text-[4rem] font-bold mb-10">ENTERPRISE GRADE</h1>
      <div className="flex items-center justify-between">
        {/* <div className="triangle-right"></div> */}
        <div className=" ">
      <div
        // className="bg-gradient-to-b from-[#1c1c1c] via-[#2d2d2d] to-[#434343]"
        className="bg-gradient-to-b from-[#000000] via-[#2d2d2d] to-[#434343]"
        style={{
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          width: "130px",
          height: "300px",
        }}
        
      ></div>
      
    </div>
        <div className="flex justify-center items-center flex-wrap gap-10">
        <div className="relative w-50 h-50 mr-16 transform rotate-45 ">
          {/* <div className="w-full h-full  overflow-hidden bg-white rounded-md"> */}
          {/* <div className="w-full h-full  overflow-hidden   bg-white rounded-md">
            <img
              src={testimonials[currentIndex].image}
              alt="Person"
              className=" w-60 h-60 object-cover  transform rotate-[-45deg]"
            />
          </div> */}
{/* <div className="w-full h-full overflow-hidden bg-white rounded-md"> */}
  <svg
    width="556px"
    height="556px"
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0)"
    stroke="#000000"
    className="w-full h-full"
  >
    <clipPath id="svgClipPath">
      <path
        d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
        stroke="#000000"
        strokeWidth="0.48"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </clipPath>
    <image
      href={testimonials[currentIndex].image}
      alt="Person"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#svgClipPath)"
      transform="rotate(-45, 12, 12)"
    />
  </svg>
{/* </div> */}

        </div>
        <div className="max-w-lg text-left w-full transition-all duration-500 ease-in-out">
        <div className="h-[280px]">
          <p className="italic text-lg mb-5">
            {testimonials[currentIndex].quote}
          </p>

          <div className="flex gap-5 flex-wrap">
            {testimonials[currentIndex].stats.map((stat, index) => (
              <div key={index} className=" border-l border-gray-500 pl-4 pr-6">
                <h2 className="text-3xl pb-1 font-bold text-[#F542E6]">{stat.value}</h2>
                <p className="text-sm text-gray-400">{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="font-bold text-xl">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
          </div>
          </div>
          <div className="flex mt-14">
            <button
              onClick={prevTestimonial
              }
              className="text-gray-700 hover:text-white pr-2 py-2 rounded-full flex items-center justify-center md:block transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current text-gray-700 hover:text-white transition-all duration-300"
              >
                <path d="M44.6406 20L1.64063 20" stroke="currentColor"></path>
                <path d="M20.6406 39L1.64063 20L20.6406 1" stroke="currentColor"></path>
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="text-gray-600 pl-2 py-2 rounded-full hover:text-white flex items-center justify-center md:flex"
            >
              <svg
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-700 hover:stroke-white hover:scale-100 transition-all duration-300"
              >
                <path d="M0.640625 20L43.6406 20" stroke="currentColor"></path>
                <path d="M24.6406 1L43.6406 20L24.6406 39" stroke="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
        </div>
        <div className="">
      <div
        className="bg-gradient-to-b from-[#1c1c1c] via-[#2d2d2d] to-[#434343]"
        style={{
          clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
          width: "130px",
          height: "300px",
        }}
      ></div>
    </div>
      </div>
    </div>
  );
};

export default Testimonials;

