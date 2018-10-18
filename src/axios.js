import axios from "axios";

// Firebase instance
export const fireBaseInstance = axios.create({
  baseURL: "https://react-map-app-f2045.firebaseio.com"
});

fireBaseInstance.defaults.headers.post["Content-Type"] = "application/json";
