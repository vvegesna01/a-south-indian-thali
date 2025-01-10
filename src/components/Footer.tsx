"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import Image from "next/image";
 
const Footer: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Handle scroll event to trigger fade-in when the footer is in view
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the footer is within view, trigger the fade-in
        if (footerPosition < windowHeight) {
          setFadeIn(true);
        }
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "18px",
        color: "#5f8a1d",
        opacity: fadeIn ? "1" : "0", // Fade-in effect
        transition: "opacity 1s ease", // Smooth transition for fade-in
        position: "relative",
        marginTop: "50px", // Space above the footer
        zIndex: 1000,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div>
        <Image src="/assets/inprogress.png" alt="in progress" width={390} height={300}></Image>
        <p style={{ marginBottom: "2vh" }}>
          Made by <strong>Keerthana Vegesna</strong>
        </p>
        <a
          href="https://github.com/vvegesna01" // GitHub link
          target="_blank"
          rel="noopener noreferrer"
          style={{
            bottom: "0",
            color: "#0073e6",
            textDecoration: "none", 
            fontSize: "20px", 
            transition: "color 0.3s ease", 
            alignItems: "right"
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#5f8a1d")} 
          onMouseOut={(e) => (e.currentTarget.style.color = "#0073e6")} 
        >
          <FaGithub size={32} style={{color:"#5f8a1d"}}  onMouseOver={(e) => (e.currentTarget.style.color = "#74a533")} 
          onMouseOut={(e) => (e.currentTarget.style.color = "#5f8a1d")} ></FaGithub>
          
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
