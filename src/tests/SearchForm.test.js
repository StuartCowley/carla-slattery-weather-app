import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Liverpool",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders an input text search box", () => {
    const { getByRole } = render(<SearchForm {...validProps} />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });
  it("calls event handler function after clicking submit", () => {
    render(<SearchForm {...validProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
