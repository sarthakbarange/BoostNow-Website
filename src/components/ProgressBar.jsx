import React, { useEffect, useState } from "react";
import { Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "aos/dist/aos.css";
import AOS from "aos";

// Importing animation GIFs as assets
import animation1 from "../assets/gif/acquisition-1.gif";
import animation2 from "../assets/gif/onboarding-1.gif";
import animation3 from "../assets/gif/retention-1.gif";
import animation4 from "../assets/gif/upsell-1.gif";
import animation5 from "../assets/gif/loyalty-1.gif";

const ProgressBar = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const slides = [
    {
      title: "Acquisition",
      description:
        "BoostNow enhances customer acquisition with targeted strategies and optimized user engagement through personalized content, ensuring higher conversion rates and a seamless onboarding experience.",
      gif: animation1,
    },
    {
      title: "Onboarding",
      description:
        "Simplify and accelerate the onboarding process with BoostNow's intuitive tools, designed to increase user engagement and satisfaction from the very first interaction, leading to faster adoption and better retention.",
      gif: animation2,
    },
    {
      title: "Retention",
      description:
        "BoostNow maximizes customer retention with automated and dynamic interactions, offering tailored solutions that keep users engaged, ensuring long-term loyalty and improved customer lifetime value.",
      gif: animation3,
    },
    {
      title: "Upsell",
      description:
        "Drive incremental revenue with BoostNow’s smart upsell techniques, providing personalized recommendations and exclusive offers that resonate with your customers' needs, all through targeted GIF content.",
      gif: animation4,
    },
    {
      title: "Loyalty",
      description:
        "BoostNow helps cultivate brand loyalty with interactive, gamified experiences, rewarding customers for their continued engagement and encouraging them to redeem rewards, unlocking exclusive benefits.",
      gif: animation5,
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <section className="my-16 relative z-10">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#a8b7c0] via-[#ffffff] to-[#2d5186] text-center font-bold text-2xl md:text-6xl m-4 mb-6">
        IT ALL STARTS WITH OUR CUSTOMER LIFECYCLE
      </h3>

      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="bg-transparent border border-white shadow-lg p-5 w-[80vw] md:w-[75vw] rounded-[2rem]">
          <div className="max-w-screen-lg w-full px-4 bg-transparent rounded-[2rem] shadow-lg relative overflow-hidden">
            <div className="text-white m-4 rounded-tl-[3rem] rounded-tr-[3rem] text-center px-4 md:block hidden">
              <div className="flex items-center justify-between overflow-x-auto">
                <div className="pr-2">Awareness</div>
                {["Acquisition", "Onboarding", "Retention", "Upsell", "Loyalty"].map((step, index) => (
                  <div key={index} className="flex flex-col">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="matrix(-1, 0, 0, 1, 0, 0)"
                      className={`w-24 h-12 transition-all duration-500 ${
                        activeSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <path
                        d="M4 12H20M4 12L8 8M4 12L8 16"
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="30"
                        strokeDashoffset={activeSlide === index ? "0" : "30"}
                        style={{ transition: "stroke-dashoffset 2s ease-out" }}
                      ></path>
                    </svg>
                    <span>{step}</span>
                  </div>
                ))}
                <div className="pl-2">Happy Customer</div>
              </div>
            </div>

            <Swiper
              modules={[Autoplay, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <div className="steps-content_info_half mx-4 mb-6 md:mb-0 md:w-1/2">
                      <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        {slide.title.toUpperCase()}
                      </h4>
                      <p className="text-gray-300 text-base md:text-lg">{slide.description}</p>
                    </div>
                    <div className="steps-content_info_half--lotti-box z-10 md:w-1/2 flex justify-center items-center">
                      <img
                        src={slide.gif}
                        alt={slide.title}
                        className="w-full max-w-[600px] md:max-w-[600px] h-auto"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
