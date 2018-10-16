import React from "react";
import { GoogleMap } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
import { MapLocation } from "./Location";
import { LocationModal } from "./LocationModal";

const testData = [
  { id: 0, name: "Charite", lon: 55, lat: 78 },
  { id: 1, name: "Franziskus Krankenhaus", lon: 55, lat: 78 }
];

class MapScreen extends React.Component {
  state = { data: testData, isVisibleAddLocationModal: false };

  removeLocation = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: newData });
    console.log(newData);
  };
  editLocation = id => {
    console.log(`edit ${id}`);
  };
  removeAll = () => {
    this.setState({ data: [] });
  };
  showNewLocationModal = () => {
    this.setState({ isVisibleAddLocationModal: true });
  };
  hideNewLocationModal = () => {
    this.setState({ isVisibleAddLocationModal: false });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  saveNewLocation = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const newLocation = { id: this.state.data.length, ...values };
      this.setState({ data: [...this.state.data, newLocation] });
      console.log(this.state.data);
    });
  };
  render() {
    // console.log(this.state.data);
    const locationList = this.state.data.map(item => (
      <MapLocation
        key={item.id}
        id={item.id}
        name={item.name}
        lon={item.lon}
        lat={item.lat}
        onDelete={() => this.removeLocation(item.id)}
        onEdit={() => this.editLocation(item.id)}
      />
    ));
    return (
      <div className={`flexContainer margin-1`}>
        <div className="flexItem">
          <GoogleMap />
        </div>
        <div className="flexItem">
          <Button
            type="primary"
            className="margin-1"
            onClick={this.showNewLocationModal}
          >
            Add Location
          </Button>
          <LocationModal
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.isVisibleAddLocationModal}
            onCancel={this.hideNewLocationModal}
            onCreate={this.saveNewLocation}
          />
          <Button type="danger" className="margin-1" onClick={this.removeAll}>
            Remove all
          </Button>
          <div className="flexContainer">{locationList}</div>
        </div>
      </div>
    );
  }
}

export default MapScreen;
