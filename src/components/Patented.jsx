"use client"

import { useState, useEffect, act } from "react"

export default function Patented() {
  const [time, setTime] = useState(0)
  const [transformStyle, setTransformStyle] = useState("translateZ(0)");
  const [activePoint, setActivePoint] = useState("REAL TIME")
  const [text, setText] = useState("Ensures instant data processing and response, reducing latency and improving user experience.");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % 101)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const points = [
    { name: "REAL TIME", x: 85, y: 15 },
    { name: "LIGHT WEIGHT", x: 15, y: 25 },
    { name: "HTML CAPABILITIES", x: 15, y: 75 },
    { name: "EDGE COMPUTING", x: 85, y: 75 },
  ]
  const content = {
    "REAL TIME": "Experience instant updates and live interactions.",
    "LIGHT WEIGHT": "Optimized for performance and quick loading times.",
    "HTML CAPABILITIES": "Leverage the full power of HTML5 for rich experiences.",
    "EDGE COMPUTING": "Process data closer to the source for faster response times.",
  }

  return (
    // <div className="">
    <div className="relative z-[1] min-h-[100vh] bg-gradient-to-b from-transparent via-black to-transparent">
      {/* Background gradient */}
      <div className="absolute inset-0  bg-transparent" />

      {/* Main content */}
      <div className="relative z-20  text-center  max-w-7xl mx-auto pt-[18rem] md:pt-[9rem] px-4 sm:px-6 lg:px-8">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 200"
              className="w-full md:ml-[5rem] md:block hidden h-[35vh]"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                {/* <stop offset="0%" stopColor="#ff9ae3" /> */}
                <stop offset="0%" stopColor="#38b6ff" />
                <stop offset="40%" stopColor="#00255C" />
                <stop offset="90%" stopColor="#000" />
                <stop offset="100%" stopColor="#000" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="35%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="60px"
                fontWeight="500"
                fill="url(#gradient)" 
                stroke="white"
                strokeWidth="0.5"
              >
                INTERACT AT SCALE
              </text>
              <text
                x="47%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="55px"
                fontWeight="500"
                fill="url(#gradient)" 
                stroke="white"
                strokeWidth="0.5"
              >
                LIKE NEVER BEFORE
              </text>
            </svg> 
            <h2 className="block text-white text-xl font-bold md:hidden py-2">{activePoint}</h2>
            {/* <h2 className="block text-white text-xl font-bold md:hidden py-2">INTERACT AT SCALE <br className="py-1"/> LIKE NEVER BEFORE</h2> */}

        <p className="text-gray-300 w-[30vw] md:w-[18vw] sm:max-w-3xl mx-auto text-left sm:text-2xl text-sm mb-8">
          {text}
        </p>
        {/* <div className="flex justify-center mb-8">
          <button className="bg-transparent hover:bg-[#FF1B51]/10 text-white border border-white rounded-full md:px-8 md:py-3 md:text-lg text-sm px-4 py-2 md:font-semibold transition-colors duration-300">
            LEARN MORE
          </button>
        </div> */}
      </div>

      {/* Device Frame */}
      <div
        className="absolute z-10 md:left-[40%] left-20 md:top-[10%] top-40 -translate-x-1/2 -translate-y-1/3 md:w-[50vw] md:h-[85vh] lg:w-[20vw] lg:h-[80vh]  w-[55vw] h-[55vh] border-2 border-gray-700 rounded-[60px] bg-black/30 backdrop-blur-sm overflow-hidden animate-rotate10"
      >
        <div className="bg-black p-4 w-full h-full object-cover">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.O7_Q-WDw6LO0bfbzaGCMxwHaNK&pid=Api&P=0&h=220"
          alt="Interactive content"
          className="w-full h-full object-cover"
        />
        </div>
      </div>

      {/* Ellipse */}
      <svg className="absolute z-0   inset-0 w-full  h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <ellipse
          cx="50"
          cy="50"
          rx="49"
          ry="30"
          fill="none"
          stroke="rgba(111,111,111, 0.9)"
          strokeWidth="0.8"
          transform="rotate(-45 50 50)"
        />
      </svg>

      {/* Corner points */}
      
      <div
          className={`absolute z-40 md:left-[30%] md:bottom-[75%] left-[34%] bottom-[82%] cursor-pointer transition-all duration-300 `}
          // style={{ left: `30%`, bottom: `75%` }}
          onClick={() => {
            console.log(activePoint === "REAL TIME")
            setActivePoint("REAL TIME");
            setText("Ensures instant data processing and response, reducing latency and improving user experience.");
          }}
        >
          <div
        className={`${
          activePoint === "REAL TIME" ? "w-6 h-6 m-1 bg-white " : "w-5 h-5 bg-gray-400"
        }  rounded-full transition-colors duration-300`}
      />{/* <div className={`w-3 h-3 bg-white rounded-full`} /> */}
          <span className={`${activePoint === "REAL TIME"?"text-white md:text-2xl text-xl left-8 top-0":"left-7 top-0 md:text-xl text-lg text-gray-300" } absolute    font-medium whitespace-nowrap`}>REAL TIME</span>
        </div>
      <div
          className={`absolute z-40 left-[46%] top-[9%] md:left-[80%] md:top-[14%]  cursor-pointer transition-all duration-300 `}
          // style={{ right: `20%`, top: `14%` }}
          onClick={() => {
            setActivePoint("EDGE COMPUTING");
            setText(" Processes data closer to the source (on the edge of the network) rather than relying solely on centralized cloud servers, reducing bandwidth usage and improving speed.");
          }}
        >
          <div className={`${
          activePoint === "EDGE COMPUTING" ? "w-6 h-6 m-1 bg-white " : "w-5 h-5 bg-gray-400"
        }  rounded-full transition-colors duration-300`}
      /><span className={`${activePoint === "EDGE COMPUTING"?"text-white md:text-2xl text-xl left-8 top-0":"left-7 top-0 md:text-xl text-lg text-gray-300" } absolute    font-medium whitespace-nowrap`}>EDGE COMPUTING</span>
        </div>
        
      <div
          className={`absolute z-40 md:left-[10%] md:bottom-[17%] left-[10%] bottom-[17%] cursor-pointer transition-all duration-300 `}
          // style={{ left: `10%`, bottom: `17%` }}
          onClick={() => {
            setActivePoint("LIGHT WEIGHT");
            setText("Designed to consume minimal resources, making it efficient for low-power devices and high-speed operations.");
          }}
        >
          <div className={`${
          activePoint === "LIGHT WEIGHT" ? "w-6 h-6 m-1 bg-white " : "w-5 h-5 bg-gray-400"
        }  rounded-full transition-colors duration-300`}
      /><span className={`${activePoint === "LIGHT WEIGHT"?"text-white md:text-2xl text-xl left-8 top-0":"left-7 top-0 md:text-xl text-lg  text-gray-300" } absolute    font-medium whitespace-nowrap`}>LIGHT WEIGHT</span>
        </div>
      
      <div
          className={`absolute z-40 left-[9%]  bottom-[22%] md:left-[75%] md:bottom-[35%] cursor-pointer transition-all duration-300 `}
          // style={{ right: `25%`, bottom: `33%` }}
          onClick={() => {
            setActivePoint("HTML CAPABILITIES");
            setText("Leverages advanced HTML features to enhance interactivity, rendering, and integration with web-based applications.");
          }}
          
        >
          <div className={`${
          activePoint === "HTML CAPABILITIES" ? "w-6 h-6 m-1 bg-white " : "w-5 h-5 bg-gray-400"
        }  rounded-full transition-colors duration-300`}
      /><span className={`${activePoint === "HTML CAPABILITIES"?"text-white md:text-2xl text-xl left-8 top-0":"left-7 top-0 md:text-xl text-lg text-gray-300" } absolute    font-medium whitespace-nowrap`}>HTML CAPABILITIES</span>
        </div>
      
      {/* MP5 label */}
      {/* <div className="absolute top-8 left-8 text-[#FF1B51] text-4xl font-bold">MP5</div> */}
    </div>
    // </div>
  )
}

