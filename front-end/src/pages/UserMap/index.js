import React, { Fragment } from 'react';
import Map from '../../components/Map';
import partners from '../../fakeUsersdatabase';
import InfoWindow from '../../utils/InfoWindowEx';
import { Marker } from 'google-maps-react';
import Filters from '../../components/Filters';

const markerProps = (data, index, onClick) => (
  <Marker
    name={data.name}
    products={data.avaliableProducts}
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
        <p>{product}</p>
      ))}
      <button onClick={onClick}>COMPRAR</button>
    </div>
  </InfoWindow>
);

const UserMap = () => (
  <Fragment>
    <Filters />
    <Map data={partners} markerProps={markerProps} infoWindow={infoWindow} />
  </Fragment>
);

export default UserMap;
