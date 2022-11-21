import { render, screen } from "@testing-library/react";
import { Footer } from "../components";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders logo correctly", () => {
    render(<Footer />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
  it("renders app store logo correctly", () => {
    render(<Footer />);
    const appStoreLogo = screen.getByAltText(/app store/);
    expect(appStoreLogo).toBeInTheDocument();
  });
  it("renders google play logo correctly", () => {
    render(<Footer />);
    const googlePLayLogo = screen.getByAltText(/google play/);
    expect(googlePLayLogo).toBeInTheDocument();
  });
  it("renders Copyright correctly", () => {
    render(<Footer />);
    const googlePLayLogo = screen.getByText(
      /© Copyright 2022 Dreadful Tomatoes. All rights reserved./
    );
    expect(googlePLayLogo).toBeInTheDocument();
  });
});
