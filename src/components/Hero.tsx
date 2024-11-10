import React from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div
  id="hero" className=" hero-container" 
  style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}} 
>

      <Navbar />
      <div className="hero-content">
        <div className="hidden lg:block"></div>

      
        <div className="hero-text">
          <div className="hero-name">
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Alishba</p>
            <p data-aos="zoom-in-up">Rafiq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;