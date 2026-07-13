import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
    test("label is visible", () => {
        render(<Label text="Test Label" />);

        const label = screen.getByText("Test Label");

        expect(label).toBeVisible();
    });

    test("label background changes when disabled", () => {
        render(<Label text="Disabled Label" disabled={true} />);

        const label = screen.getByText("Disabled Label");

        expect(label).toHaveStyleRule("background-color", "#1f1f1f");
    });
});