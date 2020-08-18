import React from 'react';
import './styles.css'

const Header = ({text, icon, categories}) => {
  if (text) {
    return (
      <div className="heading">
        <img src={icon} alt="icone do vendedor" />
        <span>{text}</span>
      </div>
    );
  }
  return (
    <div className="heading">
      {categories.map((category, index) => (
        <span key={index} className="box">{category}</span>
      ))}
    </div>
  )
};

export default Header;
