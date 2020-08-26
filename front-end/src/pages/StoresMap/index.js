import React, { Fragment, useEffect, useContext } from "react";
import Map from "../../components/Map";
import { stores } from "../../fakeUsersdatabase";
import InfoWindow from "../../utils/InfoWindowEx";
import { Marker } from "google-maps-react";
import Filters from "../../components/Filters";
import { filterData } from '../../utils/filter';
import { FiltersContext } from '../../context/FiltersContext';

const markerProps = (data, index, onClick) => (
  <Marker
    name={data.name}
    products={data.avaliableProducts}
    score={data.score}
    key={`${data.name}-${index}`}
    position={data.localization}
    onClick={onClick}
  />
);

const infoWindow = (state, onClick) => (
  <InfoWindow
    position={state.activeMarker.position}
    visible={state.showingInfoWindow}
  >
    <div>
      <h2>{state.activeMarker.name}</h2>
      {(state.activeMarker.products || []).map((product) => (
        <p>
          {product.name} - R${product.price}
        </p>
      ))}
      <button onClick={onClick}>COMPRAR</button>
    </div>
  </InfoWindow>
);

const StoresMap = () => {
  const { resetFilters, filters } = useContext(FiltersContext);
  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <Fragment>
      <Filters />
      <Map
        data={filterData(stores, filters)}
        markerProps={markerProps}
        infoWindow={infoWindow}
      />
    </Fragment>
  );
};

export default StoresMap;
