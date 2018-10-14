import React from "react";
import { MapLocationList } from "./LocationList";
import { GoogleMap } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
class MapScreen extends React.Component {
  render() {
    return (
      <div className="flexContainer">
        <div className="flexItem">
          <GoogleMap />
        </div>

        <div className="flexItem">
          <Button type="primary">Add Location</Button>
          <Button type="danger">Reset map</Button>
          <MapLocationList />
        </div>
      </div>
    );
  }
}

export default MapScreen;
