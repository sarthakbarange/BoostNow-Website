"use client";
import React, { useState } from "react";
import { FaUserCheck, FaUserTie, FaHandshake, FaUsers, FaChartLine, FaBusinessTime } from "react-icons/fa";
import Technologies from "../../components/Technology";
import PopupForm from "../../components/PopupForm";
import { Helmet } from "react-helmet";

const services = [
  {
    name: "Recruitment Services",
    icon: <FaUserCheck />,
    description:
      "End-to-end recruitment solutions tailored to your business needs. We handle everything from sourcing to onboarding of qualified professionals.",
    image: "/img/talentsupport/recruitment.jpg"
  },
  {
    name: "Staff Augmentation",
    icon: <FaUsers />,
    description:
      "Rapidly scale your team with skilled professionals for short-term projects or specific initiatives without long-term commitment.",
    image: "/img/talentsupport/staffaug.jpg"
  },
  {
    name: "Training & Placement",
    icon: <FaChartLine />,
    description:
      "Access our pool of pre-trained professionals ready to contribute from day one. We train candidates in industry-relevant skills before deployment.",
    image: "/img/talentsupport/training.jpg"
  },
  {
    name: "Talent Assessment",
    icon: <FaUserTie />,
    description:
      "Comprehensive evaluation of technical and soft skills to ensure candidates match your requirements and company culture.",
    image: "/img/talentsupport/talent.jpg"
  },
  {
    name: "Contract Staffing",
    icon: <FaHandshake />,
    description:
      "Flexible hiring options with pre-defined contract periods, allowing you to manage resources efficiently while meeting project demands.",
    image: "/img/talentsupport/contract.jpg"
  },
  {
    name: "Remote Talent Solutions",
    icon: <FaBusinessTime />,
    description:
      "Access global talent pools with our remote workforce solutions. Get skilled professionals regardless of geographic constraints.",
    image: "/img/talentsupport/remote.jpg"
  }
];

const TalentSupport = () => {
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
    <>      <Helmet>
        <title>Talent Hub | BoostNow</title>
        <meta name="description" content="BoostNow provides smart hiring support for growing companies with job-ready, verified professionals. Our staffing solutions include recruitment services, staff augmentation, talent assessment, and more." />
        <meta name="keywords" content="talent hub, staffing solutions, recruitment services, hiring support, job-ready professionals, staff augmentation, talent assessment, contract staffing, remote talent, BoostNow hiring" />
      </Helmet>
      <section className="max-w-7xl relative z-10 mx-auto px-4 pt-28 pb-20">
        <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-12 sm:mt-12">
          TALENT HUB
        </h2>
        <p className="text-base sm:text-2xl text-center text-gray-100 text-muted-foreground mb-12">
          We help you find reliable, job-ready professionals tailored to your business needs.
        </p>
        <Technologies />
        <div className="grid my-16">
          <div
            className="bg-black border border-white md:rounded-[4rem] rounded-2xl shadow-md flex md:flex-row flex-col items-center justify-start p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex-1">
              <img
                src="/img/talentsupport/hero.jpg"
                alt="Talent Support"
                className="md:rounded-[4rem] rounded-2xl h-[250px] md:h-[300px]"
              />
            </div>
            <div className="flex-1 md:pl-6">            <h3 className="text-4xl text-white flex items-center gap-2">
                Talent Hub
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

        <div className="my-16">
          <h3 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
            Why Choose Our Hiring Support?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaUserCheck className="text-blue-500 text-3xl" />
                <h4 className="text-xl font-semibold text-white">Fast & Verified Hiring</h4>
              </div>
              <p className="text-white/90">Cut down hiring time with our pre-verified candidate pool, saving you weeks in the recruitment process.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaUsers className="text-blue-500 text-3xl" />
                <h4 className="text-xl font-semibold text-white">Pre-trained Talent Pool</h4>
              </div>
              <p className="text-white/90">Access candidates already trained in relevant skills, reducing onboarding time and accelerating productivity.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaHandshake className="text-blue-500 text-3xl" />
                <h4 className="text-xl font-semibold text-white">Flexible Hiring Models</h4>
              </div>
              <p className="text-white/90">Choose from various engagement models including interns, freelancers, contractual, and full-time professionals.</p>
            </div>
            <div className="bg-black border border-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <FaChartLine className="text-blue-500 text-3xl" />
                <h4 className="text-xl font-semibold text-white">Industry-Relevant Skills</h4>
              </div>
              <p className="text-white/90">Our candidates possess up-to-date skills that align with current industry standards and emerging technologies.</p>
            </div>
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

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-white md:rounded-[4rem] rounded-xl shadow-md flex md:flex-row flex-col items-center md:p-6 p-4 transition-transform transform hover:scale-105"
            >
              <div className="flex-1">
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
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="my-16 text-center">          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Find Your Perfect Talent Match?
          </h3>
          <button
            onClick={() => handleButtonClick("Talent Hub")}
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

export default TalentSupport;
