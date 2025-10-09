"use client";
import React, { useState } from "react";
import { FaUserCheck, FaUserTie, FaHandshake, FaUsers, FaChartLine, FaBusinessTime } from "react-icons/fa";
import Technologies from "../components/Technology";
import PopupForm from "../components/PopupForm";
import { Helmet } from "react-helmet";
import AnimatedServiceCards from "../components/AnimatedServiceCards";

const services = [  {
    name: "Recruitment Services",
    icon: <FaUserCheck />,
    description:
      "End-to-end recruitment solutions tailored to your business needs. We handle everything from sourcing to onboarding of qualified professionals.",    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.06.37 PM.jpeg"
  },
  {
    name: "Staff Augmentation",
    icon: <FaUsers />,
    description:
      "Rapidly scale your team with skilled professionals for short-term projects or specific initiatives without long-term commitment.",
    image: "/itRecurtment/WhatsApp Image 2025-06-02 at 4.09.19 PM.jpeg"
  },  {
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
  },  {
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
      <section className="max-w-7xl relative z-10 mx-auto px-4 pt-28 pb-20">
        <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-12 sm:mt-12">
          IT RECRUITMENT SERVICES
        </h2>
        <p className="text-base sm:text-2xl text-center text-gray-100 text-muted-foreground mb-12">
          We help you find reliable, job-ready professionals tailored to your business needs.
        </p>
        <Technologies />
        <AnimatedServiceCards />
        <div className="grid my-16">
          <div
            className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row flex-col items-center justify-start p-6 transition-transform transform hover:scale-105"          >            <div className="flex-1">              <img
                src="/itRecurtment/WhatsApp Image 2025-06-02 at 4.19.26 PM.jpeg"
                alt="IT Recruitment Services"
                className="md:rounded-[4rem] rounded-2xl h-[250px] md:h-[300px]"
              />
            </div>
            <div className="flex-1 md:pl-6">
              <h3 className="text-4xl text-white flex items-center gap-2">
                IT Recruitment Services
              </h3>
              <p
                className={`mt-4 text-white/90 text-base md:text-lg ${
                  isExpanded ? "line-clamp-none" : "line-clamp-3"
                } md:text-left text-justify`}
              >
                BoostNow provides job-ready, verified candidates to companies looking for reliable talent. 
                Our comprehensive screening process ensures all candidates possess both the technical expertise 
                and soft skills required to excel in their roles. We serve as your strategic hiring partner, 
                reducing time-to-hire while maintaining high quality standards across all placements.
                Our team works closely with both candidates and employers to ensure the perfect match, 
                resulting in high retention rates and successful long-term placements.
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

        <div className="py-20 px-4 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-950/70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hiring Support?</span>
            </motion.h3>
            
            <motion.p 
              className="text-lg text-center text-blue-100/80 max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We combine cutting-edge technology with human expertise to deliver exceptional recruitment solutions
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaUserCheck className="text-3xl" />,
                  title: "Fast & Verified Hiring",
                  description: "Cut down hiring time with our pre-verified candidate pool, saving you weeks in the recruitment process.",
                  color: "from-blue-600/80 to-blue-900/80"
                },
                {
                  icon: <FaUsers className="text-3xl" />,
                  title: "Pre-trained Talent Pool",
                  description: "Access candidates already trained in relevant skills, reducing onboarding time and accelerating productivity.",
                  color: "from-cyan-600/80 to-blue-800/80"
                },
                {
                  icon: <FaHandshake className="text-3xl" />,
                  title: "Flexible Hiring Models",
                  description: "Choose from various engagement models including interns, freelancers, contractual, and full-time professionals.",
                  color: "from-indigo-600/80 to-blue-900/80"
                },
                {
                  icon: <FaChartLine className="text-3xl" />,
                  title: "Industry-Relevant Skills",
                  description: "Our candidates possess up-to-date skills that align with current industry standards and emerging technologies.",
                  color: "from-blue-700/80 to-indigo-900/80"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-sm bg-gradient-to-br ${item.color} border border-white/10`}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    transition: { 
                      y: { type: 'spring', stiffness: 300, damping: 15 },
                      boxShadow: { duration: 0.3 }
                    }
                  }}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-400/5"></div>
                  
                  <div className="text-blue-200 mb-6">
                    {item.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10">
                    {item.title}
                  </h4>
                  
                  <p className="text-blue-100/90 relative z-10">
                    {item.description}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-tl-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl"></div>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black border border-white rounded-2xl p-6 text-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">1</div>
              <h4 className="text-xl font-semibold text-white mb-2">Requirement Gathering</h4>
              <p className="text-white/90">We understand your specific needs, company culture, and technical requirements.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6 text-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">2</div>
              <h4 className="text-xl font-semibold text-white mb-2">Candidate Shortlisting</h4>
              <p className="text-white/90">We present pre-screened candidates who match your requirements.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6 text-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">3</div>
              <h4 className="text-xl font-semibold text-white mb-2">Interviews & Evaluation</h4>
              <p className="text-white/90">Conduct interviews with support from our technical experts if needed.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6 text-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">4</div>
              <h4 className="text-xl font-semibold text-white mb-2">Final Deployment</h4>
              <p className="text-white/90">Seamless onboarding with ongoing support for both you and the candidate.</p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">IT</h4>
            </div>
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">Finance</h4>
            </div>
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">Retail</h4>
            </div>
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">Marketing</h4>
            </div>
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">Education</h4>
            </div>
            <div className="bg-black border border-white rounded-2xl p-4 text-center">
              <h4 className="text-xl font-semibold text-white">Healthcare</h4>
            </div>
          </div>
        </div>

        {/* Services section is now handled by AnimatedServiceCards component */}
        
        <div className="my-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Find Your Perfect Talent Match?
          </h3>
          <button
            onClick={() => handleButtonClick("IT Recruitment Services")}
            className="bg-blue-500 text-white text-xl rounded-lg py-3 px-8 hover:bg-blue-700"
          >
            Get Started Now
          </button>
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

export default ITRecruitmentServices;
