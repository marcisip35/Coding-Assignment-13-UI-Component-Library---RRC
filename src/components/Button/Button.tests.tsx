import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("button is visible", () => {
        render(<Button label="Test Button" />);

        const button = screen.getByText("Test Button");

        expect(button).toBeVisible();
    });

    test("button background changes when disabled", () => {
        render(<Button label="Disabled Button" disabled={true} />);

        const button = screen.getByText("Disabled Button");

        expect(button).toHaveStyleRule("background-color", "#1f1f1f");
    });
});