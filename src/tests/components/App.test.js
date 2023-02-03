import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  test("renders app component correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
});
