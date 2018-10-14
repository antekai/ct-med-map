import React from "react";
import { GoogleMap } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
import { MapLocation } from "./Location";

const testData = [
  { id: 1, name: "Charite", lon: 55, lat: 78 },
  { id: 2, name: "Franziskus Krankenhaus", lon: 55, lat: 78 }
];

class MapScreen extends React.Component {
  state = { data: testData };
  render() {
    const locationList = this.state.data.map((item, i) => (
      <MapLocation id={i} name={item.name} lon={item.lon} lat={item.lat} />
    ));
    return (
      <div className={`flexContainer margin-1`}>
        <div className="flexItem">
          <GoogleMap />
        </div>
        <div className="flexItem">
          <Button type="primary" className="margin-1">
            Add Location
          </Button>
          <Button type="danger" className="margin-1">
            Remove all
          </Button>
          <div className="flexContainer">{locationList}</div>
        </div>
      </div>
    );
  }
}

export default MapScreen;
