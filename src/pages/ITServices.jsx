"use client";
import React, { useState } from "react";
import { FaRocket, FaFlask, FaLaptopCode, FaCogs } from "react-icons/fa";
import Technologies from "../components/Technology";
import PopupForm from "../components/PopupForm"; // Import the PopupForm component
import ITServices from "../components/ITServices";
import { Helmet } from "react-helmet";

const services = [
  {
    name: "MVP (Minimum Viable Product) Development",
    icon: <FaRocket />,
    description:
      "Turn your idea into reality with MVP development. We help you build a functional, cost-effective version of your product to test with real users and refine your concept for success.",
    image: "https://tse2.mm.bing.net/th?id=OIP.wmYtUEp1_8S3B_7j-On95AHaDr&pid=Api&P=0&h=220",
    // image: "/startup/mvp.gif",
  },
  {
    name: "POC (Proof of Concept) Development",
    icon: <FaFlask />,
    description:
      "Validate your ideas with POC development. We create a prototype to demonstrate the feasibility of your concept, gain stakeholder confidence, and lay the foundation for execution.",
    image: "https://tse1.mm.bing.net/th?id=OIP.vHWABhuJ5HRnJQ_smmyKtwHaDc&pid=Api&P=0&h=220",
    // image: "/startup/poc.gif",
  },
  {
    name: "Custom Software Development",
    icon: <FaLaptopCode />,
    description:
      "Unlock tailored solutions with our custom software development. We design software that meets your business needs, ensuring scalability, efficiency, and seamless integration.",
    image: "https://tse2.mm.bing.net/th?id=OIP.invURsKgj-03T8St3WRcaAHaD5&pid=Api&P=0&h=220",
    // image: "/startup/customsd.gif",
  },
  {
    name: "Technology Consulting",
    icon: <FaCogs />,
    description:
      "Leverage expert guidance with our technology consulting services. We help you navigate the tech landscape, optimize systems, enhance performance, and drive innovation.",
    image: "https://tse4.mm.bing.net/th?id=OIP.AFA-csUy3bOu9-GKb1nlSAHaFi&pid=Api&P=0&h=220",
    // image: "/startup/techconsult.gif",
  },
];

const Solution = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = (serviceName) => {
    setSelectedService(serviceName);
    setFormVisible(true);
  };

  return (
    <><Helmet>
    <title>IT Services | BoostNow</title>
    <meta name="description" content="BoostNow offers top-tier IT services, including web development, ERP solutions, cybersecurity, and automation. We provide tailored technology solutions for startups, small businesses, and enterprises to help them scale efficiently." />
    <meta name="keywords" content="IT services, software development, web development, ERP solutions, cybersecurity, business automation, cloud computing, SaaS, IT consulting, startups, small business technology, enterprise solutions, digital transformation, e-commerce solutions, managed IT services " />
  </Helmet>
      <section className="max-w-7xl relative z-10 pt-28 mx-auto px-4 pb-20">
        <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mb-4 sm:mb-12">
          IT Services
        </h2>
        <p className="md:text-lg text-base text-center text-gray-100 text-muted-foreground sm:mb-12">
          We provide cutting-edge IT services, including web and software development, cloud solutions, cybersecurity, and IT consulting. Our expert team ensures seamless digital transformation, optimizing efficiency and innovation for businesses of all sizes.
        </p>
        <Technologies />
        <ITServices/>

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

export default Solution;
