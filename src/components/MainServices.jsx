
import { Laptop, Users, Database, UserCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function MainServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-white container mx-auto px-4 py-8">
        <h3 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-center">OUR SERVICES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* IT Services Card */}
          <div className="group relative bg-gradient-to-br from-indigo-900 to-gray-900 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-600/20 p-3 rounded-full group-hover:bg-indigo-500/30 transition-colors duration-300">
                  <Laptop className="h-12 w-12 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                IT Services
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Tailored solutions to help startups and businesses launch and scale quickly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-indigo-300 text-center">Our Expertise:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Custom Software Development", "Web & Mobile Apps", "Cloud Solutions", "Digital Transformation"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-indigo-900/50 text-indigo-100 px-3 py-2 rounded-lg text-center border border-indigo-800 group-hover:border-indigo-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-indigo-900/80 to-purple-800/80 group-hover:from-indigo-800/90 group-hover:to-purple-700/90 transition-all duration-500">
              <Link 
                to="/itservices" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Training Card - Already Enhanced */}
          <div className="group relative bg-gradient-to-br from-blue-900 to-gray-900 border-2 border-blue-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 h-full flex flex-col">
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
                <div className="grid grid-cols-2 gap-2">
                  {["Web Dev", "Cloud", "AI/ML", "Cybersecurity", "Data Science", "DevOps", "UI/UX", "Digital Marketing"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-blue-900/50 text-blue-100 px-3 py-1.5 rounded-full text-center border border-blue-800 group-hover:border-blue-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-900/80 to-blue-800/80 group-hover:from-blue-800/90 group-hover:to-cyan-700/90 transition-all duration-500">
              <Link 
                to="/training" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Programs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT Recruitment Card */}
          <div className="group relative bg-gradient-to-br from-emerald-900 to-gray-900 border-2 border-emerald-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-emerald-600/20 p-3 rounded-full group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <UserCheck className="h-12 w-12 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                IT Recruitment
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Connect with top IT talent and build your dream tech team effortlessly.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-300 text-center">Our Services:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["Permanent Hiring", "Contract Staffing", "Technical Assessment", "Talent Mapping", "RPO Solutions"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-emerald-900/50 text-emerald-100 px-3 py-1.5 rounded-lg text-center border border-emerald-800 group-hover:border-emerald-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-emerald-900/80 to-teal-800/80 group-hover:from-emerald-800/90 group-hover:to-teal-700/90 transition-all duration-500">
              <Link 
                to="/itrecruitment" 
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                Find Talent
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ERP Solutions Card */}
          <div className="group relative bg-gradient-to-br from-amber-900 to-gray-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-amber-500/20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6 relative z-10 flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-600/20 p-3 rounded-full group-hover:bg-amber-500/30 transition-colors duration-300">
                  <Database className="h-12 w-12 text-amber-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
                ERP Solutions
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Streamline your business processes with our comprehensive ERP solutions.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-amber-300 text-center">Our Offerings:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {["ERP Implementation", "Business Process Automation", "Data Migration", "Custom Module Development", "Ongoing Support & Training"].map((service, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-amber-900/50 text-amber-100 px-3 py-1.5 rounded-lg text-center border border-amber-800 group-hover:border-amber-500 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-amber-900/80 to-yellow-800/80 group-hover:from-amber-800/90 group-hover:to-yellow-700/90 transition-all duration-500">
              <a 
                href="https://boostnowai.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-medium py-3 px-6 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// ServiceCard component has been removed as we're now using inline card components

