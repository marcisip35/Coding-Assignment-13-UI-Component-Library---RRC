import styled from "styled-components";
import { LabelProps } from "./Label.types";

const MyLabel = styled.label<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.$disabled ? "#1f1f1f" : props.$backgroundColor || "black"};

  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 18px;
  display: inline-block;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.3" : "1")};
  transition: 0.2s;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

function Label({
  text = "Label",
  backgroundColor = "black",
  disabled = false,
  htmlFor,
}: LabelProps) {
  return (
    <MyLabel
      htmlFor={htmlFor}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      {text}
    </MyLabel>
  );
}

export default Label;
export { Label };
