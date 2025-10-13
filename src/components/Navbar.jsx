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
      if (!event.target.closest(".services-dropdown-container")) {
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

          {/* Desktop navigation */}
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

            {/* Services dropdown */}
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
                const header = document.getElementById("site-navbar")
                if (header) {
                  const rect = header.getBoundingClientRect()
                  const safe = Math.ceil(rect.top + rect.height + 8)
                  document.documentElement.style.setProperty("--navbar-safe-top", `${safe}px`)
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

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
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
                  <a
                    href="https://daas.boostnow.in/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 rounded hover:bg-white/5 px-3"
                  >
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
                  const header = document.getElementById("site-navbar")
                  if (header) {
                    const rect = header.getBoundingClientRect()
                    const safe = Math.ceil(rect.top + rect.height + 8)
                    document.documentElement.style.setProperty("--navbar-safe-top", `${safe}px`)
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

      {/* Get Quote form + success message remain unchanged */}
      {/* ... (Keep your existing form and success modal here exactly as they are) */}
    </div>
  )
}
