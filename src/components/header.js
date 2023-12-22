import React from "react";
import logo from "../assets/aurora_logo_02.png"; // Adjust the path based on where you placed the logo
import "./header.css";
import FancyText from "./ui/fancyText";

function Header() {
  return (
    <FancyText>
      <header>
        <img src={logo} alt="Aurora Logo" />
        <h1>Welcome to Aurora</h1>
        <p>The AI-driven music creation experience</p>
      </header>
    </FancyText>
  );
}

export default Header;
