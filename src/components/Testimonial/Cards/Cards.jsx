

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

// export default Cards;

import React, { useState, useEffect } from "react";

const Cards = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
 


  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(card.link, "_blank")} 
    >
      <img
        src={isHovered ? card.hoverImage : card.image}
        alt={card.author}
        className="w-full h-52 object-fit transition-opacity duration-300"
      />
      <div className="p-4 bg-gray-200 text-black">
       <h3 className="text-lg font-semibold">{card.author}</h3>
      </div>
     
    </div>
  );
};

export default Cards;
