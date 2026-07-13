import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
    test("table is visible", () => {
        render(<Table footerText="Test Table Footer" />);

        const table = screen.getByText("Test Table Footer");

        expect(table).toBeVisible();
    });

    test("table background changes when disabled", () => {
        render(<Table disabled={true} />);

        const table = screen.getByTestId("table");

        expect(table).toHaveStyleRule("background-color", "#444");
    });
});