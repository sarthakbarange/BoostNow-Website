"use client"
import React, { useState, useEffect } from "react";
import { FaRocket, FaFlask, FaLaptopCode, FaCogs, FaGraduationCap, FaUsers, FaCertificate, FaArrowRight, FaCode, FaBrain, FaGamepad, FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technologies from "../components/Technology";
import PopupForm from "../components/PopupForm";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <><Helmet>
    <title>IT TRAINING | BoostNow</title>
    <meta name="description" content="BoostNow provides professional training programs in IT services, web development, cybersecurity, ERP, and business automation. Enhance your skills with hands-on learning and expert guidance." />
    <meta name="keywords" content="training programs, IT training, web development training, cybersecurity training, ERP courses, business automation training, hands-on learning, professional development, tech training, software development courses, BoostNow training" />
  </Helmet>
      <main className="min-h-screen relative z-10 text-white bg-transparent">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" data-aos="fade-in">
          <div className="absolute inset-0 bg-black/30"></div>                                                              
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6" data-aos="zoom-in">
              
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent" data-aos="fade-up">
              IT TRAINING
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Transform Your Career with Industry-Leading Technology Training Programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => {
                  document.getElementById('training-programs').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Explore Programs
              </button>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                View All Services <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 py-20">
          <Technologies />
          
          
          {/* Main Training Overview */}
          <div className="grid gap-12 my-16" id="training-programs">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/20 md:rounded-[4rem] rounded-3xl shadow-2xl flex md:flex-row flex-col items-center md:p-10 p-8 transition-all transform hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-blue-500/20 relative overflow-hidden" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
              <div className="flex-1 relative z-10">
                <div className="relative overflow-hidden md:rounded-[3rem] rounded-2xl shadow-2xl">
                  <img
                    src="/img/training/IT TRAINING.jpg"
                    alt="IT Training Overview"
                    className="h-[250px] md:h-[350px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-6 md:pl-8 pl-2 relative z-10">
                <h3 className="text-3xl sm:text-5xl text-white flex items-center gap-3 mb-6">
                  {/* <FaGraduationCap className="text-blue-400" /> */}
                  IT TRAINING
                </h3>
                <p className={`text-white/90 text-base md:text-lg leading-relaxed ${
                  isExpanded ? "line-clamp-none" : "line-clamp-4"
                } md:text-left text-justify`}>
                  Unlock your potential with our comprehensive IT training programs, designed for both beginners and professionals. Gain in-demand skills in software development, data science, cybersecurity, cloud computing, and more.
                  <br /><br />
                  Our expert-led, hands-on courses ensure real-world application, preparing you for career growth and success in the ever-evolving tech landscape.
                  <br /><br />
                  Whether you're upskilling, switching careers, or enhancing your expertise, our structured learning approach, live projects, and industry-relevant curriculum provide the edge you need to thrive.
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

          {/* Training Programs Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">Our Training Programs</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const gradientMap = {
                  "Full stack Web Development": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "AI": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "ML": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "FrontEnd Development": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Game Development": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "MERN Stack": "from-blue-500/20 via-cyan-500/20 to-blue-600/20"
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
                          Enroll Now
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

      {isFormVisible && selectedService && (
        <PopupForm serviceTitle={selectedService} closeForm={() => setFormVisible(false)} />
      )}
    </>
  );
};

export default Traning;
