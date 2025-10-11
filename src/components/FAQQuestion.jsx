
"use client";
import React from "react";
import { motion } from "framer-motion";

const FAQQuestion = () => {
  const faqData = [
    {
      question: "What ERP solutions does BoostNow provide?",
      answer:
        "BoostNow offers ERP solutions tailored to your business needs, helping streamline operations, improve data accuracy, and enhance decision-making processes.",
    },
    {
      question: "How can BoostNow's IT solutions benefit my business?",
      answer:
        "BoostNow provides a wide range of IT solutions including cloud computing, software development, system integrations, and network security to ensure your business stays competitive and secure.",
    },
    {
      question: "What IT training programs does BoostNow offer?",
      answer:
        "BoostNow offers IT training programs that cover a variety of areas including software development, networking, cybersecurity, and cloud computing, designed to enhance your team's skills and knowledge.",
    },
    {
      question: "How can I apply for an internship at BoostNow?",
      answer:
        "You can apply for an internship at BoostNow by visiting our careers page. We offer hands-on experience in areas like IT solutions, software development, and ERP systems, providing a great learning opportunity.",
    },
    {
      question: "What kind of IT consulting services does BoostNow provide?",
      answer:
        "BoostNow's IT consulting services help businesses optimize their IT infrastructure, implement new technologies, and ensure smooth system integration. We guide you through digital transformation and help solve technical challenges.",
    },
    {
      question: "Can BoostNow help with custom software development?",
      answer:
        "Yes, BoostNow specializes in custom software development. We work with you to create software tailored to your business requirements, improving efficiency and user experience.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center sm:p-6 p-2 py-20">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              FAQ
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: "easeOut" 
              }}
            >
              Find answers to commonly asked questions about our services and solutions.
            </motion.p>
          </motion.div>

          {/* FAQ Container */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:p-8 p-4 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.details
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.summary 
                    className="cursor-pointer text-lg font-medium flex justify-between items-center p-4 text-white hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="flex-1 text-left">{faq.question}</span>
                    <motion.span 
                      className="ml-4 text-cyan-400 transform group-open:rotate-180 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.summary>
                  
                  <motion.div
                    className="px-4 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-gray-300 leading-relaxed border-t border-white/10 pt-4"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>

                  {/* Floating particles around each FAQ */}
                  {[...Array(2)].map((_, particleIndex) => (
                    <motion.div
                      key={`faq-particle-${index}-${particleIndex}`}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                      style={{
                        top: `${20 + particleIndex * 60}%`,
                        right: `${5 + particleIndex * 15}%`,
                      }}
                      animate={{
                        y: [-3, 3, -3],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + particleIndex,
                        repeat: Infinity,
                        delay: index * 0.2 + particleIndex * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.details>
              ))}
            </div>
          </motion.div>

          {/* Bottom decorative section */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p 
              className="text-gray-400 text-lg"
              whileHover={{ scale: 1.05, color: "#38bdf8" }}
              transition={{ duration: 0.3 }}
            >
              Still have questions? Feel free to contact our support team.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQQuestion;
