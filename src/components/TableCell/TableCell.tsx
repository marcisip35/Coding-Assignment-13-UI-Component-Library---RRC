import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const Cell = styled.td<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "white"};

  color: black;
  padding: 12px;
  border: 2px solid black;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

function TableCell({
  text = "Table Cell",
  backgroundColor = "white",
  disabled = false,
}: TableCellProps) {
  return (
    <Cell
      data-testid="table-cell"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      {text}
    </Cell>
  );
}

export default TableCell;
export { TableCell };
