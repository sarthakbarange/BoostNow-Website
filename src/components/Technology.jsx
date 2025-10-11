import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaPython, FaRobot , FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiTensorflow, SiKubernetes, SiDocker, SiOpenai } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
  { name: "AI", icon: <FaRobot className="text-gray-700 text-4xl" /> },
  { name: "Machine Learning", icon: <SiTensorflow className="text-orange-500 text-4xl" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-cyan-500 text-4xl" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-white text-4xl" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700 text-4xl" /> }, // Placeholder for WordPress
];

const Technologies = () => {
  return (
    <div className="z-10 relative">
      <div className="relative min-[30vh] py-10 px-5 bg-[url('/techbg01.png')] bg-cover bg-center bg-no-repeat">
        
        {/* --- MODIFICATION HERE: Changed opacity to bg-black/10 for a much clearer image --- */}
        <div className="absolute inset-0 bg-black/10 z-0"></div> 
        {/* You can also remove this div entirely if you want the image at full brightness, 
            but consider text readability if you do so. */}

        <div className="relative z-10">
          <h2 className="mb-10 text-white text-center font-bold text-2xl md:text-6xl m-4">
            TECHNOLOGIES WE USE
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-slide py-4 sm:space-x-6 space-x-3">
              {technologies.concat(technologies).map((tech, index) => (
                <Card
                  key={index}
                  className="group bg-transparent h-32 sm:w-32 w-20 sm:h-44 border-2 border-gray-300 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 sm:duration-75 ease-in-out transform hover:scale-105"
                >
                  <CardContent className="flex flex-col items-center justify-center sm:p-5 p-1">
                    <div className="transition-transform duration-1000 group-hover:rotate-[1800deg]">
                      {tech.icon}
                    </div>
                    <h2 className="mt-4 px-4 sm:text-xl text-sm font-semibold text-gray-100 text-center">
                      {tech.name}
                    </h2>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
