import React from 'react';
import Map from '../../components/Map';
import partners from '../../fakeUsersdatabase/partners';
import InfoWindow from '../../utils/InfoWindowEx';
import { Marker } from 'google-maps-react';

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
  <Map data={partners} markerProps={markerProps} infoWindow={infoWindow} />
);

export default UserMap;
