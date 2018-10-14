import React from "react";
import { render } from "react-testing-library";
import { GoogleMap } from "./GoogleMap";

describe("google map", () => {
  it("renders google map container", () => {
    const { getByTestId } = render(<GoogleMap />);
    const map = getByTestId("google-map-container");
    expect(map.innerHTML).toBe("Map");
  });
});
