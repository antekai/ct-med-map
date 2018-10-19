import React from "react";
import { GoogleMapWrapper } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
import { MapLocation } from "./Location";
import { LocationModal } from "./LocationModal";
import { Marker } from "react-google-maps";
import { fireBaseInstance } from "../axios";

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
    isVisibleNewLocationModal: false,
    isEdit: false,
    fbGetError: false,
    gMapError: false
  };
  componentDidMount() {
    fireBaseInstance
      .get("/fbData.json")
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ fbGetError: true }));
    // Error handling for google maps API
    // gMapInstance.get("").catch(error => this.setState({ gMapError: true }));
    // TODO: triggers CORS error - error handling only possible via googleMapJS API v3 directly
  }

  showNewLocationModal = () => {
    this.setState({ isVisibleNewLocationModal: true });
  };
  hideNewLocationModal = () => {
    this.setState({ isVisibleNewLocationModal: false });
  };
  removeAll = () => {
    this.setState({ data: [] });
  };
  loadMockData = () => {
    this.setState({ data: mockData });
  };
  putToFirebase = () => {
    const { data } = this.state;
    fireBaseInstance
      .put("fbData.json", data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
      const newLocation = {
        id: this.state.data.length,
        lat: parseFloat(values.lat),
        lon: parseFloat(values.lon),
        ...values
      };
      this.setState({
        data: [...this.state.data, newLocation],
        isVisibleNewLocationModal: false
      });
      console.log(this.state.data, newLocation);
    });
  };
  removeLocation = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: newData });
    console.log(newData);
  };
  editLocation = id => {
    const clonedData = [...this.state.data];
    const updatedRecord = { ...clonedData[id], isEdit: true };
    clonedData[id] = updatedRecord;
    this.setState({ data: clonedData });
  };

  inlineFormRef = ifr => {
    this.ifr = ifr;
  };
  saveLocation = (id, e) => {
    const form = this.ifr.props.form;
    form.validateFields((err, values) => {
      if (err) {
        console.log(err);
        return;
      }
      const { name, lat, lon } = {
        name: e.target[0].value,
        lat: parseFloat(e.target[1].value),
        lon: parseFloat(e.target[2].value)
      };
      const clonedData = [...this.state.data];
      const updatedRecord = {
        ...clonedData[id],
        name,
        lat,
        lon,
        isEdit: false
      };
      clonedData[id] = updatedRecord;
      this.setState({ data: clonedData });
    });
  };
  render() {
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
        onSave={e => this.saveLocation(item.id, e)}
        wrappedComponentRef={this.inlineFormRef}
      />
    ));
    const markers = this.state.data.map((item, i) => (
      <Marker
        key={i}
        position={{ lat: item.lat, lng: item.lon }}
        title={item.name}
      />
    ));
    return (
      <div className={`flexContainer margin-1`}>
        <div className="flexItem">
          {this.state.gMapError ? (
            `GoogleMapAPI error - put fallback component here`
          ) : (
            <GoogleMapWrapper>{markers}</GoogleMapWrapper>
          )}
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
            visible={this.state.isVisibleNewLocationModal}
            onCancel={this.hideNewLocationModal}
            onCreate={this.saveNewLocation}
          />
          <Button type="ghost" className="margin-1" onClick={this.loadMockData}>
            Load mockData
          </Button>
          <Button
            type="primary"
            className="margin-1"
            onClick={this.putToFirebase}
          >
            SaveToFirebase
          </Button>
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
