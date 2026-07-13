import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  test("text is visible", () => {
    render(<Text text="Test Text" />);

    const text = screen.getByText("Test Text");

    expect(text).toBeVisible();
  });

  test("text background changes when disabled", () => {
    render(<Text text="Disabled Text" disabled={true} />);

    const text = screen.getByText("Disabled Text");

    expect(text).toHaveStyleRule("background-color", "#1f1f1f");
  });
});
