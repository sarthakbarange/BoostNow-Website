import React, { useState } from 'react';
import discoverIcon from '../assets/svg/discover.svg'; // Replace with your discover icon
import planIcon from '../assets/svg/planning.svg'; // Replace with your plan icon
import executeIcon from '../assets/svg/excute.svg'; // Replace with your execute icon
import monitorIcon from '../assets/svg/monitoring.svg'; // Replace with your monitor icon
import optimizeIcon from '../assets/svg/optimize.svg'; // Replace with your optimize icon
import reportIcon from '../assets/svg/report.svg'; // Replace with your report icon


const steps = [
  { id: 1, title: "Discover", icon: discoverIcon, desc: "We start by getting to know you and your business. Through a friendly conversation, we’ll understand your goals, target audience, and challenges." },
  { id: 2, title: "Plan", icon: planIcon, desc: "Next, we create a tailored marketing strategy that fits your needs. This plan outlines our approach and the tools we’ll use to help you succeed." },
  { id: 3, title: "Execute", icon: executeIcon, desc: "With your approval, we roll out the plan! Our team works diligently to implement the strategies, keeping you in the loop every step of the way." },
  { id: 4, title: "Monitor", icon: monitorIcon, desc: "We don’t just set it and forget it. We continuously track the performance of your campaigns, analyzing what works and what can be improved." },
  { id: 5, title: "Optimize", icon: optimizeIcon, desc: "Based on our insights, we make adjustments to ensure your marketing is always performing at its best. Our goal is to maximize your results." },
  { id: 6, title: "Report", icon: reportIcon, desc: "You’ll receive regular updates on our progress and results. We believe in transparency, so you’ll always know how your investment is performing." }
];

const HowWeWork = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
    <section className="text-white hidden sm:block">
      <div className="container text-center">
        <h2 className="sm:text-6xl text-4xl font-bold mb-8 text-white">How We Work</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-12 gap-y-6 gap-x-2">
          {/* Discover Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={discoverIcon} alt="Discover Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Discover</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              We start by getting to know you and your business. Through a friendly conversation, we’ll understand your goals, target audience, and challenges.
            </p>
          </div>

          {/* Plan Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={planIcon} alt="Plan Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Plan</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              Next, we create a tailored marketing strategy that fits your needs. This plan outlines our approach and the tools we’ll use to help you succeed.
            </p>
          </div>

          {/* Execute Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={executeIcon} alt="Execute Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Execute</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              With your approval, we roll out the plan! Our team works diligently to implement the strategies, keeping you in the loop every step of the way.
            </p>
          </div>

          {/* Monitor Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={monitorIcon} alt="Monitor Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Monitor</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              We don’t just set it and forget it. We continuously track the performance of your campaigns, analyzing what works and what can be improved.
            </p>
          </div>

          {/* Optimize Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={optimizeIcon} alt="Optimize Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Optimize</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              Based on our insights, we make adjustments to ensure your marketing is always performing at its best. Our goal is to maximize your results.
            </p>
          </div>

          {/* Report Step */}
          <div className="group bg-white/2 backdrop-blur-lg text-white-800 border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6 hover:bg-opacity-40 relative">
            <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
              <img src={reportIcon} alt="Report Icon" className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">Report</h3>
            <p className="text-white/90 leading-relaxed group-hover:block transition-all duration-300 group-hover:translate-y-[20px] hidden">
              You’ll receive regular updates on our progress and results. We believe in transparency, so you’ll always know how your investment is performing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="text-white md:hidden block">
      <div className="container text-center">
        <h2 className="sm:text-6xl text-4xl font-bold mb-8 text-white">How We Work</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-12 gap-y-6 gap-x-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`group bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform p-6 hover:bg-opacity-40 relative cursor-pointer 
                ${activeCard === step.id ? "col-span-2 md:col-span-1 w-full h-auto" : ""} 
                lg:hover:scale-105`}
              onClick={() => setActiveCard(activeCard === step.id ? null : step.id)}
            >
              <div className="w-24 h-24 mx-auto text-white mb-4 transition-all duration-300">
                <img src={step.icon} alt={`${step.title} Icon`} className="w-full h-full object-contain transition-all duration-300 group-hover:hidden" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:translate-y-[-20px] transition-all duration-300">{step.title}</h3>
              <p className={`text-white/90 leading-relaxed transition-all duration-300 ${activeCard === step.id ? "block" : "hidden"}`}>
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

