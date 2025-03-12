import { render, screen } from "@testing-library/react";
import Store from "./Store";
import "@testing-library/jest-dom";

// Mock child components
jest.mock("../../Components/AgGridTables/StoreTable/StoreTable", () => () => (
  <div data-testid="store-table"></div>
));
jest.mock("../../Components/NewButton/NewButton", () => (props: { btntext: string }) => (
  <button>{props.btntext}</button>
));

describe("Store Component", () => {
  it("renders StoreTable and NewButton", () => {
    render(<Store />);
    
    // Check if StoreTable is rendered
    expect(screen.getByTestId("store-table")).toBeInTheDocument();

    // Check if NewButton with text 'new store' is rendered
    expect(screen.getByText("new store")).toBeInTheDocument();
  });
});
