import { Laptop, Users, Database, UserCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function MainServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-white container mx-auto px-4 py-8">
        <h3 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          OUR SERVICES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* IT Services Card */}
          <div className="group relative  border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Laptop className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                IT Services
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Tailored solutions to help startups and businesses launch and scale quickly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-300 text-center">Our Expertise:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Custom Software Development", "Web & Mobile Apps", "Cloud Solutions", "Digital Transformation"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm  text-blue-100 px-3 py-2 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6  group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <Link 
                to="/itservices" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Training Card - Already Enhanced */}
          <div className="group relative  border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Users className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                IT Training
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Transform your career with industry-leading IT training programs and hands-on experience.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-300 text-center">Key Programs:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Web Dev", "Cloud", "AI/ML", "Cybersecurity", "DevOps", "UI/UX", "Digital Marketing"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm  text-blue-100 px-3 py-1.5 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <Link 
                to="/training" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Recruitment Card */}
          <div className="group relative border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <UserCheck className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                IT Recruitment
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Connect with top IT talent and build your dream tech team effortlessly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-300 text-center">Our Services:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Permanent Hiring", "Contract Staffing", "Technical Assessment", "Talent Mapping", "RPO Solutions"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm text-blue-100 px-3 py-1.5 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <Link 
                to="/itrecruitment" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ERP Solutions Card */}
          <div className="group relative border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Database className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                ERP Solutions
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Streamline your business processes with our comprehensive ERP solutions.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-300 text-center">Our Offerings:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["ERP Implementation", "Business Process Automation", "Data Migration", "Custom Module Development", "Ongoing Support & Training"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm text-blue-100 px-3 py-1.5 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <a 
                href="https://boostnowai.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* DaaS (Department as a Service) Card */}
          <div className="group relative border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                DaaS
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Complete department solutions tailored to your business needs, delivered as a service.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-300 text-center">Our Services:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["IT Department as a Service", "HR as a Service", "Finance as a Service", "Marketing as a Service", "24/7 Support"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm text-blue-100 px-3 py-1.5 rounded-lg text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <Link 
                to="/services/daas" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// ServiceCard component has been removed as we're now using inline card components
