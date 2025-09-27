"use client"

import React from "react"

import { useState } from "react"
// import {Image} from "react-router-dom"
import {Link} from "react-router-dom"
import { Github, Linkedin, Twitter } from "lucide-react"



export default function TeamPhotos() {
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Sarah has over 15 years of experience in the industry and founded our company in 2010. She leads our strategic vision and oversees all operations.",
      image: "https://tse1.mm.bing.net/th?id=OIP.lyJLy0pLTIs_MKQ0fu0DkwHaFj&pid=Api&P=0&h=220",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael brings 12 years of technical expertise to our team. He oversees all technical decisions and ensures we stay at the cutting edge of innovation.",
      image: "https://tse1.mm.bing.net/th?id=OIP.HwdcT0L7Cz4fJUyT-7SIgwHaFS&pid=Api&P=0&h=220",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Design Director",
      bio: "Jessica leads our design team with her creative vision and 8 years of experience in UX/UI design. She ensures all our products are both beautiful and functional.",
      image: "https://tse1.mm.bing.net/th?id=OIP.fzMmvahn872lZOZNnWmOCQHaE8&pid=Api&P=0&h=220",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Lead Developer",
      bio: "David has been coding for over a decade and leads our development team. He specializes in scalable architecture and performance optimization.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "Emily Patel",
      role: "Marketing Manager",
      bio: "Emily has 7 years of experience in digital marketing. She develops and implements our marketing strategies to drive growth and brand awareness.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Product Manager",
      bio: "Robert has 9 years of experience in product management. He works closely with all teams to ensure our products meet user needs and business goals.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "https://linkedin.com",
      },
    },
  ]

  // Close modal when clicking outside
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedMember(null)
    }
  }

  return (
    <section className="py-12 px-4 md:py-24 bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="sm:text-6xl text-4xl font-bold text-white tracking-tight  mb-4">Meet Our Team</h2>
          <p className="text-gray-200 max-w-2xl sm:text-xl text-lg mx-auto">
          Our team is a passionate group of innovators dedicated to delivering cutting-edge solutions with creativity, expertise, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
        <div
              // key={member.id}
              className="bg-transparent flex justify-center items-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className=" relative overflow-hidden bg-transparent text-center">
                <img
                  src="/Team.JPG"
                  alt={`Photo of `}
                  fill
                  className="object-cover h-[57vh] w-[76vw] rounded-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
             
            </div>
          {/* {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className=" relative overflow-hidden bg-gray-100">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover w-full h-[40vh] transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-700" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5 text-gray-500 hover:text-gray-900" />
                      </Link>
                    )}
                  </div>
                  <button
                    className="px-3 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Bio
                  </button>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      {/* Custom Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{selectedMember.name}</h3>
                <p className="text-gray-600">{selectedMember.role}</p>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={`Photo of ${selectedMember.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-700">{selectedMember.bio}</p>
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              {selectedMember.social.twitter && (
                <Link
                  href={selectedMember.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                </Link>
              )}
              {selectedMember.social.linkedin && (
                <Link
                  href={selectedMember.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-700" />
                </Link>
              )}
              {selectedMember.social.github && (
                <Link href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-gray-500 hover:text-gray-900" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

