import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader", () => {
    test("table header is visible", () => {
        render(
            <table>
                <TableHeader headings={["Test Header", "Status"]} />
            </table>
        );

        const header = screen.getByText("Test Header");

        expect(header).toBeVisible();
    });

    test("table header background changes when disabled", () => {
        render(
            <table>
                <TableHeader headings={["Disabled Header"]} disabled={true} />
            </table>
        );

        const header = screen.getByTestId("table-header");

        expect(header).toHaveStyleRule("background-color", "#444");
    });
});