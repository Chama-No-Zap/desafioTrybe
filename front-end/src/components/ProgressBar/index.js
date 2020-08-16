import React from 'react';
import './styles.css';

const ProgressBar = () => {
  return (
    <div className="card">
      <div className="box">
        <span className="text">ID DE COMPRA</span>
        <div className="percent">
          <svg>
            <circle cx="130" cy="130" r="130"></circle>
            <circle cx="130" cy="130" r="130"></circle>
          </svg>
          <div className="number text">
            <h1>S814L020</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
