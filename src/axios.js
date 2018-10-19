import axios from "axios";

// Firebase instance
export const fireBaseInstance = axios.create({
  baseURL: "https://react-map-app-f2045.firebaseio.com"
});

fireBaseInstance.defaults.headers.post["Content-Type"] = "application/json";

//Google map instance - triggers CORS error on GET request
// const gMapKey = `${process.env.REACT_APP_GOOGLE_MAP_API}`;
// const gMapKeyB = `${process.env.REACT_APP_GOOGLE_MAP_BROKEN_API}`;

// export const gMapInstance = axios.create({
//   baseURL: `https://maps.googleapis.com/maps/api/js?key=${gMapKey}&v=3.exp&libraries=geometry,drawing,places`
// });
