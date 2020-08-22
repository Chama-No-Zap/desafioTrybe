import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomeHeading = ({ title }) => {
  return (
    <header className="home-header">
      <div className="home-item">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default HomeHeading;
