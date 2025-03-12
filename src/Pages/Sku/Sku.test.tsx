import { render, screen } from "@testing-library/react";
import SKU from "./SKU"; // Adjust path if needed
// import SkuTable from "../../Components/AgGridTables/SkuTable/SkuTable";
// import NewButton from "../../Components/NewButton/NewButton";
import "@testing-library/jest-dom";

// Mock dependencies
jest.mock("../../Components/AgGridTables/SkuTable/SkuTable", () => () => (
  <div data-testid="sku-table"></div>
));
jest.mock("../../Components/NewButton/NewButton", () => ({ btntext }: { btntext: string }) => (
  <button>{btntext}</button>
));

describe("SKU Component", () => {
  test("renders SKU component correctly", () => {
    render(<SKU />);

    // Check if the table exists
    expect(screen.getByTestId("sku-table")).toBeInTheDocument();

    // Check if the button with correct text exists
    expect(screen.getByText("new sku")).toBeInTheDocument();
  });
});
