import { render, screen } from "@testing-library/react";
import NewButton from "./NewButton";
import '@testing-library/jest-dom';


describe("NewButton Component", () => {
    test("renders button with correct text", () => {
        const buttonText = "Click Me";
        render(<NewButton btntext={buttonText} />);

        const buttonElement = screen.getByRole("button", { name: buttonText });
        expect(buttonElement).toBeInTheDocument();
    });
});
