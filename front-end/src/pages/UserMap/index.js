import React, { useState, useEffect} from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const getCoordinates = () => {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      return position.coords.latitude
    }
  )
}

const UserMap = (props) => {

  const [state, setState] = useState({
    lat: -19.92,
    lng: -43.93 
  })

  useEffect(() => {
    console.log(getCoordinates())
  }, [])


  return (
    <div>
      {" "}
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: -19.92, lng: -43.93 }}
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
