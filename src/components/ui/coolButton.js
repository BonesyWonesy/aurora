import React from "react";
import "./coolButton.css"; // Make sure to create this CSS file and define the styles

const CoolButton = ({ onClick, isEnabled = true, children }) => {
  return (
    <button className="cool-button" onClick={onClick} disabled={!isEnabled}>
      {children}
    </button>
  );
};

export default CoolButton;
