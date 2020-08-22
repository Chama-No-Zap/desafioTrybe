import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Header from '../../components/Header';

const onMarkerClick = (e, setState) => {
  setState({
    activeMarker: e,
    showingInfoWindow: true,
  });
};

const onMapClicked = (state, setState) => {
  if (state.showingInfoWindow) {
    setState({
      activeMarker: {},
      showingInfoWindow: false,
    });
  }
};

const categories = ['Suco', 'Água', 'Refrigerante'];

const UserMap = ({google, data, markerProps, infoWindow}) => {
  const [state, setState] = useState({
    activeMarker: {},
    showingInfoWindow: false,
  });
  const [redirect, setRedirect] = useState(false);
  if (redirect) return <Redirect to='/Payment' />;
  return (
    <div>
      <Header categories={categories} />
      <Map
        google={google}
        zoom={16}
        initialCenter={{ lat: -19.934344, lng: -43.935169 }}
        onClick={() => onMapClicked(state, setState)}
        mapTypeControl={false}
        style={{ width: '414px', height: '100hv' }}
      >
        {data.map((partner, index) => (
          markerProps(partner, index, (e) => onMarkerClick(e, setState))
        ))}
        {infoWindow(state, () => setRedirect(true))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE',
})(UserMap);
