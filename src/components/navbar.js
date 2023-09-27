import React from "react";
import "./navbar.css";
import logo from "../img/logo1.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <ul className="list1">
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <a href="/about">Services</a>
          </li>
          <li>
            <a href="/services">About</a>
          </li>
          <li>
            <a href="/contact">Culture</a>
          </li>
        </ul>
      </div>
      <div className="sec">
        <div className="contact">Contact Us</div>
        <div className="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="white"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
