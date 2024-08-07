import React from "react";

import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/hero_image.png";
import handIcon from "../assets/hand_icon.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-info">
        <h5>NEW ARRIVALS ONLY</h5>
        <h1>
          <span>
            New <img src={handIcon} alt="" srcset="" />
          </span>{" "}
          Collections <br /> For Everyone
        </h1>
        <button>
          Latest Collection <FaArrowRight />
        </button>
      </div>
      <img src={heroImg} alt="" />
    </div>
  );
}

export default Hero;
