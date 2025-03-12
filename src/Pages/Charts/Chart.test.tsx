import { render, screen } from "@testing-library/react";
import Charts from "./Charts";  // Update the path as needed
import '@testing-library/jest-dom';
// import Chart from "../../Components/AgGridTables/Charts/Chart";

// Mock the Chart component
jest.mock("../../Components/AgGridTables/Charts/Chart", () => () => <div data-testid="chart-component"></div>);

describe("Charts Component", () => {
    test("renders Chart component", () => {
        render(<Charts />);
        
        // Check if Chart component is rendered
        expect(screen.getByTestId("chart-component")).toBeInTheDocument();
    });
});