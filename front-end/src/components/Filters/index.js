import React from "react";
import './styles.css';

const Filters = () => {
  return (
    <div>
      <h5 className="filter-title">Filtros</h5>
      <div className="filter-bar">
        <input type="checkbox" name="" id="water" />
        <label htmlFor="water">Água</label>
        <input type="checkbox" name="" id="soda" />
        <label htmlFor="soda">Refrigerante</label>
        <input type="checkbox" name="" id="juice" />
        <label htmlFor="juice">Suco</label>
      </div>
      <div className="filter-btn">
        <button>Melhor preço</button>
        <button>Proximidade</button>
      </div>
    </div>
  );
};

export default Filters;
