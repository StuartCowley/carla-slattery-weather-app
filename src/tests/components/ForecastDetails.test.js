import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 54,
    wind: {
      speed: 5,
      direction: "w",
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("12°C")).toHaveClass("forecast-details__min-temperature");
    expect(getByText("22°C")).toHaveClass("forecast-details__max-temperature");
    expect(getByText("54%")).toHaveClass("forecast-details__humidity");
    expect(getByText("5mph, w")).toHaveClass("forecast-details__wind");
  });
});
