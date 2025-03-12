import { render, screen } from "@testing-library/react";
import Planning from "./Planning";
import "@testing-library/jest-dom";
// import PlanningTable from "../../Components/AgGridTables/PlanningTable/PlanningTable";

// Mock the PlanningTable component to avoid testing its internal logic
jest.mock("../../Components/AgGridTables/PlanningTable/PlanningTable", () => () => (
  <div data-testid="planning-table">Mocked PlanningTable</div>
));

describe("Planning Component", () => {
  it("renders Planning component correctly", () => {
    render(<Planning />);

    // Check if the PlanningTable component is rendered
    expect(screen.getByTestId("planning-table")).toBeInTheDocument();
  });
});
