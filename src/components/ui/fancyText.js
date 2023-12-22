import React from "react";
import "./fancyText.css";

const FancyText = ({ children }) => {
  return <div className="fancy-text">{children}</div>;
};

export default FancyText;
