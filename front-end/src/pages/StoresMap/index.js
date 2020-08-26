import React, { Fragment } from 'react';
import Map from '../../components/Map';
import { stores } from '../../fakeUsersdatabase';
import InfoWindow from '../../utils/InfoWindowEx';
import { Marker } from 'google-maps-react';
import Filters from '../../components/Filters';

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
  <InfoWindow position={state.activeMarker.position} visible={state.showingInfoWindow}>
    <div>
      <h2>{state.activeMarker.name}</h2>
      {(state.activeMarker.products || []).map((product) => (
        <p>{product.name} - R${product.price}</p>
      ))}
      <button onClick={onClick}>COMPRAR</button>
    </div>
  </InfoWindow>
);

const StoresMap = () => (
  <Fragment>
    <Filters />
    <Map data={stores} markerProps={markerProps} infoWindow={infoWindow} />
  </Fragment>
);

export default StoresMap;
