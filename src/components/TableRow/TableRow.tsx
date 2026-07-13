import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const Row = styled.tr<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
        props.$disabled ? "#444" : props.$backgroundColor || "white"};

  color: black;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

const Cell = styled.td`
  padding: 12px;
  border: 2px solid black;
`;

function TableRow({
    cells = ["Marc", "Student", "Active"],
    backgroundColor = "white",
    disabled = false,
}: TableRowProps) {
    return (
        <Row
            data-testid="table-row"
            $backgroundColor={backgroundColor}
            $disabled={disabled}
        >
            {cells.map((cell) => (
                <Cell key={cell}>{cell}</Cell>
            ))}
        </Row>
    );
}

export default TableRow;
export { TableRow };