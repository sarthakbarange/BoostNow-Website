"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo2 from "/logo2.png";
import classNames from "classnames";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    message: "",
  });

  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );
      setFormData({ firstName: "", lastName: "", workEmail: "", message: "" });
      setIsFormOpen(false);
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send your message. Please try again.");
    }
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
    { name: "Testimonial", to: "/project" },
  ];

  const serviceLinks = [
    { name: "IT Services", to: "/services/itservices" },
    { name: "IT Training", to: "/services/training" },
    { name: "IT Recruitment", to: "/itrecruitment" },
    { name: "ERP", to: "https://boostnowai.com/", external: true },
  ];

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };
  
  return (
    <>
      <style jsx global>{`
        .nav-link-effect {
          position: relative;
          text-decoration: none !important;
          transition: color 0.5s;
          z-index: 1;
        }
        .nav-link-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top: 2px solid #008cff;
          border-bottom: 2px solid #008cff;
          transform: scaleY(2);
          opacity: 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav-link-effect::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #008cff;
          transform: scaleY(0);
          opacity: 0;
          transition: transform 0.3s, opacity 0.3s;
          z-index: -1;
        }
        .nav-link-effect:hover {
          color: #fff;
        }
        .nav-link-effect:hover::before {
          transform: scaleY(1);
          opacity: 1;
        }
        .nav-link-effect:hover::after {
          transform: scaleY(1);
          opacity: 1;
        }
      `}</style>
      <header className={classNames(
        "fixed inset-x-0 xl:h-20 lg:h-16 top-0 z-50 transition-all duration-300 backdrop-blur-md",
        {
          "bg-black/80 border-b border-gray-300 shadow-lg": headerScrolled,
          "bg-black/10 border-b border-white/80": !headerScrolled,
        }
      )}>
        <nav aria-label="Global" className="flex items-center justify-between px-6 xl:py-4 py-3 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-2.5 p-1.5" onClick={closeAllMenus}>
              <img alt="Logo" src={logo2} style={{ height: '2rem', width: '2rem', borderRadius: '9999px' }} className="sm:h-12 sm:w-12" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-current">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map(link => (
              <Link key={link.name} to={link.to} className="text-white xl:text-xl text-lg font-medium nav-link-effect">
                {link.name}
              </Link>
            ))}
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to="/services" className="text-white xl:text-xl text-lg font-medium hover:underline flex items-center nav-link-effect">
                Services
                {dropdownOpen ? <ChevronDownIcon style={{ paddingTop: '0.5rem', width: '1.25rem', height: '1.5rem', marginLeft: '0.25rem' }} /> : <ChevronRightIcon style={{ paddingTop: '0.5rem', width: '1.25rem', height: '1.5rem', marginLeft: '0.25rem' }} />}
              </Link>
              <div className={classNames("absolute left-0 top-4 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 transition-opacity duration-200", { "opacity-100 visible": dropdownOpen, "opacity-0 invisible": !dropdownOpen })}>
                <div className="py-1">
                  {serviceLinks.map(service => (
                    <Link
                      key={service.name}
                      to={service.to}
                      target={service.external ? "_blank" : "_self"}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={() => setIsFormOpen(true)} className="bg-cyan-500 text-white hover:bg-cyan-600 shadow-[0_4px_6px_rgba(0,0,0,0.4)] text-sm font-semibold px-4 py-2 rounded-full">
              Get Quote <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeAllMenus} className="-m-1.5 p-1.5">
              <img alt="Logo" src={logo2} style={{ height: '2.5rem', width: 'auto' }} />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-white">
              <span className="sr-only">Close menu</span>
              <XMarkIcon style={{ width: '1.5rem', height: '1.5rem' }} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navLinks.map(link => (
                  <Link key={link.name} to={link.to} onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">
                    {link.name}
                  </Link>
                ))}
                <div>
                  <div className="flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <Link to="/services" onClick={() => setDropdownOpen(!dropdownOpen)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800">
                        Services
                    </Link>
                    {dropdownOpen ? <ChevronDownIcon style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.5rem' }} /> : <ChevronRightIcon style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.5rem' }} />}
                  </div>
                  {dropdownOpen && (
                    <div className="pl-4 mt-2">
                      {serviceLinks.map(service => (
                        <Link
                          key={service.name}
                          to={service.to}
                          onClick={closeAllMenus}
                          target={service.external ? "_blank" : "_self"}
                          className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsFormOpen(false)}>
          <div className="bg-white rounded-lg p-6 w-80" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Get a Quote</h3>
              <button type="button" onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-800 text-lg font-bold">
                X
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
              <input type="email" name="workEmail" placeholder="Your Email" value={formData.workEmail} onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full mb-4 p-2 border rounded"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}