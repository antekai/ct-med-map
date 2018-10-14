import React from "react";
import { render } from "react-testing-library";
import { MapLocation } from "./Location";

describe("location", () => {
  it("renders location", () => {
    const { getByTestId } = render(<MapLocation />);
    const mapLoc = getByTestId("map-location");
    expect(mapLoc.innerHTML).toBe("loc");
  });
});
