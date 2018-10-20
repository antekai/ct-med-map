import React from "react";
import { GoogleMapWrapper } from "./GoogleMapWrapper";
import "./Screen.css";
import { MapLocation } from "./Location";
import { LocationModal } from "./LocationModal";
import { Marker } from "react-google-maps";
import { fireBaseInstance } from "../axios";
import { mockData } from "../data/mockData";
import { GhostButton, PrimaryButton, DangerButton } from "../UI/Buttons";

class MapScreen extends React.Component {
  state = {
    data: [],
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
        {/*** MAP COMPONENT ***/}
        <div className="flexItem">
          {this.state.gMapError ? (
            `GoogleMapAPI error - put fallback component here`
          ) : (
            <GoogleMapWrapper>{markers}</GoogleMapWrapper>
          )}
        </div>

        {/*** CONTROLS ***/}
        <div className="flexItem">
          <PrimaryButton
            txt="Add Location"
            data-cy="new-location-btn"
            onClick={this.showNewLocationModal}
          />
          <GhostButton txt="Load mockData" onClick={this.loadMockData} />
          <PrimaryButton txt="SaveToFirebase" onClick={this.putToFirebase} />
          <DangerButton txt="RemoveAll" onClick={this.removeAll} />

          {/*** MODAL(NEW LOCATION) ***/}
          <LocationModal
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.isVisibleNewLocationModal}
            onCancel={this.hideNewLocationModal}
            onCreate={this.saveNewLocation}
          />

          {/*** LOCATION LIST ***/}
          <div className="flexContainer">{locationList}</div>
        </div>
      </div>
    );
  }
}

export default MapScreen;
