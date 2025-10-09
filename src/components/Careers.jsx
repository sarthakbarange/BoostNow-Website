"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Careers = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  const toggleForm = (position = "") => {
    setSelectedPosition(position);
    setFormOpen(!isFormOpen);
    setFormSubmitted(false);
    setFormErrors({});

    setTimeout(() => {
      const popup = document.getElementById("career-form-popup");
      popup?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyyJL5VYYDYv9dCff3m8ukgWEAJYP9soK_0Go2CCJBbIJNuxnD0BIB17IqcJw6U8q36/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({ ...formData, position: selectedPosition }),
      });

      console.log("Data successfully sent to Google Sheets");
      setFormData({ name: "", email: "", phoneNumber: "", message: "", position: "" });
      setFormSubmitted(true);
      setTimeout(() => toggleForm(), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
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
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-4 h-4 bg-blue-500/20 rounded-full' : 'w-3 h-3 bg-cyan-500/20 rotate-45'}`}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              rotate: 0
            }}
            animate={{
              y: -100,
              rotate: 360,
              x: [null, Math.random() * window.innerWidth]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8
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

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-16 text-white">
        <div className="container mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent"
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
              CAREERS
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: "easeOut" 
              }}
            >
              Join our journey in shaping the future of ERP and IT solutions. At our company, careers are built with passion and innovation at the forefront.
            </motion.p>

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

      {/* Company Values Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture we've built together.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.2,
                  duration: 0.8 
                } 
              },
            }}
          >
            {[
              {
                title: "TEAMWORK",
                description: "Working together is paramount to our success. We encourage diversity of opinion and trust.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "RESPECT",
                description: "Treat all employees, vendors & partners with respect. We thrive on transparency & honesty.",
                // icon: "🤲",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "PASSION",
                description: "We are passionate about the success of our employees, our partners, and our products.",
                // icon: "🔥",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "INNOVATION",
                description: "Dare to be different in all areas of business, take risks, and learn from each other.",
                // icon: "💡",
                color: "from-blue-500 to-cyan-500"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative"
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ 
                    borderColor: "rgba(56, 182, 255, 0.6)",
                    boxShadow: "0 0 30px rgba(56, 182, 255, 0.3)"
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 rounded-2xl`}
                    whileHover={{ 
                      opacity: 0.15,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Animated floating icon placeholder */}
                  <motion.div 
                    className="text-4xl mb-4 text-center w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </motion.div>
                  
                  {/* Animated number badge */}
                  <motion.div 
                    className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${value.color} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-bold mb-4 text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                  >
                    {value.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-300 text-center leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                  >
                    {value.description}
                  </motion.p>

                  {/* Animated corner accents */}
                  <motion.div
                    className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 1.2, duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 1.4, duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="relative z-10 py-20">
        {/* Section-scoped cursor-follow glow */}
        <div className="blob-local" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">CURRENT OPENINGS</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to make an impact? Explore our open positions and find your perfect role.
            </p>
          </motion.div>

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
            {[
              {
                role: "Business Development Officer",
                department: "Sales & Marketing",
                // type: "Full-time",
                location: "Remote/Hybrid",
                experience: "2-4 years",
                skills: ["Sales Strategy", "Client Relations", "Market Analysis"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                role: "Product Manager",
                department: "Product",
                // type: "Full-time", 
                location: "On-site",
                experience: "3-5 years",
                skills: ["Product Strategy", "Agile", "User Research"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                role: "Frontend Developer (Intern)",
                department: "Engineering",
                // type: "Internship",
                location: "On-site",
                experience: "0-1 years",
                skills: ["React", "JavaScript", "CSS"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                role: "Backend Developer",
                department: "Engineering", 
                // type: "Full-time",
                location: "On-site",
                experience: "2-5 years",
                skills: ["Node.js", "Python", "Database Design"],
                gradient: "from-blue-500 to-cyan-500"
              },
              
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden"
                  whileHover={{ 
                    borderColor: "rgba(56, 182, 255, 0.8)",
                    boxShadow: "0 0 40px rgba(56, 182, 255, 0.4)"
                  }}
                >
                  {/* Animated gradient accent */}
                  <motion.div 
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${job.gradient} rounded-t-2xl`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.05 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                  </motion.div>
                  
                  {/* Job type badge with animation */}
                  {/* <motion.div 
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${job.gradient} text-white text-xs font-semibold rounded-full mb-4`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {job.type}
                  </motion.div> */}
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  >
                    {job.role}
                  </motion.h3>
                  <motion.p 
                    className="text-cyan-400 font-medium mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    {job.department}
                  </motion.p>
                  
                  <motion.div 
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                  >
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-cyan-400 rounded-full mr-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <span className="text-sm">{job.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-cyan-400 rounded-full mr-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 0.3 }}
                      />
                      <span className="text-sm">{job.experience}</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                  >
                    <p className="text-gray-400 text-sm mb-3">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skillIndex} 
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1 + 0.8 + skillIndex * 0.1,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(56, 182, 255, 0.2)",
                            borderColor: "rgba(56, 182, 255, 0.5)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 text-sm mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                  >
                    We are looking for a skilled {job.role} to join our team and work on exciting projects that shape the future of technology.
                  </motion.p>
                  
                  <motion.button
                    onClick={() => toggleForm(job.role)}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${job.gradient} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(56, 182, 255, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Apply Now →</span>
                  </motion.button>

                  {/* Floating particles around the card */}
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={`job-particle-${index}-${particleIndex}`}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="relative z-10 py-20">
        {/* Section-scoped cursor-follow glow */}
        <div className="blob-local" />
        <div className="container mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-white">Why Join Us?</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
              We value innovation, teamwork, and respect. Our dynamic environment nurtures growth, empowering you to make an impact while building the future of technology together.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.2,
                  duration: 0.8 
                } 
              },
            }}
          >
            {[
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities with mentorship and skill development programs.",
                // icon: "📈",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working hours and remote options to maintain a healthy work-life balance.",
                // icon: "⚖️",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive health coverage, competitive salary, and performance bonuses.",
                // icon: "💎",
                gradient: "from-blue-500 to-cyan-500"
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateY: -15 },
                  visible: { opacity: 1, y: 0, rotateY: 0 }
                }}
                className="group relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 rounded-2xl blur-xl`}
                  whileHover={{ 
                    opacity: 0.2,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Animated icon placeholder */}
                <motion.div 
                  className="text-4xl mb-4 w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {benefit.description}
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <a 
              href="/faq" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More →
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {isFormOpen && (
        <motion.div
          id="career-form-popup"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setFormOpen(false)}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-500/20 w-full max-w-md mx-auto relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Floating particles in modal */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`modal-particle-${i}`}
                  className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 p-6">
              {formSubmitted ? (
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  >
                    <span className="text-white text-2xl">✓</span>
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Form Submitted Successfully!</h2>
                  <p className="text-gray-300 mb-6">Thank you for applying. We will review your application and get back to you soon.</p>
                  <motion.button
                    onClick={toggleForm}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.h2 
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      Apply for Position
                    </motion.h2>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      Join our team and shape the future together
                    </motion.p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-white/10 backdrop-blur-sm border ${formErrors.name ? "border-red-500" : "border-white/20"} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300`}
                        placeholder="Enter your full name" 
                      />
                      {formErrors.name && <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-white/10 backdrop-blur-sm border ${formErrors.email ? "border-red-500" : "border-white/20"} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300`}
                        placeholder="Enter your email address" 
                      />
                      {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <label htmlFor="phoneNumber" className="block text-gray-300 font-medium mb-2 text-sm">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-white/10 backdrop-blur-sm border ${formErrors.phoneNumber ? "border-red-500" : "border-white/20"} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300`}
                        placeholder="Enter your phone number" 
                      />
                      {formErrors.phoneNumber && <p className="text-red-400 text-xs mt-1">{formErrors.phoneNumber}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <label htmlFor="position" className="block text-gray-300 font-medium mb-2 text-sm">Position Applied For</label>
                      <input 
                        type="text" 
                        id="position" 
                        name="position" 
                        value={selectedPosition} 
                        readOnly
                        className="w-full px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg text-cyan-300 font-medium cursor-not-allowed" 
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm">Cover Letter / Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows="2"
                        className={`w-full px-4 py-2 bg-white/10 backdrop-blur-sm border ${formErrors.message ? "border-red-500" : "border-white/20"} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 resize-none`}
                        placeholder="Tell us why you're interested in this position..."
                      />
                      {formErrors.message && <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>}
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <motion.button 
                      type="button" 
                      onClick={toggleForm}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-gray-300 font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button 
                      type="submit"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Submit Application</span>
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Careers;
