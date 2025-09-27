
// import Link from "next/link"
import { Laptop, Users, Database } from "lucide-react"
import { Link } from "react-router-dom";

export default function ITServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-white container mx-auto px-4 py-8">
        <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-center">IT Services</h2>        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={<Laptop className="h-12 w-12 text-blue-600" />}
            title="Startups"
            description="Tailored solutions to help startups launch and scale quickly."
            services={[
                "MVP (Minimum Viable Product) Development",
                "POC (Proof of Concept) Development",
                "Custom Software Development",
                "Technology Consulting",
                "UI/UX Design",
                "Web and Mobile App Development",
                "API Development and Integration",
                "Quality Assurance and Testing",
                "Deployment and Release Management",
                "Post-Launch Support",
                "Build A Team"
              ]}
            link="startups"
          />
          <ServiceCard
            icon={<Users className="h-12 w-12 text-blue-600" />}
            title="Small Businesses"
            description="Comprehensive IT solutions to drive growth for small businesses."
            services={[
                "Website Development",
                "SEO (Search Engine Optimization)",
                "PPC (Pay-Per-Click) Advertising",
                "Content Marketing",
                "Graphic Design",
                "E-commerce Solutions",
                "Analytics and Reporting",
                "CRM Setup",
                "Technical Support and Maintenance"
              ]}
            link="smallbusiness"
          />
        </div>
      </main>
    </div>
  )
}

function ServiceCard({ icon, title, description, link, services }) {
  return (
    <div className="bg-black bg-opacity-20 border-2 border-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <div className="p-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <p className="text-gray-100 text-center mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-gray-200">
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto text-center p-6 bg-black bg-opacity-20">
        <Link to={link} className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Learn More
        </Link>
      </div>
    </div>
  )
}

