import { render, screen } from "@testing-library/react";
import { Search } from "../components";
import "@testing-library/jest-dom";

describe("Search", () => {
  it("renders Search input correctly", () => {
    render(<Search />);
    const inputText = screen.getByPlaceholderText("Title");
    expect(inputText).toBeInTheDocument();
  });
  it("renders Search icon correctly", () => {
    render(<Search />);
    const searchIcon = screen.getByAltText("search");
    expect(searchIcon).toBeInTheDocument();
  });
});
