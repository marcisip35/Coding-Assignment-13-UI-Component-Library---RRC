import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("card is visible", () => {
    render(<Card title="Test Card" />);

    const cardTitle = screen.getByText("Test Card");

    expect(cardTitle).toBeVisible();
  });

  test("card background changes when disabled", () => {
    render(<Card title="Disabled Card" disabled={true} />);

    const cardBox = screen.getByTestId("card-box");

    expect(cardBox).toHaveStyleRule("background-color", "#444");
  });
});
