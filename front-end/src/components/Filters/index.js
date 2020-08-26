import React, { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import "./styles.css";

const Filters = () => {
  const { handleCheckbox, filters, setFilters } = useContext(FiltersContext);
  return (
    <div>
      <h5 className="filter-title">Filtros</h5>
      <div className="filter-bar">
        <input type="checkbox" name="" id="water" />
        <input
          type="checkbox"
          name=""
          id="water"
          value="Água"
          onClick={(e) => handleCheckbox(e)}
        />
        <label htmlFor="water">Água</label>
        <input
          type="checkbox"
          name=""
          id="soda"
          value="Refrigerante"
          onClick={(e) => handleCheckbox(e, filters, setFilters)}
        />
        <label htmlFor="soda">Refrigerante</label>
        <input
          type="checkbox"
          name=""
          id="juice"
          value="Suco"
          onClick={(e) => handleCheckbox(e, filters, setFilters)}
        />
        <label htmlFor="juice">Suco</label>
      </div>
    </div>
  );
};

export default Filters;
