"use client";
import React, { useState, useEffect } from "react";
import { FaUserCheck, FaUserTie, FaHandshake, FaUsers, FaChartLine, FaBusinessTime, FaArrowRight, FaCertificate, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technologies from "../components/Technology";
import PopupForm from "../components/PopupForm";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    name: "Recruitment Services",
    icon: <FaUserCheck />,
    description:
      "End-to-end recruitment solutions tailored to your business needs. We handle everything from sourcing to onboarding of qualified professionals.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.06.37 PM.jpeg"
  },
  {
    name: "Staff Augmentation",
    icon: <FaUsers />,
    description:
      "Rapidly scale your team with skilled professionals for short-term projects or specific initiatives without long-term commitment.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.09.19 PM.jpeg"
  },
  {
    name: "Training & Placement",
    icon: <FaChartLine />,
    description:
      "Access our pool of pre-trained professionals ready to contribute from day one. We train candidates in industry-relevant skills before deployment.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.11.41 PM.jpeg"
  },
  {
    name: "Talent Assessment",
    icon: <FaUserTie />,
    description:
      "Comprehensive evaluation of technical and soft skills to ensure candidates match your requirements and company culture.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.13.18 PM.jpeg"
  },
  {
    name: "Contract Staffing",
    icon: <FaHandshake />,
    description:
      "Flexible hiring options with pre-defined contract periods, allowing you to manage resources efficiently while meeting project demands.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.16.35 PM.jpeg"
  },
  {
    name: "Remote Talent Solutions",
    icon: <FaBusinessTime />,
    description:
      "Access global talent pools with our remote workforce solutions. Get skilled professionals regardless of geographic constraints.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.18.16 PM.jpeg"
  }
];

const ITRecruitmentServices = () => {
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
        <title>IT Recruitment Services | BoostNow</title>
        <meta name="description" content="BoostNow provides smart hiring support for growing companies with job-ready, verified professionals. Our staffing solutions include recruitment services, staff augmentation, talent assessment, and more." />
        <meta name="keywords" content="IT recruitment services, staffing solutions, recruitment services, hiring support, job-ready professionals, staff augmentation, talent assessment, contract staffing, remote talent, BoostNow hiring" />
      </Helmet>
      <main className="min-h-screen relative z-10 text-white bg-transparent">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>                                                              
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent">
              IT RECRUITMENT SERVICES
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We help you find reliable, job-ready professionals tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  document.getElementById('recruitment-services').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Explore Services
              </button>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                View All Services <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          
          
          
          <Technologies />
          
          {/* Main Recruitment Overview */}
          <div className="grid gap-12 my-16" id="recruitment-services">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/20 md:rounded-[4rem] rounded-3xl shadow-2xl flex md:flex-row flex-col items-center md:p-10 p-8 transition-all transform hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
              <div className="flex-1 relative z-10">
                <div className="relative overflow-hidden md:rounded-[3rem] rounded-2xl shadow-2xl">
                  <img
                    src="/itRecurtment/WhatsApp Image 2025-06-02 at 4.19.26 PM.jpeg"
                    alt="IT Recruitment Services"
                    className="h-[250px] md:h-[350px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-6 md:pl-8 pl-2 relative z-10">
                <h3 className="text-3xl sm:text-5xl text-white flex items-center gap-3 mb-6">
                  IT RECRUITMENT SERVICES
                </h3>
                <p className={`text-white/90 text-base md:text-lg leading-relaxed ${
                  isExpanded ? "line-clamp-none" : "line-clamp-4"
                } md:text-left text-justify`}>
                  BoostNow provides job-ready, verified candidates to companies looking for reliable talent. Our comprehensive screening process ensures all candidates possess both the technical expertise and soft skills required to excel in their roles.
                  <br /><br />
                  We serve as your strategic hiring partner, reducing time-to-hire while maintaining high quality standards across all placements. Our team works closely with both candidates and employers to ensure the perfect match.
                  <br /><br />
                  Whether you need permanent staff, contract workers, or project-based teams, our flexible hiring models adapt to your business requirements and growth objectives.
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

          {/* Why Choose Our Hiring Support Section */}
          <div className="my-16">
            <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
              Why Choose Our Hiring Support?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <FaUserCheck className="text-blue-400 text-3xl" />
                  <h4 className="text-xl font-semibold text-white">Fast & Verified Hiring</h4>
                </div>
                <p className="text-white/90">Cut down hiring time with our pre-verified candidate pool, saving you weeks in the recruitment process.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <FaUsers className="text-blue-400 text-3xl" />
                  <h4 className="text-xl font-semibold text-white">Pre-trained Talent Pool</h4>
                </div>
                <p className="text-white/90">Access candidates already trained in relevant skills, reducing onboarding time and accelerating productivity.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <FaHandshake className="text-blue-400 text-3xl" />
                  <h4 className="text-xl font-semibold text-white">Flexible Hiring Models</h4>
                </div>
                <p className="text-white/90">Choose from various engagement models including interns, freelancers, contractual, and full-time professionals.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <FaChartLine className="text-blue-400 text-3xl" />
                  <h4 className="text-xl font-semibold text-white">Industry-Relevant Skills</h4>
                </div>
                <p className="text-white/90">Our candidates possess up-to-date skills that align with current industry standards and emerging technologies.</p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="my-16">
            <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
              How It Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
                <h4 className="text-xl font-semibold text-white mb-2">Requirement Gathering</h4>
                <p className="text-white/90">We understand your specific needs, company culture, and technical requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
                <h4 className="text-xl font-semibold text-white mb-2">Candidate Shortlisting</h4>
                <p className="text-white/90">We present pre-screened candidates who match your requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
                <h4 className="text-xl font-semibold text-white mb-2">Interviews & Evaluation</h4>
                <p className="text-white/90">Conduct interviews with support from our technical experts if needed.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">4</div>
                <h4 className="text-xl font-semibold text-white mb-2">Final Deployment</h4>
                <p className="text-white/90">Seamless onboarding with ongoing support for both you and the candidate.</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve Section */}
          <div className="my-16">
            <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">IT</h4>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">Finance</h4>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">Retail</h4>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">Marketing</h4>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-white">Healthcare</h4>
              </div>
            </div>
          </div>

          {/* Recruitment Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">Our Recruitment Services</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const gradientMap = {
                  "Recruitment Services": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Staff Augmentation": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Training & Placement": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Talent Assessment": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Contract Staffing": "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                  "Remote Talent Solutions": "from-blue-500/20 via-cyan-500/20 to-blue-600/20"
                };
                
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20"
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
                          Connect Now
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

          {/* Call to Action */}
          <div className="my-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8" data-aos="fade-up">
              Ready to Find Your Perfect Talent Match?
            </h3>
            <button
              onClick={() => handleButtonClick("IT Recruitment Services")}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Get Started Now
            </button>
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

export default ITRecruitmentServices;
