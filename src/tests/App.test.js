import { render, screen } from "@testing-library/react";
import App from "./tests/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
