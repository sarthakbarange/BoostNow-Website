"use client";
import React from "react";
import { motion } from "framer-motion";
import { Laptop, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function ITServices() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-16 text-white">
        <div className="container mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
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
              IT SERVICES
            </motion.h1>

            {/* Animated decorative elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-cyan-400" />}
              title="Startups"
              description="Tailored solutions to help startups launch and scale quickly."
              services={[
                "MVP (Minimum Viable Product) Development",
                "POC (Proof of Concept) Development",
                "Custom Software Development",
                "Technology Consulting",
                "UI/UX Design",
                "Web and Mobile App Development",
                "API Development and Integration",
                "Quality Assurance and Testing",
                "Deployment and Release Management",
                "Post-Launch Support",
                "Build A Team"
              ]}
              link="startups"
            />
            <ServiceCard
              icon={<Users className="h-12 w-12 text-cyan-400" />}
              title="Small Businesses"
              description="Comprehensive IT solutions to drive growth for small businesses."
              services={[
                "Website Development",
                "SEO (Search Engine Optimization)",
                "PPC (Pay-Per-Click) Advertising",
                "Content Marketing",
                "Graphic Design",
                "E-commerce Solutions",
                "Analytics and Reporting",
                "CRM Setup",
                "Technical Support and Maintenance"
              ]}
              link="smallbusiness"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function ServiceCard({ icon, title, description, link, services }) {
  return (
    <div className="group relative border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="p-6 relative z-10 flex-grow">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
            <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          {title}
        </h3>
        <p className="text-gray-300 text-center mb-6">
          {description}
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-blue-300 text-center">Our Services:</h4>
          <div className="grid grid-cols-1 gap-2">
            {services.map((service, index) => (
              <span 
                key={index}
                className="text-sm text-blue-100 px-3 py-2 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
        <Link 
          to={link} 
          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          Explore Services
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
