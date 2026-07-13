import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const Header = styled.thead<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
        props.$disabled ? "#444" : props.$backgroundColor || "black"};

  color: white;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

const HeaderCell = styled.th`
  padding: 12px;
  border: 2px solid black;
`;

function TableHeader({
    headings = ["Name", "Role", "Status"],
    backgroundColor = "black",
    disabled = false,
}: TableHeaderProps) {
    return (
        <Header
            data-testid="table-header"
            $backgroundColor={backgroundColor}
            $disabled={disabled}
        >
            <tr>
                {headings.map((heading) => (
                    <HeaderCell key={heading}>{heading}</HeaderCell>
                ))}
            </tr>
        </Header>
    );
}

export default TableHeader;
export { TableHeader };