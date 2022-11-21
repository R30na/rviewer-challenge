import { render, screen } from "@testing-library/react";
import { Header } from "../components";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders logo correctly", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
