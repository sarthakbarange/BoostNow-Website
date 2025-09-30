import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_Video_1 from "../assets/website/SliderVideo/IT solutions.mp4";
import slide_Video_2 from "../assets/website/SliderVideo/IT Training.mp4";
import slide_Video_3 from "../assets/website/SliderVideo/ERP.mp4";
import slide_Video_4 from "../assets/website/SliderVideo/IT solutions.mp4";
import slide_Video_5 from "../assets/website/SliderVideo/IT Training.mp4";
import slide_Video_6 from "../assets/website/SliderVideo/ERP.mp4";

const slideTitles = ["IT SOLUTIONS", "IT TRAINING", "ERP SOFTWARE", "IT SOLUTIONS", "IT TRAINING", "ERP SOLUTIONS"];
const slideDescriptions = [
  "Customized IT solutions designed to meet your specific business needs, ensuring efficiency, security, and innovation.",
  "Expert-led training programs to help you develop in-demand tech skills and advance your career in the IT industry.",
  "Comprehensive and scalable ERP solutions to streamline operations, enhance productivity, and drive business growth.",
  "Customized IT solutions designed to meet your specific business needs, ensuring efficiency, security, and innovation.",
  "Expert-led training programs to help you develop in-demand tech skills and advance your career in the IT industry.",
  "Comprehensive and scalable ERP solutions to streamline operations, enhance productivity, and drive business growth.",
];

function TopSlider() {
  const swiperRef = useRef(null);
  const videoRefs = useRef(new Array(6).fill(null));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(new Array(6).fill(false));

  const handleVideoPlay = (index) => {
    setIsPlaying((prev) => prev.map((_, i) => i === index));

    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 1;
      }
    });
  };

  const handleSvgClick = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
      handleVideoPlay(index);
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 1;
      }
    });
    setIsPlaying(new Array(6).fill(false));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 relative z-10 bg-gradient-to-b from-transparent via-black to-transparent">
      <h1
        className="text-transparent bg-clip-text text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        SERVICES
      </h1>

      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: -20,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {[slide_Video_1, slide_Video_2, slide_Video_3, slide_Video_4, slide_Video_5, slide_Video_6].map(
          (videoSrc, index) => (
            <SwiperSlide key={index} className="bg-none align-middle">
              <div className="relative flex justify-center">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="relative w-full sm:w-[80vw] md:w-[40vw] lg:w-[30vw] xl:w-[15vw] shadow-lg border-2 border-white rounded-lg"
                  preload="metadata"
                  muted
                  playsInline
                  controls={isPlaying[index]}
                  onPlay={() => handleVideoPlay(index)}
                  onPause={() => setIsPlaying((prev) => prev.map((_, i) => i !== index))}
                  onLoadedMetadata={(e) => (e.target.currentTime = 1)}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {activeIndex === index && !isPlaying[index] && (
                  <button
                    onClick={() => handleSvgClick(index)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/70 p-4 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-black"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z" />
                      </svg>
                    </div>
                  </button>
                )}

                {activeIndex !== index && (
                  <div className="absolute inset-0 opacity-60 bg-gray-800 border-white border-2 w-auto rounded-[50px]"></div>
                )}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="text-[#38b6ff] hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white/10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center text-lg text-white mx-4">
          <p className="font-bold text-[#38b6ff] text-xl sm:text-2xl md:text-3xl">{slideTitles[activeIndex]}</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-2">{slideDescriptions[activeIndex]}</p>
        </div>

        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="text-[#38b6ff] hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white/10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => (window.location.href = "/services")}
          className="bg-[#00255C] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#38b6ff] transition-colors duration-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default TopSlider;
