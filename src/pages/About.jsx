import React from "react";
import missionImage from "../assets/svg/mission.svg";
import visionImage from "../assets/svg/vision.svg";
import HowWeWork from "../components/HowWeWork";
import { Helmet } from "react-helmet";
const About = () => {
  return (<>
   <Helmet>
        <title>About | BoostNow</title>
        <meta name="description" content="BoostNow is a leading provider of IT solutions, specializing in web development, ERP systems, cybersecurity, automation, and business technology. We help startups, enterprises, and small businesses achieve digital transformation." />
        <meta name="keywords" content="About BoostNow, IT solutions provider, web development, ERP services, cybersecurity, business automation, startups, digital transformation, software development, technology company, enterprise solutions" />
      </Helmet>
    <div className="relative z-10 pt-16 min-h-screen overflow-hidden">
      <div className="relative z-10">
        <section className="relative text-white py-12 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-500 transform hover:scale-105">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Empowering businesses to succeed with innovative digital solutions.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center transition-all duration-500 transform hover:scale-105">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-slate-200 leading-relaxed md:text-xl text-lg">
                At BoostNow, our mission is to drive business growth by offering
                cutting-edge digital solutions tailored to our clients' needs. We
                are dedicated to delivering exceptional results through innovation,
                creativity, and collaboration.
              </p>
            </div>
            <div className="w-36 h-36 sm:w-60 sm:h-60 max-w-md mx-auto">
              <img
                src={missionImage}
                alt="Mission"
                className="rounded-lg backdrop-blur-lg border-white/30 shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="sm:py-12 px-6 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-40 h-40 sm:w-60 sm:h-60 max-w-md mx-auto">
              <img
                src={visionImage}
                alt="Vision"
                className="rounded-lg backdrop-blur-lg border-white/30 shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="text-center transition-all duration-500 transform hover:scale-105">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">Our Vision</h2>
              <p className="text-slate-200 leading-relaxed sm:text-xl text:lg">
                To be a global leader in digital transformation, enabling businesses
                to thrive in the digital era. We aim to set the benchmark for
                excellence in delivering impactful solutions that inspire change and
                create value for all stakeholders.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-100">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 gap-4 text-xl">
              {[
                {
                  title: "Innovation",
                  description:
                    "We embrace creativity and strive to deliver innovative solutions that drive success.",
                },
                {
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of integrity in all our actions and decisions.",
                },
                {
                  title: "Customer-Centric",
                  description:
                    "We put our clients at the heart of everything we do, ensuring their success is our success.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-transparent backdrop-blur-lg p-6 border border-white/30 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-gray-300 mb-4">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
            <HowWeWork />
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;