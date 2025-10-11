"use client";
import React, { useState, useEffect } from "react";
import { FaPaintBrush, FaMobileAlt, FaPlug, FaBug, FaCloudUploadAlt, FaTools, FaUsers, FaRocket, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technologies from "../../components/Technology";
import PopupForm from "../../components/PopupForm";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description:
      "Create intuitive and user-friendly designs with our UI/UX services. We focus on delivering seamless and engaging experiences for web and mobile applications.",
    image: "/img/startups/uiux.jpg",
  },
  {
    name: "Web and Mobile App Development",
    icon: <FaMobileAlt />,
    description:
      "Build high-performance web and mobile applications with our development services. We specialize in scalable, responsive, and user-centric solutions.",
    image: "/img/startups/web.webp",
  },
  {
    name: "API Development and Integration",
    icon: <FaPlug />,
    description:
      "Ensure seamless connectivity between platforms with our API development and integration services. We create secure, scalable, and efficient APIs tailored to your needs.",
    image: "/img/startups/api.jpg",
  },
  {
    name: "Quality Assurance and Testing",
    icon: <FaBug />,
    description:
      "Guarantee reliability and performance with our quality assurance and testing services. We ensure that your software meets the highest standards before deployment.",
    image: "/img/startups/quality.jpg",
  },
  {
    name: "Deployment and Release Management",
    icon: <FaCloudUploadAlt />,
    description:
      "Smoothly roll out your products and updates with our deployment and release management services. We handle everything from staging to production deployment.",
    image: "/img/startups/devandmang.png",
  },
  {
    name: "Post-Launch Support",
    icon: <FaTools />,
    description:
      "Maintain and enhance your software post-launch with our dedicated support services. We provide ongoing maintenance, performance monitoring, and feature updates.",
    image: "/img/startups/pls.webp",
  },
  {
    name: "Build A Team",
    icon: <FaUsers />,
    description:
      "Assemble a dedicated development team tailored to your project needs. We provide experienced professionals to ensure successful execution and growth.",
    image: "/img/startups/build.jpg",
  },
];

const Startups = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(window.innerWidth < 768 ? false : true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  
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
      
      <main className="min-h-screen relative z-10 text-white bg-transparent">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" data-aos="fade-in">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6" data-aos="zoom-in">
              {/* <FaRocket className="text-6xl text-cyan-400" /> */}
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent" data-aos="fade-up">
              STARTUPS
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Transform Ideas into Reality with Cutting-Edge Technology Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => {
                  document.getElementById('startup-services').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Explore Services
              </button>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                View All Services <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 py-20">
          <Technologies />
          
          {/* Main Startup Overview */}
          <div className="grid gap-12 my-16" id="startup-services">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/20 md:rounded-[4rem] rounded-3xl shadow-2xl flex md:flex-row flex-col items-center md:p-10 p-8 transition-all transform hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-blue-500/20 relative overflow-hidden" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
              <div className="flex-1 relative z-10">
                <div className="relative overflow-hidden md:rounded-[3rem] rounded-2xl shadow-2xl">
                  <img
                    src="/img/startups/startup.jpg"
                    alt="Startup Solutions Overview"
                    className="h-[250px] md:h-[350px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-6 md:pl-8 pl-2 relative z-10">
                <h3 className="text-3xl sm:text-5xl text-white flex items-center gap-3 mb-6">
                  {/* <FaRocket className="text-cyan-400" /> */}
                  STARTUPS
                </h3>
                <p className={`text-white/90 text-base md:text-lg leading-relaxed ${
                  isExpanded ? "line-clamp-none" : "line-clamp-4"
                } md:text-left text-justify`}>
                  Empowering startups with tailored tech solutions, from concept validation to seamless product launches. Innovate, grow, and succeed with our expertise.
                  <br /><br />
                  Our dedicated team ensures a smooth journey from ideation to execution, leveraging the latest technologies to build scalable and high-impact solutions.
                  <br /><br />
                  Whether it's web, mobile, or AI-driven applications, we turn challenges into opportunities, helping you stay ahead in a competitive digital landscape.
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors md:hidden flex items-center gap-2"
                >
                  {isExpanded ? "Read Less" : "Read More"} <FaArrowRight className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Startup Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">Our Startup Services</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const gradientMap = {
                  "UI/UX Design": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Web and Mobile App Development": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "API Development and Integration": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Quality Assurance and Testing": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Deployment and Release Management": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Post-Launch Support": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Build A Team": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20"
                };
                
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[service.name]} opacity-50`}></div>
                    
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      {/* <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <span className="text-cyan-400 text-xl">{service.icon}</span>
                      </div> */}
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative p-6 z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300/90 text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleButtonClick(service.name)}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 border border-white/20"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

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


