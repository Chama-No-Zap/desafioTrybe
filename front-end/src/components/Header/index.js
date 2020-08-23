import React from "react";
import "./styles.css";

const Header = ({ text, icon }) => (
  <div className="heading">
    <img src={icon} alt="icone do vendedor" />
    <span>{text}</span>
  </div>
);

export default Header;
