import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import call from '../assets/gif/contact.gif';
import faq from '../assets/gif/faq.gif';
// import support from '../assets/gif/support.gif';

export default function Support({ id }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    workEmail: '',
    message: '',
    service: '',
    time: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Submitted:', formData);
  //   setShowPopup(false);
  // };
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Delay animation for better effect
    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(formData),
        });

        console.log("Appointment Data successfully sent to Google Sheets");
        setShowPopup(false); // Close modal after submitting
        setFormData({
          firstName: '',
    lastName: '',
    phoneNumber: '',
    workEmail: '',
    message: '',
    service: '',
    time: ''
        })
        // console.log("dialCode"+country.dialCode)
        // alert("Data successfully sent to Google Sheets")
    } catch (error) {
        console.error("Error:", error);
    }
};
  return (
    <section id={id} className="max-w-7xl mx-auto p-8 text-white rounded-2xl mt-6">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Help Center</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Get Support */}
        {/* <div
          className="flex flex-col items-center bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-100 cursor-pointer"
        >
          <img src={support} alt="Get Support" className="w-40 h-40 mb-4 transition-transform duration-300 transform hover:scale-110" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 transform hover:text-blue-600">Get Support &rarr;</h3>
          <p className="text-gray-600 text-center transition-all duration-300 transform hover:text-gray-800">Reach out to our team for assistance.</p>
        </div> */}

        {/* Appointment Popup Trigger */}
        <div onClick={() => setShowPopup(true)} className="flex flex-col items-center justify-center bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-100 cursor-pointer">
          {/* <img src={appointment} alt="Appointment" className="w-40 h-40 mb-4 transition-transform duration-300 transform hover:scale-110" /> */}
          <img src="/icons8-tear-off-calendar.gif" alt="Appointment" className="w-36 h-32 mt-4 rounded-lg transition-transform duration-300 transform hover:scale-110" />
          <div className="flex justify-center items-center bg-transparent w-full h-full">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="w-24 h-24"
      >
        <rect width="100" height="100" fill="white" />
        <g fill="none" stroke="black" strokeWidth="4">
          <rect
            x="20"
            y="10"
            width={isAnimated ? '60' : '0'}
            height="70"
            rx="8"
            ry="8"
            className="transition-all duration-1000 ease-in-out"
          />
          <line
            x1="20"
            y1="30"
            x2={isAnimated ? '80' : '20'}
            y2="30"
            className="transition-all duration-1000 ease-in-out delay-200"
          />
          <line
            x1="40"
            y1="50"
            x2={isAnimated ? '50' : '40'}
            y2={isAnimated ? '60' : '50'}
            className="transition-all duration-1000 ease-in-out delay-400"
          />
          <line
            x1="50"
            y1="60"
            x2={isAnimated ? '70' : '50'}
            y2={isAnimated ? '40' : '60'}
            className="transition-all duration-1000 ease-in-out delay-600"
          />
        </g>
      </svg> */}
    </div>


          <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 transform hover:text-blue-600">Appointment &rarr;</h3>
          <p className="text-gray-600 text-center transition-all duration-300 transform hover:text-gray-800">Schedule an appointment with our experts.</p>
        </div>

        {/* Contacts */}
        {/* <Link to="/contact" className="flex flex-col items-center bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-100">
          <img src={call} alt="Contacts" className="w-40 h-40 mb-4 transition-transform duration-300 transform hover:scale-110" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 transform hover:text-blue-600">Contacts &rarr;</h3>
          <p className="text-gray-600 text-center transition-all duration-300 transform hover:text-gray-800">Connect with us through various channels.</p>
        </Link> */}

        {/* FAQ */}
        <Link to="/faq" className="flex flex-col items-center bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-100">
          <img src={faq} alt="FAQ" className="w-40 h-40 mb-4 transition-transform duration-300 transform hover:scale-110" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 transform hover:text-blue-600">FAQ &rarr;</h3>
          <p className="text-gray-600 text-center transition-all duration-300 transform hover:text-gray-800">Find answers to frequently asked questions.</p>
        </Link>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="firstName" placeholder="Your First Name" className="w-full p-2 border rounded" onChange={handleInputChange} required />
              <input type="text" name="lastName" placeholder="Your Last Name" className="w-full p-2 border rounded" onChange={handleInputChange} required />
              <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full p-2 border rounded" onChange={handleInputChange} required />
              <input type="email" name="workEmail" placeholder="Email" className="w-full p-2 border rounded" onChange={handleInputChange} required />
              <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" onChange={handleInputChange} required></textarea>
              <select name="service" className="w-full p-2 text-black border rounded" onChange={handleInputChange} required>
                <option value="" className=' hidden'>Select a Service</option>
                <option value="IT Services  " className=' selected text-black'>IT Services</option>
                <option value="IT Training" className='text-black'>IT Training</option>
                <option value="ERP" className='text-black'>ERP</option>
                <option value="Other" className='text-black'>Other</option>
              </select>
              {/* <input type="date" name="date" className="w-full p-2 border rounded" onChange={handleInputChange} required /> */}
              <input type="time" name="time" className="w-full text-black p-2 border rounded" onChange={handleInputChange} required />
              <div className="flex justify-between">
                <button type="button" className="bg-gray-400 text-black px-4 py-2 rounded" onClick={() => setShowPopup(false)}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-black px-4 py-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
