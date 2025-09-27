import { UserPlus, Users, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ITRecruitmentServicesComp() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-white container mx-auto px-4 py-8">
        <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-center">IT Recruitment Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<UserPlus className="h-12 w-12 text-blue-600" />}
            title="Recruitment Services"
            description="End-to-end talent acquisition for full-time positions."
            services={[
              "Technical Recruitment",
              "Executive Search",
              "Volume Hiring",
              "Campus Recruitment",
              "Remote Talent Acquisition"
            ]}
            link="/itrecruitment"
          />
          <ServiceCard
            icon={<Users className="h-12 w-12 text-blue-600" />}
            title="Staff Augmentation"
            description="Flexible staffing solutions for short to long-term projects."
            services={[
              "IT Professionals",
              "Digital Marketing Experts",
              "Design Specialists",
              "Project Managers",
              "Support Teams"
            ]}
            link="/itrecruitment"
          />
          <ServiceCard
            icon={<UserCheck className="h-12 w-12 text-blue-600" />}
            title="Training & Placement"
            description="Pre-trained professionals ready to contribute immediately."
            services={[
              "Internship Programs",
              "Graduate Placements",
              "Skill Development",
              "Career Transition Support",
              "Industry-Specific Training"
            ]}
            link="/itrecruitment"
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
