import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("dropdown is visible", () => {
    render(<Dropdown label="Test Dropdown" />);

    const dropdown = screen.getByTestId("dropdown");

    expect(dropdown).toBeVisible();
  });

  test("dropdown background changes when disabled", () => {
    render(<Dropdown label="Disabled Dropdown" disabled={true} />);

    const dropdown = screen.getByTestId("dropdown");

    expect(dropdown).toHaveStyleRule("background-color", "#444");
  });
});
