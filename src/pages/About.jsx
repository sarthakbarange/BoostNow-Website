
import React from "react";
import missionImage from "../assets/svg/mission.png"; // PNG inside svg folder
import visionImage from "../assets/svg/vision.png";   // PNG inside svg folder
import HowWeWork from "../components/HowWeWork";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | BoostNow</title>
        <meta
          name="description"
          content="BoostNow is a leading provider of IT solutions, specializing in web development, ERP systems, cybersecurity, automation, and business technology. We help startups, enterprises, and small businesses achieve digital transformation."
        />
        <meta
          name="keywords"
          content="About BoostNow, IT solutions provider, web development, ERP services, cybersecurity, business automation, startups, digital transformation, software development, technology company, enterprise solutions"
        />
      </Helmet>

      {/* Transparent Background to show particles */}
      <div className="relative min-h-screen overflow-hidden">

        <div className="relative z-10 pt-20">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white py-20 px-6 text-center"
          >
            <div className="container mx-auto max-w-6xl">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-[0_0_25px_rgba(0,170,255,0.6)]">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses to succeed with cutting-edge digital
                solutions and futuristic innovation.
              </p>
            </div>
          </motion.section>

          {/* Mission Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(0,140,255,0.6)]">
                  Our Mission
                </h2>
                <p className="text-gray-300 leading-relaxed md:text-lg max-w-xl mx-auto">
                  At BoostNow, our mission is to accelerate business growth by
                  offering customized, world-class digital solutions. We thrive
                  on creativity, collaboration, and innovation to deliver
                  exceptional results.
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-56 h-56 sm:w-80 sm:h-80 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-2xl blur-3xl bg-blue-500/40"></div>
                <img
                  src={missionImage}
                  alt="Mission"
                  className="relative rounded-2xl border border-blue-400/30 shadow-[0_0_25px_rgba(0,180,255,0.5)] hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-56 h-56 sm:w-80 sm:h-80 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-2xl blur-3xl bg-indigo-500/40"></div>
                <img
                  src={visionImage}
                  alt="Vision"
                  className="relative rounded-2xl border border-indigo-400/30 shadow-[0_0_25px_rgba(80,130,255,0.5)] hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(100,150,255,0.7)]">
                  Our Vision
                </h2>
                <p className="text-gray-300 leading-relaxed md:text-lg max-w-xl mx-auto">
                  To become a global leader in digital transformation, empowering
                  businesses to thrive in the era of innovation. We strive to
                  create impactful solutions that inspire change and generate
                  value for all stakeholders.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-[0_0_20px_rgba(0,160,255,0.7)]">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We embrace creativity and deliver futuristic solutions that shape tomorrow.",
                  },
                  {
                    title: "Integrity",
                    description:
                      "We uphold transparency, trust, and accountability in every action.",
                  },
                  {
                    title: "Customer First",
                    description:
                      "We put our clients at the center, ensuring their success drives ours.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="py-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="container mx-auto text-center"
            >
              <HowWeWork />
            </motion.div>
          </section>
        </div>
      </div>

      {/* Tailwind custom animation for gradient */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
        `}
      </style>
    </>
  );
};

export default About;
