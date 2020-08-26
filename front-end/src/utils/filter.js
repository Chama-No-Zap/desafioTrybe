export const filterData = (data, filters) => {
  return data.filter((item) => {
    if (filters.filterByProduct.size === 0) return true;
    if (item.avaliableProducts.find((product) => [...filters.filterByProduct].find((filter) => filter === product))) {
      return true;
    }
    return false;
  })
}