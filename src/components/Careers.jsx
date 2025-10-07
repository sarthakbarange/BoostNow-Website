import { Laptop, Users, Database, UserCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { Building } from "lucide-react" // Added Building for DaaS consistency

export default function MainServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-white container mx-auto px-4 py-8">
        <h3 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500">
          OUR SERVICES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* IT Services Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-300/30 p-3 rounded-full group-hover:bg-blue-200/40 transition-colors duration-300">
                  <Laptop className="h-12 w-12 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                IT Services
              </h3>
              <p className="text-gray-100 text-center mb-6">
                Tailored solutions to help startups and businesses launch and scale quickly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-100 text-center">Our Expertise:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Custom Software Development", "Web & Mobile Apps", "Cloud Solutions", "Digital Transformation"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-black/10 text-white px-3 py-2 rounded-lg text-center border border-blue-400 group-hover:border-white transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-500">
              <Link 
                to="/itservices" 
                // Changed button style for contrast on light card
                className="w-full inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20 hover:shadow-black/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Training Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-300/30 p-3 rounded-full group-hover:bg-blue-200/40 transition-colors duration-300">
                  <Users className="h-12 w-12 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                IT Training
              </h3>
              <p className="text-gray-100 text-center mb-6">
                Transform your career with industry-leading IT training programs and hands-on experience.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-100 text-center">Key Programs:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Web Dev", "Cloud", "AI/ML", "Cybersecurity", "Data Science", "DevOps", "UI/UX", "Digital Marketing"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-black/10 text-white px-3 py-1.5 rounded-full text-center border border-blue-400 group-hover:border-white transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-500">
              <Link 
                to="/training" 
                className="w-full inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20 hover:shadow-black/40"
              >
                Explore Programs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Recruitment Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-300/30 p-3 rounded-full group-hover:bg-blue-200/40 transition-colors duration-300">
                  <UserCheck className="h-12 w-12 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                IT Recruitment
              </h3>
              <p className="text-gray-100 text-center mb-6">
                Connect with top IT talent and build your dream tech team effortlessly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-100 text-center">Our Services:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Permanent Hiring", "Contract Staffing", "Technical Assessment", "Talent Mapping", "RPO Solutions"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-black/10 text-white px-3 py-1.5 rounded-lg text-center border border-blue-400 group-hover:border-white transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-500">
              <Link 
                to="/itrecruitment" 
                className="w-full inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20 hover:shadow-black/40"
              >
                Find Talent
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ERP Solutions Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-300/30 p-3 rounded-full group-hover:bg-blue-200/40 transition-colors duration-300">
                  <Database className="h-12 w-12 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                ERP Solutions
              </h3>
              <p className="text-gray-100 text-center mb-6">
                Streamline your business processes with our comprehensive ERP solutions.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-100 text-center">Our Offerings:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["ERP Implementation", "Business Process Automation", "Data Migration", "Custom Module Development", "Ongoing Support & Training"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-black/10 text-white px-3 py-1.5 rounded-lg text-center border border-blue-400 group-hover:border-white transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-500">
              <a 
                href="https://boostnowai.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20 hover:shadow-black/40"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* DaaS (Department as a Service) Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-300/30 p-3 rounded-full group-hover:bg-blue-200/40 transition-colors duration-300">
                  {/* Using Building icon for DaaS for consistency */}
                  <Building className="h-12 w-12 text-white group-hover:text-blue-900 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                DaaS
              </h3>
              <p className="text-gray-100 text-center mb-6">
                Complete department solutions tailored to your business needs, delivered as a service.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-100 text-center">Our Services:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["IT Department as a Service", "HR as a Service", "Finance as a Service", "Marketing as a Service", "24/7 Support"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-black/10 text-white px-3 py-1.5 rounded-lg text-center border border-blue-400 group-hover:border-white transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-500">
              <Link 
                to="/services/daas" 
                className="w-full inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20 hover:shadow-black/40"
              >
                Learn More
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