import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell", () => {
  test("table cell is visible", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell text="Test Cell" />
          </tr>
        </tbody>
      </table>,
    );

    const cell = screen.getByText("Test Cell");

    expect(cell).toBeVisible();
  });

  test("table cell background changes when disabled", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell text="Disabled Cell" disabled={true} />
          </tr>
        </tbody>
      </table>,
    );

    const cell = screen.getByTestId("table-cell");

    expect(cell).toHaveStyleRule("background-color", "#444");
  });
});
