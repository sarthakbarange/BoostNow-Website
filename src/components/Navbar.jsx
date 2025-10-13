
"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import logo2 from "/logo2.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    
    const handleClickOutside = (event) => {
      // Close dropdown when clicking outside of services section
      if (!event.target.closest('.services-dropdown-container')) {
        setDropdownOpen(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      )
      // Clear form and show success
      setFormData({ firstName: "", lastName: "", workEmail: "", phoneNumber: "", message: "" })
      setIsFormOpen(false)
      setFormSubmitted(true)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      {/* Centered glass-style navbar */}
      <header id="site-navbar" className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-auto">
        <nav
          aria-label="Global"
          className={`flex items-center justify-between px-6 py-3 rounded-2xl
            bg-black/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,200,255,0.28)]
            border border-cyan-400/30 transition-all duration-300 w-[95%] max-w-6xl`}
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-2.5 p-1.5">
              <img
                alt="Logo"
                src={logo2 || "/placeholder.svg"}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.8)]"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              aria-label="Open main menu"
            >
              <Bars3Icon aria-hidden="true" className="w-7 h-7" />
            </button>
          </div>

          {/* Desktop navigation (explicit links to preserve routes) */}
          <div className="hidden lg:flex lg:gap-x-10">
            <Link 
              to="/" 
              className="relative text-white text-lg font-medium group"
              onClick={() => setDropdownOpen(false)}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>

            <Link 
              to="/about" 
              className="relative text-white text-lg font-medium group"
              onClick={() => setDropdownOpen(false)}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>

            {/* Services: hover to show dropdown, click to dismiss */}
            <div
              className="relative services-dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <Link 
                to="/services" 
                className="flex items-center text-white text-lg font-medium group"
                onClick={() => setDropdownOpen(false)}
              >
                Services
                {dropdownOpen ? (
                  <ChevronDownIcon className="ml-1 w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="ml-1 w-5 h-5" />
                )}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
              </Link>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-lg bg-black/80 backdrop-blur-xl border border-cyan-500/30 shadow-lg z-50">
                  <div className="py-2">
                     <a
                      href="https://daas.boostnow.in/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-cyan-600/40 hover:text-white transition-colors"
                    >
                     DaaS
                    </a>
                    <Link
                      to="/services/itservices"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-cyan-600/40 hover:text-white transition-colors"
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/services/training"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-cyan-600/40 hover:text-white transition-colors"
                    >
                      IT Training
                    </Link>
                    <Link
                      to="/itrecruitment"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-cyan-600/40 hover:text-white transition-colors"
                    >
                      IT Recruitment
                    </Link>
                    <Link
                      to="https://boostnowai.com/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-cyan-600/40 hover:text-white transition-colors"
                    >
                      ERP
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/careers" 
              className="relative text-white text-lg font-medium group"
              onClick={() => setDropdownOpen(false)}
            >
              Careers
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>

            <Link 
              to="/contact" 
              className="relative text-white text-lg font-medium group"
              onClick={() => setDropdownOpen(false)}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>

            {/* Testimonial */}
            <Link 
              to="/project" 
              className="relative text-white text-lg font-medium group"
              onClick={() => setDropdownOpen(false)}
            >
              Testimonial
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* Desktop "Get Quote" button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => {
                const header = document.getElementById('site-navbar')
                if (header) {
                  const rect = header.getBoundingClientRect()
                  const safe = Math.ceil(rect.top + rect.height + 8)
                  document.documentElement.style.setProperty('--navbar-safe-top', `${safe}px`)
                }
                setDropdownOpen(false)
                setIsFormOpen(true)
              }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(0,200,255,0.8)] hover:scale-105 transition"
            >
              Get Quote →
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (Dialog) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        {/* Overlay */}
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

        {/* Panel (slide in from right styling) */}
        <DialogPanel
          className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs overflow-y-auto bg-black/70 backdrop-blur-xl
            border-l border-cyan-400/30 shadow-[0_0_25px_rgba(0,200,255,0.5)] p-6 rounded-l-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img alt="Logo" src={logo2 || "/placeholder.svg"} className="h-10 w-10 rounded-full border-2 border-cyan-400" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-white" aria-label="Close menu">
              <XMarkIcon className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-white text-lg">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
              Home
            </Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
              About
            </Link>

            {/* Mobile Services: clickable Link + independent chevron to expand dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 rounded hover:bg-white/5 px-3 text-white w-full"
                >
                  Services
                </Link>

                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="ml-2 p-2 rounded hover:bg-white/5 text-white"
                  aria-expanded={dropdownOpen}
                  aria-label="Toggle services submenu"
                >
                  {dropdownOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
                </button>
              </div>

              {dropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-base text-gray-200">
                  <a href="https://daas.boostnow.in/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
                    DaaS
                  </a>
                  <Link to="/services/itservices" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
                    IT Services
                  </Link>
                  <Link to="/services/training" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
                    IT Training
                  </Link>
                  <Link to="/itrecruitment" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
                    IT Recruitment
                  </Link>
                  <Link to="https://boostnowai.com/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
                    ERP
                  </Link>
                </div>
              )}
            </div>

            <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
              Careers
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
              Contact
            </Link>

            <Link to="/project" onClick={() => setMobileMenuOpen(false)} className="py-2 rounded hover:bg-white/5 px-3">
              Testimonial
            </Link>

            <div className="mt-4">
              <button
                onClick={() => {
                  const header = document.getElementById('site-navbar')
                  if (header) {
                    const rect = header.getBoundingClientRect()
                    const safe = Math.ceil(rect.top + rect.height + 8)
                    document.documentElement.style.setProperty('--navbar-safe-top', `${safe}px`)
                  }
                  setIsFormOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(0,200,255,0.8)] hover:scale-105 transition"
              >
                Get Quote →
              </button>
            </div>
          </nav>
        </DialogPanel>
      </Dialog>

      {/* Get Quote Form Modal */}
      {isFormOpen && !formSubmitted && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[var(--navbar-safe-top)] sm:pt-[calc(var(--navbar-safe-top)+16px)] overflow-y-auto p-4"
          onClick={() => setIsFormOpen(false)}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="relative max-w-md w-full mx-4 my-6 sm:my-8">
            {/* Main form container with glass morphism effect */}
            <div
              className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header section with gradient background */}
              <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-400/20 p-6 text-center border-b border-white/10">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-2">
                  Get Quote
                </h2>
                <p className="text-blue-200/80 text-sm">Request a personalized quote for our services</p>
              </div>

              {/* Form section */}
              <div className="p-2">
                <form className="space-y-2" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-blue-200/90 mb-2"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-blue-200/90 mb-2"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="workEmail"
                      className="block text-sm font-medium text-blue-200/90 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-blue-200/90 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-2 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-blue-200/90 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm p-3 text-sm text-white placeholder-blue-200/50 focus:ring-2 focus:ring-blue-400/50 focus:bg-white/20 transition-all duration-300 shadow-inner resize-none"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/10 group-hover:to-blue-400/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 rounded-lg text-sm font-bold hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative">Submit Quote Request</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-blue-200 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {formSubmitted && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[var(--navbar-safe-top)] sm:pt-[calc(var(--navbar-safe-top)+16px)] overflow-y-auto p-4">
          <div className="relative max-w-md w-full mx-4 my-6 sm:my-8">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600/20 via-green-500/15 to-green-400/20 p-6 text-center border-b border-white/10">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent mb-2">Thank You!</h3>
                <p className="text-green-200/80 text-sm">Your quote request has been sent successfully</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-blue-200/90 mb-4">We will review your requirements and get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white py-3 rounded-lg text-sm font-bold hover:from-green-700 hover:via-green-600 hover:to-green-500 focus:outline-none focus:ring-4 focus:ring-green-300/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
