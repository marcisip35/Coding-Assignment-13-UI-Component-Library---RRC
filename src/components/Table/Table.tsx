import styled from "styled-components";
import { TableProps } from "./Table.types";

const TableBox = styled.div<{ $disabled?: boolean }>`
  width: 650px;
  max-width: 100%;
  overflow-x: auto;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
`;

const MyTable = styled.table<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "white"};

  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

const HeaderCell = styled.th`
  background-color: black;
  color: white;
  padding: 12px;
  border: 2px solid black;
`;

const Cell = styled.td`
  padding: 12px;
  border: 2px solid black;
`;

const FooterCell = styled.td`
  background-color: black;
  color: white;
  padding: 12px;
  border: 2px solid black;
  text-align: center;
`;

function Table({
  headings = ["Name", "Role", "Status"],
  rows = [
    ["Marc", "Student", "Active"],
    ["Cat", "Hero", "Sleeping"],
  ],
  footerText = "End of table",
  backgroundColor = "white",
  disabled = false,
}: TableProps) {
  return (
    <TableBox $disabled={disabled}>
      <MyTable
        data-testid="table"
        $backgroundColor={backgroundColor}
        $disabled={disabled}
      >
        <thead>
          <tr>
            {headings.map((heading) => (
              <HeaderCell key={heading}>{heading}</HeaderCell>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <Cell key={cell}>{cell}</Cell>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <FooterCell colSpan={headings.length}>{footerText}</FooterCell>
          </tr>
        </tfoot>
      </MyTable>
    </TableBox>
  );
}

export default Table;
export { Table };
