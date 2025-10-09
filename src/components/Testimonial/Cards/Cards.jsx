

// import React, { useState } from "react";

// const Cards = ({ card }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img 
//         src={isHovered ? card.hoverImage : card.image} 
//         alt={card.author} 
//         className="w-full h-52 object-cover transition-opacity duration-300"
//       />
//       <div className="p-4 bg-gray-200 text-black">
//         <h3 className="text-lg font-semibold">{card.author}</h3>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

const Cards = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(card.link, "_blank")} 
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={isHovered ? card.hoverImage : card.image}
          alt={card.author}
          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Live Preview Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 font-medium rounded-lg hover:bg-white transition-colors duration-200 shadow-lg">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Preview
            </span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {card.author}
        </h3>
      </div>
    </div>
  );
};

export default Cards;
