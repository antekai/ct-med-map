import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const gMapKey = `${process.env.REACT_APP_GOOGLE_MAP_API}`;

export const GoogleMapWrapper = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gMapKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `85vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={6.35}
    defaultCenter={{ lat: 51.49192, lng: 10.242399 }}
  >
    {props.children}
  </GoogleMap>
));
