"use client"
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react";
import Modal from 'react-modal'; 
import { Link } from "react-router-dom";

Modal.setAppElement('#root');

export default function GetStartedNow() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Handle opening of the modal
  const handleOpenModal = () => {
    setIsOpen(true);
    handleButtonClick(); // Call custom onClick logic
  };

  // Handle closing of the modal
  const handleCloseModal = () => setIsOpen(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsOpen(false);
  };

  // Custom onClick function
  const handleButtonClick = () => {
    console.log("Get Started button clicked!");
    // You can add other actions here, such as analytics or tracking
  };

  return (
    <section className="py-16 relative z-10  text-white bg-transparent">
      <div className="container  mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-100 mb-8">
            Transform your business with our cutting-edge service. Start your journey to success now!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-left">{feature}</p>
              </div>
            ))}
          </div>

<Link to="/contact" >
          <button  
          // onClick={handleOpenModal}
           size="lg" className="bg-blue-600  hover:bg-blue-700  transition duration-300 hover:text-xl rounded-xl py-4 text-lg px-8 ">
            Get Started Now
          </button>
          </Link>
        </div>
      </div>
      {/* Popup Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Get Started Form"
        className="relative z-50 mt-40 w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black "
      >
        <h2 className="text-6xl font-bold mb-4">Get Started Today</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </section>
  )
}

const features = [
  "Streamlined workflow automation",
  "24/7 expert support",
  "Customizable solutions for your needs",
  "Secure and scalable infrastructure",
] 