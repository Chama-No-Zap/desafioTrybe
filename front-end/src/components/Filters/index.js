import React, { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";

const Filters = () => {
  const { handleCheckbox, filters, setFilters } = useContext(FiltersContext);
  return (
    <div>
      <h5>Filtros:</h5>
      <h6>Produtos disponiveis:</h6>
      <input type="checkbox" name="" id="water" value="Água" onClick={(e) => handleCheckbox(e)}/>
      <label htmlFor="water">Água</label>
      <input type="checkbox" name="" id="soda" value="Refrigerante" onClick={(e) => handleCheckbox(e, filters, setFilters)}/>
      <label htmlFor="soda">Refrigerante</label>
      <input type="checkbox" name="" id="juice" value="Suco" onClick={(e) => handleCheckbox(e, filters, setFilters)}/>
      <label htmlFor="juice">Suco</label>
    </div>
  );
};

export default Filters;
