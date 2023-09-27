import React from "react";
import pic from "../img/logo.png";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <div className="headline">Leading the charge of industries</div>
      <div className="footer">
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
        <img src={pic} alt="pic" className="footer-pic" />
      </div>
    </div>
  );
}
