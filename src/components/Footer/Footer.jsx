import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="head-footer">
        <img src={logo} alt="Logo" />
        <h2>SHOPPER</h2>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </footer>
  );
}

export default Footer;
