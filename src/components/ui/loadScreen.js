import React from "react";
import "./loadScreen.css";
import logo from "../../assets/aurora_logo_02.png"; // Adjust the path based on where you placed the logo
import FancyText from "./fancyText";

const LoadScreen = ({ numberOfNotes = 20 }) => {
  // Generate an array of notes with unique keys and styles
  const notes = Array.from({ length: numberOfNotes }, (_, i) => {
    const delay = (i * 0.2).toFixed(1); // Each note has a slightly different delay
    const noteStyle = {
      animationDelay: `${delay}s, ${delay}s`, // Apply delay for both wave and colorFade animations
    };

    return (
      <div key={i} className="note" style={noteStyle}>
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="note-svg">
          <g opacity="0.2">
            <circle cx="88" cy="184" r="40"></circle>
          </g>
          <path d="M210.29883,56.3374l-80-24A7.99991,7.99991,0,0,0,120,40V148.26123A47.97353,47.97353,0,1,0,136,184V50.75244L205.70117,71.6626a8,8,0,1,0,4.59766-15.3252ZM88,216a32,32,0,1,1,32-32A32.03635,32.03635,0,0,1,88,216Z"></path>
        </svg>
      </div>
    );
  });

  const loadPhrases = [
    "Hold on tight, we're composing something beautiful for you...",
    "Just like good music, great things take time to play out.",
    "Tuning the strings of creativity. Your experience will begin shortly!",
    "We're setting the stage for your next masterpiece...",
    "Gathering the band members. Please wait a moment.",
    "Fine-tuning your experience to concert pitch!",
    "Loading the symphony... Your ears will thank you soon.",
    "Hang tight! We're syncing our rhythms for you.",
    "Brewing the perfect melody, one note at a time.",
    "Please wait while we compose the pixels into a masterpiece.",
    "Orchestrating a spectacular session just for you!",
    "Building the crescendo to a grand user experience!",
    "Our maestros are at work, conducting your digital overture.",
    "Just a moment while we hit the right notes for your dashboard.",
    "Don't fret! We're almost ready to rock 'n' roll.",
    "Preparing the encore. Your app is about to take center stage!",
    "Our virtual instruments are warming up. Get ready for the performance!",
    "Sharpening our pencils for the grand composition. Almost there...",
    "Your patience is music to our ears. Thank you for the intermission.",
    "We're almost ready to face the music. Thanks for holding the fort!",
  ];

  return (
    <div className="load-screen">
      <img src={logo} alt="Aurora Logo" style={{ width: "30%", height: "auto" }} />
      <FancyText>
        <p>{loadPhrases[0]}</p>
      </FancyText>
      <div className="noteContainer">{notes}</div>
    </div>
  );
};

export default LoadScreen;
