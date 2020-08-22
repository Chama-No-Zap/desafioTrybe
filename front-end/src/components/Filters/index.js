import React from "react";

const Filters = () => {
  return (
    <div>
      <h5>Filtros:</h5>
      <h6>Produtos disponiveis:</h6>
      <input type="checkbox" name="" id="water" />
      <label htmlFor="water">Água</label>
      <input type="checkbox" name="" id="soda" />
      <label htmlFor="soda">Refrigerante</label>
      <input type="checkbox" name="" id="juice" />
      <label htmlFor="juice">Suco</label>
      <button>Melhor preço</button>
      <button>Proximidade</button>
    </div>
  );
};

export default Filters;
