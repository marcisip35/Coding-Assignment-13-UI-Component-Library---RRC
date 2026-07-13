import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter", () => {
    test("table footer is visible", () => {
        render(
            <table>
                <TableFooter text="Test Footer" />
            </table>
        );

        const footer = screen.getByText("Test Footer");

        expect(footer).toBeVisible();
    });

    test("table footer background changes when disabled", () => {
        render(
            <table>
                <TableFooter text="Disabled Footer" disabled={true} />
            </table>
        );

        const footer = screen.getByTestId("table-footer");

        expect(footer).toHaveStyleRule("background-color", "#444");
    });
});