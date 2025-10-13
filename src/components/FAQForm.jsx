
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() !== "" && email.trim() !== "") {
      // Here, you can handle the submission logic, e.g., sending the data to a server
      console.log("Question submitted:", question);
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      setSubmitted(true);
      setEmail("");
      setQuestion("");
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center sm:p-6 p-2 py-20">
        <motion.div 
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header section */}
          <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-400/20 p-6 text-center border-b border-white/10">
            <motion.h2 
              className="text-4xl sm:text-6xl font-bold bg-white bg-clip-text text-transparent mb-2"
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
              Ask a Question
            </motion.h2>
            <motion.p 
              className="text-blue-200/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Have a question? We're here to help you find the answers.
            </motion.p>
          </div>

          {/* Form section */}
          <div className="p-6">
            {submitted ? (
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
                <h3 className="text-2xl font-bold mb-4 text-white">Question Submitted Successfully!</h3>
                <p className="text-gray-300 mb-6">Thank you! Your question has been submitted. We'll get back to you soon.</p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ask Another Question
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Full Name Field */}
                <motion.div className="group">
                  <label htmlFor="fullName" className="block text-sm font-medium text-blue-200/90 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                      placeholder="Enter your full name"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200/90 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                      placeholder="Enter your email address"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Question Field */}
                <motion.div className="group">
                  <label htmlFor="question" className="block text-sm font-medium text-blue-200/90 mb-2">
                    Your Question
                  </label>
                  <div className="relative">
                    <textarea
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      rows="2"
                      className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 resize-none shadow-inner"
                      placeholder="Type your question here..."
                      required
                    ></textarea>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div className="pt-4">
                  <motion.button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative">Submit Question</span>
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}