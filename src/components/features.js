import React from "react";
import "./features.css";
import FancyText from "./ui/fancyText";

function Features() {
  return (
    <FancyText>
      <section className="features-text">
        <h2>Features</h2>
        <ul>
          <li>AI-powered melody generation</li>
          <li>Interactive music mixing interface</li>
          <li>User-friendly for all skill levels</li>
          <li>Supports a variety of music genres</li>
        </ul>
      </section>
    </FancyText>
  );
}

export default Features;
