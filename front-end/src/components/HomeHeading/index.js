import React from 'react';
import './styles.css';

const HomeHeading = ({ title }) => {
  return (
    <header className="home-header">
      <div className="logo"/>
      <div className="home-item">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default HomeHeading;
