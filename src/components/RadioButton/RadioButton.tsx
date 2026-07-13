import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioBox = styled.div<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "black"};

  color: white;
  width: 300px;
  max-width: 100%;
  padding: 15px;
  border: 4px solid black;
  border-radius: 18px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const RadioTitle = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
`;

const RadioOption = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: inherit;
`;

function RadioButton({
  label = "Choose one",
  options = ["Rock", "Paper", "Scissors"],
  name = "radio-options",
  backgroundColor = "black",
  disabled = false,
}: RadioButtonProps) {
  return (
    <RadioBox
      data-testid="radio-box"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      <RadioTitle>{label}</RadioTitle>

      {options.map((option, index) => (
        <RadioOption key={option} $disabled={disabled}>
          <RadioInput
            type="radio"
            name={name}
            value={option}
            disabled={disabled}
            defaultChecked={index === 0}
          />
          {option}
        </RadioOption>
      ))}
    </RadioBox>
  );
}

export default RadioButton;
export { RadioButton };
