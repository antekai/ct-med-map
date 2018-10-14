import React from "react";
import { MapLocationList } from "./LocationList";
import { GoogleMap } from "./GoogleMap";

class MapScreen extends React.Component {
  render() {
    return (
      <div>
        <GoogleMap />
        <MapLocationList />
      </div>
    );
  }
}

export default MapScreen;
