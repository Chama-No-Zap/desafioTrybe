import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import partners from '../../fakeUsersdatabase/partners';
import Header from "../../components/Header";
import InfoWindow from "./InfoWindowEx";

const onMarkerClick = (e, setState) => {
  setState({
    selectedPlace: e.name,
    selectedPlaceProducts: e.products,
    activeMarker: e.position,
    showingInfoWindow: true,
  });
};

const onMapClicked = (state, setState) => {
  if (state.showingInfoWindow) {
    setState({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: "",
      selectedPlaceProducts: [],
    });
  }
};
const UserMap = (props) => {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: "",
    selectedPlaceProducts: [],
  });
  const [redirect, setRedirect] = useState(false);
  const categories = ["Suco", "Água", "Refrigerante"];
  if (redirect) return <Redirect to="/Payment" />;
  return (
    <div>
      <Header categories={categories} />
      <Map
        google={props.google}
        zoom={16}
        initialCenter={{ lat: -19.934344, lng: -43.935169 }}
        onClick={() => onMapClicked(state, setState)}
        mapTypeControl={false}
        style={{ width: "414px", height: "100hv" }}
      >
        {partners.map((partner, index) => (
          <Marker
            name={partner.name}
            products={partner.avaliableProducts}
            key={`${partner.name}-${index}`}
            position={partner.localization}
            onClick={(e) => onMarkerClick(e, setState)}
          />
        ))}
        <InfoWindow
        
          position={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          <div>
            <h2>{state.selectedPlace}</h2>
            {state.selectedPlaceProducts.map((product) => (
              <p>{product}</p>
            ))}
            <button onClick={() => setRedirect(true)}>COMPRAR</button>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE",
})(UserMap);
