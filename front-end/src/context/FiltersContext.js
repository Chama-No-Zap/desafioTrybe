import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  filterByProduct: new Set(),
}

export const FiltersContext = createContext(null);

FiltersContext.displayName = 'FiltersContext';

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialState);

  const resetFilters = () => setFilters({...initialState})

  const handleCheckbox = (e) => {
    const newFilters = filters;
    if(e.target.checked) {
      newFilters.filterByProduct.add(e.target.value);
      setFilters({...newFilters});
    } else {
      newFilters.filterByProduct.delete(e.target.value);
      setFilters({...newFilters});
    }
  };

  const context = {
    filters,
    setFilters,
    handleCheckbox,
    resetFilters,
  };

  return <FiltersContext.Provider value={context}>{children}</FiltersContext.Provider>;
};

FiltersProvider.propTypes = { children: PropTypes.node.isRequired };

export default FiltersProvider;
