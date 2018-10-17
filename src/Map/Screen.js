import React from "react";
import { GoogleMapWrapper } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
import { MapLocation } from "./Location";
import { LocationModal } from "./LocationModal";

const mockData = [
  {
    id: 0,
    name: "Charite Virchow Klinikum",
    lat: 52.544659,
    lon: 13.343836,
    isEdit: false
  },
  {
    id: 1,
    name: "Schwabinger Krankenhaus",
    lat: 48.17243,
    lon: 11.576502,
    isEdit: false
  },
  {
    id: 2,
    name: "St. Josef Hospital Essen",
    lat: 51.388807,
    lon: 7.005864,
    isEdit: false
  },
  {
    id: 3,
    name: "Krankenhaus Neu-Mariahilf",
    lat: 51.541854,
    lon: 9.942719,
    isEdit: false
  }
];

class MapScreen extends React.Component {
  state = {
    data: mockData,
    isVisibleAddLocationModal: false,
    isVisibleEditLocationModal: false,
    isEdit: false
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
  showEditLocationModal = () => {
    this.setState({ isVisibleEditLocationModal: true });
  };
  hideEditLocationModal = () => {
    this.setState({ isVisibleEditLocationModal: false });
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
  removeLocation = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: newData });
    console.log(newData);
  };
  // editLocation = id => {
  //   console.log(`edit ${id}`);
  // };
  editLocation = id => {
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], isEdit: true };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
  };
  viewLocation = id => {
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], isEdit: false };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
  };

  onEnterName = (id, e) => {
    console.log(id, e.target.value);
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], name: e.target.value };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
  };
  onEnterLat = (id, e) => {
    console.log(id, e.target.value);
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], lat: e.target.value };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
  };
  onEnterLon = (id, e) => {
    console.log(id, e.target.value);
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], lon: e.target.value };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
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
        isEdit={item.isEdit}
        onEdit={() => this.editLocation(item.id)}
        onEnterName={e => this.onEnterName(item.id, e)}
        onEnterLat={e => this.onEnterLat(item.id, e)}
        onEnterLon={e => this.onEnterLon(item.id, e)}
        onCheck={() => this.viewLocation(item.id)}
      />
    ));
    return (
      <div className={`flexContainer margin-1`}>
        <div className="flexItem">
          <GoogleMapWrapper isMarkerShown />
          {/* <StyledMapWithAnInfoBox /> */}
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
          {/* <LocationModal
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.isVisibleEditLocationModal}
            onCancel={this.hideEditLocationModal}
            onCreate={this.editLocation(this.state.data.id)}
          /> */}
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
