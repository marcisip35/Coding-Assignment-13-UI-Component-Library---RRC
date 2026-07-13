import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton", () => {
    test("radio button component is visible", () => {
        render(<RadioButton label="Test Radio" />);

        const radioTitle = screen.getByText("Test Radio");

        expect(radioTitle).toBeVisible();
    });

    test("radio button background changes when disabled", () => {
        render(<RadioButton label="Disabled Radio" disabled={true} />);

        const radioBox = screen.getByTestId("radio-box");

        expect(radioBox).toHaveStyleRule("background-color", "#444");
    });
});