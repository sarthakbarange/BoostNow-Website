"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Careers = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    position: "",
  });

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
    <div className="relative pt-16 z-10">
      <header className="text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mt-2 mb-4">CAREERS</h1>
          <p className="text-lg sm:text-2xl p-4">
            Join our journey in shaping the future of ERP and IT solutions. At our company, careers are built with passion and innovation at the forefront.
          </p>
        </div>
      </header>

      <section className="container mx-auto py-16 px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 sm:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          {[
            {
              title: "TEAMWORK",
              description: "Working together is paramount to our success. We encourage diversity of opinion and trust.",
            },
            {
              title: "RESPECT",
              description: "Treat all employees, vendors & partners with respect. We thrive on transparency & honesty.",
            },
            {
              title: "PASSION",
              description: "We are passionate about the success of our employees, our partners, and our products.",
            },
            {
              title: "INNOVATION",
              description: "Dare to be different in all areas of business, take risks, and learn from each other.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">CURRENT OPENINGS</h2>
          <motion.div
            className="space-y-6 w-2/3 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              "Bussiness Development Officer",
              "Product Manager",
              "Frontend Developer(Intern)",
              "Backend Developer",
            ].map((role, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{role}</h3>
                <p className="text-gray-600 sm:text-lg text-sm">
                  We are looking for a skilled {role} to join our team and work on exciting projects.
                </p>
                <button
                  onClick={() => toggleForm(role)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">Why Join Us?</h2>
          <p className="text-white/80 mb-6">
            We value innovation, teamwork, and respect. Our dynamic environment nurtures growth, empowering you to make an impact.
          </p>
          <motion.div
            className="flex justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <a href="/faq" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Learn More
            </a>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-100">
              <a href="/contact">Contact Us</a>
            </button>
          </motion.div>
        </div>
      </section>

      {isFormOpen && (
        <div
          id="career-form-popup"
          className="fixed border-2 shadow-xl shadow-gray-700 border-black rounded-xl md:top-[4%] top-[1%] md:left-[37%] left-[1%] bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white md:h-full w-full max-w-lg px-6 pb-6 rounded-lg shadow-lg">
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully</h2>
                <p className="text-gray-700 mb-6">Thank you for contacting us. We will get back to you soon.</p>
                <button
                  onClick={toggleForm}
                  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 mt-12 md:mt-20">Contact Us / Apply for Position</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your name" />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email" />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                    className={`w-full px-4 py-2 border ${formErrors.phoneNumber ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your Phone Number" />
                  {formErrors.phoneNumber && <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Applying for Position</label>
                  <input type="text" id="position" name="position" value={selectedPosition} readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="1"
                    className={`w-full px-4 py-2 border ${formErrors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Write your message here"></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={toggleForm}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400">Cancel</button>
                  <button type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
