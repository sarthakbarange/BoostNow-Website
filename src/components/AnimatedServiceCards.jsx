import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCheck, FaUserTie, FaHandshake, FaUsers, FaChartLine, FaBusinessTime, FaArrowRight } from "react-icons/fa";

// Glassmorphic card with gradient and animation
const GlassCard = ({ service, index }) => {
  const colors = [
    'from-blue-600/80 to-blue-900/80',
    'from-cyan-600/80 to-blue-800/80',
    'from-sky-600/80 to-blue-900/80',
    'from-indigo-600/80 to-blue-900/80',
    'from-blue-700/80 to-indigo-900/80',
    'from-cyan-700/80 to-blue-800/80'
  ];

  const iconColors = [
    'text-blue-300',
    'text-cyan-300',
    'text-sky-300',
    'text-indigo-300',
    'text-blue-200',
    'text-cyan-200'
  ];

  const buttonColors = [
    'from-blue-500 to-blue-600',
    'from-cyan-500 to-blue-600',
    'from-sky-500 to-blue-600',
    'from-indigo-500 to-blue-700',
    'from-blue-500 to-indigo-600',
    'from-cyan-500 to-blue-600'
  ];

  const buttonHoverColors = [
    'hover:from-blue-600 hover:to-blue-700',
    'hover:from-cyan-600 hover:to-blue-700',
    'hover:from-sky-600 hover:to-blue-700',
    'hover:from-indigo-600 hover:to-blue-800',
    'hover:from-blue-600 hover:to-indigo-700',
    'hover:from-cyan-600 hover:to-blue-700'
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.5 },
        y: { type: 'spring', stiffness: 100, damping: 15 }
      }
    }),
    hover: {
      y: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { 
        y: { type: 'spring', stiffness: 300, damping: 15 },
        boxShadow: { duration: 0.3 }
      }
    }
  };

  const buttonVariants = {
    rest: { 
      x: 0,
      background: `linear-gradient(135deg, ${buttonColors[index % buttonColors.length]} 0%, ${buttonColors[(index + 1) % buttonColors.length]} 100%)`
    },
    hover: {
      x: 5,
      background: `linear-gradient(135deg, ${buttonHoverColors[index % buttonHoverColors.length].replace('hover:', '')} 0%, ${buttonHoverColors[(index + 1) % buttonHoverColors.length].replace('hover:', '')} 100%)`,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 15 },
        background: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 h-full flex flex-col backdrop-blur-sm bg-gradient-to-br ${colors[index % colors.length]} border border-white/10`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-400/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className={`${iconColors[index % iconColors.length]} text-4xl mb-6`}>
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
        {service.name}
      </h3>
      
      <p className="text-blue-100/90 mb-6 flex-grow relative z-10">
        {service.description}
      </p>
      
      <motion.button
        className={`mt-auto bg-gradient-to-r ${buttonColors[index % buttonColors.length]} ${buttonHoverColors[index % buttonHoverColors.length]} text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 self-start relative overflow-hidden group`}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
      >
        <span>Learn More</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaArrowRight className="text-sm" />
        </motion.span>
        <span className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-all duration-300"></span>
      </motion.button>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/5 rounded-tl-full"></div>
    </motion.div>
  );
};

const AnimatedServiceCards = () => {
  const services = [
    {
      name: "Recruitment Services",
      icon: <FaUserCheck />,
      description: "End-to-end recruitment solutions tailored to your business needs. We handle everything from sourcing to onboarding of qualified professionals.",
    },
    {
      name: "Staff Augmentation",
      icon: <FaUsers />,
      description: "Rapidly scale your team with skilled professionals for short-term projects or specific initiatives without long-term commitment.",
    },
    {
      name: "Training & Placement",
      icon: <FaChartLine />,
      description: "Access our pool of pre-trained professionals ready to contribute from day one. We train candidates in industry-relevant skills.",
    },
    {
      name: "Talent Assessment",
      icon: <FaUserTie />,
      description: "Comprehensive evaluation of technical and soft skills to ensure candidates match your requirements and company culture.",
    },
    {
      name: "Contract Staffing",
      icon: <FaHandshake />,
      description: "Flexible hiring options with pre-defined contract periods, allowing you to manage resources efficiently while meeting project demands.",
    },
    {
      name: "Remote Talent Solutions",
      icon: <FaBusinessTime />,
      description: "Access global talent pools with our remote workforce solutions. Get skilled professionals regardless of geographic constraints.",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-950/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxZTJhM2EiLz4KICA8cGF0aCBkPSJNMzAgMTVMMTUgMzBNNDUgMTVMMzAgMzBNNDUgNDVMMzAgMzBNMTUgNDVMMzAgMzAiIHN0cm9rZT0iIzFmM2E1MCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center text-blue-100/80 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Discover our comprehensive recruitment solutions tailored to your business needs
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <GlassCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default AnimatedServiceCards;
