import React from "react";
import { render } from "react-testing-library";
import { MapLocationList } from "./LocationList";

describe("Location list", () => {
  it("renders LocationList", () => {
    const { getByTestId } = render(<MapLocationList />);
    const locationList = getByTestId("map-location-list");
    expect(locationList.innerHTML).toBe("location list");
  });
});
