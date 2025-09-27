"use client";
import React, { useState } from "react";
import Technologies from "../../components/Technology";
import PopupForm from "../../components/PopupForm";
import { Helmet } from "react-helmet";

const services = [
  {
    name: "UI/UX Design",
    //   "icon": "<FaPaintBrush />",
    description:
      "Create intuitive and user-friendly designs with our UI/UX services. We focus on delivering seamless and engaging experiences for web and mobile applications.",
    image: "/img/startups/uiux.jpg",
  },
  {
    name: "Web and Mobile App Development",
    //   "icon": "<FaMobileAlt />",
    description:
      "Build high-performance web and mobile applications with our development services. We specialize in scalable, responsive, and user-centric solutions.",
    image: "/img/startups/web.webp",
  },
  {
    name: "API Development and Integration",
    //   "icon": "<FaPlug />",
    description:
      "Ensure seamless connectivity between platforms with our API development and integration services. We create secure, scalable, and efficient APIs tailored to your needs.",
    image: "/img/startups/api.jpg",
  },
  {
    name: "Quality Assurance and Testing",
    //   "icon": "<FaBug />",
    description:
      "Guarantee reliability and performance with our quality assurance and testing services. We ensure that your software meets the highest standards before deployment.",
    image: "/img/startups/quality.jpg",
  },
  {
    name: "Deployment and Release Management",
    //   "icon": "<FaCloudUploadAlt />",
    description:
      "Smoothly roll out your products and updates with our deployment and release management services. We handle everything from staging to production deployment.",
    image: "/img/startups/devandmang.png",
  },
  {
    name: "Post-Launch Support",
    //   "icon": "<FaTools />",
    description:
      "Maintain and enhance your software post-launch with our dedicated support services. We provide ongoing maintenance, performance monitoring, and feature updates.",
    image: "/img/startups/pls.webp",
  },
  {
    name: "Build A Team",
    //   "icon": "<FaUsers />",
    description:
      "Assemble a dedicated development team tailored to your project needs. We provide experienced professionals to ensure successful execution and growth.",
    image: "/img/startups/build.jpg",
  },
];

const Startups = () => {
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
  // const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  
 

  return (
    <>
      <Helmet>
        <title>Startups | BoostNow</title>
        <meta
          name="description"
          content="BoostNow empowers startups with cutting-edge IT solutions, including web development, ERP systems, cybersecurity, and automation. We help new businesses scale with innovative technology and tailored digital solutions."
        />
        <meta
          name="keywords"
          content="Startups IT solutions, web development for startups, ERP for startups, cybersecurity for new businesses, business automation, digital transformation, SaaS for startups, cloud solutions, startup technology support, BoostNow for startups, software solutions for new businesses"
        />
      </Helmet>
      <section className="max-w-7xl relative z-10 pt-28 mx-auto px-4 pb-20">
        <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-12">
          STARTUPS
        </h2>
        <p
        className={`mt-4 text-white/90 text-base md:text-lg ${
          isExpanded ? "line-clamp-none" : "line-clamp-4 "
        } md:text-center text-justify`}
      >
         We transform ideas into reality with cutting-edge technology, from MVP
          development to full-scale software solutions. Build, innovate, and
          scale with our expert-driven services. Our team specializes in
          crafting seamless, high-performance applications tailored to your
          business needs. Whether you're a startup looking to launch or an
          enterprise aiming to optimize, we provide end-to-end solutions with a
          focus on quality, speed, and scalability. Let's bring your vision to
          life with state-of-the-art design, robust development, and continuous
          support.
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-400 hover:underline md:hidden"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
     

        
        <Technologies />
        <div className="grid my-16">
          <div className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row flex-col items-center justify-start p-6 transition-transform transform hover:scale-105">
            <div className="flex-1 ">
              <img
                src="/img/startups/startup.jpg"
                // src="/startup/techconsult.gif"
                alt="techconsult"
                className="md:rounded-[4rem] rounded-2xl h-[250px] md:h-[300px]"
              />
            </div>
            <div className="flex-1 md:pl-6">
              <h3 className="text-4xl text-white flex items-center gap-2">
                Startups
              </h3>
              <p
        className={`mt-4 text-white/90 text-base md:text-lg ${
          isExpanded ? "line-clamp-none" : "line-clamp-3 "
        } text-justify`}
      >
       Empowering startups with tailored tech solutions, from concept
                validation to seamless product launches. Innovate, grow, and
                succeed with our expertise. Our dedicated team ensures a smooth
                journey from ideation to execution, leveraging the latest
                technologies to build scalable and high-impact solutions.
                Whether it's web, mobile, or AI-driven applications, we turn
                challenges into opportunities, helping you stay ahead in a
                competitive digital landscape. Partner with us to accelerate
                your vision and transform ideas into market-ready products with
                efficiency and innovation.
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
              className="bg-black border border-white md:rounded-[4rem] rounded-xl shadow-md overflow-hidden flex md:flex-row flex-col items-center md:p-6 p-3 transition-transform transform hover:scale-105"
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.name}
                  className="md:rounded-[3rem] rounded-xl sm:h-[300px] md:h-[300px] h-32"
                />
              </div>
              <div className="flex-1 md:mt-0 mt-4 md:pl-6">
                <h3 className="text-lg sm:text-2xl text-white flex items-center gap-2">
                  {service.icon} {service.name}
                </h3>
                <p className="mt-4 text-white/90 sm:text-base  text-sm">
                  {service.description}
                </p>
                <button
                  onClick={() => handleButtonClick(service.name) }
                  className="mt-6 bg-blue-500 text-white rounded-lg py-2 px-6 hover:bg-blue-700 ml-20 sm:ml-0"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Form */}
      {isFormVisible && selectedService && (
        <PopupForm
          serviceTitle={selectedService}
          closeForm={() => setFormVisible(false)}
        />
      
      )}
    </>
  );
};

export default Startups;


