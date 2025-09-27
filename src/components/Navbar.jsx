"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
// import logo from "../images/logo.png"
import logo2 from "/logo2.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // const handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   setFormSubmitted(true)
  //   setTimeout(() => setIsFormOpen(false), 3000)
  // }
// Handle input change
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
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

      console.log("Data successfully sent to Google Sheets");
      // setModalOpen(false); // Close modal after submitting
      setFormData({
        firstName: "",
        lastName: "",
      workEmail: "",
        message: "",
      })
      setIsFormOpen(false);
      // console.log("dialCode"+country.dialCode)
      // alert("Data successfully sent to Google Sheets")
  } catch (error) {
      console.error("Error:", error);
  }
};
  return (
    <div>
      <header className={`fixed inset-x-0 xl:h-20 lg:h-16 border-b border-gray-300 top-0 z-50 bg-black/10 text-white transition-all duration-300 backdrop-blur-md border-white/80 shadow-lg`}>
        <nav aria-label="Global" className="flex items-center justify-between px-6 xl:py-4 py-3 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-2.5 p-1.5">
            <img alt="Logo" src={logo2 || "/placeholder.svg"} className="h-8 w-8 sm:h-12 sm:w-12 rounded-full" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-current">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className={`text-white xl:text-xl text-lg font-medium hover:underline`}>Home</Link>
            <Link to="/about" className={`text-white xl:text-xl text-lg font-medium hover:underline`}>About</Link>
            <div className="relative">
              <Link to="/services" onMouseEnter={() => setDropdownOpen(!dropdownOpen)} onMouseLeave={() => setDropdownOpen(!dropdownOpen)} className={`text-white xl:text-xl text-lg font-medium hover:underline flex items-center`}>
                Services
                {dropdownOpen ? <ChevronDownIcon className="pt-2 w-5 h-6 ml-1" /> : <ChevronRightIcon className="pt-2 w-5 h-6 ml-1" />}
              </Link>
              <div  onMouseLeave={() => setDropdownOpen(false)} onMouseEnter={() => setDropdownOpen(true)} className={`${dropdownOpen?"block":"hidden"} absolute left-0 top-4 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5`}>
                {/* <div onMouseLeave={() => setDropdownOpen(false)} className={` absolute left-0 top-4 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5`}> */}                  <div className="py-1">                    <Link to="/services/itservices" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">IT Services</Link>
                    <Link to="/services/training" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">IT Training</Link>
                    <Link to="/itrecruitment" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">IT Recruitment</Link>
                    <Link to="https://boostnowai.com/" target="_blank" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">ERP</Link>
                  </div>
                </div>
              {/* {dropdownOpen && (
                <div onMouseLeave={() => setDropdownOpen(false)} className={` absolute left-0 top-4 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5`}>
                  <div className="py-1">
                    <Link to="/itservices" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">IT Services</Link>
                    <Link to="/traning" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">IT Training</Link>
                    <Link to="https://boostnowai.com/" target="_blank" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900">ERP</Link>
                  </div>
                </div>
              )} */}
            </div>
            <Link to="/careers" className={`text-white xl:text-xl text-lg font-medium hover:underline`}>Careers</Link>
            <Link to="/contact" className={`text-white xl:text-xl text-lg font-medium hover:underline`}>Contact</Link>
            <Link to="/project" className={`text-white xl:text-xl text-lg font-medium hover:underline`}>Testimonial</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={() => setIsFormOpen(true)} className={`bg-white text-gray-800 hover:bg-gray-200 shadow-[0_4px_6px_rgba(0,0,0,0.4)] text-sm font-semibold px-4 py-2 rounded-lg`}>
              Get Quote <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img alt="Logo" src={logo2 || "/placeholder.svg"} className="h-10 w-auto" />
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-white">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">Home</Link>
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">About</Link>
                  <div>
                  <div className="flex items-center">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)}  className={`text-white px-3 md:text-xl text-base font-medium hover:bg-gray-100 hover:underline flex md:items-center`}>
                Services
              </Link>
                {dropdownOpen ? <ChevronDownIcon onMouseEnter={() => setDropdownOpen(false)}  className="w-12 mt-1 text-white px-3 md:text-xl text-base font-medium hover:underline flex md:items-center" /> : <ChevronRightIcon onMouseEnter={() => setDropdownOpen(true)}   className="w-10 mt-1 text-white px-3 md:text-xl font-bold hover:underline flex md:items-center" />}
                    </div>
              {/* <Link 
                  to="/services" 
                  onClick={() => {
                    if (dropdownOpen) setMobileMenuOpen(false); // Close only if dropdown is not opening
                  }} 
                  onMouseEnter={() => setDropdownOpen(true)} 
                  className={`text-white px-3 md:text-xl text-base font-medium hover:underline flex md:items-center`}
                >
                  Services
                  {dropdownOpen ? <ChevronDownIcon className="pt-2 w-5 h-6 ml-1" /> : <ChevronRightIcon className="pt-2 w-5 h-6 ml-1" />}
                </Link> */}
                    {dropdownOpen && (
                      <div className="pl-4">
                        {/* <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">Services</Link> */}                        <Link to="/services/itservices" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">IT Services</Link>
                        <Link to="/services/training" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">IT Training</Link>
                        <Link to="/itrecruitment" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">IT Recruitment</Link>
                        <Link to="https://boostnowai.com/" onClick={() => setMobileMenuOpen(false)} target="_blank" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">ERP</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">Careers</Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">Contact</Link>
                  <Link to="/project" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">Testimonial</Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Get in Touch Form */}
      {isFormOpen && !formSubmitted && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsFormOpen(false)}>
          <div className="bg-white rounded-lg p-6 w-80" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-4">Get Quote</h3>
              <div className="hover:cursor-pointer" onClick={() => setIsFormOpen(false)}>X</div>
            </div>
            <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="workEmail"
        name="workEmail"
        placeholder="Your Email"
        value={formData.workEmail}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Submit
      </button>
    </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {formSubmitted && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-xl font-semibold">Thank You!</h3>
            <p className="mt-2">Your message has been sent. We will get back to you soon.</p>
            <button onClick={() => setFormSubmitted(false)} className="mt-4 bg-blue-600 text-white py-2 rounded w-full">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
