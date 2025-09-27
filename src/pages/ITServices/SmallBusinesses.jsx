import { Helmet } from "react-helmet";
"use client";
import React, { useState } from "react";
import { FaRocket, FaFlask, FaLaptopCode, FaCogs } from "react-icons/fa";
import Technologies from "../../components/Technology";
import PopupForm from "../../components/PopupForm"; // Import the PopupForm component
// import ITServices from "../components/ITServices";

const services = [
    {
      name: "Website Development",
    //   icon: <FaGlobe />,
      description:
        "Modern and optimized websites tailored for business growth. Enhance your online presence with a responsive, high-performing website.",
      "image": "/img/smallbusiness/webdev.png"
    
    },
    {
      name: "SEO (Search Engine Optimization)",
    //   icon: <FaSearch />,
      description:
        "Improve visibility and organic traffic with expert SEO strategies. Rank higher on search engines and attract the right audience.",
      "image": "/img/smallbusiness/seo.jpg"
    
    },
    {
      name: "PPC (Pay-Per-Click) Advertising",
    //   icon: <FaBullhorn />,
      description:
        "Maximize ROI with data-driven ad campaigns. Run targeted PPC ads that drive conversions and business growth.",
      "image":"/img/smallbusiness/ppc.jpg"
    
    },
    {
      name: "Content Marketing",
    //   icon: <FaPenFancy />,
      description:
        "Engage audiences with valuable and consistent content. Build trust and authority with strategic content marketing.",
      "image": "/img/smallbusiness/content.jpg"
    
    },
    {
      name: "Graphic Design",
    //   icon: <FaPalette />,
      description:
        "Create eye-catching visuals for branding and marketing. Stand out with compelling design solutions.",
      "image": "/img/smallbusiness/graphic.jpg"
    
    },
    {
      name: "E-commerce Solutions",
    //   icon: <FaShoppingCart />,
      description:
        "Customized online stores for seamless customer experiences. Empower your business with a powerful e-commerce platform.",
      "image": "/img/smallbusiness/ecom.jpg"
    
    },
    {
      name: "Analytics and Reporting",
    //   icon: <FaChartLine />,
      description:
        "Gain actionable insights to measure performance and results. Make data-driven decisions with our analytics expertise.",
      "image": "/img/smallbusiness/analytics.jpg"
    
    },
    {
      name: "CRM Setup",
    //   icon: <FaUsersCog />,
      description:
        "Streamline customer relationship management with powerful CRM solutions. Enhance customer interactions and sales processes.",
      "image": "/img/smallbusiness/crm.jpg"
    
    },
    {
      name: "Technical Support and Maintenance",
    //   icon: <FaTools />,
      description:
        "Reliable tech support for uninterrupted operations. Ensure smooth performance with ongoing maintenance services.",
      "image": "/img/smallbusiness/tech.jpg"
    
    }
  ];
  

const SmallBusiness = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  
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
    <title>Small Businesses | BoostNow</title>
    <meta name="description" content="BoostNow provides tailored IT solutions for small businesses, including web development, ERP systems, cybersecurity, and automation. Scale your business with cost-effective and innovative technology solutions" />
    <meta name="keywords" content="small business IT solutions, web development for small businesses, ERP for small businesses, cybersecurity services, business automation, digital transformation, cloud solutions, IT support for small businesses, BoostNow for small businesses, affordable tech solutions" />
  </Helmet>
      <section className="max-w-7xl relative z-10 mx-auto px-4 pt-28 pb-20">
        <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-12 sm:mt-12">
        SMALL BUSSINESS
        </h2>
        <p className="text-base sm:text-2xl text-center text-gray-100 text-muted-foreground mb-12">
        We help small businesses thrive with modern websites, SEO, e-commerce solutions, and digital marketing. Boost your online presence and drive growth effortlessly.
        </p>
        <Technologies />
        <div className="grid  my-16">
          <div
            className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row flex-col items-center justify-start p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex-1 ">
              <img
                src="/img/smallbusiness/person.jpg"
                alt="techconsult"
                className="md:rounded-[4rem] rounded-2xl h-[250px] md:h-[300px]"
              />
            </div>
            <div className="flex-1 md:pl-6">
              <h3 className="text-4xl text-white flex items-center gap-2">
              Small Business
              </h3>
              <p className="mt-4 text-white/90 text-md">
              Empowering small businesses with tailored digital solutions, from website development to marketing strategies. Enhance visibility, attract customers, and grow seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-white md:rounded-[4rem] rounded-xl shadow-md flex md:flex-row flex-col items-center md:p-6 p-4 transition-transform transform hover:scale-105"
            >
              <div className="flex-1 ">
                <img
                  src={service.image}
                  alt={service.name}
                  className="md:rounded-[3rem] rounded-xl sm:h-[250px] md:h-[300px] h-32"
                />
              </div>
              <div className="flex-1 md:pl-6 pl-2">
                <h3 className="text-lg sm:text-2xl mt-2 sm:mt-0 text-white flex items-center gap-2">
                  {service.icon} {service.name}
                </h3>
                <p className="mt-4 text-white/90 sm:text-base text-sm">{service.description}</p>
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
