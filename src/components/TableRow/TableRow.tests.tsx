import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

describe("TableRow", () => {
    test("table row is visible", () => {
        render(
            <table>
                <tbody>
                    <TableRow cells={["Test Row", "Data"]} />
                </tbody>
            </table>
        );

        const rowText = screen.getByText("Test Row");

        expect(rowText).toBeVisible();
    });

    test("table row background changes when disabled", () => {
        render(
            <table>
                <tbody>
                    <TableRow cells={["Disabled Row", "Data"]} disabled={true} />
                </tbody>
            </table>
        );

        const row = screen.getByTestId("table-row");

        expect(row).toHaveStyleRule("background-color", "#444");
    });
});