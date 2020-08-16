import React, { useState, useEffect} from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const getCoordinates = (setState) => {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    },
    function(error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
}

const UserMap = ({google}) => {

  const [state, setState] = useState({
    lat: -19.92,
    lng: -43.93 
  })

  useEffect(() => {
    getCoordinates(setState)
  }, [])

  const { lng, lat } = state;

  return (
    <div>
      {console.log(state)}
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat, lng }}
        mapTypeControl={false}
        style={{ width: "100%", height: "100vh" }}
      >

      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE"
})(UserMap);
