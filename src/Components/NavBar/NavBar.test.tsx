import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import '@testing-library/jest-dom';


describe("NavBar component", () => {
   

    test("renders the logo", () => {
      render(<NavBar />);
      const logoImg = screen.getByTestId("logo-img");
      expect(logoImg).toBeInTheDocument();
  });

    test("renders the header text", () => {
        render(<NavBar />);
        expect(screen.getByText("Data Viewer App")).toBeInTheDocument();
    });

    test("renders user and dropdown icons", () => {
        render(<NavBar />);
        expect(screen.getByTestId("circle-user-icon")).toBeInTheDocument();
        expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
    });
});