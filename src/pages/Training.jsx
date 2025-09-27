"use client"
import React, { useState } from "react";
import { FaRocket, FaFlask, FaLaptopCode, FaCogs } from "react-icons/fa";
import Technologies from "../components/Technology";
import PopupForm from "../components/PopupForm";
import { Helmet } from "react-helmet";
const services = [
  {
    name: "Full stack Web Development",
    icon: <FaRocket />,
    description:
      "Turn your idea into reality with MVP development. We help you build a functional, cost-effective version of your product to test with real users and refine your concept for success.",
    // image: "/startup/webdevloment.webp",
         "image": "/img/training/fullstack.png",
  },
  {
    name: "AI",
    icon: <FaFlask />,
    description:
      "Validate your ideas with POC development. We create a prototype to demonstrate the feasibility of your concept, gain stakeholder confidence, and lay the foundation for execution.",
          "image": "/img/training/aii.jpg",
    // image: "/startup/poc.gif",
  },
  {
    name: "ML",
    icon: <FaLaptopCode />,
    description:
      "Unlock tailored solutions with our custom software development. We design software that meets your business needs, ensuring scalability, efficiency, and seamless integration.",
          "image": "/img/training/ml.avif",
    // image: "/startup/customsd.gif",
  },
  {
    name: "FrontEnd Development",
    icon: <FaCogs />,
    description:
      "Leverage expert guidance with our technology consulting services. We help you navigate the tech landscape, optimize systems, enhance performance, and drive innovation.",
          "image": "/img/training/frontenddev.jpg",
    // image: "/startup/techconsult.gif",
  },
  {
    name: "Game Development",
    icon: <FaCogs />,
    description:
      "Leverage expert guidance with our technology consulting services. We help you navigate the tech landscape, optimize systems, enhance performance, and drive innovation.",
    // image: "/startup/techconsult.gif",
          "image": "/img/training/gamedev.png",
  },
  {
    name: "MERN Stack",
    icon: <FaCogs />,
    description:
      "The MERN stack is a full-stack JavaScript framework that combines MongoDB, Express.js, React.js, and Node.js for building dynamic and scalable web applications.",
    // image: "/startup/techconsult.gif",
          "image": "/img/training/mern.png",
  },
];

const Traning = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(window.innerWidth < 768 ? false : true);
  const handleButtonClick = (serviceName) => {
    setSelectedService(serviceName);
    window.scrollTo({ 
      top: Math.floor(document.documentElement.scrollHeight / 2-400), 
      left: Math.floor(document.documentElement.scrollWidth / 2), 
      behavior: "smooth" 
    });
    
    setFormVisible(true);
  };

  return (
    <><Helmet>
    <title>IT TRAINING | BoostNow</title>
    <meta name="description" content="BoostNow provides professional training programs in IT services, web development, cybersecurity, ERP, and business automation. Enhance your skills with hands-on learning and expert guidance." />
    <meta name="keywords" content="training programs, IT training, web development training, cybersecurity training, ERP courses, business automation training, hands-on learning, professional development, tech training, software development courses, BoostNow training" />
  </Helmet>
      <main className="min-h-screen relative z-10 pt-8 text-white bg-transparent">
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-12">IT TRAINING</h2>
          <p className="md:text-lg text-base md:text-center text-justify  text-gray-100 text-muted-foreground mb-12">
          Our IT training services offer hands-on, expert-led courses designed to enhance your skills in areas such as software development, data analysis, cybersecurity, and cloud computing. Whether you're a beginner or looking to advance your expertise, our tailored programs equip you with the knowledge and tools to excel in the tech industry.
          </p>
          <Technologies />
          <div className="grid gap-12 my-16">
            <div className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row flex-col items-center md:p-6 p-4 transition-transform transform hover:scale-105">
              <div className="flex-1 ">
                <img
                  // src="/startup/techconsult.gif"
                  src="/img/training/IT TRAINING.jpg"
                  alt="techconsult"
                  className="md:rounded-[4rem] rounded-2xl h-[250px] md:h-[300px]"
                />
              </div>
              <div className="flex-1 md:mt-0 mt-4 md:pl-6 pl-1">
      <h3 className="text-4xl sm:text-6xl text-white flex items-center">
        IT TRAINING
      </h3>
      <p
        className={`mt-4 text-white/90 text-base md:text-lg ${
          isExpanded ? "line-clamp-none" : "line-clamp-3 "
        } md:text-left text-justify`}
      >
        Unlock your potential with our comprehensive IT training programs, designed for both beginners and professionals. Gain in-demand skills in software development, data science, cybersecurity, cloud computing, and more.  
        Our expert-led, hands-on courses ensure real-world application, preparing you for career growth and success in the ever-evolving tech landscape.  
        Whether you're upskilling, switching careers, or enhancing your expertise, our structured learning approach, live projects, and industry-relevant curriculum provide the edge you need to thrive.  
        Join us and take your first step toward mastering the technology of tomorrow!
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-400 hover:underline md:hidden"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row  flex-col items-center md:p-6 p-4 transition-transform transform hover:scale-105"
              >
                <div className="flex-1 ">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="md:rounded-[3rem] rounded-xl sm:h-[250px] md:h-[300px] h-32"
                  />
                </div>
                <div className="flex-1 md:mt-0 mt-4 pl-2 md:pl-6">
                  <h3 className="text-lg sm:text-2xl text-white flex items-center gap-2">
                    {service.icon} {service.name}
                  </h3>
                  <p className="mt-4 text-justify text-white/90 sm:text-base text-sm">{service.description}</p>
                  <button
                    onClick={() => handleButtonClick(service.name)}
                    className="mt-6 bg-blue-500 text-white rounded-lg py-2 px-6 hover:bg-blue-700 ml-20 sm:ml-0"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isFormVisible && selectedService && (
        <PopupForm serviceTitle={selectedService} closeForm={() => setFormVisible(false)} />
      )}
    </>
  );
};

export default Traning;
