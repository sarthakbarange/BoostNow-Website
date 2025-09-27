

// Card.jsx
import React from "react";
import PropTypes from "prop-types";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-transparent rounded-2xl  shadow-lg ${className} p-5`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

// CardContent.jsx
export const CardContent = ({ children, className }) => {
  return (
    <div className={`flex flex-col  items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: "",
};
