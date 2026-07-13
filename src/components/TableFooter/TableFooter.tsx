import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const Footer = styled.tfoot<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "black"};

  color: white;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

const FooterCell = styled.td`
  padding: 12px;
  border: 2px solid black;
  text-align: center;
`;

function TableFooter({
  text = "Table Footer",
  backgroundColor = "black",
  disabled = false,
}: TableFooterProps) {
  return (
    <Footer
      data-testid="table-footer"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      <tr>
        <FooterCell colSpan={3}>{text}</FooterCell>
      </tr>
    </Footer>
  );
}

export default TableFooter;
export { TableFooter };
