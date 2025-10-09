
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaUserFriends, FaDatabase, FaComments, FaCogs } from 'react-icons/fa';

const FAQNo = () => {
  const features = [
    {
      icon: FaTrophy,
      title: "Proven Results",
      description: "Our track record speaks for itself. We've consistently delivered measurable success for our clients, boosting their online presence and growth.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaChartLine,
      title: "Customized Strategies",
      description: "Every business is unique. We create tailored marketing strategies that fit your specific goals and target audience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaUserFriends,
      title: "Expert Team",
      description: "Our skilled professionals are industry experts, dedicated to staying ahead of trends to ensure your campaigns are effective.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaDatabase,
      title: "Data-Driven Decisions",
      description: "We utilize analytics to inform our strategies, ensuring continuous optimization and maximum ROI for your campaigns.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaComments,
      title: "Transparent Communication",
      description: "We prioritize clear, open communication, providing regular updates and detailed reports so you're always informed.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaCogs,
      title: "Comprehensive Services",
      description: "From SEO to social media management, content marketing to PPC, we offer a full suite of services to meet all your digital marketing needs under one roof.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
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

      <section className="relative z-10 sm:p-8 p-2 text-white py-20" id="why-choose">
        {/* Section-scoped cursor-follow glow */}
        <div className="blob-local" />
        <div className="container mx-auto text-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-6xl font-bold mb-6 bg-white bg-clip-text text-transparent"
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
              Why Choose BoostNow?
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
              Discover what sets us apart and makes us the perfect partner for your digital transformation journey.
            </motion.p>

          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.15,
                  duration: 0.8 
                } 
              },
            }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateY: -15 },
                    visible: { opacity: 1, y: 0, rotateY: 0 }
                  }}
                  className="group relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 rounded-2xl blur-xl`}
                    whileHover={{ 
                      opacity: 0.2,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className="relative z-10 mb-6"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 sm:text-base text-sm leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Corner decorations */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/50 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Floating particles around the card */}
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={`feature-particle-${index}-${particleIndex}`}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                      style={{
                        top: `${20 + particleIndex * 30}%`,
                        right: `${5 + particleIndex * 10}%`,
                      }}
                      animate={{
                        y: [-5, 5, -5],
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQNo;
