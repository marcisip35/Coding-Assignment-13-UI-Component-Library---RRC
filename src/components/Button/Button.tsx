import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const MyButton = styled.button<{ $backgroundColor?: string }>`
  background-color: ${(props) =>
        props.disabled ? "#1f1f1f" : props.$backgroundColor || "black"};

  color: white;
  padding: 15px;
  border: 3px solid black;
  border-radius: 12px;
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#1f1f1f" : "white")};
    color: ${(props) => (props.disabled ? "white" : "black")};
    transition: 0.2s;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Button({
    label = "Button",
    backgroundColor = "black",
    disabled = false,
    onClick,
}: ButtonProps) {
    return (
        <MyButton
            disabled={disabled}
            $backgroundColor={backgroundColor}
            onClick={disabled ? undefined : onClick}
        >
            {label}
        </MyButton>
    );
}

export default Button;
export { Button };