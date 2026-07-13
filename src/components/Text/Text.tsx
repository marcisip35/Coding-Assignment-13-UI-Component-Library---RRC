import styled from "styled-components";
import { TextProps } from "./Text.types";

const MyText = styled.p<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? "#1f1f1f" : props.$backgroundColor || "transparent"};

  color: ${(props) => (props.$disabled ? "white" : "black")};
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  opacity: ${(props) => (props.$disabled ? "0.3" : "1")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  transition: 0.2s;

  @media (max-width: 600px) {
    font-size: 16px;
    text-align: center;
  }
`;

function Text({
  text = "This is text",
  backgroundColor = "transparent",
  disabled = false,
}: TextProps) {
  return (
    <MyText $backgroundColor={backgroundColor} $disabled={disabled}>
      {text}
    </MyText>
  );
}

export default Text;
export { Text };
