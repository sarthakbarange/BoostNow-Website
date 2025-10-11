import React, { useState } from "react";
import { motion } from "framer-motion";
import discoverIcon from "../assets/svg/discover.svg";
import planIcon from "../assets/svg/planning.svg";
import executeIcon from "../assets/svg/excute.svg";
import monitorIcon from "../assets/svg/monitoring.svg";
import optimizeIcon from "../assets/svg/optimize.svg";
import reportIcon from "../assets/svg/report.svg";

const steps = [
  {
    id: 1,
    title: "Discover",
    icon: discoverIcon,
    desc: "We start by getting to know you and your business. Through a friendly conversation, we’ll understand your goals, target audience, and challenges.",
  },
  {
    id: 2,
    title: "Plan",
    icon: planIcon,
    desc: "Next, we create a tailored marketing strategy that fits your needs. This plan outlines our approach and the tools we’ll use to help you succeed.",
  },
  {
    id: 3,
    title: "Execute",
    icon: executeIcon,
    desc: "With your approval, we roll out the plan! Our team works diligently to implement the strategies, keeping you in the loop every step of the way.",
  },
  {
    id: 4,
    title: "Monitor",
    icon: monitorIcon,
    desc: "We don’t just set it and forget it. We continuously track the performance of your campaigns, analyzing what works and what can be improved.",
  },
  {
    id: 5,
    title: "Optimize",
    icon: optimizeIcon,
    desc: "Based on our insights, we make adjustments to ensure your marketing is always performing at its best. Our goal is to maximize your results.",
  },
  {
    id: 6,
    title: "Report",
    icon: reportIcon,
    desc: "You’ll receive regular updates on our progress and results. We believe in transparency, so you’ll always know how your investment is performing.",
  },
];

const HowWeWork = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {/* Desktop / Tablet */}
      <section className="text-white hidden sm:block">
        <div className="container bg-black text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:text-6xl text-4xl font-bold mb-16 text-white drop-shadow-[0_0_20px_rgba(0,160,255,0.7)]"
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-xl border border-blue-400/20 rounded-2xl shadow-[0_0_25px_rgba(0,180,255,0.25)] hover:shadow-[0_0_35px_rgba(0,200,255,0.6)] transition-all duration-500 p-8 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <img
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-blue-200 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="text-white sm:hidden block">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_0_20px_rgba(0,160,255,0.7)]">
            How We Work
          </h2>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-lg border border-blue-400/20 rounded-xl shadow-lg p-6 transition-all duration-500 cursor-pointer ${
                  activeCard === step.id
                    ? "shadow-[0_0_30px_rgba(0,200,255,0.5)]"
                    : "hover:shadow-[0_0_20px_rgba(0,150,255,0.3)]"
                }`}
                onClick={() =>
                  setActiveCard(activeCard === step.id ? null : step.id)
                }
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>

                {/* Description (toggleable) */}
                <p
                  className={`text-blue-200 transition-all duration-500 ${
                    activeCard === step.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
