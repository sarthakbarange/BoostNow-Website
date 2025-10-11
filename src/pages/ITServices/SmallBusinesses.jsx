"use client";
import React, { useState, useEffect } from "react";
import { FaGlobe, FaSearch, FaBullhorn, FaPenFancy, FaPalette, FaShoppingCart, FaChartLine, FaUsersCog, FaTools, FaBuilding, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technologies from "../../components/Technology";
import PopupForm from "../../components/PopupForm";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
    {
      name: "Website Development",
      description:
        "Modern and optimized websites tailored for business growth. Enhance your online presence with a responsive, high-performing website.",
      image: "/img/smallbusiness/webdev.png"
    },
    {
      name: "SEO (Search Engine Optimization)",
      description:
        "Improve visibility and organic traffic with expert SEO strategies. Rank higher on search engines and attract the right audience.",
      image: "/img/smallbusiness/seo.jpg"
    },
    {
      name: "PPC (Pay-Per-Click) Advertising",
      description:
        "Maximize ROI with data-driven ad campaigns. Run targeted PPC ads that drive conversions and business growth.",
      image: "/img/smallbusiness/ppc.jpg"
    },
    {
      name: "Content Marketing",
      description:
        "Engage audiences with valuable and consistent content. Build trust and authority with strategic content marketing.",
      image: "/img/smallbusiness/content.jpg"
    },
    {
      name: "Graphic Design",
      description:
        "Create eye-catching visuals for branding and marketing. Stand out with compelling design solutions.",
      image: "/img/smallbusiness/graphic.jpg"
    },
    {
      name: "E-commerce Solutions",
      description:
        "Customized online stores for seamless customer experiences. Empower your business with a powerful e-commerce platform.",
      image: "/img/smallbusiness/ecom.jpg"
    },
    {
      name: "Analytics and Reporting",
      description:
        "Gain actionable insights to measure performance and results. Make data-driven decisions with our analytics expertise.",
      image: "/img/smallbusiness/analytics.jpg"
    },
    {
      name: "CRM Setup",
      description:
        "Streamline customer relationship management with powerful CRM solutions. Enhance customer interactions and sales processes.",
      image: "/img/smallbusiness/crm.jpg"
    },
    {
      name: "Technical Support and Maintenance",
      description:
        "Reliable tech support for uninterrupted operations. Ensure smooth performance with ongoing maintenance services.",
      image: "/img/smallbusiness/tech.jpg"
    }
  ];
  

const SmallBusiness = () => {
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
        <title>Small Businesses | BoostNow</title>
        <meta name="description" content="BoostNow provides tailored IT solutions for small businesses, including web development, ERP systems, cybersecurity, and automation. Scale your business with cost-effective and innovative technology solutions" />
        <meta name="keywords" content="small business IT solutions, web development for small businesses, ERP for small businesses, cybersecurity services, business automation, digital transformation, cloud solutions, IT support for small businesses, BoostNow for small businesses, affordable tech solutions" />
      </Helmet>
      
      <main className="min-h-screen relative z-10 text-white bg-transparent">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" data-aos="fade-in">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6" data-aos="zoom-in">
            
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent" data-aos="fade-up">
              SMALL BUSINESS
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Empower Your Business with Digital Solutions That Drive Growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => {
                  document.getElementById('business-services').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Explore Solutions
              </button>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                View All Services <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 py-20">
          <Technologies />
          
          {/* Main Small Business Overview */}
          <div className="grid gap-12 my-16" id="business-services">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/20 md:rounded-[4rem] rounded-3xl shadow-2xl flex md:flex-row flex-col items-center md:p-10 p-8 transition-all transform hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-blue-500/20 relative overflow-hidden" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
              <div className="flex-1 relative z-10">
                <div className="relative overflow-hidden md:rounded-[3rem] rounded-2xl shadow-2xl">
                  <img
                    src="/img/smallbusiness/person.jpg"
                    alt="Small Business Solutions Overview"
                    className="h-[250px] md:h-[350px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-6 md:pl-8 pl-2 relative z-10">
                <h3 className="text-3xl sm:text-5xl text-white flex items-center gap-3 mb-6">
                
                  SMALL BUSINESS
                </h3>
                <p className={`text-white/90 text-base md:text-lg leading-relaxed ${
                  isExpanded ? "line-clamp-none" : "line-clamp-4"
                } md:text-left text-justify`}>
                  Empowering small businesses with tailored digital solutions, from website development to marketing strategies. Enhance visibility, attract customers, and grow seamlessly.
                  <br /><br />
                  We help small businesses thrive with modern websites, SEO, e-commerce solutions, and digital marketing. Boost your online presence and drive growth effortlessly.
                  <br /><br />
                  Our comprehensive suite of services is designed to help small businesses compete in the digital marketplace and achieve sustainable growth.
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

          {/* Small Business Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">Our Business Solutions</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const gradientMap = {
                  "Website Development": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "SEO (Search Engine Optimization)": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "PPC (Pay-Per-Click) Advertising": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Content Marketing": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Graphic Design": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "E-commerce Solutions": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Analytics and Reporting": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "CRM Setup": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20",
                  "Technical Support and Maintenance": "from-indigo-500/20 via-blue-500/20 to-cyan-600/20"
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
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                        <span className="text-cyan-400">{service.icon}</span>
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

export default SmallBusiness;
