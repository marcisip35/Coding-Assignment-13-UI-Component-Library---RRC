import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const DropdownBox = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 260px;
  max-width: 100%;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DropdownLabel = styled.label<{ $disabled?: boolean }>`
  color: ${(props) => (props.$disabled ? "#999999" : "black")};
  font-size: 18px;
`;

const DropdownSelect = styled.select<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "black"};

  color: white;
  padding: 12px;
  border: 3px solid black;
  border-radius: 12px;
  font-size: 17px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
`;

function Dropdown({
  label = "Choose an option",
  options = ["Rock", "Paper", "Scissors"],
  backgroundColor = "black",
  disabled = false,
}: DropdownProps) {
  return (
    <DropdownBox $disabled={disabled}>
      <DropdownLabel $disabled={disabled}>{label}</DropdownLabel>

      <DropdownSelect
        data-testid="dropdown"
        $backgroundColor={backgroundColor}
        $disabled={disabled}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </DropdownSelect>
    </DropdownBox>
  );
}

export default Dropdown;
export { Dropdown };
