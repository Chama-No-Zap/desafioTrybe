import React, { useContext, Fragment } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import "./styles.css";

const waterCheckbox = (handleCheckbox) => (
  <Fragment>
    <input
      type="checkbox"
      name=""
      id="water"
      value="Água"
      onClick={(e) => handleCheckbox(e)}
    />
    <label htmlFor="water">Água</label>
  </Fragment>
);

const sodaCheckbox = (handleCheckbox) => (
  <Fragment>
    <input
      type="checkbox"
      name=""
      id="soda"
      value="Refrigerante"
      onClick={(e) => handleCheckbox(e)}
    />
    <label htmlFor="soda">Refrigerante</label>
  </Fragment>
);

const juiceCheckbox = (handleCheckbox) => (
  <Fragment>
    <input
      type="checkbox"
      name=""
      id="juice"
      value="Suco"
      onClick={(e) => handleCheckbox(e)}
    />
    <label htmlFor="juice">Suco</label>
  </Fragment>
);

const Filters = () => {
  const { handleCheckbox } = useContext(FiltersContext);
  return (
    <div>
      <h5 className="filter-title">Filtros</h5>
      <div className="filter-bar">
        {waterCheckbox(handleCheckbox)}
        {sodaCheckbox(handleCheckbox)}
        {juiceCheckbox(handleCheckbox)}
      </div>
    </div>
  );
};

export default Filters;
