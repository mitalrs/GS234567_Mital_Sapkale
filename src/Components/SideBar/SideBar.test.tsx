import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Sidebar from "./SideBar";
import "@testing-library/jest-dom";

describe("Sidebar Component", () => {
  it("renders all menu items", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("Store")).toBeInTheDocument();
    expect(screen.getByText("SKU")).toBeInTheDocument();
    expect(screen.getByText("Planning")).toBeInTheDocument();
    expect(screen.getByText("Charts")).toBeInTheDocument();
  });

  it("updates active item on click", async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const skuItem = screen.getByText("SKU");

    await user.click(skuItem);

    // Expect "SKU" to have active styles
    expect(skuItem.closest("a")).toHaveClass("bg-stone-200", "text-gray-900");
  });
});
